import svgPaths from "./svg-71crta735w";
import clsx from "clsx";

function Container56({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[426.4px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}
type Button13Props = {
  additionalClassNames?: string;
};

function Button13({ children, additionalClassNames = "" }: React.PropsWithChildren<Button13Props>) {
  return (
    <div className={clsx("bg-white h-[41.6px] relative rounded-[10px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[12.8px] pr-[0.8px] py-[0.8px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return <Wrapper4 additionalClassNames={clsx("h-[28px] relative shrink-0", additionalClassNames)}>{children}</Wrapper4>;
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper4 additionalClassNames={clsx("relative rounded-[10px] shrink-0", additionalClassNames)}>{children}</Wrapper4>;
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[6px] px-[6px] relative size-full">{children}</div>
    </div>
  );
}

function Container55({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[352px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[16px] px-[16px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Container54({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f7f9fb] h-[74.4px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[16px] px-[16px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Container53({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[41.6px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[0.013px] pr-0 py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 11.6667">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonText({ text, additionalClassNames = "" }: ButtonTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[40px] items-center justify-center p-[0.8px] rounded-[10px] top-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#585757] text-[14px] text-center text-nowrap">{text}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText({ text, additionalClassNames = "" }: ContainerTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[32px] items-center justify-center top-0", additionalClassNames)}>
      <p className="font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#585757] text-[14px] text-center text-nowrap" dir="auto">
        {text}
      </p>
    </div>
  );
}

function Button2() {
  return (
    <Wrapper1>
      <Icon1 />
    </Wrapper1>
  );
}

function Icon1() {
  return (
    <Wrapper>
      <path d={svgPaths.p3a0d2780} id="Vector" stroke="var(--stroke-0, #585757)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper>
  );
}

function Button() {
  return (
    <Wrapper1>
      <Icon />
    </Wrapper1>
  );
}

function Icon() {
  return (
    <Wrapper>
      <path d={svgPaths.p324d0480} id="Vector" stroke="var(--stroke-0, #585757)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </Wrapper>
  );
}

function Text() {
  return (
    <Wrapper3 additionalClassNames="w-[67.138px]">
      <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[28px] left-[34px] not-italic text-[#1c1c1c] text-[18px] text-center top-0 translate-x-[-50%] w-[68px]" dir="auto">
        دی 1404
      </p>
    </Wrapper3>
  );
}

function Button1() {
  return (
    <Button13 additionalClassNames="w-[92.738px]">
      <Text />
    </Button13>
  );
}

function Container() {
  return (
    <Container53>
      <Button />
      <Button1 />
      <Button2 />
    </Container53>
  );
}

function Container1() {
  return (
    <Container54>
      <Container />
    </Container54>
  );
}

function Container2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <ContainerText text="ش" additionalClassNames="left-[253.73px] w-[34.275px]" />
      <ContainerText text="ی" additionalClassNames="left-[211.44px] w-[34.288px]" />
      <ContainerText text="د" additionalClassNames="left-[169.15px] w-[34.288px]" />
      <ContainerText text="س" additionalClassNames="left-[126.86px] w-[34.288px]" />
      <ContainerText text="چ" additionalClassNames="left-[84.57px] w-[34.288px]" />
      <ContainerText text="پ" additionalClassNames="left-[42.29px] w-[34.288px]" />
      <ContainerText text="ج" additionalClassNames="left-0 w-[34.288px]" />
    </div>
  );
}

function Container3() {
  return <div className="absolute h-[40px] left-[253.73px] top-0 w-[34.275px]" data-name="Container" />;
}

function Container4() {
  return <div className="absolute h-[40px] left-[211.44px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container5() {
  return <div className="absolute h-[40px] left-[169.15px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container6() {
  return <div className="absolute h-[40px] left-[126.86px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container7() {
  return <div className="absolute h-[40px] left-[84.57px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container8() {
  return <div className="absolute h-[40px] left-[42.29px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container9() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <ButtonText text="1" additionalClassNames="left-0 w-[34.288px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <ButtonText text="2" additionalClassNames="left-[253.73px] w-[34.275px]" />
      <ButtonText text="3" additionalClassNames="left-[211.44px] w-[34.288px]" />
      <ButtonText text="4" additionalClassNames="left-[169.15px] w-[34.288px]" />
      <ButtonText text="5" additionalClassNames="left-[126.86px] w-[34.288px]" />
      <ButtonText text="6" additionalClassNames="left-[84.57px] w-[34.288px]" />
      <ButtonText text="7" additionalClassNames="left-[42.29px] w-[34.288px]" />
      <ButtonText text="8" additionalClassNames="left-0 w-[34.288px]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-center left-[126.86px] p-[0.8px] rounded-[10px] top-0 w-[34.288px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#1e3a5f] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e3a5f] text-[14px] text-center text-nowrap">12</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <ButtonText text="9" additionalClassNames="left-[253.73px] w-[34.275px]" />
      <ButtonText text="10" additionalClassNames="left-[211.44px] w-[34.288px]" />
      <ButtonText text="11" additionalClassNames="left-[169.15px] w-[34.288px]" />
      <Button3 />
      <ButtonText text="13" additionalClassNames="left-[84.57px] opacity-30 w-[34.288px]" />
      <ButtonText text="14" additionalClassNames="left-[42.29px] opacity-30 w-[34.288px]" />
      <ButtonText text="15" additionalClassNames="left-0 opacity-30 w-[34.288px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <ButtonText text="16" additionalClassNames="left-[253.73px] opacity-30 w-[34.275px]" />
      <ButtonText text="17" additionalClassNames="left-[211.44px] opacity-30 w-[34.288px]" />
      <ButtonText text="18" additionalClassNames="left-[169.15px] opacity-30 w-[34.288px]" />
      <ButtonText text="19" additionalClassNames="left-[126.86px] opacity-30 w-[34.288px]" />
      <ButtonText text="20" additionalClassNames="left-[84.57px] opacity-30 w-[34.288px]" />
      <ButtonText text="21" additionalClassNames="left-[42.29px] opacity-30 w-[34.288px]" />
      <ButtonText text="22" additionalClassNames="left-0 opacity-30 w-[34.288px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <ButtonText text="23" additionalClassNames="left-[253.73px] opacity-30 w-[34.275px]" />
      <ButtonText text="24" additionalClassNames="left-[211.44px] opacity-30 w-[34.288px]" />
      <ButtonText text="25" additionalClassNames="left-[169.15px] opacity-30 w-[34.288px]" />
      <ButtonText text="26" additionalClassNames="left-[126.86px] opacity-30 w-[34.288px]" />
      <ButtonText text="27" additionalClassNames="left-[84.57px] opacity-30 w-[34.288px]" />
      <ButtonText text="28" additionalClassNames="left-[42.29px] opacity-30 w-[34.288px]" />
      <ButtonText text="29" additionalClassNames="left-0 opacity-30 w-[34.288px]" />
    </div>
  );
}

function Container14() {
  return <div className="absolute h-[40px] left-[211.44px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container15() {
  return <div className="absolute h-[40px] left-[169.15px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container16() {
  return <div className="absolute h-[40px] left-[126.86px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container17() {
  return <div className="absolute h-[40px] left-[84.57px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container18() {
  return <div className="absolute h-[40px] left-[42.29px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container19() {
  return <div className="absolute h-[40px] left-0 top-0 w-[34.288px]" data-name="Container" />;
}

function Container20() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <ButtonText text="30" additionalClassNames="left-[253.73px] opacity-30 w-[34.275px]" />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[280px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <Container55>
      <Container2 />
      <Container21 />
    </Container55>
  );
}

function Container23() {
  return (
    <Container56>
      <Container1 />
      <Container22 />
    </Container56>
  );
}

function Text1() {
  return (
    <Wrapper3 additionalClassNames="w-[65.338px]">
      <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[28px] left-[33px] not-italic text-[#1c1c1c] text-[18px] text-center top-0 translate-x-[-50%] w-[66px]" dir="auto">
        آذر 1404
      </p>
    </Wrapper3>
  );
}

function Button4() {
  return (
    <Button13 additionalClassNames="w-[90.938px]">
      <Text1 />
    </Button13>
  );
}

function Container24() {
  return (
    <Container53>
      <Button />
      <Button4 />
      <Button2 />
    </Container53>
  );
}

function Container25() {
  return (
    <Container54>
      <Container24 />
    </Container54>
  );
}

function Container26() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <ContainerText text="ش" additionalClassNames="left-[253.72px] w-[34.275px]" />
      <ContainerText text="ی" additionalClassNames="left-[211.44px] w-[34.288px]" />
      <ContainerText text="د" additionalClassNames="left-[169.15px] w-[34.288px]" />
      <ContainerText text="س" additionalClassNames="left-[126.86px] w-[34.288px]" />
      <ContainerText text="چ" additionalClassNames="left-[84.58px] w-[34.288px]" />
      <ContainerText text="پ" additionalClassNames="left-[42.29px] w-[34.288px]" />
      <ContainerText text="ج" additionalClassNames="left-0 w-[34.288px]" />
    </div>
  );
}

function Container27() {
  return <div className="absolute h-[40px] left-[253.72px] top-0 w-[34.275px]" data-name="Container" />;
}

function Container28() {
  return <div className="absolute h-[40px] left-[211.44px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container29() {
  return <div className="absolute h-[40px] left-[169.15px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container30() {
  return <div className="absolute h-[40px] left-[126.86px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container31() {
  return <div className="absolute h-[40px] left-[84.58px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container32() {
  return <div className="absolute h-[40px] left-[42.29px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container33() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <ButtonText text="1" additionalClassNames="left-0 w-[34.288px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <ButtonText text="2" additionalClassNames="left-[253.72px] w-[34.275px]" />
      <ButtonText text="3" additionalClassNames="left-[211.44px] w-[34.288px]" />
      <ButtonText text="4" additionalClassNames="left-[169.15px] w-[34.288px]" />
      <ButtonText text="5" additionalClassNames="left-[126.86px] w-[34.288px]" />
      <ButtonText text="6" additionalClassNames="left-[84.58px] w-[34.288px]" />
      <ButtonText text="7" additionalClassNames="left-[42.29px] w-[34.288px]" />
      <ButtonText text="8" additionalClassNames="left-0 w-[34.288px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <ButtonText text="9" additionalClassNames="left-[253.72px] w-[34.275px]" />
      <ButtonText text="10" additionalClassNames="left-[211.44px] w-[34.288px]" />
      <ButtonText text="11" additionalClassNames="left-[169.15px] w-[34.288px]" />
      <ButtonText text="12" additionalClassNames="left-[126.86px] w-[34.288px]" />
      <ButtonText text="13" additionalClassNames="left-[84.58px] w-[34.288px]" />
      <ButtonText text="14" additionalClassNames="left-[42.29px] w-[34.288px]" />
      <ButtonText text="15" additionalClassNames="left-0 w-[34.288px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <ButtonText text="16" additionalClassNames="left-[253.72px] w-[34.275px]" />
      <ButtonText text="17" additionalClassNames="left-[211.44px] w-[34.288px]" />
      <ButtonText text="18" additionalClassNames="left-[169.15px] w-[34.288px]" />
      <ButtonText text="19" additionalClassNames="left-[126.86px] w-[34.288px]" />
      <ButtonText text="20" additionalClassNames="left-[84.58px] w-[34.288px]" />
      <ButtonText text="21" additionalClassNames="left-[42.29px] w-[34.288px]" />
      <ButtonText text="22" additionalClassNames="left-0 w-[34.288px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <ButtonText text="23" additionalClassNames="left-[253.72px] w-[34.275px]" />
      <ButtonText text="24" additionalClassNames="left-[211.44px] w-[34.288px]" />
      <ButtonText text="25" additionalClassNames="left-[169.15px] w-[34.288px]" />
      <ButtonText text="26" additionalClassNames="left-[126.86px] w-[34.288px]" />
      <ButtonText text="27" additionalClassNames="left-[84.58px] w-[34.288px]" />
      <ButtonText text="28" additionalClassNames="left-[42.29px] w-[34.288px]" />
      <ButtonText text="29" additionalClassNames="left-0 w-[34.288px]" />
    </div>
  );
}

function Container38() {
  return <div className="absolute h-[40px] left-[211.44px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container39() {
  return <div className="absolute h-[40px] left-[169.15px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container40() {
  return <div className="absolute h-[40px] left-[126.86px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container41() {
  return <div className="absolute h-[40px] left-[84.58px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container42() {
  return <div className="absolute h-[40px] left-[42.29px] top-0 w-[34.288px]" data-name="Container" />;
}

function Container43() {
  return <div className="absolute h-[40px] left-0 top-0 w-[34.288px]" data-name="Container" />;
}

function Container44() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <ButtonText text="30" additionalClassNames="left-[253.72px] w-[34.275px]" />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[280px] items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <Container55>
      <Container26 />
      <Container45 />
    </Container55>
  );
}

function Container47() {
  return (
    <Container56>
      <Container25 />
      <Container46 />
    </Container56>
  );
}

function Container48() {
  return (
    <div className="bg-white h-[426.4px] relative shrink-0 w-[640px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container23 />
        <Container47 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <Wrapper2 additionalClassNames="h-[38.5px] w-[168.2px]">
      <p className="absolute font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[22.5px] left-[156.38px] not-italic text-[#585757] text-[15px] text-nowrap text-right top-[7.2px] translate-x-[-100%]" dir="auto">
        امروز
      </p>
    </Wrapper2>
  );
}

function Button6() {
  return (
    <Wrapper2 additionalClassNames="h-[38.5px] w-[168.2px]">
      <p className="absolute font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[22.5px] left-[156.92px] not-italic text-[#585757] text-[15px] text-nowrap text-right top-[7.2px] translate-x-[-100%]" dir="auto">
        این هفته
      </p>
    </Wrapper2>
  );
}

function Button7() {
  return (
    <Wrapper2 additionalClassNames="h-[38.5px] w-[168.2px]">
      <p className="absolute font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[22.5px] left-[156.67px] not-italic text-[#585757] text-[15px] text-nowrap text-right top-[7.2px] translate-x-[-100%]" dir="auto">
        هفته قبل
      </p>
    </Wrapper2>
  );
}

function Button8() {
  return (
    <Wrapper2 additionalClassNames="h-[38.5px] w-[168.2px]">
      <p className="absolute font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[22.5px] left-[156.79px] not-italic text-[#585757] text-[15px] text-nowrap text-right top-[7.2px] translate-x-[-100%]" dir="auto">
        این ماه
      </p>
    </Wrapper2>
  );
}

function Button9() {
  return (
    <Wrapper2 additionalClassNames="h-[38.5px] w-[168.2px]">
      <p className="absolute font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[22.5px] left-[156.53px] not-italic text-[#585757] text-[15px] text-nowrap text-right top-[7.2px] translate-x-[-100%]" dir="auto">
        ماه قبل
      </p>
    </Wrapper2>
  );
}

function Button10() {
  return (
    <Wrapper2 additionalClassNames="h-[38.5px] w-[168.2px]">
      <p className="absolute font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[22.5px] left-[156.96px] not-italic text-[#585757] text-[15px] text-nowrap text-right top-[7.2px] translate-x-[-100%]" dir="auto">
        امسال
      </p>
    </Wrapper2>
  );
}

function Button11() {
  return (
    <Wrapper2 additionalClassNames="h-[38.5px] w-[168.2px]">
      <p className="absolute font-['Yekan_Bakh_FaNum:Light',sans-serif] leading-[22.5px] left-[156.5px] not-italic text-[#585757] text-[15px] text-nowrap text-right top-[7.2px] translate-x-[-100%]" dir="auto">
        همه زمان‌ها
      </p>
    </Wrapper2>
  );
}

function Container49() {
  return (
    <div className="h-[389.5px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pl-[24px] pr-0 pt-[24px] relative size-full">
          <Button5 />
          <Button6 />
          <Button7 />
          <Button8 />
          <Button9 />
          <Button10 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-white h-[426.4px] relative shrink-0 w-[217px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0px_0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[0.8px] pr-0 py-0 relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[426.4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container50 />
    </div>
  );
}

function Button12() {
  return (
    <Wrapper2 additionalClassNames="bg-[#1e3a5f] h-[36px] w-[76.025px]">
      <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[20px] left-[38px] not-italic text-[14px] text-center text-nowrap text-white top-[7.4px] translate-x-[-50%]" dir="auto">
        تایید
      </p>
    </Wrapper2>
  );
}

function Container52() {
  return (
    <div className="h-[68.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pb-0 pl-0 pr-[764.975px] pt-[0.8px] relative size-full">
          <Button12 />
        </div>
      </div>
    </div>
  );
}

export default function DateRangePicker() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="DateRangePicker">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start overflow-clip p-[0.8px] relative size-full">
          <Container51 />
          <Container52 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}