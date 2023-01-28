import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Brands from "./Brands";

const Item = ({ number }) => {
  return (
    <div>
      <img class={`bg-ItemHeader${number} w-24 h-24 bg-center bg-cover`} />
    </div>
  );
};
const Direction = ({ direction, icon }) => {
  return <div class={`m${direction}-6`}>{icon}</div>;
};

function HeaderContent() {
  return (
    <div class="text-white flex flex-col justify-center w-full text-center mt-28">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-5xl px-60 pb-10 GFold:text-2xl GFold:px-4">
          Discover The Exceptional Watches
        </h1>
        <p class="px-72 text-slate-300 GFold:px-4">
          Every watch is meticulousy inspected and prepared by our highly
          trained, manufacturer-accredited watchmakers, ensuring only the very
          best quality
        </p>
      </div>
      <div class="flex flex-row w-full justify-between mt-16 mx-auto px-10 items-center GFold:hidden">
        <Direction direction={"l"} icon={<ChevronLeftIcon />} />
        <Item number={"1"} />
        <Item number={"2"} />
        <Item number={"3"} />
        <Item number={"4"} />
        <Item number={"5"} />
        <Item number={"6"} />
        <Direction direction={"r"} icon={<ChevronRightIcon />} />
      </div>
      <div class="my-24">
        <button class="bg-red-500 w-1/6 p-2 rounded-md GFold:w-1/2">
          Explore{" "}
          <ArrowForwardIosIcon sx={{ fontSize: "12px", marginLeft: "15%" }} />
        </button>
      </div>
      <div>
        <Brands />
      </div>
    </div>
  );
}

export default HeaderContent;
