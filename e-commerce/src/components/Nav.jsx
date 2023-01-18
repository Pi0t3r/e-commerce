import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const ItemNav = ({ itemTitle, href }) => {
  return (
    <a href={href} class="hover:text-white cursor-pointer transition-colors">
      {itemTitle}
    </a>
  );
};

function Nav() {
  return (
    <div class="sticky top-0 w-full flex flex-row text-slate-500 justify-between p-8 mb-10">
      <div class="flex flex-row w-1/6 text-white">
        <a href="#">Time Dweller</a>
      </div>
      <div class="flex flex-row justify-evenly w-4/6 px-20">
        <ItemNav href={"#Offers"} itemTitle={"Offers"} />
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
