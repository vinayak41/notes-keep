const express = require('express');
const router = express.Router();
const {signin} = require("../controllers/user")

router.get('/signin', signin);

router.post('/user/signup', (req, res) => {
    res.send('signup');
})

module.exports = router;