const {MongoClient} = require('mongodb');
const url  = "mongodb://localhost:4562";
const database = "e-com"
const client = new MongoClient(url);

async function dbconnect(){
  let result = await client.connect();
  db = result.db(database);
  return db.collection('Products');
}

module.exports = dbconnect;
