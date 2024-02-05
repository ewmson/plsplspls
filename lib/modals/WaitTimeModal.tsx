import { useEffect, useState } from "react";
import { useInterval } from "../useInterval";
import { RequiredModalProps } from "../types/RequiredModalProps";

interface Props extends RequiredModalProps {
  timeToWait: number;
}
export function WaitTimeModal({
  timeToWait,
  incrementNoCount,
  modalDisplayed,
}: Props) {
  const [timeElapsed, setTimeElapsed] = useState(0);
  useInterval(() => {
    setTimeElapsed((time) => time + 1);
  }, 1000);
  useEffect(() => {
    setTimeElapsed(0);
  }, [modalDisplayed]);

  return (
    <>
      <dialog id="no_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">
            Are you sure you wanted to say no?!?
          </h3>
          <p className="py-4">
            Please Wait {Math.max(0, timeToWait - timeElapsed)} seconds
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-error"
                disabled={timeElapsed < timeToWait}
                onClick={incrementNoCount}
              >
                I SAID NO
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
