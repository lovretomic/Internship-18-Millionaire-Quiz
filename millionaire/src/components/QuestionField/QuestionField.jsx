import classes from "./index.module.css";
import { useStepStatus } from "providers/StepProvider";
import { useState } from "react";
import questions from "data/questions.json";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const QuestionField = () => {
  const { step, increaseStep } = useStepStatus();
  
  const randomNum = getRandomNumber(0, questions.length);
  const [question, setQuestion] = useState(
    questions[randomNum].question
  );

  console.log("question", question);
  console.log('randomNum', randomNum);

  return <div className={classes.QuestionField}>{question}</div>;
};

export default QuestionField;
