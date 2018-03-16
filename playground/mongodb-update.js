//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');






MongoClient.connect('mongodb://localhost:27017',(err, db) => {
if(err) {
    return console.log('unable to connect');
}

console.log('connected');


const myDb = db.db('TodoApp');

myDb.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5aa7c099a4d375ff0277656e')
    }, {
        sset: {
            completed: true
        },
        
    },
    {
        returnOriginal: false
    }).then((result)=>{
       // console.log(result);
    });

console.log('inside todo');
    myDb.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5aa7bb803b236131e453df0e')
        }, {
            $set: {
                name: 'andrew',
            },
        
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }).then((result) => {
            //console.log(result);
        });

//db.close();
});