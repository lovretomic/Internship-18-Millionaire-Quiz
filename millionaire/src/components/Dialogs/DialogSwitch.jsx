import { useDialog } from "providers/DialogProvider";
import { DIALOG_TYPE } from "providers/DialogProvider";

import ConfirmAnswerDialog from "./ConfirmAnswerDialog";

const DialogSwitch = () => {
  const { activeDialog, additionalProps, close } = useDialog();

  return (
    <>
      <ConfirmAnswerDialog
        isOpen={activeDialog === DIALOG_TYPE.CONFIRM_ANSWER_DIALOG}
        onClose={close}
        {...additionalProps}
      />
    </>
  );
};

export default DialogSwitch;
