import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { Watches } from "../data/watches";
const FilterWatchWoman = () => {
  const FilterWatches = Watches.filter((watch) => watch.gender === "woman");
  return (
    <div>
      {FilterWatches.map((watch) => (
        <div>
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
                    <span class="text-paragraph italic ml-3">
                      {watch.Series}
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    Year:{" "}
                    <span class="text-paragraph italic ml-3">
                      Approx. {watch.Year}
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            <hr class="mx-6 mt-3" />
          </div>
        </div>
      ))}
    </div>
  );
};

function Woman() {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div>
        <div class="w-full mt-20">
          <h3 class="text-paragraph uppercase italic text-center text-3xl">
            Woman
          </h3>
        </div>
        <div class="bg-ItemHeader6 bg-cover bg-center w-screen bg-fixed bg-fixed mt-[-40%]">
          <div class="bg-black/70">
            <div class="pt-40">
              <p class="text-paragraph px-2 text-center mb-10">
                Watches for women are a collection for those who appreciate
                elegance and functionality in equal measure. Find a wide
                selection of timepieces from top brands known for their
                durability and precision, designed specifically for the modern
                woman.
              </p>
              <FilterWatchWoman />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Woman;
