import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const ItemNav = ({ itemTitle }) => {
  return (
    <p class="hover:text-white cursor-pointer transition-colors">{itemTitle}</p>
  );
};

function Nav() {
  return (
    <div class="flex flex-row text-slate-500 justify-between p-8 ">
      <div class="flex flex-row w-1/6 text-white">
        <p>Time Dweller</p>
      </div>
      <div class="flex flex-row justify-evenly w-4/6 px-20">
        <ItemNav itemTitle={"Offers"} />
        <ItemNav itemTitle={"Buy"} />
        <ItemNav itemTitle={"Sell"} />
        <ItemNav itemTitle={"Exchange"} />
      </div>
      <div class="flex flex-row justify-between w-1/6 ">
        <ItemNav itemTitle={<SearchOutlinedIcon />} />
        <ItemNav itemTitle={<PersonOutlineOutlinedIcon />} />
        <ItemNav itemTitle={<LocalMallOutlinedIcon />} />
      </div>
    </div>
  );
}

export default Nav;
