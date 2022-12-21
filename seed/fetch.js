//Create object axios
import axios from "axios";
//fs - file system
import fs from "fs";

let categoryID = [18, 19, 20, 21];

categoryID.forEach((element) => {
  axios
    .get("https://opentdb.com/api.php", {
      params: {
        amount: 10,
        category: element,
      },
    })
    .then(function (response) {
      // handle success
      // console.log(response.data.results);
      let data = response.data.results.map((item) => {
        let answers = item.incorrect_answers;
        answers.push(item.correct_answer);
        return {
          category: item.category,
          title: item.question,
          correct_answer: item.correct_answer,
          answers: answers,
        };
      });
      console.log(data);
      let jsonData = JSON.stringify(data);
      fs.writeFile(`questions-${element}.json`, jsonData, function (err) {
        if (err) {
          console.log(err);
        }
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
});
