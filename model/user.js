const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const postScehma = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quality:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:new Date()
    },
    postype:{
        type:String,
        default:'Request'
    }
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,'User already exist']
    },
    usertype:{
        type:String
    },
    phone:{
        type:Number,
        required:true
    },
    password: {
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        required:true
    },
    totalScore:{
        type:Number,
        default:0
    },
    count:{
        type:Number,
        default:0
    },
    rating:{
        type:Number
    },
    posts:[postScehma]
});

userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword,salt);
    next();
})

const User = mongoose.model('User',userSchema);

module.exports = User;