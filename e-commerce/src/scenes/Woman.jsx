import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";



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
          <div class="pt-52">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Woman;
