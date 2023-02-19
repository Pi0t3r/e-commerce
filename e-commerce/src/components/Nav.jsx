import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import "../index.css";

import Sidebar from "./Sidebar";

function Nav() {
  const [scroll, setScroll] = useState(0);
  const [move, setMove] = useState(false);
  const handleClick = () => {
    setMove(!move);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);
  const LinksNav = ({ href, icon }) => {
    return (
      <>
        <li class="cursor-pointer hover:text-neutral-100 transition-colors">
          <a href={href}>{icon}</a>
        </li>
      </>
    );
  };
  return (
    <div
      class={`z-10 fixed top-0 w-full h-2 flex flex-row text-slate-500 justify-between items-center p-8 mb-10 transition-colors ${
        scroll > 10 ? "bg-mainColor" : "text-slate-500"
      }`}
    >
      <div class="text-white w-1/2 cursor-pointer hover:text-neutral-500 transition-colors">
        <MenuIcon onClick={handleClick} />
      </div>
      <div class="w-1/2">
        <ul class="flex flex-row justify-between items-center iPad:ml-32 iPad:w-1/2">
          <li>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </li>
          <LinksNav href="/login" icon={<PersonOutlineOutlinedIcon />} />
          <LinksNav href="/Basket" icon={<LocalMallOutlinedIcon />} />
        </ul>
      </div>
      <div>
        <Sidebar move={move} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Nav;
