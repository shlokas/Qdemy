const express = require("express");
const router = express.Router();

const requestController = require('../controllers/request.controller');

router.post('/makeRequest', requestController.makeRequest);
router.post('/userRequests', requestController.getAllUserRequests);
router.post('/activeUserRequests', requestController.getAllActiveUserRequests);

// router.post('/login', userController.login);


module.exports = router;

