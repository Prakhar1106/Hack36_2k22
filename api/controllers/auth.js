const User = require("../models/User");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;

//creating JWT Token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_USER, {
    expiresIn: maxAge,
  });
};

//Custom Signup
module.exports.signup = (req, res) => {
  const { name, email, password, dob, emergency_contact, gender } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({ error: "user with this email already exists!" });
    }

    let newUser = new User({ name, email, password, dob,emergency_contact,gender });
    newUser.save((err, success) => {
      if (err) {
        console.log("Error in signup: ", err);
        return res.status(400).json({ error: err });
      }
      const token = createToken(newUser._id);
      res.cookie("jwt", token, {
        secure: process.env.NODE_ENV === "production" ? true : false,
        httpOnly: process.env.NODE_ENV === "production" ? true : false,
        maxAge: maxAge * 1000,
      });
      res.status(201).json({ user: newUser });
    });
  });
};

//Custom Login
module.exports.login = async (req, res) => {
  res.clearCookie("jwt");
  console.log("in auth.js");
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      secure: process.env.NODE_ENV === "production" ? true : false,
      httpOnly: process.env.NODE_ENV === "production" ? true : false,
      maxAge: maxAge * 1000,
    });
    console.log(user._id);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports.logout = async (req, res) => {
    res.cookie("jwt", "expiredtoken", {
      expires: new Date(Date.now() + 5000),
      secure: process.env.NODE_ENV === "production" ? true : false,
      httpOnly: process.env.NODE_ENV === "production" ? true : false,
    });
    res.status(200).json({ status: "logout success!" });
  };