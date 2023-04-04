import { useState, createContext, useContext } from "react";

export const DIALOG = {
  CONFIRM_ANSWER_DIALOG: "CONFIRM_ANSWER_DIALOG",
};

export const defaultContext = {
  activeDialog: null,
  additionalProps: {},
  open: () => {},
  close: () => {},
};

export const DialogContext = createContext(defaultContext);

const DialogProvider = ({ children }) => {
  const [activeDialog, setActiveDialog] = useState(null);
  const [additionalProps, setAdditionalProps] = useState({});

  const open = (dialog, additionalProps = {}) => {
    setActiveDialog(dialog);
    setAdditionalProps(additionalProps);
  };

  const close = () => {
    setActiveDialog(null);
    setAdditionalProps({});
  };

  return <DialogContext.Provider
    value={{ activeDialog, additionalProps, open, close }}
  >
    {children}
  </DialogContext.Provider>;
};

export const useDialog = () => useContext(DialogContext);

export default DialogProvider;
