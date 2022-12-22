import { Router } from "express";
import * as controllers from "../controllers/questions.js";

const router = Router();

//Setup Requests
router.get("/", controllers.getQuestions);
router.get("/:id", controllers.getQuestion);
router.get("/category/:category", controllers.getQuestionCategory);
router.post("/", controllers.createQuestion);
router.put("/:id", controllers.updateQuestion);
router.delete("/:id", controllers.deleteQuestion);

export default router;
