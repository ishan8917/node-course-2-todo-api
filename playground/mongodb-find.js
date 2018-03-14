//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');






MongoClient.connect('mongodb://localhost:27017',(err, db) => {
if(err) {
    return console.log('unable to connect');
}

console.log('connected');


const myDb = db.db('TodoApp');
// myDb.collection('Todos').find().toArray().then((docs) =>{
// console.log('Todos');
// console.log(JSON.stringify(docs, undefined, 2));
// },(err) => {
// console.log('unable to fetch todos', err);
// });

// myDb.collection('Todos').find().count().then((count) =>{
//     console.log(`Todos count: ${count}`);
//     //console.log(JSON.stringify(docs, undefined, 2));
//     },(err) => {
//     console.log('unable to fetch todos', err);
//     });

myDb.collection('Users').find({name: 'ishan'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
})


//db.close();
});