import React, { useState, useEffect } from "react";
import ShowWatches from "./Watches";
import { Watches } from "../data/watches";
function Offers() {
  return (
    <div id="Offers" class="absolute w-full top-full px-10 mb-96 GFold:mt-2">
      <div class="flex flex-col">
        <div class="w-full flex justify-center GFold:mb-2">
          <p>All watches</p>
        </div>
        <div class="w-full flex flex-row items-start justify-center mx-auto GFold:flex-col">
          <div class="w-full flex justify-center GFold:my-2">
            <p>
              Results <span>(4328)</span>
            </p>
          </div>
          <div class="flex flex-row justify-between w-2/4 items-start h-20 GFold:flex-wrap GFold:w-full">
            <div>
              <button>przycisk 1</button>
            </div>
            <div>
              <button>przycisk 2</button>
            </div>
            <div>
              <button>przycisk 3</button>
            </div>
            <div>
              <button>przycisk 4</button>
            </div>
            <div>
              <button>przycisk 5</button>
            </div>
          </div>
          <div class="flex justify-center">
            <button>przycisk 6</button>
          </div>
        </div>
        <div>
          <ShowWatches watches={Watches} />
        </div>
      </div>
    </div>
  );
}

export default Offers;
