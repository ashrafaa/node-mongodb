const { MongoClient, ObjectID } = require('mongodb');

const url = `mongodb://localhost:27017`;
const db_option = { useNewUrlParser: true };

MongoClient.connect(url, db_option, (err, client) => {
  if (err) {
    return console.log(`Unable to connect db: ${err}`);
  }
  console.log(`Connected to db`);

  const db = client.db('testApp');
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b8db47ed721574379abb3c3')
  }, {
    $inc: {
      age: 1
    }, $set: {
      name: 'Bruce Wayne'
    }
  }, {
    returnOriginal: false
  }).then(res => {
    console.log(JSON.stringify(res, undefined, 2));
  });

  client.close();
});
