import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
const ItemInCart = ({ image, price, icon1, icon2, name, model, year }) => {
  return (
    <div class="mt-6">
      <div
        class={`bg-${image} bg-cover bg-center w-56 h-52 rounded-xl mx-auto`}
      />
      <div class="text-white flex flex-row justify-between mx-6 mt-4">
        <h4 class="text-3xl">${price}</h4>
        <ul class="flex flex-row w-1/4 justify-between items-center">
          <li>{icon1}</li>
          <li>{icon2}</li>
        </ul>
      </div>
      <div class="text-white mx-6 mt-4 leading-10">
        <ul>
          <li>
            <p>
              Name: <span class="text-paragraph italic ml-3">{name}</span>
            </p>
          </li>
          <li>
            <p>
              Model: <span class="text-paragraph italic ml-3">{model}</span>
            </p>
          </li>
          <li>
            <p>
              Year:{" "}
              <span class="text-paragraph italic ml-3">Approx. {year}</span>
            </p>
          </li>
        </ul>
      </div>
      <hr class="mx-6 mt-3" />
    </div>
  );
};
function Man() {
  return (
    <div class="bg-ManWomanBackground bg-cover bg-center bg-fixed w-screen h-screen">
      <Nav />
      <Sidebar />
      <div class="absolute w-full h-full bg-black/70 flex flex-col justify-center">
        <div class="mx-5 h-3/4">
          <div class="mb-6">
            <h3 class="text-paragraph text-3xl uppercase italic text-center">
              Man
            </h3>
          </div>
          <ItemInCart
            image="Item"
            price="5000"
            icon1={<FavoriteIcon />}
            icon2={<LocalMallOutlinedIcon />}
            name="Rolex"
            model="Day-Date"
            year="2020"
          />
          <ItemInCart
            image="Item"
            price="5000"
            icon1={<FavoriteIcon />}
            icon2={<LocalMallOutlinedIcon />}
            name="Rolex"
            model="Day-Date"
            year="2020"
          />
        </div>
      </div>
    </div>
  );
}

export default Man;
