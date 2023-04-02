import classes from './index.module.css';
import { useStepStatus } from 'providers/StepProvider';
import steps from '../../../data/steps.json';

const Score = () => {
  const {step} = useStepStatus();
  return <div>
    <p className={classes.scoreTitle}>Your Score</p>
    <div className={classes.scoreBar}>$ {step === 0 ? '0' : steps[step - 1]}</div>
  </div>
}

export default Score;