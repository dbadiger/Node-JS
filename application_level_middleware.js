// index.js
//Application Level Middleware: The Middleware is applied to all the routes automatically in an application
const express = require('express');
const app = express();

const app_middleware = (req, resp, next)=>{
  if(!req.query.age)
  {
    resp.send("Please provide Age");
  }
  else if(req.query.age<18)
  {
    res.send("You can not access this page");
  }
  else
  {
    next();
  }
}
app.use(app_middleware);    //appliying middleware to all routes

app.get('/', (req, resp)=>{
  resp.send("Welcome to Home Page");
});

app.get('/users', (req, resp)=>{
  resp.send("Welcome to Users Page");
});

app.get('/about', (req, resp)=>{
  resp.send("Welcome to About Page");
});

app.listen(4000);
