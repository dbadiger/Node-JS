# Node-JS
## About Node JS 
#### WHat is Node JS?
##### Node Js is not language. It is server Enviornment.<br>Code and syntax are very similar to JavaScript, But not exactly same.<br> Node JS can connect with database.<br> Node JS use chrome's V8 Engine to execute the code. <br> Node JS is free and Open-source.

#### Why do we use Node JS?
##### Node JS is mostly used for API. So we can connect the same database with web App, Mobile App.<br> Node JS is easy to understand who knows the Javascript already. <br> With the help of NodeJS and JavaScript we can become Full Stack Developer.

#### Are Node JS and JavaScript Same?
##### JavaScript and Node JS code syntax is same. If you know JavaScript, you can easily understand Node JS.<br> But both are not exactly same.<br> You cannot connect JavaScript to Database, whereas we can connect Node JS with database.<br> Node JS run on the server side, JavaScript run on the browser.
##### Developers make APIs with Node JS. These APIs used for Web, Android, IOS, and etc.<br>Node JS is used to connect the Server with Client. <br> Node JS is also used to develop web applications.

## Node Modules / Packages
##### Node modules are same as JavaScript Libraries. A set of Functions that are required in our application. <br> 
#### Types of Modules/Packages:
##### Global Modules <br>Non-global Modules

#### Global Modules/Packages
##### These are built-in packages, we don't need to import these packages externally (we don't need any further installation). <br>Example: buffer, url, util, path, stream, etc.


#### Non-Global Modules/Non-Global Packages
##### These are packages, which can used in our application by installing them externally. To include the packages, use 'require()' function with the name of module/Package.<br>Example: const http = require('http');<br>const fs = require('fs');<br> const colors = require('colors');<br>console.log("package.json".green);<br>console.log("package.json".red);<br>console.log("package.json".black);<br>console.log("package.json".bgBlue);<br><br>We can create our own packages also.

## Give input from Command Line

index.js:<br>
console.log(process.argv);
<br>
console.log(process.argv[3]);
<br>
console.log(process.argv[2]);	<br>
Command line:<br>
node index.js hello hi how
<br>
node index.js hello hi how
output: hi<br>
output: hello<br>
<br>
Create file using command line<br>
Index.js<br>
const  fs = require(‘fs’);<br>
cosnt input = process.argv;<br>
fs.writeFileSync(input[2],input[3]);<br>
command Line:<br>
node index.js apple.txt ‘This is fruite. Apple file create’
<br><br>
add and remove file from command line:<br>
index.js:<br>
const  fs = require(‘fs’);<br>
cosnt input = process.argv;<br>
if(input[2]==’add’){<br>
fs.writeFileSync(input[2],input[3]);<br>
}<br>
else if(input[2]=='remove'){<br>
	fs.unlinkSync(input[3]);<br>
}<br>
else{<br>
Console.log(“Invalid Input”);
<br><br>
Command line:<br>
node index.js add orange.txt ‘this is color and fruit’<br>
//orage.txt file will be created with input text as : this is color and fruit.<br>
node index.js remove apple.txt<br>
//apple.txt file will be deleted <br>


