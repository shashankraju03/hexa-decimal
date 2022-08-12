const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
const data = require('./data.json')


app.get("/users",(req,res)=>{
    res.json(data)
})

app.listen(5000,()=>{
    console.log("server statted at port 5000")
})