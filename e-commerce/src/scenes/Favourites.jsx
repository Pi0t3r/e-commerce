import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Watches } from "../data/watches";

const FilterWatchFav = () => {
  const FilterWatch = Watches.filter((watch) => watch.isFavourites === true);
  return (
    <div class="bg-transparent">
      {FilterWatch.map((watch) => (
        <div class="mt-2 bg-transparent">
          <img src={watch.image} class="rounded-xl mx-auto" />
          <div class="text-white flex flex-row justify-between mx-6 mt-4">
            <h4 class="text-3xl">${watch.Price}</h4>
            <ul class="flex flex-row w-1/4 justify-between items-center">
              <li>
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

function Favourites() {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div>
        <div class="mt-20">
          <h3 class="text-paragraph uppercase italic text-center text-3xl">
            Favourites
          </h3>
        </div>
        <div class="bg-ItemHeader6 bg-cover bg-center w-screen bg-fixed bg-fixed mt-[-40%]">
          <div class="bg-black/70">
            <div class="pt-40">
                <FilterWatchFav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favourites;
