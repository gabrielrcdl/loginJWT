const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/users", userController.get);
//router.delete("/delete", userController.deleteAll);

module.exports = router;
