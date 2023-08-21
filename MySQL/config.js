const mysql = require('mysql');
const conn = mysql.createConnection({
  host:'localhost',          //you can give your online URL
  user:'root',              //username
  password:"",              //password
  database:"mytest"        //database name
});
conn.connect(err)=>{
  if(err)  console.log("Error in Connection")
  else    console.log("Connected");
}

module.exports = conn;
