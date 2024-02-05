"use client";
import { NoButton } from "@/lib/NoButton";
import { Dispatch, SetStateAction, useState } from "react";
import sadnessGif from "@/public/sadnessGif.gif";
import moreYay from "@/public/moreYay.gif";
import Image from "next/image";

interface Props {}
export function MainScreen(props: Props) {
  const [countNo, setCountNo] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  if (yesClicked) {
    return (
      <>
        <div className="flex flex-col text-center items-center justify-center">
          <div>
            <h1 className="text-2xl">😘 OMG YAY 😘</h1>
          </div>
          <div>
            <Image src={moreYay} alt="Image of my joy"></Image>
          </div>
        </div>
      </>
    );
  }
  if (countNo === 54) {
    return (
      <div className="flex flex-col text-center items-center justify-center">
        <h1 className="text-2xl">
          😞 Please just let me be alone for a bit 💔
        </h1>
        <Image src={sadnessGif} alt="Image of my despair"></Image>
      </div>
    );
  }

  return (
    <div className="text-center">
      <header>
        <h1 className="text-2xl">🥺Will you be my Valentine?🥺</h1>
      </header>
      <main>
        {/* <button className="btn btn-error">HI</button> */}
        <YesButton countNo={countNo} setYesClicked={setYesClicked}></YesButton>
        <NoButton countNo={countNo} setCountNo={setCountNo}></NoButton>
      </main>
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
