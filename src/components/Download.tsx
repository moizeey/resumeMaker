import { BlobProvider } from "@react-pdf/renderer";
import Standard from "../templates/Standard";
import ErrorBoundary from "./ErrorBoundry";
import { useAppState } from "../contexts/FormContexts";
import { useActiveContext } from "../contexts/Active";
import PreviousBtn from "./PreviousBtn";

function Download() {
  const { state } = useAppState();
  const activeContext = useActiveContext();

  const handleDownload = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl lg:w-[60%] md:w-[80%] sm:w-[90%] w-[98%] px-10 py-10 mt-4 mx-auto mb-1 rounded-md  bg-white">
      <div className="flex flex-col gap-4">
        <div className="text-center">
          <h1 className="font-semibold uppercase">
            congrats you are almost finished!!!
          </h1>
        </div>
        <div className="flex justify-center items-center flex-col gap-4 mt-6">
          <img
            className="w-[30%] h-[30%] border-2 rounded-md"
            src="../public/standard.webp"
            alt="standard"
          />

          <ErrorBoundary>
            <BlobProvider
              document={
                <Standard appState={state} activeContext={activeContext} />
              }
            >
              {({ blob, loading }) =>
                loading ? (
                  <button
                    className="px-4 py-3 capitalize border-2 rounded-lg text-white bg-blue-500"
                    disabled
                  >
                    Generating PDF...
                  </button>
                ) : (
                  <button
                    className="px-4 py-3 capitalize border-2 rounded-lg text-white bg-blue-500 hover:text-blue-500 hover:bg-white"
                    onClick={() => blob && handleDownload(blob)}
                  >
                    Download Resume
                  </button>
                )
              }
            </BlobProvider>
          </ErrorBoundary>
          <div>
            <PreviousBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Download;
