const jwt = require("jsonwebtoken");
const path = require("path");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const emailRegexp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!emailRegexp.test(email)) return res.status(400).json({ message: "Invalid Email" });

  const user = await User.findOne({ email });

  if (user) {
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch)
      return res.status(400).json({ message: "Incorrect password" });
    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    return res.status(200).json({ token,  message: "Signin successful" });
  } else {
    return res.status(400).json({  message: "User does not exist" });
  }
};

exports.signUp = async (req, res) => {
  const { email, password } = req.body;
  
  if (!emailRegexp.test(email)) return res.status(400).json({  message: "Invalid Email" });
  
  const userExist = await User.findOne({ email });
  if (userExist) return res.status(400).json({  message: "User already exists" });

  const hashPassword = bcrypt.hashSync(password, saltRounds);

  const newUser = new User({
    email: email,
    password: hashPassword,
  });

  newUser.save((err, user) => {
    if (err) return res.status(400).json({ error: err,  message: "Signup failed" });
    if (user) return res.status(200).json({ message: "Signup Successful" });
  });
};

exports.getUser = async (req, res) => {
  const userId = req.body.userId;
  const user = await User.findOne({ _id: userId });
  if (user) {
    return res
      .status(200)
      .json({ user: { userId: user._id, email: user.email } });
  } else {
    return res.status(400).json({ message: "User not found" });
  }
};
