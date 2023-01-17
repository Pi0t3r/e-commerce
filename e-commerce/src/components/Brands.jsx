const Brand = ({ brandImage }) => {
  return (
    <div>
      <p class="text-black">{brandImage}</p>
    </div>
  );
};

function Brands() {
  return (
    <div class="bg-white w-3/4 h-16 mx-auto flex flex-row justify-between items-center px-6">
      <Brand
        brandImage={
          <img
            class="h-10"
            src="https://1.bp.blogspot.com/-_bJHdIlHf1E/Wnti4pmtMyI/AAAAAAAArGw/-BJFsHjYQjsmwm5iBe8NEGQnccKjExUAQCLcBGAs/s3200/2018-Rolex-Logo.jpg"
          />
        }
      />
      <Brand
        brandImage={
          <img
            class="h-20"
            src="https://www.alange-soehne.com/als/logo-og.png"
          />
        }
      />
      <Brand
        brandImage={
          <img
            class="h-10"
            src="https://logos-download.com/wp-content/uploads/2016/09/Vacheron_Constantin_logo_logotype-700x248.png"
          />
        }
      />
      <Brand
        brandImage={
          <img
            class="h-16"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Logo_Audemars_Piguet.svg/1200px-Logo_Audemars_Piguet.svg.png"
          />
        }
      />
      <Brand
        brandImage={
          <img
            class="h-10"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Patek_Philippe_SA_logo.svg/800px-Patek_Philippe_SA_logo.svg.png"
          />
        }
      />
    </div>
  );
}

export default Brands;
