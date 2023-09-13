const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/', (req, res)=>{
    res.sendFile('C:/DEV-WEB/aula-4/index.html')
    console.log(req.body)
})



app.listen(3000, ()=>{
    console.log('Deu Boa')
})