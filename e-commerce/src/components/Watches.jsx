import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import { Watches } from "../data/watches";

function ShowWatches({ watches }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [watchesToShow, setWatchesToShow] = useState([]);
  const perPage = 8;
  const pageCount = Math.ceil(watches.length / perPage);
  const [expanded, setExpanded] = useState(false);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const ItemExpanded = ({ text }) => {
    return (
      <li class="hover:bg-slate-300 transition-colors cursor-pointer px-2">
        {text}
      </li>
    );
  };

  useEffect(() => {
    if(watches && watches.length > 0){
      const watchesSlice = watches.slice(
        currentPage * perPage,
        (currentPage + 1) * perPage
      );
      setWatchesToShow(watchesSlice);
    }
  }, [currentPage, watches]);
  // handlePageClick generate the problem with Maximum update depth exceeded.

  return (
    <div>
      <div class="w-auto h-96 flex flex-row justify-between flex-wrap">
        {watchesToShow.map((watch) => (
          <div class="flex flex-col w-52 mb-4 relative z-1">
            <div class="text-right">
              <p
                class="cursor-pointer font-bold text-lg text-slate-500"
                onClick={() => setExpanded(index)}
              >
                ...
              </p>
              {expanded && (
                <ul class="absolute bg-slate-200 right-0 w-1/2 rounded-md text-left border border-2 border-slate-300">
                  <ItemExpanded text={"Add to Cart"} />
                  <ItemExpanded text={"Show Watch"} />
                </ul>
              )}
            </div>
            <div
              className="w-full h-44 bg-cover bg-center"
              style={{ backgroundImage: `url(${watch.image})` }}
            ></div>
            <div class="py-4">
              <p class="font-medium text-lg">{watch.name}</p>
              <p class="text-slate-500">{watch.Series}</p>
            </div>
            <div>
              <p class="text-slate-500">{watch.ProductCode}</p>
            </div>
            <div>
              <p class="font-medium text-lg">${watch.Price}</p>
            </div>
            <div>
              <p class="font-medium">
                Box: <span class="text-slate-500 font-normal">{watch.Box}</span>
              </p>
              <p class="font-medium">
                Papers:{" "}
                <span class="text-slate-500 font-normal">{watch.Papers}</span>
              </p>
              <p class="font-medium">
                Year:{" "}
                <span class="text-slate-500 font-normal">
                  Approx. {watch.Year}
                </span>
              </p>
            </div>
          </div>
        ))}
        <div class="w-full my-10 pb-20">
          <ReactPaginate
            className="Paginate"
            previousLabel={"poprzednia"}
            nextLabel={"następna"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
          />
        </div>
      </div>
    </div>
  );
}

export default ShowWatches;
