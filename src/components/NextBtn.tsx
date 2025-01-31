import { useLocation, useNavigate } from "react-router-dom";
import { useAppState } from "../contexts/FormContexts";
import React from "react";

function NextBtn() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useAppState();

  const currentIndex = state.sections.findIndex(
    (sec) => sec.path === location.pathname
  );

  const GoToNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentIndex !== -1 && currentIndex < state.sections.length - 1) {
      navigate(state.sections[currentIndex + 1].path);
    }
  };

  return (
    <div>
      <button
        onClick={GoToNext}
        disabled={currentIndex === state.sections.length - 1}
        className="border-2  hover:border-blue-500 px-6 py-2 rounded-md text-white  bg-blue-500"
      >
        Next
      </button>
    </div>
  );
}
export default NextBtn;
