const express = require('express');
const dbconnect = require('./config');
const app = express();

app.get('/', async(req, resp)=>{
  let data = await dbconnect();
  data = await data.find().toArray();
  console.log(data);
  resp.send(data);
});
app.listen(4500);
