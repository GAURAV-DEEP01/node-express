const http = require('http')
const path = require('path')
const express = require('express')
const app = express()
const product = require('./json')
const port = 8000

app.use(express.static('./public'))

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})
app.get('/getFeedback/feedback/:feedbackId/rating/:ratingper',(request,response)=>{
    console.log(request.params)
    response.json(product)
    const {feedbackId,ratingper} = request.params
    response.status(200).send(`${feedbackId}${ratingper}`)
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>oops</h1>')
})
app.listen(port,()=>{
    console.log('listening'+ port)
})