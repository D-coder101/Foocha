import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import OrderItem from "./OrderItem";

export default function OrderSummary() {
  const navigate = useNavigate();

  return (
    <div className="border py-3 shadow rounded-lg h-fit flex flex-col gap-3.5 sticky top-[90px]">
      <p className="font-semibold pl-3">Order Summary</p>
      <ul className="py-4 border-t-2 border-b-2 bg-gray-100 px-3">
        {Array.from({ length: 3 }, (_, i) => (
          <OrderItem key={i} />
        ))}
      </ul>
      <div className="px-3 space-y-2">
        <ul className="text-sm font-medium border-b py-4 space-y-2">
          {[
            { label: "Subtotal", value: 0.0 },
            { label: "Discount", value: 0.0 },
            { label: "Shipment cost", value: 0.0 },
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
        <Button onClick={() => navigate("/order-confirmation")} fullWidth>
          Place Order
        </Button>
      </div>
    </div>
  );
}
