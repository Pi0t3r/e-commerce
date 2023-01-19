import React from "react";
import MyDropdown from "./Dropdown";
import ShowWatches from "./Watches";
function Offers() {
  return (
    <div id="Offers" class="w-full mt-24 px-10 mb-96">
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
              <MyDropdown name="Brands" number={0} />
            </div>
            <div>
              <MyDropdown name="Series" number={1} />
            </div>
            <div>
              <MyDropdown name="Case Size" number={2} />
            </div>
            <div>
              <MyDropdown name="Price" number={3} />
            </div>
            <div>
              <MyDropdown name="Year" number={4} />
            </div>
          </div>
          <div class="w-1/4 flex justify-center">
            <MyDropdown name="Sort" />
          </div>
        </div>
        <div>
          <ShowWatches />
        </div>
      </div>
    </div>
  );
}

export default Offers;
