import { Outlet } from "react-router-dom";
// import HorizontalRoute from "../../components/HorizontalRoute";
import OrderSummary from "./OrderSummary";

export default function Checkout() {
  return (
    <section className="py-8 px-3">
      <div className="w-full md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_350px] gap-x-6 lg:gap-x-8 xl:gap-x-10 gap-y-3">
        <div className="md:col-span-2">
          {/* <HorizontalRoute /> */}
          <p className="uppercase font-semibold md:text-lg">Checkout</p>
        </div>

        <div className="flex flex-col gap-3">
          <Outlet />
        </div>
        <div className="mt-8 md:mt-0">
          <OrderSummary />
        </div>
      </div>
    </section>
  );
}
