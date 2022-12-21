import db from "../db/connection.js";
import Category from "../models/category.js";
import Question from "../models/question.js";

import categories from "./categories.json" assert { type: "json" };
//import questions from "./questions.json" assert { type: "json" };
import questions_18 from "./questions-18.json" assert { type: "json" };
import questions_19 from "./questions-19.json" assert { type: "json" };
import questions_20 from "./questions-20.json" assert { type: "json" };
import questions_21 from "./questions-21.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();

  await Category.create(categories);
  // await Question.create(questions);
  await Question.create(questions_18);
  await Question.create(questions_19);
  await Question.create(questions_20);
  await Question.create(questions_21);

  await db.close();
};

insertData();
