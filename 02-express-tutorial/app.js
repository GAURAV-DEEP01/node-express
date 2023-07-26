const http = require('http')
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('./public'))

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>oops</h1>')
})
app.listen(8000,()=>{
    console.log('listening 5000')
})