const mongoDB = require('mongodb');
const express = require('express');
const dbconnect = require('./config');
const app = express();

app.use(express.json());

app.delete("/:_id", async(req, resp)=>{
    const data = await dbconnect();
  let result = await data.deleteOne(
    {
      _id:new mongodb.ObjectId(req.params.id);
    });
  resp.send(result);
})

app.listen(4000);
