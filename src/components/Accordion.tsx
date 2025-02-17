import React, { useState } from "react";
import DeliveryForm from "../features/checkout/DeliveryForm";
import { IoIosArrowDown } from "react-icons/io";
import ShippingMethod from "../features/checkout/ShippingMethod";
import PaymentMethod from "../features/checkout/PaymentMethod";

const details = [
  {
    title: "Shipping Information",
    content: <DeliveryForm />,
  },
  {
    title: "Shipping Method",
    content: <ShippingMethod />,
  },
  {
    title: "Payment Method",
    content: <PaymentMethod />,
  },
];

interface AccordionItemProps {
  title: string;
  num: number;
  currOpen: number | null;
  onOpen: React.Dispatch<React.SetStateAction<number | null>>;
  children: React.ReactNode;
  data: object[];
}

export default function Accordion() {
  const [currOpen, setCurrOpen] = useState<number | null>(0);

  return (
    <ul className="space-y-6">
      {details.map((el, i) => (
        <AccordionItem
          title={el.title}
          data={details}
          num={i}
          key={el.title}
          currOpen={currOpen}
          onOpen={setCurrOpen}
        >
          {el.content}
        </AccordionItem>
      ))}
    </ul>
  );
}
function AccordionItem({
  title,
  num,
  currOpen,
  onOpen,
  children,
  data,
}: AccordionItemProps) {
  const isOpen = num === currOpen;
  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };

  return (
    <li
      className={`flex flex-col gap-2 border p-2 ${
        num === 0 && "rounded-t-lg"
      } ${num === data.length - 1 && "rounded-b-lg"}`}
    >
      <div className="flex justify-between items-center ">
        <p className="font-semibold">{title}</p>
        <IoIosArrowDown
          size={20}
          onClick={handleToggle}
          className={`cursor-pointer ${isOpen && "rotate-180"}`}
        />
      </div>
      {children && isOpen && <div>{children}</div>}
    </li>
  );
}
