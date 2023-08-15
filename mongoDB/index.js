const dbconnect = require('./config');    //importing config file

//using promises
dbconnect().then((response)=>{
  response.find().toArray().then((data)=>{
    console.log(data);
  })
});
//--------------------------------------------//
//using async/await
const mainFun = async ()=>{
  let result = await dbconnect();
  result =await  result.find().toArray();
  console.log(result);
}
mainFun();
