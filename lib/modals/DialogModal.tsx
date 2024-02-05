import { RequiredModalProps } from "../types/RequiredModalProps";

interface Props extends RequiredModalProps {
  text: string;
}
export function DialogModal({ incrementNoCount, text }: Props) {
  return (
    <dialog id="no_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{text}</h3>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-error" onClick={incrementNoCount}>
              I SAID NO
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
