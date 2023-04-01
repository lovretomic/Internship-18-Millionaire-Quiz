import classes from './index.module.css';

const Jokers = () => {
  return <div className={classes.jokers}>
    <button className={classes.jokerButton}>1</button>
    <button className={classes.jokerButton}>2</button>
    <button className={classes.jokerButton}>3</button>
  </div>;
}

export default Jokers;