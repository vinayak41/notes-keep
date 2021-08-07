const express = require('express');
const { requireSignIn } = require('../controllers/commonControllers');
const router = express.Router();
const {signIn, signUp, getUser} = require("../controllers/user")

router.get("/", requireSignIn, getUser)
router.post('/signin', signIn);
router.post('/signup', signUp)

module.exports = router;