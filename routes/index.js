import { Router } from "express";
import categoryRoutes from "./category.js";
import questionRoutes from "./question.js";

const router = Router();

//Setup API Root
router.get("/", (req, res) => {
  //res.send("This is the api root!");
  res.setHeader("Content-type", "text/html");
  res.write(`<h1><b>Choose Category:</b></h3>`);
  res.write(
    `<h3><a href="http://localhost:3000/api/questions/category/Science:%20Computers"> - Science & Computers</a></h3>`
  );
  res.write(
    `<h3><a href="http://localhost:3000/api/questions/category/Mythology"> - Mythology</a></h2>`
  );
  res.write(
    `<h3><a href="http://localhost:3000/api/questions/category/Science:%20Mathematics"> - Science & Mathematics</a></h3>`
  );
  res.write(
    `<h3><a href="http://localhost:3000/api/questions/category/Sports"> - Sports</a></h3>`
  );
});

//Setup Router Link to Categories and Questions Routes
router.use("/categories", categoryRoutes);
router.use("/questions", questionRoutes);

// //Contents page
// router.get("/category/:category", (req, res) => {
//   res.setHeader("Content-type", "text/html");
//   if (req.params.toc === "Science: Computers") {
//     res.write(
//       `<p><a href='/api/category/Science:%20Computers'>Science: Computers</a></p>`
//     );
//   }
// });

export default router;
