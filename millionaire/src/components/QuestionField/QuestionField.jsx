import classes from "./index.module.css";

import DialogSwitch from "components/Dialogs";

import { useQuestionStatus } from "providers/QuestionProvider";
import { useStepStatus } from "providers/StepProvider";
import { useDialog } from "providers/DialogProvider";

const QuestionField = () => {
  const {question} = useQuestionStatus();

  return <div className={classes.QuestionField}>
    <p className={classes.QuestionFieldText}>{question.text}</p>
    <DialogSwitch />
  </div>;
};

export default QuestionField;
