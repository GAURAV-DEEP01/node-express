const http = require('http')
const express = require('express')
const app = express()

app.get('/about',(req,res)=>{
    res.send('homepage')
})
app.listen(8000,()=>{
    console.log('listening 5000')
})