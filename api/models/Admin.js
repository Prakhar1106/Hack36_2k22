const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// User Table
const adminSchema = new mongoose.Schema(
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
    gender: {
      type: String,
      required: true,
      default: "default",
    },
    designation: {
        type: String,
        required: true,
        default: "default",
    },
  },
  { timestamps: true }
);

//userSchema.index({location: '2dsphere'});

adminSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(); //password encryption
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

adminSchema.post("save", function (doc, next) {
  console.log("New Admin Created", doc);
  next();
});

adminSchema.statics.login = async function (email, password) {
  const admin = await this.findOne({ email });
  if (admin) {
    const auth = await bcrypt.compare(password, admin.password); //decrypt and match password
    if (auth) {
      console.log(admin);
      return admin;
    }
    throw Error("Incorrect Password!");
  }
  throw Error("Incorrect Email");
};

const Admin = mongoose.model("admins", adminSchema);

// User.on('index', function(err) {
//     if (err) console.log(err);
//   });
module.exports = Admin;