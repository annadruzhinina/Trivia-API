import { Router } from "express";
import categoryRoutes from "./category.js";
import questionRoutes from "./question.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/categories", categoryRoutes);
router.use("/questions", questionRoutes);

export default router;
