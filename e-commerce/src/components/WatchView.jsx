import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
export const Item = ({ bgimage, price, icon1, icon2, name, model, year }) => {
  return (
    <div class="mt-6">
      <div
        class={`bg-${bgimage} bg-cover bg-center w-56 h-52 rounded-xl mx-auto`}
      />
      <div class="text-white flex flex-row justify-between mx-6 mt-4">
        <h4 class="text-3xl">${price}</h4>
        <ul class="flex flex-row w-1/4 justify-between items-center">
          <li>{icon1}</li>
          <li>{icon2}</li>
        </ul>
      </div>
      <div class="text-white mx-6 mt-4 leading-10">
        <ul>
          <li>
            <p>
              Name: <span class="text-paragraph italic ml-3">{name}</span>
            </p>
          </li>
          <li>
            <p>
              Model: <span class="text-paragraph italic ml-3">{model}</span>
            </p>
          </li>
          <li>
            <p>
              Year:{" "}
              <span class="text-paragraph italic ml-3">Approx. {year}</span>
            </p>
          </li>
        </ul>
      </div>
      <hr class="mx-6 mt-3" />
    </div>
  );
};

function WatchView({ title, image, price, icon1, icon2, name, model, year }) {
  return (
    <div class="bg-ManWomanBackground bg-cover bg-center bg-fixed w-screen h-screen">
      <Nav />
      <Sidebar />
      <div class="absolute w-full h-full bg-black/70 flex flex-col justify-center">
        <div class="mx-5 h-3/4">
          <div class="mb-6">
            <h3 class="text-paragraph text-3xl uppercase italic text-center">
              {title}
            </h3>
          </div>
          <Item
            bgimage={image}
            price={price}
            icon1={icon1}
            icon2={icon2}
            name={name}
            model={model}
            year={year}
          />

          <Item
            bgimage={image}
            price={price}
            icon1={icon1}
            icon2={icon2}
            name={name}
            model={model}
            year={year}
          />
        </div>
      </div>
    </div>
  );
}

export default WatchView;
