// import { useEffect } from "react";
import { useState } from "react";
import Menu from "../assets/images/menu.jpg";
import CustomRating from "../ui/CustomRating";
import { MdAddShoppingCart } from "react-icons/md";

interface MenuItemProp {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
}
interface MenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  meal: MenuItemProp;
}

export default function MenuItem({ meal }: MenuItemProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleIsAdded = () => {
    setIsAdded((curr) => !curr);
  };
  // const starSize = () => {
  //   return window.innerWidth < 650 ? 15 : 20;
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", starSize);
  //   console.log(starSize);

  //   return () => window.removeEventListener("resize", starSize);
  // }, []);

  return (
    <div className="rounded-xl shadow sm hover:shadow-lg duration-300 transition-all cursor-pointer">
      <div className="h-52 relative">
        <img
          src={Menu}
          alt=""
          className="w-full h-full object-cover rounded-tl-xl rounded-tr-xl"
        />
        {isAdded ? (
          <span
            onClick={handleIsAdded}
            className="absolute bottom-3 right-3 h-10 w-10 bg-gray-100 text-xl flex justify-center items-center rounded-full"
          >
            <MdAddShoppingCart />
          </span>
        ) : (
          <div
            onClick={handleIsAdded}
            className="absolute gap-1 p-1 bottom-3 right-3 bg-gray-100 text-xl flex justify-between items-center rounded-full w-fit"
          >
            <button className="rounded-full border h-8 w-8 flex hover:shadow-xl duration-200 transition-all justify-center text-xl  border-gray-500 bg-red-100 focus:outline-none">
              -
            </button>
            <span className="w-5 flex justify-center items-center text-sm h-8">
              1
            </span>
            <button className="rounded-full hover:shadow-xl duration-200 transition-all border h-8 w-8 flex  justify-center text-xl  border-gray-500 bg-green-100 focus:outline-none">
              +
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-4 font-medium">
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <h3 className=" text-stone-500 truncate text-sm md:text-base">
            {meal?.category}
          </h3>
          <CustomRating size={20} defaultRating={3} />
        </div>
        <h2 className="truncate text-sm md:text-base">{meal?.name}</h2>
        <p className="text-red-500 font-semibold text-sm md:text-base">
          ${meal?.price}
        </p>
      </div>
    </div>
  );
}
