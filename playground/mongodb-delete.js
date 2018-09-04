const { MongoClient, ObjectID } = require('mongodb');

const url = `mongodb://localhost:27017`;
const db_option = { useNewUrlParser: true };

MongoClient.connect(url, db_option, (err, client) => {
  if (err) {
    return console.log(`Unable to connect db: ${err}`);
  }
  console.log(`Connected to db`);

  const db = client.db('testApp');
  db.collection('Users').deleteMany({
    name: 'Bruce Wayne'
  }).then(res => {
    console.log(`${res.result.n} users deleted`)
  }, err => {
    console.log(`Unable to delete: ${err}`);
  });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b8daecee65d1442557c8362')
  }).then(res => {
    console.log(`Acc deleted: ${JSON.stringify(res)}`);
  }, err => {
    console.log(`Unable to delete: ${err}`);
  });

  client.close();
});
