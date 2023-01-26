import Header from "../components/Header";
import Offers from "../components/Offers";
import Nav from "../components/Nav";
import Buy from "../components/Buy";

function MainPage() {
  return (
    <div>
      <Nav />
      <div>
        <Header />
        <Offers />
        <Buy />
      </div>
    </div>
  );
}

export default MainPage;
