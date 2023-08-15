use e-comm;      //creating 'e-comm' database
db.createCollection('Products');
db.Products.insertOne({
    name:'iPhone 14', price:124740, category:'smarthphone'
  });
db.Products.find();      //display all data present in 'Products' Collection

db.Products.insertOne({
  name:"Realme R33", price:22000, category:"smartphone", brand:"Realme"
});


db.Products.updateOne({
  {name:'iPhone 14'}, {$set:{brand:'Apple'}}
 );
db.Products.updateOne({
  {name:"Realme R33"},{$set:{price:19000}}
 );

db.Products.deleteOne({brand:"Apple"});
