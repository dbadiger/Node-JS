//npm i mysql

const mysql = require('mysql');
const conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"mytest"
});
conn.connect((err)=>{
  if(err) console.log("Error");
  else console.log("connected");
});

conn.query("select * from users",(err, result)=>{
  console.log("Result:", result);
})
