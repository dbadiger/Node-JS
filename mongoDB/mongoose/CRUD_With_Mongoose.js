//index.js

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:/2347/e-com");  //here you can enter your online url with database name

//creating schema for 'PRODUCTS' collection(table)
const ProductSchema = new mongoose.Schema({
  name:String, price:Number, brand:String, category:String
});

//Connecting and Inserting data
const insert_in_DB = async()=>{
  const Product = mongoose.model('PRODUCTS', ProductSchema);  //parameters are: Table Name and Schema
  let data = new Product({        //creating Object
    name:'iphone 14',
    price:899,
    brand:"apple",
    category:"smartphone"
  });
  const result = await data.save();
  console.log(result)
} 
insert_in_DB();
