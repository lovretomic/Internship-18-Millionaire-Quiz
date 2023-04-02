import classes from './App.module.css';

import StepProvider from 'providers/StepProvider';

import Header from 'components/Header';
import QuestionField from 'components/QuestionField';
import QuestionButtons from 'components/QuestionButtons';
import ScoreField from 'components/ScoreField';

function App() {
  return <StepProvider>
  <div className={classes.App}>
    <Header></Header>
    <div className={classes.content}>
      <div className={classes.contentLeft}>
        <QuestionField></QuestionField>
        <QuestionButtons></QuestionButtons>
      </div>
      <div className={classes.contentRight}>
        <ScoreField></ScoreField>
      </div>
    </div>
  </div>
  </StepProvider>;
}

export default App;
