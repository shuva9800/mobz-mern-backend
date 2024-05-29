const mongoose = require('mongoose');


const userModel = new mongoose.Schema({
firstName:{
    type: String,
    required: true,
    trim: true,
},
lastName:{
    type: String,
    required: true,
    trim: true,
},
mobileNo:{
    type: Number,
    trim: true,
},
email:{
    type: String,
    required: true,
},
street:{
    type: String,
    trim: true,
},
city:{
    type: String,
    trim: true,
},
state:{
    type: String,
    trim: true,
},
country:{
    type: String,
    trim: true,
},
loginId:{
    type: String,
},
password:{
    type: String,
    required: true,
}
},
{timestamps:true}
);


module.exports = mongoose.model('User',userModel)