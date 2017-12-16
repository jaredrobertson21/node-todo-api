const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log("Error connecting to the MongoDB server");
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5a333aeb70e092c9e0c3f6b6")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => console.log(result));


    db.collection('Users').findOneAndUpdate({_id: new ObjectID("5a2dc27c07dbda138ce33247"),
    }, {
        $set: {
            name: 'Matt'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(result => console.log(result));
    db.close();  
});