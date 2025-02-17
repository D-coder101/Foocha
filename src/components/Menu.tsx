import MenuItem from "./MenuItem";
import Data from "../services/Data.json";
import Filter from "./Filter";

function Menu() {
  return (
    <section id="menu" className="pt-20">
      <div className="md:max-w-7xl md:mx-auto flex justify-center">
        <div className="font-bold text-center flex flex-col gap-1 md:gap-3">
          <h3 className="uppercase text-blue-600 font-extrabold">Our Menu</h3>
          <h1 className="text-3xl md:text-5xl">The Most Popular</h1>
          {/* <div className=""> */}
          <Filter
            isButtonFilter
            filterField="category"
            options={[
              { value: "all", label: "All" },
              { value: "dessert", label: "Dessert" },
              { value: "chicken", label: "Chicken" },
              { value: "pizza", label: "Pizza" },
              { value: "meat", label: "Meat" },
              { value: "fish", label: "Fish" },
              { value: "drink", label: "Drink" },
            ]}
          />
          {/* </div> */}
          <div className="grid gap-x-3 md:gap-x-4 lg:gap-x-6 gap-y-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2">
            {Data.slice(0, 8).map((meal, i) => (
              <MenuItem meal={meal} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
