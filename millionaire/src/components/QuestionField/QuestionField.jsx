import classes from "./index.module.css";

import DialogSwitch from "components/Dialogs";

import { useQuestionStatus } from "providers/QuestionProvider";
import { useStepStatus } from "providers/StepProvider";

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const QuestionField = () => {
  const {question} = useQuestionStatus();
  const {step, increaseStep} = useStepStatus();
  
  const printStep = () => {
    console.log(step);
  }

  return <div className={classes.QuestionField}>
    <button onClick={printStep}>Step?</button>
    <button onClick={() => increaseStep()}>Increase step!</button>
    <p className={classes.QuestionFieldText}>{question.text}</p>
    <DialogSwitch />
  </div>;
};

export default QuestionField;
