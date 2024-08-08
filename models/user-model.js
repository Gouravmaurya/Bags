const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email :String,
    
    fullname :String,
    
    password :String,
    cart :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    }],
    isadmin :Boolean,
    order :{
        type:Array,
        default:[]
    },
    contact:Number,
    // address: String,
    images :String
}) 

module.exports = mongoose.model("user",userSchema)