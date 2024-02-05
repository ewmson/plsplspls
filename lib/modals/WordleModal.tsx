/* eslint-disable react/no-unescaped-entities */
import { useEffect, useMemo, useState } from "react";
import { RequiredModalProps } from "../types/RequiredModalProps";
import { wordleAnswers } from "../wordleAnswers/wordleAnswers";

async function getWordleAnswer(date: Date) {
  const offset = date.getTimezoneOffset();
  const offsetDate = new Date(date.getTime() - offset * 60 * 1000);
  const dateString = offsetDate.toISOString().split("T")[0];
  return wordleAnswers[dateString] ?? "";
}
async function getValidWordleAnswers() {
  const currentDate = new Date();
  const dayinMS = 24 * 60 * 60 * 1000;
  return await Promise.all([
    getWordleAnswer(new Date(currentDate.getTime() - dayinMS)),
    getWordleAnswer(currentDate),
    getWordleAnswer(new Date(currentDate.getTime() + dayinMS)),
  ]);
}

interface Props extends RequiredModalProps {}
export function WordleModal({ incrementNoCount, modalDisplayed }: Props) {
  useEffect(() => {
    async function fetchData() {
      setValidWordleAnswers(await getValidWordleAnswers());
    }
    fetchData();
  }, [modalDisplayed]);
  const [validWordleAnswers, setValidWordleAnswers] = useState<string[]>([]);
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
        <h3 className="font-bold text-lg">
          Why don't you think about it while doing wordle?.
        </h3>
        <div>
          Enter the{" "}
          <a
            href="https://www.nytimes.com/games/wordle/index.html"
            className="link link-success underline"
            target="blank"
          >
            wordle
          </a>{" "}
          solution for today
        </div>
        <br></br>
        <div>
          <input
            type="text"
            placeholder="Type here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-error"
              disabled={
                validWordleAnswers.find(
                  (answer) => answer.toLowerCase() == input.toLowerCase()
                ) === undefined
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
