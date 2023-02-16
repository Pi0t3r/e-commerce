import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Watches } from "../data/watches";
import { useReducer, useState } from "react";
const FilterWatchMan = () => {
  const filteredWatches = Watches.filter((watch) => watch.gender === "man");
  const [favoriteIds, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.id];
      case "remove":
        return state.filter((id) => id !== action.id);
      default:
        return state;
    }
  }, []);
  const isFavorite = (id) => favoriteIds.includes(id);
  const toggleFavorite = (id) => {
    if (isFavorite(id)) {
      dispatch({ type: "remove", id });
    } else {
      dispatch({ type: "add", id });
    }
  };
  return (
    <div>
      {filteredWatches.map((watch) => (
        <div class="mt-2 bg-transparent" key={watch.id}>
          <img src={watch.image} class="rounded-xl mx-auto w-9/12" />
          <div class="text-white flex flex-row justify-between mx-6 mt-4">
            <h4 class="text-3xl">${watch.Price}</h4>
            <ul class="flex flex-row w-1/4 justify-between items-center">
              <li
                onClick={() => toggleFavorite(watch.id)}
                class={`${isFavorite(watch.id) ? "text-red-600" : "action"}`}
              >
                <FavoriteIcon />
              </li>
              <li>
                <LocalMallOutlinedIcon />
              </li>
            </ul>
          </div>
          <div class="text-white mx-6 mt-4 leading-10">
            <ul>
              <li>
                <p>
                  Name:{" "}
                  <span class="text-paragraph italic ml-3">{watch.name}</span>
                </p>
              </li>
              <li>
                <p>
                  Model:{" "}
                  <span class="text-paragraph italic ml-3">{watch.Series}</span>
                </p>
              </li>
            </ul>
          </div>
          <hr class="mx-6 mt-3" />
        </div>
      ))}
    </div>
  );
};
function Man() {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div>
        <div class="w-full mt-20">
          <h3 class="text-paragraph uppercase italic text-center text-3xl">
            Man
          </h3>
        </div>
        <div class="bg-ItemHeader6 bg-cover bg-center w-screen bg-fixed bg-fixed mt-[-40%]">
          <div class="bg-black/70">
            <div class="pt-40">
              <p class="text-paragraph px-2 text-center mb-10">
                Men's watches collection for gentlemen who appreciate elegant
                style and functionality. Here you will find a wide range of
                timepieces from top brands, distinguished by durability and
                precision.
              </p>
              <FilterWatchMan />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Man;
