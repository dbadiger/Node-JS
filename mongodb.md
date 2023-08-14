# Mongo DB Basics
##### Mongodb is NoSQL Database<br>The data stored in the Collection format<br>Collection don't have row and collumns<br>Data Srored in the form of Objects.


Displays all databases:
 show dbs;
 use my_new_db;    //creating new Database
db.createCollection("Users");    //creating 'Users' collection(table) in 'my_new_db' database 
show collections        //Display All colletions in database
db.createCollection("Products");
db.Users.drop();         //delete Users Collection
db.dropDatabase;        //drop current database (my_new_db database)
