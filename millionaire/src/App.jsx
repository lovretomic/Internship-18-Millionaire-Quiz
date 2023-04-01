import classes from './App.module.css';
import Header from './components/Header';
import QuestionField from './components/QuestionField';

function App() {
  return <div className={classes.App}>
    <Header></Header>
    <QuestionField></QuestionField>
  </div>;
}

export default App;
