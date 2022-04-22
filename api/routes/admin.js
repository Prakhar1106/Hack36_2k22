var express = require('express');
const {adminsignup, adminlogin, logout} = require("../controllers/auth");

var router = express.Router();

/* GET users listing. */
router.post('/signup', adminsignup);                 //custom signup
router.post('/login',adminlogin);   

module.exports = router;
