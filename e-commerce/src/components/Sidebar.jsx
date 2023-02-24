import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SellIcon from "@mui/icons-material/Sell";
import SettingsIcon from "@mui/icons-material/Settings";

const ItemNav = ({ icon, title, href }) => {
  const isActive = window.location.pathname === href;
  return (
    <div
      class={`w-full h-[50px] flex items-center flex-row ${
        isActive ? "bg-gray-200" : ""
      } hover:bg-indigo-500 transition-colors cursor-pointer tablet:h-[80px]`}
    >
      <a href={href} class="flex flex-row items-center ml-2 pt-6">
        <p
          class={`w-full h-[50px] flex tablet:ml-3 ${
            isActive ? "text-mainColor" : "text-Main-text"
          }`}
        >
          {icon} <span class="ml-10 tablet:text-xl tablet:font-medium">{title}</span>
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
      } tablet:w-2/5`}
    >
      <div class="p-2 text-white cursor-pointer hover:text-neutral-400 transition-colors tablet:p-4">
        <CloseIcon onClick={handleClick} />
      </div>
      <div class="flex flex-col items-center">
        <div class="w-24 h-24 bg-Kitty bg-cover bg-center rounded-full mx-auto tablet:w-32 tablet:h-32" />
        <p class="text-Main-text text-xl my-2 font-medium tablet:my-6 tablet:text-2xl">
          User Name
        </p>
        <p class="text-paragraph tablet:text-xl">User Email</p>
      </div>
      <div class="flex flex-col mt-2 tablet:mt-10">
        <ItemNav title="Home" href="/" icon={<HomeIcon />} />
        <ItemNav title="Man" href="/Man" icon={<ManIcon />} />
        <ItemNav title="Woman" href="/Woman" icon={<WomanIcon />} />
        <ItemNav
          title="Favourites"
          href="/Favourites"
          icon={<FavoriteIcon />}
        />
        <ItemNav title="Coupons" href="/Coupons" icon={<SellIcon />} />
      </div>
      <div class="mt-10 tablet:absolute tablet:bottom-10">
        <ItemNav title="Settings" href="/Settings" icon={<SettingsIcon />} />
      </div>
    </div>
  );
}

export default Sidebar;
