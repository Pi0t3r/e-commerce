/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      iphoneSe: "320px",
      GFold: "280px",
    },
    extend: {
      backgroundImage: {
        mainImage: "url(./images/main-image.jpg)",
        BackgroundHeaderImage:
          "url(https://media.gq-magazine.co.uk/photos/5dbc42a78da8f900083b906a/16:9/w_2560%2Cc_limit/20191101-Trailblazers-11.jpg)",
        BuyBackground: "url(./images/BuyBackground.jpg)",
        ItemHeader1:
          "url(https://zegarkistrojny.pl/userdata/public/news/images/74.jpg)",
        ItemHeader2:
          "url(https://static.zegarek.net//imageslib/produkty/duze/zegarek-meski-vostok-europe-energia-rocket-yn84-575o540-energia-rocket-bronze-automatic-3.jpg)",
        ItemHeader3:
          "url(https://janadamski.eu/wp-content/uploads/2020/05/Zegarki_szkieletowe_02.jpg)",
        ItemHeader4:
          "url(https://isokolka.eu/images/stories/2020/10/pazdziernik2/kwarcowy-zegarek-meski-tissot-gentleman-gentleman-t127.410.16.041.00-6.jpg)",
        ItemHeader5:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWAQGyog52I6IwyEiCo2i1owmhffE2oJUpucq3swY30lwkMFNJDR_iK8cHVJZpwuMXso&usqp=CAU)",
        ItemHeader6:
          "url(https://zegarownia.pl/media/catalog/product/z/e/zegarek-meski-maserati-sfida-chronograph-r8871640001_1_1.jpg)",
        Kitty:
          "url('./src/images/kitty__sweet_kitty__by_oldskoolkidz_d3ioy5p-fullview.jpg')",
      },
      height: {
        90: "90vh",
      },
      colors: {
        "Main-text": "rgb(233,228,228)",
        paragraph: "#ADA9A9",
        form: "#FC7575",
        instagram:
          "linear-gradient(#FFDC80,#FCAF45,#F77737,#F56040,#FD1D1D,#E1306C,#C13584,#833AB4,#5B51D8,#405DE6)",
        facebook: "#3b5998",
        mainColor: "#3B47BA",
      },
    },
  },
  plugins: [],
};
