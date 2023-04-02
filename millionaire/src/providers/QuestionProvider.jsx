import { createContext, useState, useContext, useEffect } from "react";
import { useStepStatus } from "./StepProvider";
import questionsData from "data/questions.json";

const defaultContext = {
  question: {
    text: "",
    options: ["", "", "", ""],
    answer: ""
  },
  setQuestion: () => {}
}

export const QuestionContext = createContext(defaultContext);

const QuestionProvider = ({ children }) => {
  const [question, setQuestion] = useState(defaultContext.question);
  const [unusedQuestions, setUnusedQuestions] = useState(questionsData);

  const {step} = useStepStatus();

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() =>{
    console.log('useEffect');
    const randomNum = getRandomNumber(0, unusedQuestions.length);
    setQuestion(unusedQuestions[randomNum]);

    console.log('first unused questions', unusedQuestions);

    const newUnusedQuestions = [...unusedQuestions];
    console.log('new unused questions', newUnusedQuestions);
    newUnusedQuestions.splice(randomNum, 1);
    console.log('new spliced unused questions', newUnusedQuestions);
    setUnusedQuestions(newUnusedQuestions);

    console.log('second unused questions', unusedQuestions);
  }, [step]);

  return (
    <QuestionContext.Provider value={{ question, setQuestion }}>
      {children}
    </QuestionContext.Provider>
  )
}

export const useQuestionStatus = () => useContext(QuestionContext);
export default QuestionProvider;