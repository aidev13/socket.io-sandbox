import mongoose from "mongoose";

// Schema
const user_schema = new mongoose.Schema({
  name: String,
  gamesWon: Number,
  gamesLost: Number,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

// Model
// Export the schema so you can use it in other places
export default mongoose.model("User", user_schema);
