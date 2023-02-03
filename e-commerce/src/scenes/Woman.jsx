import WatchView from "../components/WatchView";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

function Woman() {
  return (
    <div>
      <WatchView
        title="woman"
        icon1={<FavoriteIcon />}
        icon2={<LocalMallOutlinedIcon />}
        image="url('./src/images/image1.jpg')"
        price="8000"
        name="Oris"
        model="Aquis Date"
        year="2019"
      />
    </div>
  );
}

export default Woman;
