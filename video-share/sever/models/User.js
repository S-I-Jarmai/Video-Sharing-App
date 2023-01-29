import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
    },
    img:{
        type: String,
    },
    subscirber:{
        type: Number,
        default: 0
    },
    subscirbedUsers:{
        type:[]
    },
    fromGoogle:{
        type: Boolean,
        default: false
    }    
},{timestamps:true}); 

export default mongoose.model("users", userSchema) 