//index.js
//Route Level Middleware: You can apply middleware to any one particular Route, or any group of routes, or to all the routes of an application.

const express = require('express');
const app = express();

const route_middleware = (req, resp, next)=>{
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
app.get('/', (req, resp)=>{
  resp.send("Welcome to Home Page");
});

app.get('/users',route_middleware, (req, resp)=>{        //applying middleware to only users page
  resp.send("Welcome to Users Page");
});

app.get('/about', (req, resp)=>{
  resp.send("Welcome to About Page");
});

app.listen(4000);
