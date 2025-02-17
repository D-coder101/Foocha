interface PaginationProps {
  currentPage: number;
  npage: number;
  numbers: number[];
  prevPage: () => void;
  changeCPage: (id: number) => void;
  nextPage: () => void;
}

export default function Pagination({
  currentPage,
  npage,
  numbers,
  prevPage,
  changeCPage,
  nextPage,
}: PaginationProps) {
  return (
    <div className="mx-auto  rounded-md mt-8 flex items-center gap-2">
      <button
        onClick={prevPage}
        className="rounded-md border  px-3 py-1 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {numbers.map((num, i) => (
        <button
          key={i}
          onClick={() => changeCPage(num)}
          className={`w-8 py-1 focus:outline-none hover:shadow transition-shadow duration-200 border rounded-md ${
            currentPage === num ? "bg-gray-200" : "bg-white"
          }`}
        >
          <span className="text-sm">{num}</span>
        </button>
      ))}
      <button
        onClick={nextPage}
        className=" rounded-md  px-3 py-1 border disabled:cursor-not-allowed"
        disabled={currentPage === npage}
      >
        &gt;
      </button>
    </div>
  );
}
