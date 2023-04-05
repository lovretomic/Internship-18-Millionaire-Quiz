import classes from "./index.module.css";

import DialogSwitch from "components/Dialogs";

import { useQuestionStatus } from "providers/QuestionProvider";

const QuestionField = () => {
  const {question} = useQuestionStatus();

  return <div className={classes.QuestionField}>
    <p className={classes.QuestionFieldText}>{question.text}</p>
    <DialogSwitch />
  </div>;
};

export default QuestionField;
