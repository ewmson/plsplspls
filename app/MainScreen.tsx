"use client";
import { NoButton } from "@/lib/NoButton";
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
    <div className="text-center">
      <header>
        <h1>🥺Will you be my Valentine?🥺</h1>
      </header>
      <main>
        {/* <button className="btn btn-error">HI</button> */}
        <YesButton countNo={countNo} setYesClicked={setYesClicked}></YesButton>
        <NoButton countNo={countNo} setCountNo={setCountNo}></NoButton>
      </main>
      <div>Yes clicked {yesClicked ? "True" : "False"}</div>
      <div>Count No {countNo} </div>
    </div>
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
    innerText = "Please 🥺👉👈 ".repeat(countNo);
  }

  return (
    <button
      className="btn btn-success whitespace-pre-line min-h-12 h-fit w-64"
      onClick={() => setYesClicked(true)}
    >
      {innerText}
    </button>
  );
}
