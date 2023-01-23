import { Watches } from "../data/watches";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
function ShowWatches() {
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 8;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const watchesToShow = Watches.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  return (
    <div>
      <div class="w-auto h-96 flex flex-row justify-between flex-wrap mx-20">
        {watchesToShow.map((watch) => (
          <div class="flex flex-col w-52 mb-4">
            <div class="text-right">
              <p class="cursor-pointer font-bold text-lg text-slate-500">...</p>
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
                <span class="text-slate-500 font-normal">Approx. {watch.Year}</span>
              </p>
            </div>
          </div>
        ))}
        <div class="w-full my-10 pb-20">
          <ReactPaginate className="Paginate"
            previousLabel={"poprzednia"}
            nextLabel={"następna"}
            pageCount={2}
            onPageChange={handlePageClick}
          />
        </div>
      </div>
    </div>
  );
}

export default ShowWatches;
