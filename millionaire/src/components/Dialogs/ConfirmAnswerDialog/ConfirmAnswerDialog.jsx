import classes from './index.module.css';
import clsx from 'clsx';

const ConfirmAnswerDialog = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit();
    onClose();
  }

  return (
    <div className={clsx({
      [classes.ConfirmAnswerDialog]: true,
      [classes.open]: isOpen
    }
    )}>
      <p>Is that your final answer?</p>
      <button onClick={handleSubmit}>Yes</button>
      <button onClick={onClose}>No</button>
    </div>
  )
}

export default ConfirmAnswerDialog;