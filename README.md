# Trivia Project API

# Description

This Trivia project allows users to test their general knowledge. The [First Big Project](https://github.com/annadruzhinina/AnnaDruzhinina-Trivia-Megan) was to create UI:

<div style="text-align:center"><img src="./src/firstProject.png "width="600"/></div>

The Second Big project task was to create and API for implementing the application allowing it to do the following:

- Display questions sets by category.
- Questions should show:

```js
let Queston = new Schema({
  category: String,
  title: String,
  type: String,
  correct_answer: String,
  answers: [String],
});
```

- Category should show:

```js
let Category = new Schema({
  name: String,
});
```

- Delete questions.
- Add questions and require that they include a question-and-answer text.
- Search for questions set by category.
- Play the quiz game, randomizing questions within a specific category.

# Built with

- [Open Trivia Database API](https://opentdb.com/api_config.php)

<div style="text-align:center"><img src="./src/apiTrivia.png "width="400"/></div>

- [UI for quiz game I built on first big project](https://github.com/annadruzhinina/AnnaDruzhinina-Trivia-Megan)

# Endpoints

To get started, navigate to the root path or insert one of the following paths into your browser:

1. GitHub Link: [https://git.generalassemb.ly/annadruzhinina/trivia-api-project](https://git.generalassemb.ly/annadruzhinina/trivia-api-project)
2. Railway Link: [https://trivia-api-production-ccb2.up.railway.app/api/](https://trivia-api-production-ccb2.up.railway.app/api/)
3. Root Path: [http://localhost:3000/api/](http://localhost:3000/api/)
4. Projects by questions: [http://localhost:3000/api/questions](http://localhost:3000/api/questions)
5. Projects by сategories: [http://localhost:3000/api/categories](http://localhost:3000/api/categories)
6. Projects by filtered сategory:

- [http://localhost:3000/api/questions/category/Science:Computers](http://localhost:3000/api/questions/category/Science:%20Computers)
- [http://localhost:3000/api/questions/category/Mythology]("http://localhost:3000/api/questions/category/Mythology")
- [http://localhost:3000/api/questions/category/Science:Mathematics]("http://localhost:3000/api/questions/category/Science:%20Mathematics")
- [http://localhost:3000/api/questions/category/Sports]("http://localhost:3000/api/questions/category/Sports")

# API Navigation

For convenience, links have been provided to navigate questions set by categories.

<div style="text-align:center"><img src="./src/Navigation.png"width="300"/></div>

Sprots category : https://trivia-api-production-ccb2.up.railway.app/api/questions/category/Sports

Example of Returned json format:

```json
[
  {
    "_id": "63a5be2a4b3deaa165ff6fb5",
    "category": "Sports",
    "title": "This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.",
    "type": "multiple",
    "correct_answer": "Don Cherry",
    "answers": [
      "Don McKellar",
      "Don Taylor ",
      "Donald Sutherland",
      "Don Cherry"
    ],
    "__v": 0
  },
  ...
```

# Technical Notes

## Data

## Dependencies

# Data Cleansing

## Overview of Process

# Future Features

Make main page where I can see:

- Categories by names
  When I click on each catogory I can see a set of questions
