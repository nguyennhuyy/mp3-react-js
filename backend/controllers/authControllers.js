const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let refreshTokens = [];
const authController = {
	//register
	registerUser: async (req, res) => {
		try {
			const salt = await bcrypt.genSalt(10);
			const hashed = await bcrypt.hash(req.body.password, salt);
			//create user
			const newUser = await new User({
				username: req.body.username,
				email: req.body.email,
				password: hashed
			});
			// save to db
			const user = await newUser.save();
			return res.status(200).json(user);
		} catch (err) {
			return res.status(500).json(err);
		}
	},
	//genarate access token
	genarateAccessToken: user => {
		return jwt.sign(
			{
				id: user.id,
				admin: user.admin
			},
			process.env.JWT_ACCESS_KEY,
			{
				expiresIn: '2h'
			}
		);
	},
	//generate refresh token
	genarateRefeshToken: user => {
		return jwt.sign(
			{
				id: user.id,
				admin: user.admin
			},
			process.env.JWT_REFRESH_KEY,
			{
				expiresIn: '365d'
			}
		);
	},
	// login
	loginUser: async (req, res) => {
		try {
			const user = await User.findOne({ username: req.body.username });
			if (!user) {
				res.status(404).json('wrong username');
			}
			const validPassword = await bcrypt.compare(
				req.body.password,
				user.password
			);
			if (!validPassword) {
				res.status(404).json('wrong password');
			}
			if (user && validPassword) {
				const accessToken = authController.genarateAccessToken(user);
				const refreshToken = authController.genarateRefeshToken(user);
				refreshTokens.push(refreshToken);
				res.cookie('refreshToken', refreshToken, {
					httpOnly: true,
					secure: true,
					path: '/',
					sameSite: 'strict'
				});
				const { password, ...other } = user._doc;
				res.status(200).json({ ...other, accessToken });
			}
		} catch (err) {
			res.status(500).json(err);
		}
	},
	requestRefreshToken: async (req, res) => {
		//take refresh token from user
		const refreshToken = req.cookies.refreshToken;
		if (!refreshToken) {
			return res.status(401).json('you are not authenticated');
		}
		if (refreshTokens.includes(refreshToken)) {
			return res.status(403).json('refresh token is not valid');
		}
		jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
			if (err) {
				console.log(err);
			}
			refreshTokens = refreshTokens.filter(token => token !== refreshToken);
			const newAccessToken = authController.genarateAccessToken(user);
			const newRefreshToken = authController.genarateRefeshToken(user);
			refreshTokens.push(newRefreshToken);
			res.cookie('refreshToken', newRefreshToken, {
				httpOnly: true,
				secure: false,
				path: '/',
				sameSite: 'strict'
			});
			res.status(200).json(newAccessToken);
		});
	},
	userLogout: async (req, res) => {
		res.clearCookie('refreshToken');
		refreshTokens = refreshTokens.filter(
			token => token !== req.cookies.refreshToken
		);
		res.status(200).json('Logged out!');
	}
};

module.exports = authController;
