//create separate file to update mongoDB database
const connectdb = require('./config')l

const updateData = async()=>{
  let data = await connectdb();
  let result = await data.updateOne(
    {name:'iPhone 14'},{$set:{price:99999}}
  )
  if(result.acknowledged)   console.log("Data Updated successfully);
}
updateData();
//If there are multiple data with same name and you want to update them all at one time, use 'update' keyword:insted of 'updateOne'.
const updateDataAll = async()=>{
  let data = await connectdb();
  let result = await data.update(
    {name:'Samsung galaxy'},{$set:{version:4.3.2}}
  )
  if(result.acknowledged)   console.log("Data Updated successfully);
}
updateDataAll();
//If there are multipl data with same name , and if you update the data, the data which is present at the top(first) will be updated.
