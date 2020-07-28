const path = require("path");

const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.get('/',userController.getHome)

router.post("/register", userController.registerUser);
router.post("/login", userController.logIn);

module.exports = router;
