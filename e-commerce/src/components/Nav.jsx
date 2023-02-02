import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";

const ItemNav = ({ itemTitle, href }) => {
  return (
    <a href={href} class="hover:text-white cursor-pointer transition-colors">
      {itemTitle}
    </a>
  );
};

function Nav() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);
  return (
    <div
      class={`z-10 fixed top-0 w-full flex flex-row text-slate-500 justify-between p-8 mb-10 ${
        scroll > 150 ? "bg-gray-400" : "text-slate-500"
      }`}
    >
      <div class="flex flex-row w-1/6 text-white GFold:w-1/2">
        <a href="#">Time Dweller</a>
      </div>
      <div class="flex flex-row justify-evenly w-4/6 px-20 GFold:hidden">
        <ItemNav href={"#Offers"} itemTitle={"Offers"} />
        <ItemNav itemTitle={"Buy"} />
        <ItemNav itemTitle={"Sell"} />
        <ItemNav itemTitle={"Exchange"} />
      </div>
      <div class="flex flex-row justify-between w-1/6 GFold:hidden">
        <ItemNav itemTitle={<SearchOutlinedIcon />} />
        <ItemNav href={"/login"} itemTitle={<PersonOutlineOutlinedIcon />} />
        <ItemNav itemTitle={<LocalMallOutlinedIcon />} />
      </div>
      <div>
        <ItemNav itemTitle={<MenuIcon />} />
      </div>
    </div>
  );
}

export default Nav;
