import { Watches } from "../data/watches";
function ShowWatches() {
  return (
    <div class="w-auto h-96 flex flex-row justify-between flex-wrap mx-20">
      {Watches.map((watch) => (
        <div class="flex flex-col w-52 mb-4">
          <div class="text-right">
            <p class="cursor-pointer">...</p>
          </div>
          <div
            className="w-full h-44 bg-cover bg-center"
            style={{ backgroundImage: `url(${watch.image})` }}
          ></div>
          <div class="py-4">
            <p class="font-medium text-lg">{watch.name}</p>
            <p class="text-slate-500">{watch.Series}</p>
          </div>
          <div>
            <p class="text-slate-500">{watch.ProductCode}</p>
          </div>
          <div>
            <p class="font-medium text-lg">{watch.Price}</p>
          </div>
          <div>
            <p class="font-medium">
              Box: <span class="text-slate-500 font-normal">{watch.Box}</span>
            </p>
            <p class="font-medium">
              Papers:{" "}
              <span class="text-slate-500 font-normal">{watch.Papers}</span>
            </p>
            <p class="font-medium">
              Year: <span class="text-slate-500 font-normal">{watch.Year}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowWatches;
