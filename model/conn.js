const mongoose= require('mongoose');


const DB = process.env.DATABASE;

/*-------DB connection------*/ 
mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("db connection successful");
}).catch((err)=>{
    console.log(`db connection unsuccessful`);
});