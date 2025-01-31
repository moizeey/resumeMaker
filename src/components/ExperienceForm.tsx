import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useAppState } from "../contexts/FormContexts";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import React, { useState } from "react";
import { Dialog } from "@mui/material";
import NextBtn from "./NextBtn";
import PreviousBtn from "./PreviousBtn";
// import { Dialog } from "@mui/material";

function ExperienceForm() {
  const { addExperience, state, setState, removeExperience } = useAppState();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogIndex, setEditDialogIndex] = useState<number | null>(null);

  const [exp, setExp] = useState({
    expfrom: null as Date | null,
    expto: null as Date | null,
    companyName: "",
    jobPosition: "",
    companyAddress: "",
    yourExperience: "",
  });

  const handleDialogOpen = (index: number) => {
    setEditDialogIndex(index);
    setExp(state.experience[index]);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditDialogIndex(null);
  };

  const handleEditExp = (e: React.FormEvent) => {
    e.preventDefault();
    if (editDialogIndex !== null) {
      const updatedExp = [...state.experience];
      updatedExp[editDialogIndex] = exp;
      setState("experience", updatedExp);
      handleCloseDialog();
    } else {
      addExperience(exp);
    }
  };

  const handleDateChange = (name: string, value: Date | null) => {
    setExp((prev) => ({ ...prev, [name]: value }));
    // console.log(value?.getFullYear());
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setExp((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddExp = (e: React.FormEvent) => {
    e.preventDefault();
    if (exp.companyAddress && exp.companyName && exp.yourExperience) {
      addExperience(exp);
      setExp({
        expfrom: null,
        expto: null,
        companyName: "",
        jobPosition: "",
        companyAddress: "",
        yourExperience: "",
      });
    } else alert("please fill required fields");
  };

  const handleDeleteExp = (index: number) => {
    removeExperience(index);
  };

  return (
    <div className=" max-w-7xl lg:w-[60%] md:w-[80%] sm:w-[90%] w-[98%] mt-4 mx-auto mb-1 bg-white rounded-md">
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <div className="flex flex-col gap-2">
          <h2>Edit Experience</h2>
          <form onSubmit={handleEditExp}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <div className="flex gap-4 mt-2 mb-2">
                <DatePicker
                  label="From"
                  views={["year"]}
                  value={exp.expfrom}
                  onChange={(newDate) => handleDateChange("expfrom", newDate)}
                />
                <DatePicker
                  label="To"
                  views={["year"]}
                  value={exp.expto}
                  onChange={(newDate) => handleDateChange("expto", newDate)}
                />
              </div>
            </LocalizationProvider>
            <div className="flex flex-col gap-1">
              <label>Company Name</label>
              <input
                className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none"
                type="text"
                name="companyName"
                value={exp.companyName}
                onChange={handleChange}
                placeholder="Company Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Your Position</label>
              <input
                type="text"
                placeholder="Manager"
                className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
                value={exp.jobPosition}
                name="jobPosition"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Comapany Address</label>
              <input
                type="text"
                placeholder="XYZ street"
                className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
                value={exp.companyAddress}
                name="companyAddress"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Your Experience</label>
              <textarea
                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, temporibus."
                className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
                value={exp.yourExperience}
                name="yourExperience"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex mt-4 justify-end">
              <button
                type="submit"
                className="border-2 hover:border-blue-500 px-6 py-2 rounded-md text-white  bg-blue-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </Dialog>
      <div className="px-10 py-10 ">
        <h1 className="">Add Experience</h1>
        <div className="flex flex-col gap-2 pb-10">
          {state.experience &&
            state.experience.map((item, index) => (
              <div
                key={index}
                className="p-4 border-2 rounded-md flex flex-col gap-10"
              >
                <div className="flex justify-between">
                  <h1>{`Experience - ${index + 1}`}</h1>
                  <h1>
                    {`${item.expfrom ? item.expfrom.getFullYear() : "N?A"} - ${
                      item.expto ? item.expto.getFullYear() : "N?A"
                    }`}
                  </h1>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="font-semibold">{item.companyName}</h1>
                    <p>{item.companyAddress}</p>
                  </div>

                  <div className="flex gap-2 pt-10 ">
                    <button className="border-none outline-none ">
                      <FaRegEdit
                        className=" hover:scale-125 transition-transform duration-200 ease-in-out"
                        size={20}
                        onClick={() => handleDialogOpen(index)}
                      />
                    </button>
                    <button>
                      <RiDeleteBinLine
                        className=" hover:scale-125 transition-transform duration-200 ease-in-out"
                        size={20}
                        color="maroon"
                        onClick={() => handleDeleteExp(index)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <form onSubmit={handleAddExp} className="flex gap-2  flex-col">
          <div className="lg:flex hidden gap-2  ">
            <label className="w-1/2">From</label>
            <label className="w-1/2">To</label>
          </div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="flex  flex-col lg:flex-row justify-center gap-2 ">
              <label className=" lg:hidden">From</label>
              <DatePicker
                sx={{ width: "100%" }}
                reduceAnimations={true}
                disableFuture={true}
                className="border-2 w-1/2 px-2 py-2 text-gray-400 uppercase"
                label="YYYY"
                views={["year"]}
                value={exp.expfrom}
                onChange={(newDate) => handleDateChange("expfrom", newDate)}
              />
              <label className=" lg:hidden">To</label>
              <DatePicker
                sx={{ width: "100%" }}
                reduceAnimations={true}
                disableFuture={true}
                className="border-2 w-1/2 px-2 py-2 text-gray-400 uppercase"
                label="YYYY"
                views={["year"]}
                value={exp.expto}
                onChange={(newDate) => handleDateChange("expto", newDate)}
              />
            </div>
            {(exp.expfrom as any) > (exp.expto as any) &&
            exp.expfrom &&
            exp.expto ? (
              <span className="text-red-500 text-sm">
                Ending date can not be smaller than joining date.{" "}
              </span>
            ) : (
              ""
            )}
          </LocalizationProvider>
          <div className="flex flex-col gap-2">
            <label className="capitalize">Company name</label>
            <input
              type="text"
              placeholder="XYZ.."
              className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
              name="companyName"
              value={exp.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Your Position</label>
            <input
              type="text"
              placeholder="Manager"
              className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
              value={exp.jobPosition}
              name="jobPosition"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Comapany Address</label>
            <input
              type="text"
              placeholder="XYZ street"
              className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
              value={exp.companyAddress}
              name="companyAddress"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Your Experience</label>
            <textarea
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, temporibus."
              className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
              value={exp.yourExperience}
              name="yourExperience"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="py-2 flex  gap-2 justify-end">
            <button className="px-6 py-2 border-2     border-blue-500 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white   ">
              Add Experience
            </button>
          </div>
          <div className="py-2 flex  gap-2 justify-end ">
            <PreviousBtn />
            <NextBtn />
          </div>
        </form>
      </div>
    </div>
  );
}
export default ExperienceForm;
