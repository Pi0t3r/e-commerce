import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useState } from "react";
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} class="text-paragraph font-bold text-xl">
      {text}
    </button>
  );
};

function ItemCart({ name, price, code, pricePerWatch }) {
  const [count, setCount] = useState(1);
  const [money, setMoney] = useState(price);
  const increment = () => {
    setCount(count + 1);
    setMoney(pricePerWatch + money);
  };

  const decrement = () => {
    setCount(count - 1);
    setMoney(money - pricePerWatch);
  };
  return (
    <div class="w-full h-40 flex flex-row px-2 my-4">
      <div class="w-1/2 h-full flex items-center justify-center">
        <div class="bg-Item bg-center bg-cover w-[90%] h-[90%] rounded-xl drop-shadow-[4px_10px_5px_rgba(0,0,0,0.25)] tablet:w-3/4 tablet:h-full" />
      </div>
      <div class="flex flex-col w-1/2">
        <div class="flex flex-row justify-between w-full text-paragraph mt-3">
          <p>#{code}</p>
          <button>
            <DeleteForeverOutlinedIcon />
          </button>
        </div>
        <div class="font-medium text-xl mt-4 text-Main-text">
          <h3>{name}</h3>
        </div>
        <div class="flex flex-row justify-between mt-6 items-center text-Main-text">
          <p class="font-medium text-xl">${money}</p>
          <div class="flex flex-row mr-5 w-[40%] justify-between items-center">
            <Button text="-" onClick={decrement} />
            <p class="font-medium text-xl">{count}</p>
            <Button text="+" onClick={increment} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
