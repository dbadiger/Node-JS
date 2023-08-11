//index.js
const express = require('express');
const app = express();

//creating middleware
const middfunction = (req, resp, next)=>{
  console.log("Middleware connected");
  next();    //one of the most important function in middleware. if we skip this function, middleware will not execute other functions/pages in the application
}
app.use(middfunction);

app.get('/',(req, resp)=>{
  resp.send("Welcome to home page);
});
app.get('/user', ()=>{
  resp.send("Welcome to user page");
});
app.listen(4000);


//middleware with conditions and parameters
If there in no age mentioned, display message as Please provide Age
localhost:4000/
  localhost:4000/users

If there is age below 10, display message as you cannot access the web age
localhost:4000/?age=10
  localhost:4000/users/?age=10

If the age is grater than or equal to 18, display message as Welcome to Home page
localhost:4000/?age=34
localhost:4000/users/?age=34
