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
    if (unusedQuestions.length === 0) {
      setQuestion({
        text: "# No more questions #",
        options: ["", "", "", ""],
        answer: "*"
      })
      return;
    }
    const randomNum = getRandomNumber(0, unusedQuestions.length);
    setQuestion(unusedQuestions[randomNum]);
    const newUnusedQuestions = [...unusedQuestions];
    newUnusedQuestions.splice(randomNum, 1);
    setUnusedQuestions(newUnusedQuestions);
  }, [step]);

  return (
    <QuestionContext.Provider value={{ question, setQuestion }}>
      {children}
    </QuestionContext.Provider>
  )
}

export const useQuestionStatus = () => useContext(QuestionContext);
export default QuestionProvider;