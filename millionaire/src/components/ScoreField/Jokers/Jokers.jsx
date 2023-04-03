import classes from './index.module.css';
import { useQuestionStatus } from 'providers/QuestionProvider';
import { useState } from 'react';

const Jokers = () => {
  const {question, setQuestion} = useQuestionStatus();

  const defaultJokers = {
    fiftyFifty: false,
    phone: false,
    public: false
  }
  const [usedJokers, setUsedJokers] = useState(defaultJokers);

  const removeWrongAnswers = () => {
    console.log(usedJokers);
    setUsedJokers({...usedJokers, fiftyFifty: true});
    alert('hanged');
    const newOptions = [...question.options];
    const answerIndex = newOptions.indexOf(question.answer);
    const removedOptions = [];

    while (removedOptions.length < 2) {
      const randomNum = Math.floor(Math.random() * newOptions.length);
      if (randomNum !== answerIndex && !removedOptions.includes(randomNum)) {
        removedOptions.push(randomNum);
      }
    }

    removedOptions.forEach((index) => {
      newOptions[index] = '';
    })

    setQuestion({
      ...question,
      options: newOptions
    });
  }

  return <div className={classes.jokers}>
    <button className={classes.jokerButton} onClick={removeWrongAnswers} disabled={usedJokers.fiftyFifty}>50:50</button>
    <button className={classes.jokerButton}>Phone</button>
    <button className={classes.jokerButton}>Public</button>
  </div>;
}

export default Jokers;