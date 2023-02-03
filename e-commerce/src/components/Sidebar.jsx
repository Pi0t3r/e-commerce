import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SellIcon from "@mui/icons-material/Sell";
import SettingsIcon from "@mui/icons-material/Settings";

const ItemNav = ({ icon, title, href }) => {
  return (
    <div class="w-full h-[50px] flex">
      <a href={href} class="flex flex-row items-center">
        <p class="ml-3 text-Main-text text-lg">
          {icon} <span class="ml-10">{title}</span>
        </p>
      </a>
    </div>
  );
};

function Sidebar({ move, handleClick }) {
  return (
    <div
      class={`fixed bg-mainColor w-3/5 h-full ease-in duration-300 top-0 ${
        move ? "left-0" : "-left-3/4"
      }`}
    >
      <div class="p-2 text-white">
        <CloseIcon onClick={handleClick} />
      </div>
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 bg-Kitty bg-cover bg-center rounded-full mx-auto" />
        <p class="text-Main-text text-xl my-2">User Name</p>
        <p class="text-paragraph">User Email</p>
      </div>
      <div class="flex flex-col mt-2">
        <ItemNav title="Home" href="/" icon={<HomeIcon />} />
        <ItemNav title="Man" href="/Man" icon={<ManIcon />} />
        <ItemNav title="Woman" href="/Woman" icon={<WomanIcon />} />
        <ItemNav
          title="Favourites"
          href="/Favoutires"
          icon={<FavoriteIcon />}
        />
        <ItemNav title="Coupons" href="/Coupons" icon={<SellIcon />} />
      </div>
      <div class="mt-10">
        <ItemNav title="Settings" href="/Settings" icon={<SettingsIcon />} />
      </div>
    </div>
  );
}

export default Sidebar;
