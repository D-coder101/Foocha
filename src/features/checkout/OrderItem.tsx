import Menu from "../../assets/images/menu.jpg";

export default function OrderItem() {
  return (
    <li className="py-2">
      <div className="grid grid-cols-[auto_1fr] items-center gap-3">
        <img src={Menu} alt="" className="h-16 object-cover w-16 rounded-lg" />

        <div className="grid grid-cols-[150px_auto] gap-3 text-sm ">
          {/*name and category*/}
          <div className="flex flex-col">
            <p className="font-semibold tracking-widetruncate">
              Fried Vegetable
            </p>
            <p className="truncate text-gray-700">
              Tomato, mozzarella, sun-dried tomatoes, olives, artichokeTomato,
              mozzarella, sun-dried tomatoes, olives, artichoke
            </p>
            <p className="text-xs font-semibold tracking-wider">x2</p>
          </div>

          {/*price*/}
          <div className="flex justify-end items-center font-semibold">
            $15.00
          </div>
        </div>
      </div>
    </li>
  );
}
