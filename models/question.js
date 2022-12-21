import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Queston = new Schema({
  //id: Number,
  title: String,
  correct_answer: String,
  answers: [String],
});

export default mongoose.model("queston", Queston);
