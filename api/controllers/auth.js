const User = require("../models/User");
const Admin = require("../models/Admin");
const Locality = require("../models/Locality");
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

module.exports.adminsignup = (req, res) => {
    const { name, email, password, gender, designation} = req.body;
    Admin.findOne({ email }).exec((err, admin) => {
      if (admin) {
        return res.status(400).json({ error: "admin with this email already exists!" });
      }
  
      let newAdmin = new Admin({ name, email, password,gender,designation });
      newAdmin.save((err, success) => {
        if (err) {
          console.log("Error in signup: ", err);
          return res.status(400).json({ error: err });
        }
        const token = createToken(newAdmin._id);
        res.cookie("jwt", token, {
          secure: process.env.NODE_ENV === "production" ? true : false,
          httpOnly: process.env.NODE_ENV === "production" ? true : false,
          maxAge: maxAge * 1000,
        });
        res.status(201).json({ admin: newAdmin });
      });
    });
  };
  
  //Custom Login
  module.exports.adminlogin = async (req, res) => {
    res.clearCookie("jwt");
    console.log("in auth.js");
    const { email, password } = req.body;
    try {
      const admin = await Admin.login(email, password);
      const token = createToken(admin._id);
      res.cookie("jwt", token, {
        secure: process.env.NODE_ENV === "production" ? true : false,
        httpOnly: process.env.NODE_ENV === "production" ? true : false,
        maxAge: maxAge * 1000,
      });
      console.log(admin._id);
      res.status(200).json({ admin: admin });
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

  module.exports.userinfo = async (req,res) => {
    const id= req.body.id;
    const user = await User.find({_id: id});
    if(user) {
      res.status(201).json({user:user});
    }
    else
    {
      res.status(500).json({error: 'error'});
    }
  }