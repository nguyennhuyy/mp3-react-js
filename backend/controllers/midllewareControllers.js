const jwt = require('jsonwebtoken');
const midllewareController = {
	//verify token
	verifyToken: (req, res, next) => {
		const token = req.headers.token;
		if (token) {
			const accessToken = token.split(' ')[1];
			jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
				if (err) {
					res.status(403).json('token is not valid');
				}
				req.user = user;
				next();
			});
		} else {
			res.status(400).json("you're not authenticated");
		}
	},
	verifyTokenAndAdminAuth: (req, res, next) => {
		midllewareController.verifyToken(req, res, () => {
			if (req.user.id == req.params.id || req.user.admin) {
				next();
			} else {
				res.status(403).json('you are not allowed admin');
			}
		});
	}
};

module.exports = midllewareController;
