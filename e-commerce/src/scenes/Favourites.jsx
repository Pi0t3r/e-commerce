import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import WatchView from "../components/WatchView";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
function Favourites() {
  return (
    <div class="bg-ItemHeader4 bg-cover bg-center w-screen h-screen">
      <Nav />
      <Sidebar />
      <div class="absolute w-full h-full bg-black/70">
        <div>
          <WatchView
            title="Favourites"
            icon1={<FavoriteIcon />}
            icon2={<LocalMallOutlinedIcon />}
            price="5000"
            name="Rolex"
            model="Day-Date"
            year="2020"
          />
        </div>
      </div>
    </div>
  );
}

export default Favourites;
