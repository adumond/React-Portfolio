import "./resume.scss";

export default function Resume() {
  return (
    <>
      <div id="resumePDF">
        <iframe
          id="pdf"
          src="https://drive.google.com/file/d/1bU52ZEEvmmj6C-2LB-fiaacRZs8csvSU/preview"
          width="640"
          height="700"
          allow="autoplay"
        ></iframe>
      </div>
    </>
  );
}
