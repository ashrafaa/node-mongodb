const { MongoClient, ObjectID } = require('mongodb');

const url = `mongodb://localhost:27017`;
const db_option = { useNewUrlParser: true };

MongoClient.connect(url, db_option, (err, client) => {
  if (err) {
    return console.log(`Unable to connect db: ${err}`);
  }
  console.log(`Connected to db`);

  const db = client.db('testApp');
  db.collection('Users').find().count().then((count) => {
    console.log(`Total users count: ${count}`);
  }, (err) => {
    return console.log(`Unable to find: ${err}`);
  });

  db.collection('Users').find({
    name: 'Bruce Wayne'
  })
  .toArray((err, docs) => {
    if (err) {
      return console.log(`Unable to find: ${err}`);
    }
    console.log(JSON.stringify(docs, undefined, 2));
  });

  client.close();
});
