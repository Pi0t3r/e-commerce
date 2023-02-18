import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ItemCart from "./ItemCart";
function CircleTop({ title, href }) {
  return (
    <div class="relative overflow-hidden w-screen h-screen">
      <div class="bg-mainColor w-[491px] h-64 top-0 left-1/2 transform translate-y-[-50%] translate-x-[-50%] rounded-full absolute rounded-[50%]">
        <div class="absolute bottom-[85px] left-[100px] ">
          <a class="text-Main-text text-3xl cursor-pointer hover:text-neutral-500 transition-colors" href={href}>
            <KeyboardBackspaceIcon />
          </a>
        </div>
        <div class="absolute bottom-14 left-1/2 -translate-x-1/2">
          <p class="text-Main-text text-3xl">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default CircleTop;
