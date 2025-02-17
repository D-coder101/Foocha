import { IoCheckmarkCircleOutline } from "react-icons/io5";
import OrderItem from "./OrderItem";
import Button from "../../ui/Button";
import { useState } from "react";

export default function OrderConfirmation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-8 px-3 flex min-h-[80vh] flex-col items-center justify-center">
      <div className="w-full sm:max-w-[500px] rounded-lg shadow-lg border mx-auto flex flex-col gap-2 p-3 items-center">
        <IoCheckmarkCircleOutline size={50} className="text-green-600" />
        <p className="font-semibold">Thanks for your order!</p>
        <p className="text-gray-500 text-xs md:text-sm text-center">
          The order confirmation has been sent to bellofavour53@gmail.com
        </p>

        {!isOpen && (
          <span
            className="text-sm font-semibold text-blue-500 underline hover:text-blue-600 cursor-pointer transition-all duration-200 mb-4"
            onClick={() => setIsOpen(true)}
          >
            More details
          </span>
        )}
        {isOpen && (
          <ul className=" w-full mt-2 text-sm">
            <li className="py-2 flex flex-col gap-1.5 font-semibold border-t border-b border-dashed">
              <p>Transaction Date</p>
              <p className="text-gray-400 font-medium">
                Monday, December 9, 2024 (GMT+7)
              </p>
            </li>
            <li className="py-2 flex flex-col gap-1.5 font-semibold">
              <p>Payment Method</p>
              <p className="text-gray-400 font-medium">
                Mastercard ending with 2564
              </p>
            </li>
            <li className="py-2 flex flex-col gap-1.5 font-semibold border-t border-b border-dashed">
              <p>Shipping Method</p>
              <p className="text-gray-400 font-medium">
                Express delivery(1-3 business days )
              </p>
              <p className="uppercase underline">track order</p>
            </li>
            <li className="py-2 flex flex-col gap-1.5 font-semibold border-t border-b border-dashed">
              <p>Your Order</p>
              <p className="text-gray-400 font-medium">
                Express delivery(1-3 business days )
              </p>
              <p className="uppercase underline">track order</p>
            </li>

            <OrderItem />

            <li className="py-2 border-t border-b border-dashed flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>$2,500.00</span>
            </li>
            <li className="py-2">
              <div className="text-gray-400 font-medium space-y-2">
                <p className="flex justify-between items-center">
                  <span>Applied discount code</span>
                  <span className="h-4 items-center bg-green-300 text-gray-950 rounded-full py-3 px-1.5 text-xs flex">
                    20% OFF
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Discount</span>
                  <span>-$500(20% OFF)</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Shipment cost</span>
                  <span>-$22.50</span>
                </p>
              </div>
            </li>
            <li className="py-2 border-t border-dashed flex justify-between font-semibold text-base">
              <span>Grand total</span>
              <span>$2,500.00</span>
            </li>
          </ul>
        )}

        <Button fullWidth> Continue shopping </Button>
      </div>
    </section>
  );
}
