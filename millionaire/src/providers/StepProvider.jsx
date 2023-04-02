import { createContext, useState, useContext } from "react";

const defaultContext = {
  step: 0,
  setStep: () => {}
}

export const StepContext = createContext(defaultContext);

const StepProvider = ({ children }) => {
  const [step, setStep] = useState(0);

  const increaseStep = () => {
    setStep(step + 1);
  }

  return (
    <StepContext.Provider value={{ step, increaseStep }}>
      {children}
    </StepContext.Provider>
  )
}

export const useStepStatus = () => useContext(StepContext);
export default StepProvider;