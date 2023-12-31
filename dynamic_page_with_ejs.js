//Creating Dynamic Page and common header file for multiple files

//In index.js file
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('', (req, resp)=>{
  const user = {
    name:'darshan', 
    email:'darshan@test.com',
    city:'hubli',
    skills = ['javaScript','react JS', 'AWS', 'C++', 'Java']
  };
  resp.render('profile', {user});
});

app.listen(4000);


//create profile.ejs in 'views' folder
<html>
  <head></head>
<body>
  <h1>Welcome <%= user.name %></h1>
<h1>Email <%= user.email %></h1>
<h1>City <%= user.city %></h1>
  <ul>
    <% user.skills.forEach((item)=>{ %>
      <li><% item %> </li>      
  <%  })%>
  </ul>
  </body>
  </html>

//Create common header file for multiple files
//header.ejs
<nav>
  <h1>This is Header File<h1>
  </nav>

//Include headr file in other files
//login.ejs
<body>
  <%- include ('/header); %>
    <h1> Login Page</h1>
 </body>

  //about.ejs
  <body>
  <%- include ('/header); %>
    <h1> About Page</h1>
 </body>        
