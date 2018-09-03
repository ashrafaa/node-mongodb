const MongoClient = require('mongodb').MongoClient;

const url = `mongodb://localhost:27017`;
const db_option = { useNewUrlParser: true };

MongoClient.connect(url, db_option, (err, client) => {
  if (err) {
    return console.log(`Unable to connect db: ${err}`);
  }
  console.log(`Connected to db`);

  const db = client.db('testApp');
  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log(`Unable to insert: ${err}`);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));

  });

  // Insert into Users with name, age and location properties
  db.collection('Users').insertOne({
    name: 'Bruce Wayne',
    age: 37,
    location: 'Gotham City'
  }, (err, result) => {
    if (err) {
      return console.log(`Unable to insert into Users: ${err}`);
    }
    console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
});
