import { DIALOG, useDialog } from "providers/DialogProvider";
import { useQuestionStatus } from "providers/QuestionProvider";

import ConfirmAnswerDialog from "./ConfirmAnswerDialog";
import PhoneDialog from "./PhoneDialog";
import PublicDialog from "./PublicDialog";

const DialogSwitch = () => {
  const { activeDialog, additionalProps, close } = useDialog();
  const { question } = useQuestionStatus();
  return <>
    <ConfirmAnswerDialog isOpen={activeDialog === DIALOG.CONFIRM_ANSWER_DIALOG} onClose={close} {...additionalProps} />
    <PhoneDialog isOpen={activeDialog === DIALOG.PHONE_DIALOG} onClose={close} question={question} {...additionalProps} />
    <PublicDialog isOpen={activeDialog === DIALOG.PUBLIC_DIALOG} onClose={close} question={question} {...additionalProps} />
  </>
}

export default DialogSwitch;