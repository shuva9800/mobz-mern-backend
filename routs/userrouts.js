const express = require('express');
const router = express.Router();

const {createUser,getAlluserData, getSpecficdata} = require('../controller/auth');


router.post('/signup',createUser);
router.get('/getdata',getAlluserData);
router.get('/userdata/:id', getSpecficdata);

module.exports = router;