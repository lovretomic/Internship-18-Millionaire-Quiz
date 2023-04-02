import classes from './index.module.css';
import steps from '../../../data/steps.json';

import { useStepStatus } from 'providers/StepProvider';

const Steps = () => {
  const { step } = useStepStatus();
  console.log('currentStep', step);
  return <div className={classes.steps}>
    {steps.map((stepText, i) => {
      return <div key={i} className={`${classes.step} ${i === step ? "active" : ""}`}>
        <div className={classes.stepNumber}>{i + 1}</div>
        <div className={classes.stepValue}>${stepText}</div>
      </div>
    })}
  </div>
}

export default Steps;