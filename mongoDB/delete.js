const dbconnect = require('./config');
const deleteData =async ()=>{
  let data = await dbconnect();
  let result = await data.deleteOne({name:'iPhone 14'});
  if(result.acknowledged) console.log("Data deleted" );
}
deleteData();


//when multiple data with same name
const deleteDataMany =async ()=>{
  let data = await dbconnect();
  let result = await data.deleteMany({name:'iPhone 14'});
  if(result.acknowledged) console.log("Many Data deleted" );
}
deleteDataMany();
  
