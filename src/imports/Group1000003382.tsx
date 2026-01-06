import svgPaths from "./svg-1ihafqt1qx";
import clsx from "clsx";
import imgImage148 from "figma:asset/b683c2cdbc73444a5cddae9779f074b63bef9d6b.png";
type ImageProps = {
  additionalClassNames?: string;
};

function Image({ children, additionalClassNames = "" }: React.PropsWithChildren<ImageProps>) {
  return (
    <div className={clsx("absolute h-[360px] rounded-[10px] top-[98px] w-[328px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">{children}</div>
    </div>
  );
}
type IconProps = {
  additionalClassNames?: string;
};

function Icon({ additionalClassNames = "" }: IconProps) {
  return (
    <div className={clsx("absolute h-[7px] top-[46px] w-[11px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
        <path clipRule="evenodd" d={svgPaths.p259a5800} fill="var(--fill-0, #272525)" fillRule="evenodd" id="Icon" />
      </svg>
    </div>
  );
}
type ButtonProps = {
  additionalClassNames?: string;
};

function Button({ additionalClassNames = "" }: ButtonProps) {
  return (
    <div className={clsx("absolute bg-white bottom-[85.14%] rounded-[8px] top-[5.52%] translate-x-[-50%]", additionalClassNames)}>
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[4px] rounded-[inherit] size-full" />
      <div aria-hidden="true" className="absolute border-[#d5d5d5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Yekan_Bakh_FaNum:SemiBold',sans-serif] gap-[11px] h-[240px] items-end leading-[normal] left-[752px] not-italic text-[#565656] text-[15px] text-right top-[calc(50%-77.5px)] translate-y-[-50%] w-[75px]">
      <p className="min-w-full relative shrink-0 w-[min-content]" dir="auto">
        امروز
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" dir="auto">
        این هفته
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" dir="auto">
        هفته قبل
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" dir="auto">
        این ماه
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" dir="auto">
        ماه قبل
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" dir="auto">
        امسال
      </p>
      <p className="relative shrink-0 text-nowrap" dir="auto">
        همه زمان‌ها
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[637px] top-0">
      <div className="absolute h-[471px] left-[637px] top-0 w-[217px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 217 471">
          <path d={svgPaths.p2c78c500} fill="var(--fill-0, white)" id="Rectangle 34624269" stroke="var(--stroke-0, #D5D5D5)" strokeWidth="0.5" />
        </svg>
      </div>
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[16px] top-[98px]">
      <Image additionalClassNames="left-[16px]">
        <img alt="" className="absolute h-[121.94%] left-[-1.87%] max-w-none top-[-21.94%] w-[206.41%]" src={imgImage148} />
      </Image>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[370px] top-[98px]">
      <Image additionalClassNames="left-[370px]">
        <img alt="" className="absolute h-[121.94%] left-[-106.41%] max-w-none top-[-21.94%] w-[206.41%]" src={imgImage148} />
      </Image>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[471px] left-0 top-0 w-[716px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 716 471">
          <path d={svgPaths.p1f61f80} fill="var(--fill-0, white)" id="Rectangle 34624266" stroke="var(--stroke-0, #D5D5D5)" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bg-[#f9fafc] h-[138px] left-px rounded-tl-[8px] top-px w-[714px]" />
      <div className="absolute h-0 left-0 top-[91px] w-[715px]">
        <div className="absolute inset-[-0.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 715 0.5">
            <line id="Line 333" stroke="var(--stroke-0, #D5D5D5)" strokeWidth="0.5" x2="715" y1="0.25" y2="0.25" />
          </svg>
        </div>
      </div>
      <Group />
      <Group1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[443px] top-[26px]">
      <Button additionalClassNames="left-[calc(50%+107px)] w-[182px]" />
      <p className="absolute font-['Yekan_Bakh_FaNum:Bold',sans-serif] leading-[normal] left-[calc(50%+189px)] not-italic text-[#272525] text-[25px] text-nowrap text-right top-[31px] translate-x-[-100%]" dir="auto">
        فروردین 1400
      </p>
      <Icon additionalClassNames="left-[451px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[83px] top-[26px]">
      <Button additionalClassNames="left-[calc(50%-273px)] w-[142px]" />
      <p className="absolute font-['Yekan_Bakh_FaNum:Bold',sans-serif] leading-[normal] left-[calc(50%-213px)] not-italic text-[#272525] text-[25px] text-nowrap text-right top-[31px] translate-x-[-100%]" dir="auto">
        آبان 1405
      </p>
      <Icon additionalClassNames="left-[94px]" />
    </div>
  );
}

export default function Group6() {
  return (
    <div className="relative size-full">
      <Group3 />
      <Group2 />
      <Group5 />
      <Group4 />
    </div>
  );
}