const {MongoClient, ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        console.log('Unable to connect to database');
    }
    console.log("Connected to database");
    db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
        console.log('Deleted',result);
    }).catch((err) => {
        
    });
    db.collection('Todos').deleteOne({completed:false}).then((result) => {
        console.log('Deleted',result);
    }).catch((err) => {
        
    });
    db.collection('Todos').deleteMany({completed:false}).then((result) => {
        console.log('Deleted',result);
    }).catch((err) => {
        
    });
    //db.close();
});