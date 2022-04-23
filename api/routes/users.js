var express = require('express');
const {signup, login, logout, userinfo} = require("../controllers/auth");

var router = express.Router();

/* GET users listing. */
router.post('/signup', signup);                 //custom signup
router.post('/login',login);  
router.post('/logout', logout); 
router.post('/userinfo',userinfo);

module.exports = router;
