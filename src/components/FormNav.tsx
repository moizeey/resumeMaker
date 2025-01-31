import { NavLink, useLocation } from "react-router-dom";
import { useAppState } from "../contexts/FormContexts";

function FormNav() {
  const { state } = useAppState();
  const location = useLocation();

  return (
    <div className="pt-10 max-w-7xl  mx-auto flex  flex-wrap justify-center md:gap-x-11 gap-x-6 items-center ">
      {state.sections.map((item, index) => (
        <div key={index} className="flex justify-center items-center  gap-1 ">
          <div
            className={`border-2  px-3 rounded-full bg-gray-300 text-gray-400 font-bold py-1 ${
              location.pathname === item.path ? "bg-green-600 text-white" : ""
            }`}
          >
            {item.id}
          </div>
          <div>
            <NavLink
              to={item.path}
              className="text-xl  hover:underline cursor-pointer"
            >
              {item.name}
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}
export default FormNav;
