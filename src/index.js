const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const router=require('./router/route')
mongoose.set('strictQuery', true)
const { json } = require('express')
const app=express()
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://atifpervez:34BmDa5XVvtznQvO@code.8mvlc.mongodb.net/axios")
.then(()=>console.log("Mongodb is connected"))
.catch((err) => console.log(err))


app.use('/',router)

app.listen(5000,()=>{
    console.log("Express app is running on port",5000);
})




