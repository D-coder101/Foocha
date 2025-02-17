import { useState } from "react";

type payment = "monify" | "flutter";

export default function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState<payment>("monify");

  return (
    <ul className="flex flex-col gap-3">
      <li className="flex gap-3 items-center border-2 p-2 rounded-lg">
        <input
          type="radio"
          name="payment"
          checked={paymentMethod === "monify"}
          onChange={() => setPaymentMethod("monify")}
          className="h-4 w-4"
        />
        <label className="text-sm flex gap-3 items-center">
          <span className="h-10 w-12 rounded-lg">
            <img
              src="monify.png"
              alt="monify"
              className="w-full h-full object-cover rounded-lg"
            />
          </span>
          <div>
            <p>**** **** **** 1234</p>
            <p className="text-gray-600 font-semibold text-sm"> Monify</p>
          </div>
        </label>
      </li>
      <li className="flex items-center gap-3 border-2 p-2 rounded-lg">
        <input
          type="radio"
          name="payment"
          checked={paymentMethod === "flutter"}
          onChange={() => setPaymentMethod("flutter")}
          className="h-4 w-4"
        />
        <label className="text-sm flex gap-3 items-center">
          <span className="h-10 w-12 rounded-lg">
            <img
              src="flutter.png"
              alt="flutter"
              className="w-full h-full object-cover rounded-lg"
            />
          </span>
          <div>
            <p>**** **** **** 1234</p>
            <p className="text-gray-600 font-semibold text-sm"> Flutterwave</p>
          </div>
        </label>
      </li>
    </ul>
  );
}
