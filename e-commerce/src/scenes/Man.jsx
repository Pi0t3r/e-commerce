import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import WatchView from "../components/WatchView";
function Man() {
  return (
    <div>
      <WatchView
        title="man"
        icon1={<FavoriteIcon />}
        icon2={<LocalMallOutlinedIcon />}
        image="url('./src/images/image1.jpg')"
        price="5000"
        name="Rolex"
        model="Day-Date"
        year="2020"
      />
    </div>
  );
}

export default Man;
