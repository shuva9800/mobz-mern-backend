const express = require('express');
const router = express.Router();

const {createUser,getAlluserData} = require('../controller/auth');


router.post('/signup',createUser);
router.get('/getdata',getAlluserData);

module.exports = router;