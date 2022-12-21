import db from "../db/connection.js";
import Category from "../models/category.js";
import Question from "../models/question.js";
import categories from "./categories.json" assert { type: "json" };
import questions from "./questions.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();

  await Category.create(categories);
  await Question.create(questions);

  await db.close();
};

insertData();
