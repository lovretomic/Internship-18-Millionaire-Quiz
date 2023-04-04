import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";

const ConfirmAnswerDialog = ({ isOpen, onClose, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit();
    onClose();
  }
  
  return <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>Is this your final answer?</DialogTitle>
    <DialogActions>
      <Button onClick={handleSubmit}>Yes</Button>
      <Button onClick={onClose}>No</Button>
    </DialogActions>
  </Dialog>
}

export default ConfirmAnswerDialog;