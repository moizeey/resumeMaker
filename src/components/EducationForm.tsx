import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useAppState } from "../contexts/FormContexts";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Dialog } from "@mui/material";
import NextBtn from "./NextBtn";
import PreviousBtn from "./PreviousBtn";

function EducationForm() {
  const { addEducation, removeEducation, state, setState } = useAppState();

  const [edu, setEdu] = useState({
    edufrom: null as Date | null,
    eduto: null as Date | null,
    degree: "",
    institute: "",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogIndex, setEditDialogIndex] = useState<number | null>(null);

  // for handling date Onchange
  const handleDateChange = (name: string, value: Date | null) => {
    setEdu((prev) => ({ ...prev, [name]: value }));
  };

  //for handlling change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEdu((prev) => ({ ...prev, [name]: value }));
  };

  // adding new education
  const handleAddEdu = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (edu.degree && edu.institute && edu.edufrom && edu.eduto) {
      addEducation(edu);
      setEdu({
        edufrom: null,
        eduto: null,
        degree: "",
        institute: "",
      });
    } else {
      alert("Please fill all the fields");
    }
  };

  const handleEditEdu = (e: React.FormEvent) => {
    e.preventDefault();
    if (editDialogIndex !== null) {
      const updatedEdu = [...state.education];
      updatedEdu[editDialogIndex] = edu;
      setState("education", updatedEdu);
      handleCloseDialog();
    } else {
      addEducation(edu);
    }
  };

  const handleDialogOpen = (index: number) => {
    setEditDialogIndex(index);
    setEdu(state.education[index]);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditDialogIndex(null);
  };

  const handleDeleteEdu = (index: number) => {
    removeEducation(index);
  };

  return (
    <div className="max-w-7xl lg:w-[60%] md:w-[80%] sm:w-[90%] w-[98%] mt-4 mx-auto mb-1 bg-white rounded-md">
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <div className="flex flex-col gap-2">
          <h2>Edit Education</h2>
          <form onSubmit={handleEditEdu}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <div className="flex gap-4 mt-2 mb-2">
                <DatePicker
                  label="From"
                  views={["year"]}
                  value={edu.edufrom}
                  onChange={(newDate) => handleDateChange("expfrom", newDate)}
                />
                <DatePicker
                  label="To"
                  views={["year"]}
                  value={edu.eduto}
                  onChange={(newDate) => handleDateChange("expto", newDate)}
                />
              </div>
            </LocalizationProvider>
            <div className="flex flex-col gap-1">
              <label>Company Name</label>
              <input
                className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none"
                type="text"
                name="degree"
                value={edu.degree}
                onChange={handleChange}
                placeholder="Software Engineer"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Your Position</label>
              <input
                type="text"
                placeholder="Cambridge University"
                className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
                value={edu.institute}
                name="institute"
                onChange={handleChange}
              />
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
      <div className="px-10  py-10">
        <div className="flex  flex-col gap-2 pb-10">
          {state.education &&
            state.education.map((item, index) => (
              <div
                key={index}
                className="p-4 border-2 rounded-md flex flex-col gap-10"
              >
                <div className="flex justify-between">
                  <h1>{`Education - ${index + 1}`}</h1>
                  <h1>
                    {`${item.edufrom ? item.edufrom.getFullYear() : "N?A"} - ${
                      item.eduto ? item.eduto.getFullYear() : "N?A"
                    }`}
                  </h1>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="font-semibold">{item.institute}</h1>
                    <p>{item.degree}</p>
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
                        onClick={() => handleDeleteEdu(index)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <h1 className="pb-6">Add Education</h1>
        <form onSubmit={handleAddEdu} className="  flex gap-2  flex-col">
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
                value={edu.edufrom}
                onChange={(newDate) => {
                  handleDateChange("edufrom", newDate);
                }}
              />
              <label className=" lg:hidden">To</label>
              <DatePicker
                sx={{ width: "100%" }}
                reduceAnimations={true}
                disableFuture={true}
                className="border-2 w-1/2 px-2 py-2 text-gray-400 uppercase"
                label="YYYY"
                views={["year"]}
                value={edu.eduto}
                onChange={(newDate) => handleDateChange("eduto", newDate)}
              />
            </div>
            {(edu.edufrom as any) > (edu.eduto as any) &&
            edu.edufrom &&
            edu.eduto ? (
              <span className="text-red-500 text-sm">
                Ending date can not be smaller than joining date.{" "}
              </span>
            ) : (
              ""
            )}
          </LocalizationProvider>

          <div className="flex flex-col gap-2">
            <label>Degree</label>
            <input
              type="text"
              placeholder="Degree"
              className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
              value={edu.degree}
              name="degree"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Institute</label>
            <input
              type="text"
              placeholder="Institute"
              className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
              value={edu.institute}
              name="institute"
              onChange={handleChange}
            />
          </div>
          <div className="py-2 flex  gap-2 justify-end">
            <button className="px-6 py-2 border-2   border-blue-500 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white   ">
              Add Education
            </button>
          </div>
          <div className="py-2 flex gap-2 justify-end ">
            <PreviousBtn />
            <NextBtn />
          </div>
        </form>
      </div>
    </div>
  );
}
export default EducationForm;
