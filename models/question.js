import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Queston = new Schema({
  //id: Number,
  category: String,
  title: String,
  correct_answer: String,
  answers: [String],
});

export default mongoose.model("queston", Queston);
