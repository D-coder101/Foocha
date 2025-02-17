// import { useDispatch } from "react-redux";
// import Button from "../../ui/Button";
// import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import { LuPlus } from "react-icons/lu";
import { PiMinusBold } from "react-icons/pi";
// { pizzaId, currentQuantity }
export default function UpdateItemQuantity() {
  // const dispatch = useDispatch();

  return (
    <div className="flex  items-center gap-2 text-xs md:text-sm md:gap-3 rounded-full p-1 bg-gray-200">
      <button className="bg-white focus:outline-none rounded-full transition-all duration-200 hover:shadow-md w-7 h-7 md:w-9 md:h-9 flex justify-center items-center">
        <PiMinusBold />
      </button>
      <span className="font-medium">1</span>
      <button className="bg-white focus:outline-none rounded-full transition-all duration-200 hover:shadow-md w-7 h-7 md:w-9 md:h-9 flex justify-center items-center">
        <LuPlus />
      </button>
      {/* <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button> */}
    </div>
  );
}
