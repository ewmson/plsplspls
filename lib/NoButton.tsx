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
        key={noCount}
      />
    ),
  };
}

const MODAL_LIST: Array<ModalListElem> = [
  {
    noCount: 4,
    modalGenerator: (incrementNoCount, modalDisplayed) => (
      <WaitTimeModal
        timeToWait={4}
        incrementNoCount={incrementNoCount}
        modalDisplayed={modalDisplayed}
        text={"Are you sure you wanted to say no?!?"}
      />
    ),
  },
  {
    noCount: 9,
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
    noCount: 15,
    modalGenerator: (incrementNoCount, modalDisplayed) => (
      <WaitTimeModal
        timeToWait={8}
        incrementNoCount={incrementNoCount}
        modalDisplayed={modalDisplayed}
        text={"Are you REALLY REALLY sure you wanted to say no?!?"}
      />
    ),
  },
  {
    noCount: 25,
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
    noCount: 33,
    modalGenerator: (incrementNoCount, modalDisplayed) => (
      <WordleModal
        incrementNoCount={incrementNoCount}
        modalDisplayed={modalDisplayed}
      />
    ),
  },
  makeDialog(40, "Okay............"),
  makeDialog(41, "I get it"),
  makeDialog(42, "I thought we had something 😭"),
  makeDialog(43, "But I guess that was all in my head"),
  makeDialog(44, "Ill let you go now 💔"),
];
export function NoButton({ countNo, setCountNo }: Props) {
  const [displayModal, setDisplayModal] = useState(false);

  const incrementNoCount = useCallback(() => {
    setCountNo((count) => count + 1);
    setDisplayModal(false);
  }, [setCountNo]);

  const showModal = useCallback(() => {
    setDisplayModal(true);
    const elem = document.getElementById("no_modal") as HTMLDialogElement;
    if (!elem.open) {
      elem?.showModal();
    }
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
