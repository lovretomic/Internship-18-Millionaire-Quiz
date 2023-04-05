import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";

const FinishDialog = ({ isOpen, onClose }) => {
  const handleClick = () => {
    window.location.reload();
  }

  return <Dialog open={isOpen} onClose={onClose}>
    <DialogTitle>You won!</DialogTitle>
    <DialogActions>
      <Button onClick={handleClick}>Play Again</Button>
    </DialogActions>
  </Dialog>
}

export default FinishDialog;