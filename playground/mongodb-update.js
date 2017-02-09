//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }    
    console.log('Connected to MongoDB server');

    //db.collection('Todos').findOneAndUpdate({
    //    _id: new ObjectID('589b03c1efdcce8b89071fce')
    //}, {
    //    $set: {
    //        completed: true
    //    }
    //}, {
    //    returnOriginal: false
    //}).then((result) => {
    //    console.log(result);
    //});

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58973af48a309222b416ad14')
    }, {
        $set: { name: 'Neriad' },  
        $inc: { age: 1 }        
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });  

    //db.close();
});