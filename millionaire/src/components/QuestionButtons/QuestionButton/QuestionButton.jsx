import classes from './index.module.css';

import { useQuestionStatus } from 'providers/QuestionProvider';
import { useStepStatus } from 'providers/StepProvider';
import { DIALOG, useDialog } from 'providers/DialogProvider';

const QuestionButton = ({ text, letter }) => {
  const { open } = useDialog();
  const {question, setQuestion} = useQuestionStatus();
  const {step, increaseStep} = useStepStatus();
  
  const checkAnswer = () => {
    text === question.answer ? increaseStep() : alert('Wrong!');
  }

  const handleClick = () => {
    open(DIALOG.CONFIRM_ANSWER_DIALOG, {onSubmit: checkAnswer})
  }

  return <button className={classes.QuestionButton} onClick={handleClick} disabled={text === ""}>
    <div className={classes.QuestionButtonCircle} />
    <p className={classes.QuestionButtonText}><span className={classes.QuestionButtonLetter}>{letter}: </span>{text}</p>
  </button>
}

export default QuestionButton;