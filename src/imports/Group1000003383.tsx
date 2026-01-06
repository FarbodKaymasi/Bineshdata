import svgPaths from "./svg-2q37s262cd";
import imgFrontViewOfAnOldManPuttingHandsUnderChin from "figma:asset/fd599b4efab26b460360c75c74a3c925f302c70f.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[723px] left-0 top-0 w-[377px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 377 723">
          <path d={svgPaths.p1ab07600} fill="var(--fill-0, white)" id="Rectangle 34624266" stroke="var(--stroke-0, #D5D5D5)" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute h-[78px] left-px top-px w-[375px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 78">
          <path d={svgPaths.p179b0a80} fill="var(--fill-0, #F9FAFC)" id="Rectangle 34624267" />
        </svg>
      </div>
      <div className="absolute h-0 left-0 top-[79px] w-[376.473px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376.473 0.5">
            <line id="Line 333" stroke="var(--stroke-0, #D5D5D5)" strokeWidth="0.5" x2="376.473" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[576px] left-[13px] top-[81px] w-[351px]" data-name="Front view of an old man putting hands under chin">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[129.47%] left-[-6.8%] max-w-none top-[-14.87%] w-[113.91%]" src={imgFrontViewOfAnOldManPuttingHandsUnderChin} />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[13px] top-[659px]">
      <div className="absolute bg-[#202839] h-[52px] left-[13px] rounded-[8px] top-[659px] w-[351px]" />
      <p className="absolute font-['Yekan_Bakh_FaNum:ExtraBold',sans-serif] h-[20px] leading-[normal] left-[calc(50%+0.21px)] not-italic text-[20px] text-center text-white top-[670px] translate-x-[-50%] w-[49.263px]" dir="auto">
        تایید
      </p>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
      <p className="absolute font-['Yekan_Bakh_FaNum:Bold',sans-serif] leading-[normal] left-[calc(50%+73.5px)] not-italic text-[#272525] text-[25px] text-nowrap text-right top-[22px] translate-x-[-100%]" dir="auto">
        فروردین 1400
      </p>
      <Group2 />
    </div>
  );
}