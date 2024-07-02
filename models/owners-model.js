const mongoose = require("mongoose")

const ownwerSchema = mongoose.Schema({  
    fullname :{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    email :String,
    password :String,
    
    images :String
}) 

module.exports = mongoose.model("owner",ownwerSchema)