import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import { useStepStatus } from "providers/StepProvider";

const FinishDialog = ({ isOpen }) => {
  const { step } = useStepStatus();

  const handleReload = () => {
    window.location.reload();
  }

  return <Dialog open={isOpen} onClose={handleReload}>
    <DialogTitle>{step === 15 ? "You won!" : "You lost!"}</DialogTitle>
    <DialogActions>
      <Button onClick={handleReload}>Play Again</Button>
    </DialogActions>
  </Dialog>
}

export default FinishDialog;