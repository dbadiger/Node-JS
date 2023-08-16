const express = require('express');
const dbconnect = require('./config');
const app = express();

//fetch data and display on the browser
app.get('/', async(req, resp)=>{
  let data = await dbconnect();
  data = await data.find().toArray();
  resp.send(data);
});

app.listen(4500);
