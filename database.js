//creating the database
import mongoose from "mongoose";
import Users from "./Users.js";
console.log("Connection to database.js")

mongoose.connect("mongodb://localhost/testdb")

async function run() {
   try {
      const user = await Users.create({
         name: "Stacey Liebherr", 
         gamesWon: 15, 
         gamesLost: 35, // Ensure this matches the schema field name
      });
      console.log(user);
   } catch (error) {
      console.error("Error creating user:", error);
   }
}

// Call the function
run();
