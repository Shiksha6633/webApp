const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");


require("../model/conn");
const registeration = require("../model/userSchema");
// const Image = require("../model/imageSchema");



//Registeration page
router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(500).json({ error: "plz fill the all field" });
  }

  try {
    /**--matching the email from db with email of registeration form filed by user-- */
    const userExists = await registeration.findOne({ email: email });

    if (userExists) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password != cpassword) {
      return res.status(400).json({ error: "password does not match" });
    } else {
      const user = new registeration({
        name,
        email,
        phone,
        password,
        cpassword,
        // image,
        // gender,
      });

      /**--saving data of user in DB via registeration form--- */
      const userRegister = await user.save();

      if (userRegister) {
        res.status(201).json({ message: "user successfully registered" });
      } else {
        res.status(500).json({ error: "Failed to registered" });
      }
    }
  } catch (error) {
    console.log("err:" + error);
  }
});

//login routing
router.post("/login", async (req, res) => {

  try {
    const { email, password } = req.body;

    /*---Null check for login form--*/
    if (!email || !password) {
      return res.status(400).json({ error: "Invalid login data" });
    }

    /**--Matching email from registration DB with the email from login form filled by user-- */
    const userLogin = await registeration.findOne({ email: email });

    if (userLogin) {
      //companing user login form password with DB password for signin
      const isMatch = await bcrypt.compare(password, userLogin.password);

      //for jwt token genration
      const token = await userLogin.generateAuthToken();
      //console.log("token:" + token);

      //for cookies
      res.cookie("jwts", token, {
        expires: new Date(Date.now() + 25892000000), //cookie will expired after 30 days of login
        httpOnly: true,
      });


      /**--If everything is matching the making user logged in-- */
      if (!isMatch) {
        res.status(500).json({ error: "user sign   in failed" });
      } else {
        res.json({ message: "user signed in successfully" });
      }
    } else {
      
      res.status(500).json({ error: "login failed ,invalid credential" });
    }

    console.log(userLogin);
  } catch (error) {
    console.log("errors : " + error);
  }
});

/**---Logout US page------- */
router.get("/logout" , (req, res) => {
  console.log('hello logout SERVER ');
  res.clearCookie('jwts',{path:'/'});
  res.status(200).send("user logged out ");
});


module.exports = router;
