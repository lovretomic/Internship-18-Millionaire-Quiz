import classes from './index.module.css';

const ConfirmAnswerDialog = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit();
    onClose();
  }

  return (
    <div className={classes.ConfirmAnswerDialog}>
      <p>Is that your final answer?</p>
      <button onClick={handleSubmit}>Yes</button>
      <button onClick={onClose}>No</button>
    </div>
  )
}

export default ConfirmAnswerDialog;