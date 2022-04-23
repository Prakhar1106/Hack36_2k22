var express = require('express');
const {addcrime, updatestatus, listcrimes} = require("../controllers/crime");

var router = express.Router();

/* GET users listing. */
router.post('/addcrime', addcrime);                 //custom signup
router.post('/updatestatus', updatestatus);   
router.post('/listcrimes',listcrimes);

module.exports = router;