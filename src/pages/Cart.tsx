import { IoIosArrowRoundBack } from "react-icons/io";
import CartItem from "../features/cart/CartItem";
import CartSummary from "../features/cart/CartSummary";
// import LinkButton from "../ui/LinkButton";

export default function Cart() {
  return (
    <section className="py-8 px-3">
      <div className="w-full md:max-w-7xl mx-auto flex flex-col gap-4">
        <p className="flex items-center gap-2">
          <span className="rounded-full w-7 h-7 md:w-9 md:h-9 flex items-center justify-center border-2 border-gray-200 hover:shadow cursor-pointer transition-all duration-200">
            <IoIosArrowRoundBack size={20} />
          </span>
          Back to Menu
        </p>
        <h2 className="font-semibold text-lg md:text-xl">Your Cart, (User)</h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10">
          {/* section-1 */}
          <ul className="border p-2.5 shadow rounded-lg divide-y">
            {Array.from({ length: 5 }, (_, i) => (
              <CartItem key={i} />
            ))}
          </ul>
          {/* section-2 */}
          <CartSummary />
        </div>
      </div>
    </section>
  );
}
