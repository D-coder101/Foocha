import { useSearchParams } from "react-router-dom";
import menu from "../assets/images/menu.jpg";

interface FilterProps {
  filterField: string;
  isButtonFilter?: boolean;
  options: {
    value: string;
    label: string;
  }[];
}

interface Props {
  option: {
    value: string;
    label: string;
  };
  handleClick: (option: string) => void;
}
interface ButtonFilterProps extends Props {
  isActive: boolean;
}

export default function Filter({
  filterField,
  options,
  isButtonFilter,
}: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  //get current filter
  const currentFilter = searchParams.get(filterField) || options[0].value;

  function handleClick(value: string) {
    searchParams.set(filterField, value);
    // if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }
  return (
    <div
      className={`w-full mt-4 flex  ${
        isButtonFilter
          ? "justify-center py-2 gap-3 flex-wrap"
          : "justify-between lg:justify-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-2"
      }`}
    >
      {options.map((option) =>
        isButtonFilter ? (
          <ButtonFilter
            key={option.value}
            option={option}
            handleClick={handleClick}
            isActive={option.value === currentFilter}
          />
        ) : (
          <CircleFilter
            key={option.value}
            option={option}
            handleClick={handleClick}
          />
        )
      )}
    </div>
  );
}
// h-16 w-16 sm:h-24 sm:w-24
function CircleFilter({ option, handleClick }: Props) {
  return (
    <div
      className="flex flex-col gap-3 items-center cursor-pointer group pt-2"
      key={option.label}
    >
      <span
        className="rounded-full h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 border shadow group-hover:shadow-lg group-hover:scale-110 grid place-items-center transition-all duration-200 ease-in-out"
        onClick={() => handleClick(option?.value)}
      >
        {/* <div
        onClick={() => handleClick(option?.value)}
        className="h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 hover:shadow-2xl cursor-pointer duration-200 transition-all rounded-full shadow-xl"
        > */}
        <img
          src={menu}
          alt=""
          className="object-cover w-2/3 h-2/3 rounded-full"
        />
        {/* </div> */}
      </span>
      <h3 className="font-medium tracking-wide group-hover:font-semibold">
        {option?.label}
      </h3>
    </div>
  );
}

function ButtonFilter({ option, handleClick, isActive }: ButtonFilterProps) {
  return (
    <button
      onClick={() => handleClick(option?.value)}
      className={`px-2 md:px-3 text-base py-1 transition-all duration-300 ease-in-out shadow rounded-lg font-medium ${
        isActive
          ? "bg-blue-500 text-white shadow-md font-semibold"
          : "bg-white text-black hover:shadow-md"
      }`}
    >
      {option?.label}
    </button>
  );
}
