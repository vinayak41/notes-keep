const jwt = require("jsonwebtoken");
exports.requireSignIn = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(400).json({ error: "Signin required" });
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(400).json({ error: "Invalid token" });
    if (decoded) {
      req.body.userId = decoded.userId;
      next();
    }
  });
};
