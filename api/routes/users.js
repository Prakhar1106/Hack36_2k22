var express = require('express');
const {signup, login, logout} = require("../controllers/auth");

var router = express.Router();

/* GET users listing. */
router.post('/signup', signup);                 //custom signup
router.post('/login',login);   

module.exports = router;
