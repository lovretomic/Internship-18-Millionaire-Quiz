import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import classes from "./index.module.css";

const PhoneDialog = ({ isOpen, onClose, question }) => {
  const handleDialogText = () => {
    let message = "Friend: It might be ";
    const randomPercentage = Math.floor(Math.random() * 100) + 1
    if (randomPercentage <= 10) 
      message += "#random#.\n";
    else
      message += `${question.answer}.\n`;
    message += "You: How sure are you?\n";
    message += `Friend: About ${randomPercentage}%.`;
    return message;
  }

  const dialogStyle = {
    backgroundColor: "blue",
    border: "2px solid white",
    color: "white",
    borderRadius: "0px",
    padding: "0px",
  }

  
  return <Dialog open={isOpen} onClose={onClose} PaperProps={{style: dialogStyle}}>
    <DialogTitle><pre className={classes.DialogTitle}>{handleDialogText()}</pre></DialogTitle>
    <DialogActions>
      <Button onClick={onClose} className={classes.DialogButton}>Hang up</Button>
    </DialogActions>
  </Dialog>
}

export default PhoneDialog;