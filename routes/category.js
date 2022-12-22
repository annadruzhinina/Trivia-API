import { Router } from "express";
import * as controllers from "../controllers/categories.js";

const router = Router();

//Setup Requests
router.get("/", controllers.getCategories);
router.get("/:id", controllers.getCategory);
router.post("/", controllers.createCategory);
router.put("/:id", controllers.updateCategory);
router.delete("/:id", controllers.deleteCategory);

export default router;
