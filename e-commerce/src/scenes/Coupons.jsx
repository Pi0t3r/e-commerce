import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Coupon from "../components/Coupon";
function Coupons() {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div class="bg-ItemHeader6 bg-cover bg-center w-screen h-screen">
        <div class="absolute w-full h-full bg-black/70">
          <div class="mt-24 text-center">
            <h2 class="text-paragraph text-4xl italic">Your coupons</h2>
          </div>
          <div class="flex flex-col justify-center mt-2 mx-2 ">
            <Coupon
              day="5"
              month="August"
              year="2023"
              procent="10"
              code="124862"
            />
            <Coupon
              day="11"
              month="November"
              year="2023"
              procent="25"
              code="123123"
            />
            <Coupon
              day="26"
              month="January"
              year="2023"
              procent="100"
              code="123456"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupons;
