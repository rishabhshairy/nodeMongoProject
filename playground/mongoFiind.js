const {MongoClient, ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        console.log('Unable to connect to database');
    }
    console.log("Connected to database");
    //writing query inside find()....
    // db.collection('Users').find({
    //     _id:new  ObjectID('5bb47ee13b641208d0362e33')
    // }).toArray().then((result) => {
    //     console.log(JSON.stringify(result,undefined,2));
    // }).catch((err) => {
    //     console.log('Unable to fetch data');
    // });

    //Count fucntion example
    db.collection('Users').find().count().then((result) => {
        console.log(`Todos count : ${result}`);
    }).catch((err) => {
        console.log('Unable to fetch data');
    });
    //db.close();
});