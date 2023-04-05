import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import classes from "./index.module.css";

const PublicDialog = ({ isOpen, onClose, question }) => {
  const handleDialogText = () => {
    const randomPercentage = Math.floor(Math.random() * 100) + 1;

    const letters = ["A", "B", "C", "D"]
    const correctAnswer = letters[question.options.indexOf(question.answer)];

    const remainingPercentage = () => {
      return 100 - answerPercentages.A - answerPercentages.B - answerPercentages.C - answerPercentages.D;
    }

    const answerPercentages = {
      A: 0,
      B: 0,
      C: 0,
      D: 0
    }

    if (randomPercentage <= 20) {
      answerPercentages[correctAnswer] = 50 - (Math.floor(Math.random() * 50) + 1);
    }
    else {
      answerPercentages[correctAnswer] = 50 + (Math.floor(Math.random() * 50) + 1);
    }

    for (const [key, value] of Object.entries(answerPercentages)) {
      if (value === 0) {
        answerPercentages[key] = remainingPercentage() - (Math.floor(Math.random() * remainingPercentage()) + 1);
      }
    }

    let message = "";
    for (const [key, value] of Object.entries(answerPercentages)) {
      console.log(`${key}: ${value}`);
      message += `${value}% of people answered ${key}.\n`;
    }
    return message;
  }
  
  return <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle className={classes.DialogTitle}><pre>{handleDialogText()}</pre></DialogTitle>
    <DialogActions>
      <Button onClick={onClose}>OK</Button>
    </DialogActions>
  </Dialog>
}

export default PublicDialog;