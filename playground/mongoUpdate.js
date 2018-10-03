const {MongoClient, ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        console.log('Unable to connect to database');
    }
    console.log("Connected to database");
    db.collection('Users').findOneAndUpdate({
        _id:122
    },{
        $set:{
            name:'Abhishek',
        },
        $inc:{
            age:2
        }
    },{
        returnOriginal:false
    }).then((result) => {
        console.log('Update Successfull',result);
        
    }).catch((err) => {
        
    });
});