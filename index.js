require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const routes = require('./Routes/router')

const dc_server = express()
dc_server.use(cors())
dc_server.use(express.json())
dc_server.use(routes)

const PORT = 3000 || process.env.PORT

dc_server.listen(PORT,()=>{
    console.log(`Daily Cart server started at port ${PORT} and waiting for client request!!!`);
})

dc_server.get('/',(req,res)=>{
    res.status(200).send(`<h1>Daily Cart server started....and waiting for client request!!! </h1>`)
})