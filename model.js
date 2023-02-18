const mongoose=require('mongoose')

var schema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    script:{
        type:String,
        required:true
    },
})

const value = mongoose.model('value',schema)

module.exports=value