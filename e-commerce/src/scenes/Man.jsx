import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { Item } from "./Favourites";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
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
            <div class="pt-52">
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
      </div>
    </div>
  );
}

export default Man;
