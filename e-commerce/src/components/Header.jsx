import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Header() {
  return (
    <div class="bg-mainImage bg-center bg-cover bg-no-repeat w-full h-full absolute top-0 ">
      <div class="absolute w-full h-full bg-black/70 flex justify-center">
        <div class="mt-28">
          <h2 class="text-paragraph font-semibold text-3xl italic">
            Company Name
          </h2>
          <p class="text-[#C0BDBD] mt-14">Company short description</p>
        </div>
        <div class="absolute bottom-0 text-white">
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
