const router = require('express').Router();
const authController = require('../controllers/authControllers');
const midllewareController = require('../controllers/midllewareControllers');

//log out
router.post(
	'/logout',
	midllewareController.verifyToken,
	authController.userLogout
);
//refresh token
router.post('/refresh', authController.requestRefreshToken);

router.post('/login', authController.loginUser);
router.post('/register', authController.registerUser);

module.exports = router;
