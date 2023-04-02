import classes from './index.module.css';

const QuestionButton = ({ text }) => {
  return <button className={classes.QuestionButton}>{text}</button>
}

export default QuestionButton;