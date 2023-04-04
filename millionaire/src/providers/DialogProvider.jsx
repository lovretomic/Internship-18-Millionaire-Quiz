import { useState, createContext, useContext } from "react"

export const DIALOG_TYPE = {
  CONFIRM_ANSWER_DIALOG: 'CONFIRM_ANSWER_DIALOG',
  PHONE_JOKER_DIALOG: 'PHONE_JOKER_DIALOG',
  PUBLIC_JOKER_DIALOG: 'PUBLIC_JOKER_DIALOG'
}

const defaultContext = {
  activeDialog: null,
  additionalProps: {},
  open: () => {},
  close: () => {}
}

export const DialogContext = createContext(defaultContext);

const DialogProvider = ({ children }) => {
  console.log('children', children);
  const [activeDialog, setActiveDialog] = useState(null);
  const [additionalProps, setAdditionalProps] = useState({});

  const open = (dialog, additionalProps = {}) => {
    setActiveDialog(dialog);
    setAdditionalProps(additionalProps);
  }

  const close = () => {
    setActiveDialog(null);
    setAdditionalProps({});
  }  

  return (
  <DialogProvider.Provider value={{activeDialog, additionalProps }}>
    {children}
  </DialogProvider.Provider>
  )
}

export const useDialog = () => useContext(DialogContext);

export default DialogProvider;