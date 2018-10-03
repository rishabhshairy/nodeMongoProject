//server setup
var express=require('express');
var bodyParser=require('body-parser');
var app=express();


//database setup
var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    });

    todo.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(400).send(err);
    });
})

app.listen(3000,()=>{
    console.log('Server up on port 3000');
})

