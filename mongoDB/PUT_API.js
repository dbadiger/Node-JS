const express = require('express');
const dbconnect = require('./config');
const app = express();

app.use(express.json());    //middleware

//insert data to database through API
app.put('/', async(req, resp)=>{
  let data = await dbconnect();
  let result = await data.insert(req.body);
  resp.send(result);
});

app.listen(4500);
