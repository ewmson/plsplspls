"use client";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {}
export function MainScreen(props: Props) {
  const [countNo, setCountNo] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  if (yesClicked) {
    return (
      <>
        <header>🥺Will you be my Valentine?🥺</header>
        <main>OMG YAY</main>
      </>
    );
  }

  return (
    <>
      <header>🥺Will you be my Valentine?🥺</header>
      <main>
        <YesButton countNo={countNo} setYesClicked={setYesClicked}></YesButton>
        <button
          className="btn btn-error"
          onClick={() => setCountNo((count) => count + 1)}
        >
          No 😭
        </button>
      </main>
      <div>Yes clicked {yesClicked ? "True" : "False"}</div>
      <div>Count No {countNo} </div>
    </>
  );
}

interface YesProps {
  countNo: number;
  setYesClicked: Dispatch<SetStateAction<boolean>>;
}
function YesButton({ countNo, setYesClicked }: YesProps) {
  let innerText = "";
  if (countNo == 0) {
    innerText = "Yes ❤️";
  } else {
    innerText = "Please 🥺\n".repeat(countNo);
  }

  return (
    <button
      className="btn btn-success whitespace-pre-line min-h-12 h-fit"
      onClick={() => setYesClicked(true)}
    >
      {innerText}
    </button>
  );
}
