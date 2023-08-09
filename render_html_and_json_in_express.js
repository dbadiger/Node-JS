const express = require("express");
const app = express();

app.get('',(req, res)=>{
  res.send(`
    <h1>Writing HTML in express JS file</h1>
    <a href = "/about">Go to About US Page</a>
  `);
  );

app.get('/about',(req, res)=>{
  res.send(`
    <h1>About Us</h1>
    <input type="text" placeholder = "Enter Data"/>
    <button>Submit</button>
    <a href = "/">Go to Home Page</a>
  `);
  );

//Send JSON data
app.get('/contact',(req, res)=>{
  res.send([
    {name:"darshan", email:"darshan@test.com", age:45},
    {name:"sam", email:"sam@test.com", age:54}
  ]);
  );

//Display query in placeholder
// https://localhost:4000/about?name=jhon
//display name jhon in the aboutus page placeholder
app.get('/about', (req, res)=>{
  res.send(`
    <input type="text" value="${req.query.name}"/>
    <button>Submit</button>
    <a href = "/">Go to Home Page</a>
  `);
});

app.listen(4000);
