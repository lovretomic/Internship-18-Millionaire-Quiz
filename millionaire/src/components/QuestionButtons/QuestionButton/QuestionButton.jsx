import classes from './index.module.css';

import { useQuestionStatus } from 'providers/QuestionProvider';
import { useStepStatus } from 'providers/StepProvider';

const QuestionButton = ({ text, letter }) => {
  const {question, setQuestion} = useQuestionStatus();
  const {step, increaseStep} = useStepStatus();
  const checkAnswer = () => {
    if (text === question.answer) {
      increaseStep();
      setQuestion({
        text: 'novo pitanje',
        options: ['odgovor1', 'odgovor2', 'odgovor3', 'odgovor4'],
        answer: 'odgovor1'
      });
    } else {
      alert('Wrong!');
    }
  }
  return <button className={classes.QuestionButton} onClick={checkAnswer}>
    <div className={classes.QuestionButtonCircle} />
    <p className={classes.QuestionButtonText}><span className={classes.QuestionButtonLetter}>{letter}: </span>{text}</p>
  </button>
}

export default QuestionButton;