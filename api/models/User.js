const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// User Table
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    emergency_contact: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      required: true,
      default: "default",
    }
  },
  { timestamps: true }
);

//userSchema.index({location: '2dsphere'});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(); //password encryption
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.post("save", function (doc, next) {
  console.log("New User Created", doc);
  next();
});

userSchema.statics.login = async function (email, password) {
    console.log("in models/user");
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password); //decrypt and match password
    if (auth) {
      console.log(user);
      return user;
    }
    throw Error("Incorrect Password!");
  }
  throw Error("Incorrect Email");
};

const User = mongoose.model("users", userSchema);

// User.on('index', function(err) {
//     if (err) console.log(err);
//   });
module.exports = User;