import svgPaths from "./svg-1u08o01wy8";
import imgTotalSales from "figma:asset/7c6c09893427e0655558b6434622276829f9f89a.png";
import imgReception from "figma:asset/337be8f80b3479816934a46ca3d67bec298f14ba.png";
import imgWarehouse from "figma:asset/8d8e689ad533c00931f10342942d54c033cc2c0b.png";
import imgExchange from "figma:asset/3dd8fdb3c3da761d8dbe3480a06a5fd018234b97.png";
import imgAi from "figma:asset/6f62077e9b36dda19277327710da8a31c9b1ed5f.png";
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-start px-[2px] py-0 relative shrink-0">
      <div className="flex flex-col font-['Yekan_Bakh_FaNum:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181616] text-[16px] text-nowrap">
        <p className="leading-[normal]" dir="auto">
          {text}
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[20px]">
      <div className="bg-[#adadad] h-[2px] rounded-[2px] shrink-0 w-full" />
      <div className="bg-[#adadad] h-[2px] rounded-[2px] shrink-0 w-full" />
      <div className="bg-[#adadad] h-[2px] rounded-[2px] shrink-0 w-full" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[calc(50%-15px)] px-[2px] py-0 top-0 translate-x-[-50%] w-[210px]">
      <Frame18 />
      <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#969696] text-[12px] text-nowrap" dir="auto">
        منوی اصلی
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[240px]">
      <Frame17 />
    </div>
  );
}

function MaterialSymbolsSpaceDashboardOutline() {
  return (
    <div className="h-[15px] relative shrink-0 w-[21px]" data-name="material-symbols:space-dashboard-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 15">
        <g id="material-symbols:space-dashboard-outline">
          <path d={svgPaths.p1e1a0f00} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[11px] items-center justify-center relative shrink-0">
      <Text text="داشبورد" />
      <MaterialSymbolsSpaceDashboardOutline />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col h-[53px] items-end justify-center pl-[8px] pr-[24px] py-[8px] relative rounded-[8px] shrink-0 w-[212px]">
      <Frame1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center px-px py-0 relative shrink-0">
      <div className="relative shrink-0 size-[19px]" data-name="Total Sales">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgTotalSales} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[11px] items-center justify-center relative shrink-0">
      <Text text="فروش" />
      <Frame16 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#ebeef0] content-stretch flex flex-col h-[53px] items-end justify-center pl-[8px] pr-[24px] py-[8px] relative rounded-[8px] shrink-0 w-[212px]">
      <Frame3 />
    </div>
  );
}

function FluentMdl2Shop() {
  return (
    <div className="h-[16px] relative w-[13px]" data-name="fluent-mdl2:shop">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 16">
        <g clipPath="url(#clip0_2001_304)" id="fluent-mdl2:shop">
          <path d={svgPaths.pc452000} fill="var(--fill-0, #111111)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2001_304">
            <rect fill="white" height="16" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PhShoppingCart() {
  return (
    <div className="content-stretch flex items-start overflow-clip px-[4px] py-0 relative" data-name="ph:shopping-cart">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <FluentMdl2Shop />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[11px] items-center justify-center relative shrink-0">
      <Text text="محصولات" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <PhShoppingCart />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col h-[53px] items-end justify-center pl-[8px] pr-[24px] py-[8px] relative rounded-[8px] shrink-0 w-[212px]">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[11px] items-center justify-center relative shrink-0">
      <Text text="مشتریان" />
      <div className="relative shrink-0 size-[20px]" data-name="Reception">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgReception} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-[53px] items-end justify-center pl-[8px] pr-[24px] py-[8px] relative rounded-[8px] shrink-0 w-[212px]">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[11px] items-center justify-center relative shrink-0">
      <Text text="انبار" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="relative size-[22px]" data-name="Warehouse">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgWarehouse} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pl-[8px] pr-[24px] py-[19px] relative rounded-[8px] shrink-0 w-[212px]">
      <Frame9 />
    </div>
  );
}

function MdiGraphBellCurveCumulative() {
  return (
    <div className="content-stretch flex items-start overflow-clip px-[4px] py-0 relative shrink-0" data-name="mdi:graph-bell-curve-cumulative">
      <div className="relative shrink-0 size-[19px]" data-name="Exchange">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgExchange} />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
      <Text text="مالی" />
      <MdiGraphBellCurveCumulative />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pl-[8px] pr-[24px] py-[19px] relative rounded-[8px] shrink-0 w-[212px]">
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start px-[2px] py-0 relative shrink-0">
      <div className="flex flex-col font-['Yekan_Bakh_FaNum:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181616] text-[16px] text-nowrap text-right">
        <p className="leading-[normal]" dir="auto">
          هوض‌مصنوعی
        </p>
      </div>
    </div>
  );
}

function MdiGraphBellCurveCumulative1() {
  return (
    <div className="content-stretch flex items-start overflow-clip px-[3px] py-0 relative shrink-0" data-name="mdi:graph-bell-curve-cumulative">
      <div className="relative shrink-0 size-[20px]" data-name="AI">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgAi} />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <Frame11 />
      <MdiGraphBellCurveCumulative1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pl-[8px] pr-[24px] py-[19px] relative rounded-[8px] shrink-0 w-[212px]">
      <Frame12 />
    </div>
  );
}

function DashboardTabs() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end justify-center relative shrink-0" data-name="Dashboard-tabs">
      <Frame2 />
      <Frame4 />
      <Frame15 />
      <Frame5 />
      <Frame6 />
      <Frame14 />
      <Frame13 />
    </div>
  );
}

export default function DashboardMainmenu() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative size-full" data-name="Dashboard-mainmenu">
      <Frame />
      <DashboardTabs />
    </div>
  );
}