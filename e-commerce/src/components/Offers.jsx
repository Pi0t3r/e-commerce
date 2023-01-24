import React, { useState } from "react";
import MyDropdown from "./Dropdown";
import ShowWatches from "./Watches";
import { Watches } from "../data/watches";

const sortWatches = (watches, sortType) => {
  if (sortType === "by name (A-Z)") {
    return watches.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortType === "by name (Z-A)") {
    return watches.sort((a, b) => b.name.localeCompare(a.name));
  }
  return watches;
};

function Offers() {
  const [sortedWatches, setSortedWatches] = useState(Watches);
  const handleSort = (sortType) => {
    setSortedWatches(sortWatches(Watches, sortType));
    console.log(sortedWatches);
  };
  return (
    <div
      id="Offers"
      class="absolute w-full top-full px-10 mb-96"
      style={{ scrollBehavior: "smooth" }}
    >
      <div class="flex flex-col">
        <div class="w-full flex justify-center mb-16">
          <p>All watches</p>
        </div>
        <div class="w-full flex flex-row items-start justify-center mx-auto">
          <div class="w-1/4 flex justify-center">
            <p>
              Results <span>(4328)</span>
            </p>
          </div>
          <div class="flex flex-row justify-between w-2/4 items-start h-20">
            <div>
              <MyDropdown
                name="Brands"
                number={0}
                sortWatches={sortWatches}
                handleSort={handleSort}
              />
            </div>
            <div>
              <MyDropdown
                disabled
                name="Series"
                number={1}
                handleSort={handleSort}
              />
            </div>
            <div>
              <MyDropdown name="Case Size" number={2} handleSort={handleSort} />
            </div>
            <div>
              <MyDropdown name="Price" number={3} handleSort={handleSort} />
            </div>
            <div>
              <MyDropdown name="Year" number={4} handleSort={handleSort} />
            </div>
          </div>
          <div class="w-1/4 flex justify-center">
            <MyDropdown
              key={2}
              name="Sort"
              number={5}
              handleSort={handleSort}
            />
          </div>
        </div>
        <div>
          <ShowWatches watches={sortedWatches} />
        </div>
      </div>
    </div>
  );
}

export default Offers;
