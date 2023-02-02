import Header from "../components/Header";
import Offers from "../components/Offers";
import Nav from "../components/Nav";
import Buy from "../components/Buy";
import Sidebar from "../components/Sidebar";

function MainPage() {
  return (
    <div>
      <Nav />
      <div>
        <Header />
        <Offers />
        <Buy />
        <Sidebar />
      </div>
    </div>
  );
}

export default MainPage;
