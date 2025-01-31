import { BlobProvider } from "@react-pdf/renderer";
import Standard from "../templates/Standard";

const Blob = () => {
  return (
    <BlobProvider document={<Standard />}>
      {({ blob, loading, url, error }) => {
        if (loading) return <p>Loading Element</p>;
        if (error) return <p>An error occured</p>;
        return (
          <a href={url ?? undefined} download="resume.pdf">
            download PDF
          </a>
        );
      }}
    </BlobProvider>
  );
};

export default Blob;
