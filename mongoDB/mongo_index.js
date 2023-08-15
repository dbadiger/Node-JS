// creating separate config file for database connection
const {MongoClient} = require('mongodb');
//const mongoClient = require('mongodb').MongoClient; alternate for first line

const url = "mongodb://localhost:4562";    //connecting local mongoDB. you can add online URL Here
const database = 'e-com'    //database name
const client = new MongoClient(url);

async function dbConnect (){
  let result = await client.connect();
  db = result.db(database);
  return db.collection('Products');
}

//using promise
dbConnect().then((response)=>{
  response.find().toArray().then((data)=>{
    console.log(data);
  })
})

//using async and await
const mainFun =async()=>{
  let result = await client.connect();
  result = await result.find().toArray();
  console.log(result);
}

mainFun();
