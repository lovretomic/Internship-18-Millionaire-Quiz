import classes from './index.module.css';
import steps from '../../../data/steps.json';

import { useStepStatus } from 'providers/StepProvider';
import clsx from 'clsx';

const Steps = () => {
  const { step } = useStepStatus();
  return <div className={classes.steps}>
    {steps.map((stepText, i) => {
      return <div key={i} className={clsx({
        [classes.step]: true,
        [classes.active]: i === step
      })}>
        <div className={classes.stepNumber}>{i + 1}</div>
        <div className={classes.stepValue}>${stepText}</div>
      </div>
    })}
  </div>
}

export default Steps;