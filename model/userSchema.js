const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

/**---Defining userSchema for registration page--- */
const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim :true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim : true,

  },
  phone: {
    type: Number,
    // unique : true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim : true,
  },
  cpassword: {
    type: String,
    required: true,
    trim : true,
    
  },
  // image : {
  //   data: Buffer,
  //  contentType: String
  // },
  // gender: {
  //   type: String, enum: ["Male", "Female"]
  // },
  tokens: [
      {
          token: {
            type: String,
            required: true,
          }
      }
  ]
});

/**--Password hashing---- */
registerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

/**--JWT generation-------- */
registerSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id :this._id},process.env.SECRET_KEY);            //jwt sign method take two param sign(payload,secretKey)
        this.tokens = this.tokens.concat({token:token});     //storing jwt tokens into DB
        await this.save();
        return token;
    } catch (error) {
        console.log("e:"+error);
    }
}

/**--Creating Collections/Models-- */

const registeration = mongoose.model("REGISTERATION", registerSchema);

module.exports = registeration;
