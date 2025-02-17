import MenuItem from "../components/MenuItem";
import Data from "../services/Data.json";
import { useState } from "react";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";

export default function Menu() {
  const recordsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleRecords, setVisibleRecords] = useState(recordsPerPage);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);

  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const changeCPage = (id: number) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== npage) setCurrentPage(currentPage + 1);
  };

  const loadMore = () => {
    setVisibleRecords((prev) => Math.min(prev + recordsPerPage, Data.length));
    console.log(visibleRecords);
  };

  return (
    <section className="py-4 pb-20 px-3">
      <div className="w-full md:max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Explore our menu
          </h3>
          <p className="text-sm md:text-base font-medium">
            Discover a variety of delicious meals crafted to satisfy every
            craving. Select a category to explore your favorite dishes and find
            something new to enjoy.
          </p>

          <Filter
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
        </div>
        <h3 className="text-2xl font-semibold text-center md:text-left">
          Top dishes near you
        </h3>
        <div className="grid gap-x-3 md:gap-x-4 lg:gap-x-6 gap-y-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {window.innerWidth < 768
            ? Data.slice(0, visibleRecords).map((meal, i) => (
                <MenuItem key={i} meal={meal} />
              ))
            : records.map((meal, i) => <MenuItem key={i} meal={meal} />)}
        </div>
        {/*pagination */}
        <div className="hidden md:flex">
          <Pagination
            currentPage={currentPage}
            npage={npage}
            numbers={numbers}
            prevPage={prevPage}
            changeCPage={changeCPage}
            nextPage={nextPage}
          />
        </div>

        <div className="block md:hidden mt-6 text-center">
          {visibleRecords < Data.length && (
            <button
              onClick={loadMore}
              className="focus:outline-0 rounded-md mx-auto w-fit bg-black text-white flex justify-center items-center py-2 px-3 text-sm font-medium mt-4 hover:shadow-lg transition-all duration-300"
            >
              Load More...
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
