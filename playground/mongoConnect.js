//old way'--> const MongoClient=require('mongodb').MongoClient;

//using object destruturing to create mongo clients

const {MongoClient, ObjectID}=require('mongodb');

// var obj=new ObjectID();
// console.log(obj);
/*
connection to mongodb 
    url-->> mongodb://ipaddress:portno/dbname
*/
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        console.log('Unable to connect to database');
    }
    console.log("Connected to database");

/*     db.collection('Todos').insertOne({
        text:'Something liike this',
        completed:false
    },(err,result)=>{
        if(err){
            return  console.log('unable to insert todo',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    }); */
/* 
    db.collection('Users').insertOne({
        name:'Rishabh',
        age:22,
        location:'Ranchi'
    }, (err, result)=>{
        if(err){
            console.log('Unable to insert user',err);
        }

        //console.log(JSON.stringify(result.ops,undefined,2));
        console.log(result.ops[0]._id.getTimestamp());
    });
    
  */

    db.close();
});