import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Queston = new Schema({
  category: String,
  title: String,
  type: String,
  correct_answer: String,
  answers: [String],
});

export default mongoose.model("queston", Queston);
