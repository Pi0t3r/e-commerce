import ItemCart from "../components/ItemCart";

function Basket() {
  return (
    <div class="relative">
      <div class="w-full h-40 absolute top-40">
        <ItemCart name="Watch Name" money="2000" code="123123" />
        <ItemCart name="Watch Name" money="2000" code="123123" />
        <ItemCart name="Watch Name" money="2000" code="123123" />
      </div>
      <div class="w-full h-28 fixed bottom-0 flex flex-col px-4 bg-white drop-shadow-[0_-10px_8px_rgba(0,0,0,0.25)] z-10">
        <div>
          <p class="text-paragraph font-medium">Total</p>
        </div>
        <div class="text-2xl font-bold ">
          <p>$2000</p>
        </div>
        <div class="flex flex-row justify-between items-center text-paragraph mt-3 pr-10">
          <p class="font-medium">coupon code</p>
          <p class="font-bold text-xl">Apply</p>
        </div>
      </div>
      <div class="mt-20 w-full h-32 absolute z-0"/>
    </div>
  );
}

export default Basket;
