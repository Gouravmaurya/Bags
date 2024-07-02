const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fullname :String,
    email :String,
    password :String,
    cart :{
        type:Array,
        defafult:[]
    },
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