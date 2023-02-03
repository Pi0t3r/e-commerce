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

  return (
    <div
      class={`z-10 fixed top-0 w-full h-2 flex flex-row text-slate-500 justify-between items-center p-8 mb-10 transition-all ${
        scroll > 150 ? "bg-mainColor" : "text-slate-500"
      }`}
    >
      <div class="text-white w-1/2">
        <MenuIcon onClick={handleClick} />
      </div>
      <div class="w-1/2">
        <ul class="flex flex-row justify-between items-center">
          <li>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </li>
          <li>
            <PersonOutlineOutlinedIcon />
          </li>
          <li>
            <LocalMallOutlinedIcon />
          </li>
        </ul>
      </div>
      <div>
        <Sidebar move={move} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Nav;
