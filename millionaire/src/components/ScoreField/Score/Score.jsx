import classes from './index.module.css';

const Score = () => {
  return <div>
    <p className={classes.scoreTitle}>Your Score</p>
    <div className={classes.scoreBar}>$ 0</div>
  </div>
}

export default Score;