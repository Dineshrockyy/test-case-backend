const mongoose=require('mongoose')
mongoose.set('strictQuery', true);

const uri="mongodb+srv://dinesh:hsenid6369@test.dclxudi.mongodb.net/?retryWrites=true&w=majority"

const connectionDB=async()=>{
           const con=await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        },(err)=>{
            if(err){
                console.log('this is an err '+err)
            }else{
                console.log('connected......')
            }
        })
}

module.exports=connectionDB