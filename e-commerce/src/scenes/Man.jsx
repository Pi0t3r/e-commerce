import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Watches } from "../data/watches";
import { useState, useEffect } from "react";
import Basket from "./Basket";
const FilterWatchMan = () => {
  const filteredWatches = Watches.filter((watch) => watch.gender === "man");
  const [watches, setWatches] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setWatches(Watches);
  }, []);
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(localStorage.getItem("cartItems"));
  }, [cartItems]);
  const toggleFavorite = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((favourite) => favourite !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  };
  const isFavourite = (id) => {
    return favourites.includes(id);
  };

  const addToCart = (watch) => {
    const newItem = {
      id: watch.id,
      name: watch.name,
      series: watch.Series,
      price: watch.Price,
    };
    setCartItems([...cartItems, newItem]);
  };
  const isCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };
  
  return (
    <div>
      {filteredWatches.map((watch) => (
        <div class="mt-2 bg-transparent tablet:relative" key={watch.id}>
          <img
            src={watch.image}
            class="rounded-xl mx-auto w-9/12 tablet:w-[35%] tablet:ml-10 tablet:pb-20"
          />
          <div class="text-white flex flex-row justify-between mx-6 mt-4 tablet:absolute tablet:bottom-6 tablet:w-11/12 tablet:flex-row-reverse">
            <h4 class="text-3xl tablet:mr-20 tablet:text-5xl tablet:font-medium">
              ${watch.Price}
            </h4>
            <ul class="flex flex-row w-1/4 justify-between items-center tablet:w-[25%] tablet:pl-20">
              <li>
                <button
                  class={`mx-2 focus:outline-none ${
                    isFavourite(watch.id) ? "text-red-500" : "text-white"
                  }`}
                  onClick={() => toggleFavorite(watch.id)}
                >
                  <FavoriteIcon />
                </button>
              </li>
              <li>
                <button
                  class={`mx-2 focus:outline-none ${
                    isCart(watch.id) ? "text-blue-500" : "text-white"
                  }`}
                  onClick={() => addToCart(watch)}
                >
                  <LocalMallOutlinedIcon />
                </button>
              </li>
            </ul>
          </div>
          <div class="text-white mx-6 mt-4 leading-10 tablet:absolute tablet:right-0 tablet:top-0 tablet:text-xl tablet:w-1/2">
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
        <div class="w-full mt-20 tablet:mt-24">
          <h3 class="text-paragraph uppercase italic text-center text-3xl tablet:pb-40 tablet:text-5xl">
            Man
          </h3>
        </div>
        <div class="bg-ItemHeader6 bg-cover bg-center w-screen bg-fixed mt-[-40%]">
          <div class="bg-black/70">
            <div class="pt-40">
              <p class="text-paragraph px-2 tablet:px-8 text-center mb-10 tablet:mt-8">
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
