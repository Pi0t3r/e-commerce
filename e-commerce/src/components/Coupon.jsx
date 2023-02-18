import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function Coupon({ code, procent, day, month, year }) {
  return (
    <div class="mt-3">
      <div class="bg-[#DD5151] w-full h-36 flex flex-row rounded-xl overflow-hidden relative">
        <div class="w-4/5 bg-[#DD5151] h-full flex flex-col">
          <p class="text-Main-text text-xs text-center mt-2 uppercase">
            TimeKeepers
          </p>
          <h3 class="uppercase font-bold text-center text-Main-text text-4xl mt-2">
            Coupon
          </h3>
          <div class="text-Main-text uppercase text-[8px] text-center mt-6">
            <p>
              valid until{" "}
              <span class="font-bold ml-5">
                {month} {day},{year}
              </span>
            </p>
          </div>
          <p class="text-Main-text uppercase text-[8px] text-center mt-3 font-light flex flex-row items-center justify-center">
            Code:
            <span class="font-medium ml-5 text-sm">{code}</span>
            <span class="ml-4 cursor-pointer hover:text-neutral-400 transition-colors">
              <ContentCopyIcon sx={{ fontSize: 15 }} />
            </span>
          </p>
        </div>
        <div class="w-1/5 bg-[#101730] h-full flex items-center justify-center">
          <>
            <h3 class="text-Main-text font-bold text-5xl -rotate-90">
              {procent}%
            </h3>
          </>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
