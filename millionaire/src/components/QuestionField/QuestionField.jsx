import classes from "./index.module.css";

import { useQuestionStatus } from "providers/QuestionProvider";

import questions from "data/questions.json";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const QuestionField = () => {
  const {question, setQuestion} = useQuestionStatus();
  const randomNum = getRandomNumber(0, questions.length);
  setQuestion(questions[randomNum]);

  // console.log("question", question);
  // console.log('randomNum', randomNum);

  return <div className={classes.QuestionField}>{question.text}</div>;
};

export default QuestionField;
