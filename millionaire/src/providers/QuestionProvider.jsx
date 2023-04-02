import { createContext, useState, useContext } from "react";

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

  return (
    <QuestionContext.Provider value={{ question, setQuestion }}>
      {children}
    </QuestionContext.Provider>
  )
}

export const useQuestionStatus = () => useContext(QuestionContext);
export default QuestionProvider;