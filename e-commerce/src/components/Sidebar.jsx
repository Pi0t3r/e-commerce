import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

// const Item = () => {
//     return (

//     )
// }

function Sidebar() {
  return (
    <div class="fixed z-20 right-[-50%] top-0 w-1/2 h-screen bg-indigo-900 text-white">
      <div class="text-right p-4">
        <button>
          <MenuIcon />
        </button>
      </div>
      <div>
        <ul class="flex flex-col justify-evenly items-center my-10 h-60">
          <li>
            <a href="#Offers">Offers</a>
          </li>
          <li>Buy</li>
          <li>Sell</li>
          <li>Exchange</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
