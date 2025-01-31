import { useLocation, useNavigate } from "react-router-dom";
import { useAppState } from "../contexts/FormContexts";
import React from "react";

function PreviousBtn() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useAppState();

  const currentIndex = state.sections.findIndex(
    (sec) => sec.path === location.pathname
  );

  const GoToPrev = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentIndex > 0) {
      navigate(state.sections[currentIndex - 1].path);
    }
  };

  return (
    <div>
      <button
        onClick={GoToPrev}
        disabled={currentIndex === 0}
        className="border-2  hover:border-blue-500 px-6 py-2 rounded-md text-white  bg-blue-500"
      >
        Previous
      </button>
    </div>
  );
}
export default PreviousBtn;
