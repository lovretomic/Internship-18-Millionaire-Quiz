import classes from './index.module.css';
import QuestionButton from './QuestionButton/QuestionButton';

const QuestionButtons = () => {
  return <div className={classes.QuestionButtons}>
    <QuestionButton></QuestionButton>
    <QuestionButton></QuestionButton>
    <QuestionButton></QuestionButton>
    <QuestionButton></QuestionButton>
  </div>
}

export default QuestionButtons;