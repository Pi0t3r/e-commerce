const Item = () => {
  return (
    <div class="w-28 h-36">
      <div class="w-28 h-28 bg-center bg-cover"></div>
    </div>
  );
};

function HeaderContent() {
  return (
    <div class="text-white flex flex-col justify-center w-full text-center mt-20">
      <div>
        <h1 class="text-5xl px-60">Discover The Exceptional Watches</h1>
        <p class="px-72 text-slate-400">
          Every watch is meticulousy inspected and prepared by our highly
          trained, manufacturer-accredited watchmakers, ensuring only the very
          best quality
        </p>
      </div>
      <div class="flex flex-row w-full justify-center">
        <div>
          <img class="bg-ItemHeader1 w-28 h-28 bg-center bg-cover" />
        </div>
        <div>
          <img class="bg-ItemHeader2 w-28 h-28 bg-center bg-cover" />
        </div>
        <div>
          <img class="bg-ItemHeader3 w-28 h-28 bg-center bg-cover" />
        </div>
        <div>
          <img class="bg-ItemHeader4 w-28 h-28 bg-center bg-cover" />
        </div>
        <div>
          <img class="bg-ItemHeader5 w-28 h-28 bg-center bg-cover" />
        </div>
        <div>
          <img class="bg-ItemHeader6 w-28 h-28 bg-center bg-cover" />
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
