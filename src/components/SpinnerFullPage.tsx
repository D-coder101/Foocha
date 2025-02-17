import PuffLoader from "react-spinners/PuffLoader";

function SpinnerFullPage() {
  return (
    <div className="h-screen pb-28 flex items-center justify-center">
      <PuffLoader color="#2563EB" size={80} />
    </div>
  );
}

export default SpinnerFullPage;
