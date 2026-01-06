function Icon() {
  return (
    <div className="h-[188.8px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 428.4 188.8">
        <path d="M0 0H428.4V188.8L0 0Z" fill="var(--fill-0, #1A2030)" id="Vector" />
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[188.8px] items-start left-[1.6px] top-[1.6px] w-[428.4px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[31.988px] left-[173.86px] top-[80px] w-[83.888px]" data-name="Paragraph">
      <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[32px] left-[42px] not-italic text-[24px] text-center text-nowrap text-white top-[-0.2px] translate-x-[-50%]" dir="auto">
        تم اصلی
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-gradient-to-b from-[#1a1f2e] h-[192px] relative rounded-[16px] shrink-0 to-[#223265] w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container />
        <Paragraph />
      </div>
      <div aria-hidden="true" className="absolute border-[#1a2031] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_0px_4px_rgba(90,154,149,0.2),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Button">
      <Container1 />
    </div>
  );
}