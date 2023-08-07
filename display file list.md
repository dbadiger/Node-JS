# Display File List from Folder
#### Create file in current directory
index.js<br>
const fs = require('fs');<br>
fs.writeFileSync('hello.txt','This file will creted in current folder');<br>
#### Create multiple files in any aparticular file
index.js<br>
const fs = require('fs');<br>
const path = require('path');
const directory_path = path.join(__dirname,'files');<br>
for(i=0;i<5;i++){<br>
  fs.writeFileSync(directory_path+"/fileA"+i+".txt","New File is created in files directory");<br>
  //fs.writeFileSync(`${directory_path}/fileA${i}.txt`,"New file Created");<br>

#### Diplay All files in directory
index.js<br>
const fs = require('fs');<br>
const path = require('path');
const directory_path = path.join(__dirname,'files');<br>
fs.readdir(directory_path, (err, files)=>{
  files.forEach((item)=>{
    console.log(item);
  })
});

### Can we access other files which are present outside the current directory? Like accessing files from D drive, E Drive, etc?
#### Ans: No. We cannot access files which are present in other directory. node acts as web server. If anything happens outside its enviornment it will not come to know. <br> If this can possible, any person can easily access our system just by visiting the website and can get whole data. So this is not possible to access other drive data from node. User can get data which is presesnt in the server only.

