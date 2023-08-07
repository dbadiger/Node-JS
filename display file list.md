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
for(i=0;i<5;i++){
  fs.writeFileSync(directory_path+"/fileA"+i+".txt","New File is created in files directory");
  //fs.writeFileSync(
