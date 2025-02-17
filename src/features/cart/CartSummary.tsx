import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

export default function CartSummary() {
  const navigate = useNavigate();

  return (
    <div className="border p-3 shadow rounded-lg sm:max-w-[300px] lg:min-w-full h-fit flex flex-col gap-3.5 sticky top-[90px]">
      <p className="font-semibold">Cart Summary</p>
      <ul className="text-sm font-medium border-b py-4 space-y-2">
        {[
          { label: "Subtotal", value: 0.0 },
          { label: "Tax (10%)", value: 0.0 },
          { label: "Delivery fee", value: 0.0 },
        ].map((item, index) => (
          <li key={index} className="flex text-gray-500 justify-between">
            {item.label}
            <span className="font-semibold text-gray-600">
              ${item.value.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <p className="flex justify-between font-semibold">
        Total <span>$0.00</span>
      </p>

      <Button onClick={() => navigate("/checkout")}>Proceed To Checkout</Button>
    </div>
  );
}
