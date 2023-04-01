import classes from './index.module.css';
import steps from '../../../data/steps.json';

const Steps = () => {
  return <div className={classes.steps}>
    {steps.map((step, i) => {
      return <div key={i} className={classes.step}>
        <div className={classes.stepNumber}>{i + 1}</div>
        <div className={classes.stepValue}>${step}</div>
      </div>
    })}
  </div>
}

export default Steps;