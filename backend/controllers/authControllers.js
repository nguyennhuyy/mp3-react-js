const User = require('../models/User');
const bcrypt = require('bcrypt');
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
				res.status(200).json(user);
			}
		} catch (err) {
			res.status(500).json(err);
		}
	}
};

module.exports = authController;
