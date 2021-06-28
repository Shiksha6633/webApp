const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
var cookieParser = require('cookie-parser');
var router = express.Router();
const authenticate = require('./middleware/authenticate'); 
const multer  = require('multer');
const path = require('path');
const bodyParser = require('body-parser');



dotenv.config({ path: "./config.env" });
require("./model/conn"); //path of DB connection

/*----Middleware----*/
app.use(express.json());
app.use(require("./router/auth")); //link the router files
app.use(cookieParser());


const PORT = process.env.PORT || 4000 ;

router.get("/", (req, res) => {
  
  res.send(`Hello from server`);
  

});

router.get("/api/product",(req,res) =>{
  res.send(data.products);
})

/**---About US page------- */

app.get("/about",authenticate, (req, res) => {
 res.send(req.rootUser);

});

app.get("/cart",authenticate, (req, res) => {
  res.send(req.rootUser);
 
 });

 app.get("/offercart",authenticate, (req, res) => {
  res.send(req.rootUser);
 
 });

 app.get("/avatar",authenticate, (req, res) => {
  res.send(req.rootUser);
 
 });



// heroku steps
if(process.env.NODE_ENV == "production"){
  app.use(express.static("view/build"));
  const path= require("path");
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'view','build','index.html'));
  })
}




app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
