const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports = async function (req, res, next) {
  if (!req.cookies.token) {
    req.flash("error", "you need to login");
    return res.redirect("/");
  }

  try {
    let verify = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    let user = await userModel
      .findOne()
      .select("-password");

    req.user = user;

    console.log(user);
    next();
  } catch (err) {
    req.flash("error", "your login session expired");
    res.redirect("/");
  }
};
