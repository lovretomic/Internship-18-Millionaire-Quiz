import classes from "./index.module.css";

import { useQuestionStatus } from "providers/QuestionProvider";
import { useStepStatus } from "providers/StepProvider";

import questions from "data/questions.json";
import { useEffect } from "react";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const QuestionField = () => {
  const {question, setQuestion} = useQuestionStatus();

  useEffect(() => {
    const randomNum = getRandomNumber(0, questions.length);
    setQuestion(questions[randomNum]);
  }, [question]);
  

  const {step, increaseStep} = useStepStatus();
  const printStep = () => {
    console.log(step);
  }

  // console.log("question", question);
  // console.log('randomNum', randomNum);

  return <div className={classes.QuestionField}>
    <button onClick={printStep}>Step?</button>
    <button onClick={() => increaseStep()}>Increase step!</button>
    <p className={classes.QuestionFieldText}>{question.text}</p>
  </div>;
};

export default QuestionField;
