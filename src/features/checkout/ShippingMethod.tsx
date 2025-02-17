import { useState } from "react";

export default function ShippingMethod() {
  const [shippingMethod, setShippingMethod] = useState("cod");

  return (
    <ul className="flex flex-col gap-3">
      <li className="flex gap-2 items-center border-2 py-2 px-3 rounded-lg">
        <input
          type="radio"
          name="payment"
          checked={shippingMethod === "cod"}
          onChange={() => setShippingMethod("cod")}
          className="h-4 w-4"
        />
        <label className="text-sm font-medium">Cash on Delivery</label>
      </li>
      <li className="flex items-center gap-2 border-2 py-2 px-3 rounded-lg">
        <input
          type="radio"
          name="payment"
          checked={shippingMethod === "dc"}
          onChange={() => setShippingMethod("dc")}
          className="h-4 w-4"
        />
        <label className="text-sm font-medium">Debit Card</label>
      </li>
    </ul>
  );
}
