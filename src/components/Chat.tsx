import {
  IoChatbubbleEllipsesOutline,
  //   IoChatboxEllipsesOutline,
} from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { FaArrowCircleDown } from "react-icons/fa";
import { LuSendHorizonal } from "react-icons/lu";
import { useState } from "react";

const questions = [
  "How do I place an order?",
  "What payment methods do you accept?",
  "What are the delivery hours?",
  "How long will my order take?",
  "Who do I contact for issues with my order?",
];

function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* {!isOpen && ( */}
      <button
        className={`rounded-full p-2 h-12 w-12 md:h-14 md:w-14 grid place-items-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-200 ease-in-out fixed bg-blue-500 bottom-10 right-4 text-white text-2xl md:text-3xl ${
          isOpen && "hidden"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <IoChatbubbleEllipsesOutline />
      </button>
      {/* )} */}
      {isOpen && <ChatWindow setIsOpen={setIsOpen} />}
    </div>
  );
}

export default ChatButton;

interface Props {
  isOpen?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChatWindow({ setIsOpen }: Props) {
  return (
    <div className="fixed bottom-8 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0  md:bottom-16 md:right-4 border shadow-2xl  bg-gray-50 rounded-2xl px-4 pt-11 pb-3 w-[90%] h-[90%] md:h-3/4 md:w-96 z-50 flex flex-col gap-1">
      <button
        className="rounded-md h-8 w-8 grid place-items-center absolute top-3 right-3 hover:bg-slate-300 hover:shadow-2xl"
        onClick={() => setIsOpen(false)}
      >
        <FaMinus />
      </button>
      <p className="font-semibold flex items-center gap-2 mb-1">
        Pick a question: <FaArrowCircleDown className="text-blue-800" />
      </p>
      {/*arrow */}
      {/* <div className="absolute bottom-1 z-0 border-t border-r -right-3 w-4 h-4 bg-gray-50 transform rotate-45"></div> */}
      {questions.map((question) => (
        <button
          className="rounded-full py-1 border px-2.5 font-medium bg-blue-500 text-white w-fit shadow text-left text-sm md:text-base"
          key={question}
        >
          {question}
        </button>
      ))}

      <div className="flex gap-3 items-center absolute bottom-4">
        <span className="px-3 py-2 font-medium cursor-not-allowed select-none bg-gray-300 rounded-full text-sm md:text-base">
          Select a question from the options!!!
        </span>
        <LuSendHorizonal className="text-xl md:text-2xl" />
      </div>
    </div>
  );
}
