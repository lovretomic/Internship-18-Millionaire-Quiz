import classes from './index.module.css';

import Jokers from './Jokers';
import Score from './Score/Score';
import Steps from './Steps';

const ScoreField = () => {
  return <div className={classes.ScoreField}>
    <Jokers></Jokers>
    <Score></Score>
    <Steps></Steps>
  </div>
}

export default ScoreField;