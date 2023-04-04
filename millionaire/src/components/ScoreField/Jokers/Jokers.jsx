import classes from './index.module.css';
import { useQuestionStatus } from 'providers/QuestionProvider';
import { useState } from 'react';
import { DIALOG, useDialog } from 'providers/DialogProvider';

const Jokers = () => {
  const {question, setQuestion} = useQuestionStatus();
  const {open} = useDialog();

  const defaultJokers = {
    fiftyFifty: false,
    phone: false,
    public: false
  }
  const [usedJokers, setUsedJokers] = useState(defaultJokers);

  const removeWrongAnswers = () => {
    setUsedJokers({...usedJokers, fiftyFifty: true});
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

  const handlePhoneJoker = () => {
    setUsedJokers({...usedJokers, phone: true});
    open(DIALOG.PHONE_DIALOG);
  }

  return <div className={classes.jokers}>
    <button className={classes.jokerButton} onClick={removeWrongAnswers} disabled={usedJokers.fiftyFifty}>50:50</button>
    <button className={classes.jokerButton} onClick={handlePhoneJoker}>Phone</button>
    <button className={classes.jokerButton}>Public</button>
  </div>;
}

export default Jokers;