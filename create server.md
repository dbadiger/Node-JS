# Create Server in Node JS
index.js<br>
const http = require('http');<br>
http.createServer(<br>
  (req, resp)=>{<br>
  resp.write("Server is created at port 4550");<br>
  resp.end();<br>
  }<br>
).listen(4550);<br>
##### open browser and check https://localhost:4500

## Create Basic API
index.js<br>
const http = require('http');<br>
http.createServer(<br>
  (request, response)=>{<br>
  response.writeHead(200, {'Content-Type':'application/json'};<br>
  response.write(JSON.Stringify(<br>
  {<br>
    name:'Darshan B",
    email:'darshan@gmail.com'
    contact:8974563210,
    age:25<br>
  })<br>
  );<br>
//  resp.write("Server is created at port 4550");<br>
  resp.end();<br>
  }<br>
).listen(4550);<br>
