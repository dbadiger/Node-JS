const express = require('express');
const app = express();

app.get('', (request, response)=>{
 response.send("Hello, This is Home Page"); 
});

app.get("/about",(request, response)=>{
  response.send("Welcome to about Us Page");
});

app.get("/contact",(request, response)=>{
  response.send("Welcome, You are in Contact Us Page");
});

//display query in html
// https://localhost:4000/?name=alpha
app.get('', (req, resp)=>{
 console.log("data received:",req.query); // this will display output in object format like: {name:alpha}
 console.log("data received:",req.query.name); // this will display required output(displays only name)
 resp.send("Welcome t Home page,"+req.query.name);
});

app.listen(4000);
