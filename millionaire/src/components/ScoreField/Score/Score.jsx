import classes from './index.module.css';
import { useStepStatus } from 'providers/StepProvider';
import { DIALOG, useDialog } from 'providers/DialogProvider';
import steps from '../../../data/steps.json';
import { useEffect } from 'react';

const Score = () => {
  const {step} = useStepStatus();
  const {open} = useDialog();

  useEffect(() =>{
    if (step === 15) {
      open(DIALOG.FINISH_DIALOG);
    }
  }, [step])

  return <div>
    <p className={classes.scoreTitle}>Your Score</p>
    <div className={classes.scoreBar}>$ {step === 0 ? '0' : steps[step - 1]}</div>
  </div>
}

export default Score;