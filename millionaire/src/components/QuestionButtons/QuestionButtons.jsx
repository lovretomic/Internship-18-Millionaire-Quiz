import classes from './index.module.css';
import QuestionButton from './QuestionButton/QuestionButton';

import { useQuestionStatus } from 'providers/QuestionProvider';

const QuestionButtons = () => {
  const {question} = useQuestionStatus();
  return <div className={classes.QuestionButtons}>
    {
      question.options.map((answerText, index) => {
        return <QuestionButton key={index} text={answerText}></QuestionButton>
      })
    }
  </div>
}

export default QuestionButtons;