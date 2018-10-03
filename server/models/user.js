var mongoose=require('mongoose');

//creating schema
var Schema=mongoose.Schema;
var UserSchema=new Schema({
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    }
});

//creating model
var User=mongoose.model('User',UserSchema);

module.exports={User};