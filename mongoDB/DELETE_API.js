const connectdb= require('./config');

const deleteData = async()=>{
  let data = await connectdb();
  let result = await data.deleteOne(
    {name:'iphone 14'}
  )
  console.log(result);
}
deleteData();

//delete Multiple data that have same name
const deleteMultiple = async()=>{
  let data = await connectdb();
  let result = await data.deleteMany(
    {name:'iphone 14'}
  )
  if(result.acknowledged){
    console.log("Deletion Successful")
  }
}
