import { Watches } from "../data/watches"
function ShowWatches() {
  return (
    {Watches.map((watch ) => (
      <div>
            <div>
                <a>...</a>
            </div>
            <div>
                {watch.image}
            </div>
            <div>
                <p>{watch.name}</p>
            </div>
        </div>
    ))}
  )
}

export default ShowWatches;
