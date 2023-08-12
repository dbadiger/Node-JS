# CRUD with File System
index.js<br>
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,"CRUD_FILE");
const filePath = `${dirPath}/apple.txt`

//Create File
fs.writeFileSync(ilePath, "This is fruit and tech Company"); //cretae apple.txt file in CRUD_FILE folder
fs.readFile(filePath, (err, item)=>{
  console.log(item);
});

//Read File
fs.readFile(filePath,'utf8', (err, item)=>{
  console.log(item);
});

//update file
fs.appendFile(filePath, "This text is to check updation", (err)=>{
  if(!err) console.log("File Updated Successfully");
  });

//File Rename
fs.rename(filePath, `${dirPath}/orange.txt`,(err)=>{
  if(!err) console.log("File Name Updated");
  }); // This will delete the existing file and creates new file, but all the content will remain same

  //Delete File
  fs.unlinkSync(`${dirPath}/orange.txt`);

### What is Buffer?
#### Buffer is temporary memory Location, <br>whenever we create file and while doing CRUD operation some memory is required to perform these operations.<br>It acts like RAM.
#### Buffer class in Node JS is used to perform operations on raw binary data. Generally, buffer refers to particular memory location in Memory.
