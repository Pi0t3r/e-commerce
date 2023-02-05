import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { Item } from "./Favourites";

function Woman() {
  return (
    <div class="bg-ItemHeader3 bg-cover bg-center w-screen h-screen bg-fixed">
      <Nav />
      <Sidebar />
      <div class="absolute w-full h-full bg-black/70">
        <div class="w-full mt-20">
          <h3 class="text-paragraph uppercase italic text-center text-3xl">
            Woman
          </h3>
        </div>
        <div class="mt-10">
          <Item
            bgimage="Item"
            price="2000"
            icon1={<FavoriteIcon />}
            icon2={<LocalMallOutlinedIcon />}
            name="Rolex"
            model="Day-Date"
            year="2020"
          />
          <Item
            bgimage="Item"
            price="2000"
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

export default Woman;
