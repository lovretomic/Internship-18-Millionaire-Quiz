import classes from "./index.module.css";

import DialogSwitch from "components/Dialogs";

import { useQuestionStatus } from "providers/QuestionProvider";
import { useStepStatus } from "providers/StepProvider";
import { useDialog } from "providers/DialogProvider";

const QuestionField = () => {
  const {question} = useQuestionStatus();
  const {step, increaseStep} = useStepStatus();
  const {activeDialog, open} = useDialog();

  const handleClick = () => {
    console.log(activeDialog);
  }

  return <div className={classes.QuestionField}>
    <button onClick={handleClick} className={classes.button}>{activeDialog}</button>
    <button onClick={() => increaseStep()}>Increase step</button>
    <p className={classes.QuestionFieldText}>{question.text}</p>
    <DialogSwitch />
  </div>;
};

export default QuestionField;
