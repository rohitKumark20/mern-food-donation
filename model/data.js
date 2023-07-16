const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
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
        default:'Donate'
    }
})

const requestSchema = new mongoose.Schema({
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

const Donation = mongoose.model('donation',donationSchema);
const Request = mongoose.model('request',requestSchema)
module.exports = {Donation,Request}