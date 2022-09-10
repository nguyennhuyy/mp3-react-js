const midllewareController = require('../controllers/midllewareControllers');
const userController = require('../controllers/userControllers');
const router = require('express').Router();

//delete user

router.delete(
	'/:id',
	midllewareController.verifyTokenAndAdminAuth,
	userController.deleteUser
);

//get all user
router.get('/', midllewareController.verifyToken, userController.getAllUsers);

module.exports = router;
