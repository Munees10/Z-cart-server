const mongoose = require('mongoose')
const connection_string = process.env.DB_CONNECTION_STRING

mongoose.connect (connection_string).then((res)=>{
    console.log("Mongo DB connected successfully with DC_server");
}).catch((err)=>{
    console.log(err);
})