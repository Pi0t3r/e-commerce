import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const Button = ({ text }) => {
  return <button class="text-paragraph font-bold text-xl">{text}</button>;
};

function ItemCart({ name, money, code }) {
  return (
    <div class="w-full h-40 flex flex-row px-2">
      <div class="w-1/2 h-full flex items-center justify-center">
        <div class="bg-Item bg-center bg-cover w-[90%] h-[90%] rounded-xl drop-shadow-[4px_10px_5px_rgba(0,0,0,0.25)]" />
      </div>
      <div class="flex flex-col w-1/2">
        <div class="flex flex-row justify-between w-full text-paragraph mt-3">
          <p>#{code}</p>
          <button>
            <DeleteForeverOutlinedIcon />
          </button>
        </div>
        <div class="font-medium text-xl mt-4">
          <h3>{name}</h3>
        </div>
        <div class="flex flex-row justify-between mt-6 items-center">
          <p class="font-medium text-xl">${money}</p>
          <div class="flex flex-row mr-5 w-[40%] justify-between items-center">
            <Button text="-" />
            <p class="font-medium text-xl">1</p>
            <Button text="+" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
