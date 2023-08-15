# Mongo DB Basics
##### Mongodb is NoSQL Database<br>The data stored in the Collection format<br>Collection don't have row and collumns<br>Data Srored in the form of Objects.


Displays all databases:<br>
 show dbs;<br>
 use my_new_db;    //creating new Database<br>
db.createCollection("Users");    //creating 'Users' collection(table) in 'my_new_db' database <br>
show collections        //Display All colletions in database<br>
db.createCollection("Products");<br>
db.Users.drop();         //delete Users Collection<br>
db.dropDatabase;        //drop current database (my_new_db database)<br>
