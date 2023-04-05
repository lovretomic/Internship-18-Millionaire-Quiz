import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import { useStepStatus } from "providers/StepProvider";

const FinishDialog = ({ isOpen, onClose }) => {
  const { step } = useStepStatus();

  const handleClick = () => {
    window.location.reload();
  }

  const handleBackdropClick = (event) => {
    event.stopPropagation();
    return false;
  };
  

  return <Dialog open={isOpen} handlebackdropclick={(e) => handleBackdropClick(e)}>
    <DialogTitle>{step === 15 ? "You won!" : "You lost!"}</DialogTitle>
    <DialogActions>
      <Button onClick={handleClick}>Play Again</Button>
    </DialogActions>
  </Dialog>
}

export default FinishDialog;