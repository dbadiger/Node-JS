// index.js
const express = require('express');
const app = express();
const conn = require('./config');


app.use(express.json());    //middleware

//GET API
app.get("/", (req, resp)=>{
  conn.quesry("select * from users", (err, result)=>{
    if(err)  resp.send("Error");
    else resp.send(result)
  });
});

//POST API using static data
app.post("/", (req, resp)=>{
  const data = {
    name:"Darshan", password:"Darshan", age:25, email:"darshan@test.com"
  };
  conn.quesry("insert into users set?", data, (err, result, fields)=>{
    if (err) throw error;
    resp.send(result);
  })
});

//POST API using Dynamic Data
app.post("/", (req, resp)=>{
  const data = req.body;
  conn.quesry("insert into users set?", data, (err, result, fields)=>{
    if (err) throw error;
    resp.send(result);
  })
});


//PUT API
app.put("/", (req, resp)=>{
  const data = ["darshan", "000", 27, "darshanb@test.com", 111];
  conn.query(
    "update users set
    name=?, password=?, age=?, email=?
    where id=?",
    data,
    (err, result, fields)=>{
      if(err)  throw error;
      resp.send(result);
    })
});

app.listen(4000);
