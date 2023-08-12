// Create separate middleware file and import that file in index.js file

//middleware.js
module.exports= my_middleware =(req, resp, next)=>{
  if(!req.query.age)   resp.send("Please provide Age");
  else if(req.query.age<18) resp.send("You cannot Access this Page");
  else next();
};


// index.js file
const express = require('express');
const app = express();
const my_middleware = require('./middleware');
const route = express.Route();

route.use(my_middleware);

app.get('/', (req, resp)=>{
  resp.send("Welcome Home");
});

app.get('/about', (req, resp)=>{
  resp.send("Welcome About Page");
});

route.get('/contact', (req, resp)=>{
  resp.send("Welcome Contact Page");
});

route.get('/users', (req, resp)=>{
  resp.send("Welcome Users Page");
});


app.use('/', route);
app.listen(4000)
