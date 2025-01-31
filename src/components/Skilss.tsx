import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useAppState } from "../contexts/FormContexts";
import NextBtn from "./NextBtn";
import PreviousBtn from "./PreviousBtn";

function Skilss() {
  const [skillInput, setSkillInput] = useState<string>("");
  const { state, addSkill, deleteSkill } = useAppState();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillInput(e.target.value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSkill(skillInput);
    setSkillInput("");
    console.log(state.skills);
  };

  return (
    <div className=" max-w-7xl lg:w-[60%] md:w-[80%] sm:w-[90%] w-[98%] mt-4 mx-auto mb-10 bg-white rounded-md">
      <div className="px-10 py-10 ">
        <h1 className="pb-6">Add Expertise</h1>
        <form onSubmit={handleOnSubmit} className="flex gap-2  flex-col">
          <div className="flex flex-col gap-2">
            <label>Expertise/Skill</label>
            <input
              type="text"
              placeholder="XYZ Manager"
              className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
              value={skillInput}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex justify-end">
            <button className="px-6 py-1 mt-4  border-2 border-blue-500 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white">
              Add expertise
            </button>
          </div>
        </form>
        <div className="pt-10 flex gap-4  py-4 flex-wrap ">
          {state.skills.map((item, index) => (
            <div
              key={index}
              className="flex items-center  justify-center  gap-4 border-2 px-6 py-2 rounded-md"
            >
              <p className="capitalize pr-4">{item}</p>
              <button onClick={() => deleteSkill(index)}>
                <RiDeleteBinLine color="maroon" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-2 justify-end">
          <PreviousBtn />
          <NextBtn />
        </div>
      </div>
    </div>
  );
}
export default Skilss;
