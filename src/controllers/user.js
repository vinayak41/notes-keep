const path = require("path");
const User = require("../models/user");

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (err) res.json(err);
    if (user) res.json(user);
    else res.json({ error: "user not found" });
  });
};
