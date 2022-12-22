import Question from "../models/question.js";

//Export GET Request for all Questions
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

//Export GET Request for a Question
export const getQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findById(id);

    if (question) {
      return res.json(question);
    }

    res.status(404).json({ message: "Question not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

//Export a GET Request for a Questions by Category (filter by category)
export const getQuestionCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const questions = await Question.find({ category: category });

    if (questions) {
      return res.json(questions);
    }

    res.status(404).json({ message: "Questions not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

//Export a POST Request for a Single Category
export const createQuestion = async (req, res) => {
  const question = new Question(req.body);
  await question.save();
  res.status(201).json(question);
};

//Export a PUT Request for a Single Category
export const updateQuestion = async (req, res) => {
  const { id } = req.params;
  const question = await House.findByIdAndUpdate(id, req.body);
  res.status(201).json(question);
};

//Export a DELETE Request for a Single Category
export const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Question.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Question deleted!");
    }

    throw new Error("Question not found!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
