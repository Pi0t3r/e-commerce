import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Brands from "./Brands";
function HeaderContent() {
  return (
    <div class="text-white flex flex-col justify-center w-full text-center mt-28">
      <div>
        <h1 class="text-5xl px-60 pb-10">Discover The Exceptional Watches</h1>
        <p class="px-72 text-slate-400">
          Every watch is meticulousy inspected and prepared by our highly
          trained, manufacturer-accredited watchmakers, ensuring only the very
          best quality
        </p>
      </div>
      <div class="flex flex-row w-full justify-between mt-16 mx-auto px-10 items-center">
        <div class="mr-6">
          <ChevronLeftIcon sx={{ fontSize: "30px" }} />
        </div>
        <div>
          <img class="bg-ItemHeader1 w-24 h-24 bg-center bg-cover" />
        </div>
        <div>
          <img class="bg-ItemHeader2 w-24 h-24 bg-center bg-cover" />
        </div>
        <div>
          <img class="bg-ItemHeader3 w-24 h-24 bg-center bg-cover" />
        </div>
        <div>
          <img class="bg-ItemHeader4 w-24 h-24 bg-center bg-cover" />
        </div>
        <div>
          <img class="bg-ItemHeader5 w-24 h-24 bg-center bg-cover" />
        </div>
        <div>
          <img class="bg-ItemHeader6 w-24 h-24 bg-center bg-cover" />
        </div>
        <div class="ml-6 ">
          <ChevronRightIcon sx={{ fontSize: "30px" }} />
        </div>
      </div>
      <div class="my-24">
        <button class="bg-red-500 w-1/6 p-2 rounded-md">
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
