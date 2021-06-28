const jwt = require("jsonwebtoken");
const registeration = require('../model/userSchema');

const authenticate = async (req, res, next) => {
  try {
    //getting jwt token

    const jwtToken = req.cookies.jwts; 
    console.log(`jwtToken:${jwtToken}`);

    //verifying jwt for user authentication
    const verifyToken = jwt.verify(jwtToken, process.env.SECRET_KEY);
    console.log(`verifyToken :${verifyToken}`);


    //fetching data of verified user into "rootUser"
    const rootUser = await registeration.findOne({
      _id: verifyToken._id,
      "tokens.token": jwtToken,
    });
    console.log("rootUser:" + rootUser);

    if (!rootUser) {
      console.log("User not found");
    }
    req.token = jwtToken;
    req.rootUser = rootUser;
    console.log("rootUser" + rootUser);

    req.userID = rootUser._id;
    next();
  } catch (error) {
    res.status(401).send("Unauthorizes:no token provide");
  }
};

module.exports = authenticate;
