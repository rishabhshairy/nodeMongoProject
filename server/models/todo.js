var mongoose=require('mongoose');

//creating schema
var Schema=mongoose.Schema;
var TodoScehma=new Schema({
    text:{
        type: String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type: Boolean,
        default:false
    },
    completedAt:{
        type: Number,
        default:null
    }
});

//creating models
var Todo=mongoose.model('Todo',TodoScehma);

module.exports={Todo};