import Order from "../../public/order.png";
import Delivery from "../../public/delivery.png";
import Snacks from "../../public/snacks.png";

const services = [
  {
    title: "Easy To Order",
    description: "Effortless and intuitive ordering process.",
    img: Order,
  },
  {
    title: "Fastest Delivery",
    description: "Lightning-fast delivery to your doorstep.",
    img: Delivery,
  },
  {
    title: "Best Quality",
    description: "Top-tier meals ensuring superior satisfaction.",
    img: Snacks,
  },
];

function Service() {
  return (
    <section id="service" className="pt-20">
      <div className="md:max-w-7xl mx-auto flex flex-col gap-12 justify-center">
        <div className="font-bold text-center space-y-3">
          <h3 className="uppercase text-blue-600 font-extrabold">
            Our service
          </h3>
          <h1 className="text-3xl md:text-5xl">How Does It Work?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-20">
          {services.map((service, i) => (
            <div
              className="text-center flex flex-col items-center space-y-3"
              key={i}
            >
              <div className="h-28 md:h-32 lg:h-48">
                <img src={service.img} className="object-cover h-full" />
              </div>
              <h2 className="font-bold text-2xl">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
