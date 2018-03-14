//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');






MongoClient.connect('mongodb://localhost:27017',(err, db) => {
if(err) {
    return console.log('unable to connect');
}

console.log('connected');


const myDb = db.db('TodoApp');


// myDb.collection('Todos').insertOne({
//     text: 'something to do',
//     completed: false
// }, (err, result) => {
//     if(err) {
//         return console.log('unable to insert',err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
// });



// myDb.collection('Users').insertOne({
//     _id:123,
//     name: 'ishan',
//     age:23,
//     location: 'ahmedabad'
// }, (err, results) => {
//     if(err) {
//         return console.log('unable to insert');
//     }
//     console.log(JSON.stringify(results.ops[0]._id.));

// });

db.close();
});