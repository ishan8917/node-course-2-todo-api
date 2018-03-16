//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');






MongoClient.connect('mongodb://localhost:27017',(err, db) => {
if(err) {
    return console.log('unable to connect');
}

console.log('connected');


const myDb = db.db('TodoApp');

//deletemany
myDb.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    console.log(result);
});

//deleteone
// myDb.collection('Todos').deleteOne({text: 'lot lunch'}).then((result) => {
//     console.log(result);
// })

//findoneanddelete
// myDb.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//  console.log(result);

// });

//myDb.collection('Users').deleteMany({name: 'Andrew'});
 myDb.collection('Users').findOneAndDelete({_id: new ObjectID("5aa7bb70859b932f0872a20c")}).then((results) =>{
   console.log(JSON.stringify(results, undefined, 2));  
 });



//db.close();
});