import classes from './App.module.css';
import Header from './components/Header';
import QuestionField from './components/QuestionField';
import ScoreField from './components/ScoreField';

function App() {
  return <div className={classes.App}>
    <Header></Header>
    <div className={classes.content}>
      <div className={classes.contentLeft}>
        <QuestionField></QuestionField>
      </div>
      <div className={classes.contentRight}>
        <ScoreField></ScoreField>
      </div>
    </div>
  </div>;
}

export default App;
