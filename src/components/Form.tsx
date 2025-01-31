import { useAppState } from "../contexts/FormContexts";
import { useActiveContext } from "../contexts/Active";
import NextBtn from "./NextBtn";

function Form() {
  const { state, setState } = useAppState();
  const {
    linkedInActive,
    setLinkedInActive,
    githubActive,
    setGithubActive,
    twitterActive,
    setTwitterActive,
  } = useActiveContext();

  return (
    <div className="max-w-7xl mx-auto lg:w-[60%] md:w-[80%] sm:w-[90%] w-[98%] mt-4  mb-1 rounded-md  bg-white">
      <form className="px-10 py-10 space-y-2 ">
        <div className="flex flex-col gap-2">
          <label className="">Full name</label>
          <input
            type="text"
            placeholder="johnson"
            className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
            value={state.fullName}
            onChange={(e) => setState("fullName", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className=" ">Phone Number</label>
          <input
            type="text"
            placeholder="0310029"
            className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
            value={state.phoneNumber}
            onChange={(e) => setState("phoneNumber", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className=" ">Email</label>
          <input
            type="text"
            placeholder="johnson@abc.com"
            className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
            value={state.email}
            onChange={(e) => setState("email", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className=" ">Address</label>
          <input
            type="text"
            placeholder="abc street"
            className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
            value={state.address}
            onChange={(e) => setState("address", e.target.value)}
          />
        </div>

        {linkedInActive === true && (
          <div className="flex flex-col gap-2">
            <label>LinkedIn</label>
            <input
              type="text"
              placeholder="LinkedIn"
              className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
              value={state.linkedIn}
              onChange={(e) => setState("linkedIn", e.target.value)}
            />
          </div>
        )}

        {githubActive === true && (
          <div className="flex flex-col gap-2">
            <label>Github</label>
            <input
              type="text"
              placeholder="github"
              className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
              value={state.github}
              onChange={(e) => setState("github", e.target.value)}
            />
          </div>
        )}

        {twitterActive === true && (
          <div className="flex flex-col gap-2">
            <label>Twitter</label>
            <input
              type="text"
              placeholder="twitter"
              className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
              value={state.twitter}
              onChange={(e) => setState("twitter", e.target.value)}
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label className=" ">Job position</label>
          <input
            type="text"
            placeholder="manager"
            className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
            value={state.jobPositionBasic}
            onChange={(e) => setState("jobPositionBasic", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className=" ">Summary</label>
          <textarea
            placeholder="introduce yourself"
            className="border-2 px-4 py-3 rounded-md hover:border-zinc-700 outline-none "
            value={state.summary}
            onChange={(e) => setState("summary", e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-wrap gap-2 justify-end pt-4">
          <button
            className="border-2 px-4 py-1 rounded-md hover:border-gray-300"
            onClick={(e) => {
              e.preventDefault();
              setLinkedInActive(!linkedInActive);
            }}
          >
            LinkedIn
          </button>
          <button
            className="border-2 px-4 py-1 rounded-md hover:border-gray-300"
            onClick={(e) => {
              e.preventDefault();
              setGithubActive(!githubActive);
            }}
          >
            Github
          </button>
          <button
            className="border-2 px-4 py-1 rounded-md hover:border-gray-300"
            onClick={(e) => {
              e.preventDefault();
              setTwitterActive(!twitterActive);
            }}
          >
            Twitter
          </button>
        </div>
        <div className="flex justify-end  ">
          <NextBtn />
        </div>
      </form>
    </div>
  );
}
export default Form;
