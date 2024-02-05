import { useState } from "react";
import { RequiredModalProps } from "../types/RequiredModalProps";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props extends RequiredModalProps {
  text: string;
  image: StaticImport;
}
export function FakeCaptchaModal({
  incrementNoCount,
  modalDisplayed,
  text,
  image,
}: Props) {
  const [input, setInput] = useState("");
  return (
    <dialog id="no_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Prove You are a human to say no.</h3>
        <p className="py-4">Please Enter This Captcha</p>
        <Image src={image} alt={`captcha: ${text}`}></Image>
        <input
          type="text"
          placeholder="Type here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-error"
              disabled={
                input.toLowerCase().replace(/ /g, "") !=
                text.toLowerCase().replace(/ /g, "")
              }
              onClick={incrementNoCount}
            >
              I SAID NO
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
