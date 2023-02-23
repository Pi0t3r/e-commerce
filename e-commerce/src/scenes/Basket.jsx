import ItemCart from "../components/ItemCart";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
function Basket() {
  return (
    <div class="bg-ItemHeader5 bg-fixed w-screen h-screen bg-cover bg-center">
      <div class="bg-black/70 absolute inset-0">
        <div class="relative">
          <div class="text-Main-text tablet:p-6">
            <a href="/">
              <KeyboardBackspaceIcon />
            </a>
            <h3 class="text-center tablet:text-5xl tablet:mt-3">Basket</h3>
          </div>
          <div class="w-full h-40 absolute top-40">
            <ItemCart name="Watch Name" money="200" code="123123" />
            <ItemCart name="Watch Name" money="200" code="123123" />
            <ItemCart name="Watch Name" money="200" code="123123" />
          </div>
          <div class="w-full h-28 fixed bottom-0 flex flex-col px-4 bg-white drop-shadow-[0_-10px_8px_rgba(0,0,0,0.25)] z-10">
            <div class="tablet:w-1/3 tablet:mt-4">
              <p class="text-paragraph font-medium tablet:text-2xl">Total</p>
            </div>
            <div class="text-2xl font-bold tablet:text-4xl tablet:w-1/3">
              <p>$600</p>
            </div>
            <div class="flex flex-row justify-between items-center text-paragraph mt-3 pr-10 tablet:-mt-16 tablet:w-1/2 tablet:ml-96">
              <p class="font-medium">coupon code</p>
              <input type="text" placeholder="Apply" class="bg-transparent h-20 font-bold tablet:text-4xl tablet:w-2/3 border-transparent"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
