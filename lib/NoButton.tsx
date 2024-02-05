import { useState, useCallback } from "react";
import { WaitTimeModal } from "./modals/WaitTimeModal";
import { setCountNoType } from "./types/setCountNoType";
import { requireModal } from "./modals/requireModal";
import { ModalListElem } from "./types/ModalListElem";
import { FakeCaptchaModal } from "./modals/FakeCaptchaModal";
import PleaseLoveMe from "../public/PleaseLoveMe.jpeg";
import IAmLovable from "@/public/IAmLovable.jpeg";
import { WordleModal } from "./modals/WordleModal";
import { DialogModal } from "./modals/DialogModal";

interface Props {
  countNo: number;
  setCountNo: setCountNoType;
}

function makeDialog(noCount: number, text: string): ModalListElem {
  return {
    noCount: noCount,
    modalGenerator: (incrementNoCount, modalDisplayed) => (
      <DialogModal
        incrementNoCount={incrementNoCount}
        modalDisplayed={modalDisplayed}
        text={text}
      />
    ),
  };
}

const MODAL_LIST: Array<ModalListElem> = [
  {
    noCount: 9,
    modalGenerator: (incrementNoCount, modalDisplayed) => (
      <WaitTimeModal
        timeToWait={4}
        incrementNoCount={incrementNoCount}
        modalDisplayed={modalDisplayed}
      />
    ),
  },
  {
    noCount: 14,
    modalGenerator: (incrementNoCount, modalDisplayed) => (
      <FakeCaptchaModal
        incrementNoCount={incrementNoCount}
        modalDisplayed={modalDisplayed}
        image={PleaseLoveMe}
        text={"Please Love Me"}
      />
    ),
  },
  {
    noCount: 19,
    modalGenerator: (incrementNoCount, modalDisplayed) => (
      <WaitTimeModal
        timeToWait={8}
        incrementNoCount={incrementNoCount}
        modalDisplayed={modalDisplayed}
      />
    ),
  },
  {
    noCount: 24,
    modalGenerator: (incrementNoCount, modalDisplayed) => (
      <FakeCaptchaModal
        incrementNoCount={incrementNoCount}
        modalDisplayed={modalDisplayed}
        image={IAmLovable}
        text={"I Am Lovable"}
      />
    ),
  },
  {
    noCount: 29,
    modalGenerator: (incrementNoCount, modalDisplayed) => (
      <WordleModal
        incrementNoCount={incrementNoCount}
        modalDisplayed={modalDisplayed}
      />
    ),
  },
  makeDialog(39, "Okay............"),
  makeDialog(40, "I get it"),
  makeDialog(41, "I thought we had something 😭"),
  makeDialog(42, "But I guess that was all in my head"),
  makeDialog(43, "Ill let you go now 💔"),
];
export function NoButton({ countNo, setCountNo }: Props) {
  const [displayModal, setDisplayModal] = useState(false);

  const incrementNoCount = useCallback(() => {
    setCountNo((count) => count + 1);
    setDisplayModal(false);
  }, [setCountNo]);

  const showModal = useCallback(() => {
    setDisplayModal(true);
    (document.getElementById("no_modal") as HTMLDialogElement)?.showModal();
  }, []);

  let modalToUse: JSX.Element | undefined = undefined;
  for (const modal of MODAL_LIST) {
    if (modal.noCount == countNo) {
      modalToUse = modal.modalGenerator(incrementNoCount, displayModal);
    }
  }
  return (
    <>
      {modalToUse}
      <button
        className="btn btn-error w-64"
        onClick={() =>
          requireModal({ incrementNoCount, showModal, modalToUse })
        }
      >
        No 💔
      </button>
    </>
  );
}
