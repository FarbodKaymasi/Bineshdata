import svgPaths from "./svg-6922b0thay";
import imgExportCsv from "figma:asset/dca72b13d39df8960b8c153d959f6dc14fa8f745.png";
import imgRectangle34624135 from "figma:asset/7af09b4cb4c0bf7914695e4071fc5deddccd276b.png";
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-end justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Yekan_Bakh_FaNum:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black text-nowrap text-right" dir="auto">
        {text}
      </p>
      <Helper />
      <p className="absolute font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[20px] left-[306px] not-italic text-[16px] text-black text-nowrap text-right top-[47px] translate-x-[-100%]" dir="auto">
        {text1}
      </p>
    </div>
  );
}

function Helper() {
  return (
    <div className="bg-white h-[54px] relative rounded-[11px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-end justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Yekan_Bakh_FaNum:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black text-nowrap text-right" dir="auto">
        تاریخ تولد
      </p>
      <Helper />
      <p className="absolute font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[20px] left-[304px] not-italic text-[16px] text-black text-nowrap text-right top-[47px] translate-x-[-100%]" dir="auto">
        1404/08/23
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-end min-h-px min-w-px relative shrink-0">
      <p className="font-['Yekan_Bakh_FaNum:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black text-nowrap text-right" dir="auto">
        نام*
      </p>
      <Helper />
      <p className="absolute font-['Yekan_Bakh_FaNum:Light',sans-serif] h-[20px] leading-[20px] left-[308px] not-italic text-[16px] text-black text-right top-[47px] translate-x-[-100%] w-[108px]" dir="auto">
        نام را وارد کنید
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[15px] items-center left-[72px] top-[294px] w-[1016px]">
      <Frame2 />
      <Helper1 text="نام خانوادگی*" text1="نام خانوادگی را وارد کنید" />
      <Frame />
    </div>
  );
}

function Group6() {
  return (
    <div className="h-[54px] relative shrink-0 w-[328.667px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328.667 54">
        <g id="Group 1000003410">
          <rect fill="var(--fill-0, white)" height="53" id="Rectangle 34624250" rx="10.5" stroke="var(--stroke-0, #E9E9E9)" width="327.667" x="0.5" y="0.5" />
          <path clipRule="evenodd" d={svgPaths.p391b6fc0} fill="var(--fill-0, #969696)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-end justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Yekan_Bakh_FaNum:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black text-nowrap text-right" dir="auto">
        نقش در سیستم*‌
      </p>
      <Group6 />
      <p className="absolute font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[20px] left-[304px] not-italic text-[16px] text-black text-nowrap text-right top-[47px] translate-x-[-100%]" dir="auto">
        انتخاب کنید
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-end min-h-px min-w-px relative shrink-0">
      <p className="font-['Yekan_Bakh_FaNum:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black text-nowrap text-right" dir="auto">
        شماره موبایل*
      </p>
      <Helper />
      <p className="absolute font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[20px] left-[308px] not-italic text-[16px] text-black text-nowrap text-right top-[47px] translate-x-[-100%]" dir="auto">
        شماره موبایل را وارد کنید
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[15px] items-center left-[72px] top-[390px] w-[1016px]">
      <Frame3 />
      <Helper1 text="سمت در شرکت*" text1="سمت را وارد کنید" />
      <Frame1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute h-[11px] left-[77px] top-[39px] w-[10px]">
      <div className="absolute inset-[0_0_-5.76%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11.6332">
          <g id="Group 1000003322">
            <line id="Line 310" stroke="var(--stroke-0, black)" x1="9.38698" x2="0.386979" y1="0.316619" y2="11.3166" />
            <line id="Line 311" stroke="var(--stroke-0, black)" transform="matrix(0.633238 0.773957 0.773957 -0.633238 1 0)" x2="14.2127" y1="-0.5" y2="-0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[929px] top-[103px]">
      <div className="absolute bg-[#e6f3ff] h-[161px] left-[929px] rounded-[10px] top-[103px] w-[158.962px]" />
      <p className="absolute font-['Vazirmatn:Black',sans-serif] font-black h-[48.911px] leading-[20px] left-[1009.5px] text-[#0085ff] text-[100px] text-center top-[160.06px] translate-x-[-50%] w-[46.873px]" dir="auto">
        م
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[403px] top-[139px]">
      <div className="absolute bg-[#0e1b27] h-[46.298px] left-[403px] rounded-[10px] top-[139px] w-[180px]" />
      <div className="absolute flex flex-col font-['Yekan_Bakh_FaNum:SemiBold',sans-serif] h-[20.426px] justify-center leading-[0] left-[510.5px] not-italic text-[24px] text-center text-white top-[calc(50%-140.29px)] translate-x-[-50%] translate-y-[-50%] w-[145px]">
        <p className="leading-[24px]" dir="auto">
          انتخاب کنید
        </p>
      </div>
      <div className="absolute h-[27.54px] left-[414.04px] top-[148.98px] w-[20.225px]" data-name="Export CSV">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgExportCsv} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[353px] top-[calc(50%-118px)] translate-y-[-50%]">
      <div className="absolute flex flex-col font-['Yekan_Bakh_FaNum:Light',sans-serif] justify-center leading-[normal] left-[498px] not-italic text-[0px] text-black text-center top-[213px] translate-x-[-50%] translate-y-[-50%] w-[290px]">
        <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] mb-0 text-[16px]" dir="rtl">
          عکس خود را در اینجا بکشید و رها کنید
        </p>
        <p className="text-[10px]" dir="rtl">
          فقط فرمت‌های JPG / PNG کمتر از 10 مگ مجاز هستند
        </p>
      </div>
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[76.5px] top-[103px]">
      <div className="absolute h-[160px] left-[76.5px] top-[103px] w-[832.163px]">
        <img alt="" className="block max-w-none size-full" height="160" src={imgRectangle34624135} width="832.163" />
      </div>
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(50%-423.5px)] top-[516px] translate-x-[-50%]">
      <div className="absolute bg-[#0e1b27] h-[54px] left-[calc(50%-423.5px)] rounded-[11px] top-[516px] translate-x-[-50%] w-[169px]" />
      <p className="absolute font-['Yekan_Bakh_FaNum:SemiBold',sans-serif] leading-[20px] left-[calc(50%-385px)] not-italic text-[20px] text-nowrap text-right text-white top-[calc(50%+227.5px)] translate-x-[-100%]" dir="auto">
        ثبت مدیر
      </p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.18)] size-full" data-name="سفارشات">
      <Frame4 />
      <Frame5 />
      <p className="absolute font-['Yekan_Bakh_FaNum:Bold',sans-serif] h-[26px] leading-[20px] left-1/2 not-italic text-[25px] text-black text-center top-[37px] translate-x-[-50%] w-[152px]" dir="auto">
        افزودن کاربر
      </p>
      <Group4 />
      <Group5 />
      <Group2 />
      <Group3 />
    </div>
  );
}