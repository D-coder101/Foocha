import Menu from "../../assets/images/menu.jpg";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

export default function CartItem() {
  return (
    <li className="py-2.5">
      <div className="grid grid-cols-[auto_1fr] items-center gap-4">
        <img
          src={Menu}
          alt=""
          className="h-28 object-cover w-24 md:w-28 rounded-2xl"
        />

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_0.6fr_1fr] gap-1 sm:gap-4">
          {/*name and category*/}
          <div className="flex flex-col justify-center gap-1 md:gap-1.5">
            <p className="font-semibold tracking-wide text-sm md:text-lg">
              Fried Vegetable
            </p>
            <div className="hidden sm:block">
              <p className="line-clamp-2 text-gray-700 text-sm md:text-base">
                Tomato, mozzarella, sun-dried tomatoes, olives, artichokeTomato,
                mozzarella, sun-dried tomatoes, olives, artichoke
              </p>
            </div>
            <p className="text-xs text-gray-500 font-medium">
              Price per 1: <span className="font-semibold text-sm">$15.00</span>
            </p>
          </div>

          {/*price*/}
          <div className="flex text-sm sm:text-base sm:justify-center items-center font-semibold">
            $15.00
          </div>
          {/* quantity and delete */}
          <div className="flex justify-between sm:flex-col sm:justify-center sm:items-end gap-4">
            <UpdateItemQuantity />
            <DeleteItem />
          </div>
        </div>
      </div>
    </li>
  );
}
