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

app.listen(4000);
