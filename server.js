const express = require('express')
const cors=require('cors');
const app = express()
const translate = require('translate-google')
app.use(cors())
app.use(express.json());





app.post('/',(req,res)=>{
    translate(req.body.text, {to: 'hi'}).then(r => {
        console.log(JSON.stringify({translation:r}))
        res.send(JSON.stringify({translation:r}))
    }).catch(err => {
        console.error(err)
        res.send(err)
    })
})


app.listen(3000,()=>{
    console.log("connection to the server established")
})