import React, { useState } from "react";

function Offers() {
  const lists = [
    ["item 1", "item 2", "item 3"],
    ["item 4", "item 5", "item 6"],
    ["item 7", "item 8", "item 9"],
    ["item 10", "item 11", "item 12"],
    ["item 13", "item 14", "item 15"],
  ];
  const [expanded, setExpanded] = useState(false);
  const [selectedList, setSelectedList] = useState(0);
  return (
    <div id="Offers" class="w-full mt-24 px-14 mb-96">
      <div class="flex flex-col">
        <div class="w-full flex justify-center">
          <p>All watches</p>
        </div>
        <div class="w-full flex flex-row items-center justify-center mx-auto">
          <div class="w-1/4 flex justify-center">
            <p>
              Results <span>(4328)</span>
            </p>
          </div>
          <div class="flex flex-row justify-between w-2/4 items-center">
            <button
              onClick={() => {
                setExpanded(!expanded);
                setSelectedList(0);
              }}
            >
              Brands
            </button>
            <button
              onClick={() => {
                setExpanded(!expanded);
                setSelectedList(1);
              }}
            >
              Series
            </button>
            <button
              onClick={() => {
                setExpanded(!expanded);
                setSelectedList(2);
              }}
            >
              Case Size
            </button>
            <button
              onClick={() => {
                setExpanded(!expanded);
                setSelectedList(3);
              }}
            >
              Price
            </button>
            <button
              onClick={() => {
                setExpanded(!expanded);
                setSelectedList(4);
              }}
            >
              Year
            </button>
          </div>
          <div class="w-1/4 flex justify-center">
            <button>Sort</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
