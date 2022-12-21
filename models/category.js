import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Category = new Schema({
  id: Number,
  name: String,
});

export default mongoose.model("category", Category);
