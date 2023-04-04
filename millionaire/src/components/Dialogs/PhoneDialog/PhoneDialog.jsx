import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";

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
  
  return <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>{handleDialogText()}</DialogTitle>
    <DialogActions>
      <Button onClick={onClose}>Hang up</Button>
    </DialogActions>
  </Dialog>
}

export default PhoneDialog;