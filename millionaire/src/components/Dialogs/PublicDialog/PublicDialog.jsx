import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import classes from "./index.module.css";

const PublicDialog = ({ isOpen, onClose, question }) => {
  const handleDialogText = () => {
    const percentage = Math.floor(Math.random() * 100) + 1;
    let correct = true;
    if (percentage <= 20) correct = false;

    let answerPercentages = {};

    if (correct) {
      while (true) {
        const parts = [];
        let remaining = 100;
        for (let i = 0; i < 3; i++) {
          const part = Math.floor(Math.random() * remaining);
          parts.push(part);
          remaining -= part;
        }
        parts.push(remaining);

        const num1 = parts[0];
        const num2 = parts[1];
        const num3 = parts[2];
        const num4 = parts[3];
      
        answerPercentages = {
          [question.options[0]]: parts[0],
          [question.options[1]]: parts[1],
          [question.options[2]]: parts[2],
          [question.options[3]]: parts[3],
        }

        if (Math.max(num1, num2, num3, num4) !== answerPercentages[question.answer]) break;
      } 
    } else {
      while (true) {
        const parts = [];
        let remaining = 100;
        for (let i = 0; i < 3; i++) {
          const part = Math.floor(Math.random() * remaining);
          parts.push(part);
          remaining -= part;
        }
        parts.push(remaining);

        const num1 = parts[0];
        const num2 = parts[1];
        const num3 = parts[2];
        const num4 = parts[3];
      
        answerPercentages = {
          [question.options[0]]: parts[0],
          [question.options[1]]: parts[1],
          [question.options[2]]: parts[2],
          [question.options[3]]: parts[3],
        }

        if (Math.max(num1, num2, num3, num4) === answerPercentages[question.answer]) break;
      } 
    }

    let message = "";

    for (const [key, value] of Object.entries(answerPercentages)) {
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