import Header from "../components/Header";
import Offers from "../components/Offers";
import Nav from "../components/Nav";

function MainPage() {
  return (
    <div>
      <Nav />
      <div>
        <Header />
        <Offers />
      </div>
    </div>
  );
}

export default MainPage;
