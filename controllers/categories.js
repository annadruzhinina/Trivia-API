import Category from "../models/category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);

    if (category) {
      return res.json(category);
    }

    res.status(404).json({ message: "Category not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createCategory = async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.status(201).json(category);
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findByIdAndUpdate(id, req.body);
  res.status(201).json(category);
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Category.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Category deleted!");
    }

    throw new Error("Category not found!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
