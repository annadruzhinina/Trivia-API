import Question from "../models/question.js";

export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

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

export const createQuestion = async (req, res) => {
  const question = new Question(req.body);
  await question.save();
  res.status(201).json(question);
};

export const updateQuestion = async (req, res) => {
  const { id } = req.params;
  const question = await House.findByIdAndUpdate(id, req.body);
  res.status(201).json(question);
};

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
