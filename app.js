
const express=require("express")
const dotenv = require('dotenv').config()
const connectionDB = require('./connection')
const value=require('./model')
const app=express()
connectionDB()

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // allow preflight
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
})

app.get('/testcase',(req,res)=>{
    value.find()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send('datas not occure')
    })
})

app.put('/testcase/:id',(req,res)=>{
    const id=req.params.id
    value.findByIdAndUpdate(id,req.body)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send('data not found')
    })
})

app.post('/testcase/add',(req,res)=>{
    if(req.body.title===undefined){
        res.status(400).send('cannot send a empty values')
        return;
    }
    const values =new value({
        title:req.body.title,
        script:req.body.script,
    })

    console.log(values)
     values.save(values)
    .then(data=>{
        res.send(data)
    }).catch(err => {
        res.status(400).send(err)
    })
})

app.delete('/testcase/:id',(req,res)=>{
    const id=req.params.id
    value.findByIdAndDelete(id)
    .then(data=>{
        res.send('user are deleted')
    })
    .catch(err=>{
        res.status(500).send('user not found')
    })
})

app.listen(PORT,()=>{
    console.log("server start")
})
