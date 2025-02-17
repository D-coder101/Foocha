import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function HorizontalRoute() {
  return (
    <nav className="flex gap-3 items-center">
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-semibold" : "text-gray-400"
        }
      >
        Cart
      </NavLink>
      <IoIosArrowForward className="text-gray-500" />
      <NavLink
        to="/checkout"
        className={({ isActive }) =>
          isActive && location.pathname === "/checkout"
            ? "text-blue-500 font-semibold"
            : "text-gray-400"
        }
      >
        Checkout
      </NavLink>
      <IoIosArrowForward className="text-gray-500" />
      <NavLink
        to="/checkout/payment"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-semibold" : "text-gray-400"
        }
      >
        Payment
      </NavLink>
    </nav>
  );
}
