import svgPaths from "./svg-uorsnaacmm";
import clsx from "clsx";

function ContainerBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[40.588px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("size-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[16.8px] px-[16.8px] relative size-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20.6px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[859.063px] pr-0 py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[74.188px] relative rounded-[14px] shrink-0 w-full">
      <BackgroundImage1 additionalClassNames="overflow-clip rounded-[inherit]">{children}</BackgroundImage1>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type ParagraphBackgroundImageAndText1Props = {
  text: string;
};

function ParagraphBackgroundImageAndText1({ text }: ParagraphBackgroundImageAndText1Props) {
  return (
    <div className="h-[15.988px] relative shrink-0 w-full">
      <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[16px] left-[775.17px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[-0.6px]" dir="auto">
        {text}
      </p>
    </div>
  );
}
type TextBackgroundImageAndText2Props = {
  text: string;
};

function TextBackgroundImageAndText2({ text }: TextBackgroundImageAndText2Props) {
  return (
    <div className="bg-[#eff6ff] h-[20.6px] relative rounded-[2.68435e+07px] shrink-0 w-[44.8px]">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[15px] left-[8.8px] not-italic text-[#1447e6] text-[10px] text-nowrap top-[2px]" dir="auto">
          {text}
        </p>
      </div>
    </div>
  );
}
type TextBackgroundImageAndText1Props = {
  text: string;
};

function TextBackgroundImageAndText1({ text }: TextBackgroundImageAndText1Props) {
  return (
    <div className="bg-[#fff1f2] h-[20.6px] relative rounded-[2.68435e+07px] shrink-0 w-[42.713px]">
      <div aria-hidden="true" className="absolute border-[#ffccd3] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[15px] left-[8.8px] not-italic text-[#c70036] text-[10px] text-nowrap top-[2px]" dir="auto">
          {text}
        </p>
      </div>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="h-[15.988px] relative shrink-0 w-full">
      <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[16px] left-[767.89px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[-0.6px]" dir="auto">
        {text}
      </p>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingBackgroundImageAndText({ text, additionalClassNames = "" }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-[-0.6px]" dir="auto">
          {text}
        </p>
      </div>
    </div>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
};

function TextBackgroundImageAndText({ text }: TextBackgroundImageAndTextProps) {
  return (
    <div className="bg-[#ecfdf5] h-[20.6px] relative rounded-[2.68435e+07px] shrink-0 w-[40.5px]">
      <div aria-hidden="true" className="absolute border-[#a4f4cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[15px] left-[8.8px] not-italic text-[#007a55] text-[10px] text-nowrap top-[2px]" dir="auto">
          {text}
        </p>
      </div>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage additionalClassNames="relative shrink-0">
      <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </BackgroundImage>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonBackgroundImageAndText({ text, additionalClassNames = "" }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute bg-white content-stretch flex h-[36px] items-center justify-center px-[12.8px] py-[8.8px] rounded-[8px] top-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center text-nowrap" dir="auto">
        {text}
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[24px] left-[829.56px] not-italic text-[#101828] text-[16px] text-nowrap top-[-0.8px]" dir="auto">
        تنظیمات اتصال کدهای حساب
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[20px] left-[588.3px] not-italic text-[#6a7282] text-[14px] text-nowrap top-[-0.6px]" dir="auto">
        هر مورد مالی را به یک یا چند کد حساب از نرم‌افزار حسابداری خود متصل کنید
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex h-[36px] items-center justify-center left-[253.79px] px-[12px] py-[8px] rounded-[8px] top-0 w-[46.3px]" data-name="Button">
      <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white" dir="auto">
        همه
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[300.087px]" data-name="Container">
      <Button />
      <ButtonBackgroundImageAndText text="درآمد" additionalClassNames="left-[192.7px] w-[53.088px]" />
      <ButtonBackgroundImageAndText text="هزینه" additionalClassNames="left-[128.96px] w-[55.737px]" />
      <ButtonBackgroundImageAndText text="دارایی" additionalClassNames="left-[62.72px] w-[58.237px]" />
      <ButtonBackgroundImageAndText text="بدهی" additionalClassNames="left-0 w-[54.725px]" />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[678.313px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[12px] pr-[40px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap" dir="auto">
          جستجو...
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon() {
  return (
    <BackgroundImage additionalClassNames="absolute left-[650.31px] top-[10px]">
      <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </BackgroundImage>
  );
}

function Container2() {
  return (
    <div className="absolute h-[36px] left-[312.09px] top-0 w-[678.313px]" data-name="Container">
      <Input />
      <Icon />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white h-[69.6px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <BackgroundImage1>
        <Container3 />
      </BackgroundImage1>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[876.2px] pr-0 py-0 relative size-full">
          <TextBackgroundImageAndText text="درآمد" />
          <HeadingBackgroundImageAndText text="فروش" additionalClassNames="w-[37.7px]" />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <ContainerBackgroundImage2>
      <Container5 />
      <ParagraphBackgroundImageAndText text="کدهای حساب مرتبط با فروش محصولات" />
    </ContainerBackgroundImage2>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <ContainerBackgroundImage>
      <Container7 />
    </ContainerBackgroundImage>
  );
}

function Container9() {
  return (
    <div className="h-[20.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[803.775px] pr-0 py-0 relative size-full">
          <TextBackgroundImageAndText1 text="هزینه" />
          <HeadingBackgroundImageAndText text="هزینه‌های عملیاتی" additionalClassNames="w-[107.912px]" />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[16px] left-[764.86px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[-0.6px]" dir="auto">
        کدهای حساب مرتبط با هزینه‌های روزمره
      </p>
    </div>
  );
}

function Container10() {
  return (
    <ContainerBackgroundImage2>
      <Container9 />
      <Paragraph1 />
    </ContainerBackgroundImage2>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <ContainerBackgroundImage>
      <Container11 />
    </ContainerBackgroundImage>
  );
}

function Container13() {
  return (
    <div className="h-[20.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[837.212px] pr-0 py-0 relative size-full">
          <TextBackgroundImageAndText2 text="دارایی" />
          <HeadingBackgroundImageAndText text="موجودی کالا" additionalClassNames="w-[72.388px]" />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[16px] left-[784.89px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[-0.6px]" dir="auto">
        کدهای حساب مرتبط با موجودی انبار
      </p>
    </div>
  );
}

function Container14() {
  return (
    <ContainerBackgroundImage2>
      <Container13 />
      <Paragraph2 />
    </ContainerBackgroundImage2>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <ContainerBackgroundImage>
      <Container15 />
    </ContainerBackgroundImage>
  );
}

function Container17() {
  return (
    <div className="h-[20.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[792.25px] pr-0 py-0 relative size-full">
          <TextBackgroundImageAndText2 text="دارایی" />
          <HeadingBackgroundImageAndText text="حساب‌های دریافتنی" additionalClassNames="w-[117.35px]" />
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[16px] left-[801.14px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[-0.6px]" dir="auto">
        کدهای حساب مشتریان و طلب‌ها
      </p>
    </div>
  );
}

function Container18() {
  return (
    <ContainerBackgroundImage2>
      <Container17 />
      <Paragraph3 />
    </ContainerBackgroundImage2>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <ContainerBackgroundImage>
      <Container19 />
    </ContainerBackgroundImage>
  );
}

function Text() {
  return (
    <div className="bg-[#fffbeb] h-[20.6px] relative rounded-[2.68435e+07px] shrink-0 w-[41.875px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#fee685] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[15px] left-[8.8px] not-italic text-[#bb4d00] text-[10px] text-nowrap top-[2px]" dir="auto">
          بدهی
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[20.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[794.475px] pr-0 py-0 relative size-full">
          <Text />
          <HeadingBackgroundImageAndText text="حساب‌های پرداختنی" additionalClassNames="w-[118.05px]" />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <ContainerBackgroundImage2>
      <Container21 />
      <ParagraphBackgroundImageAndText text="کدهای حساب تامین‌کنندگان و بدهی‌ها" />
    </ContainerBackgroundImage2>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <ContainerBackgroundImage>
      <Container23 />
    </ContainerBackgroundImage>
  );
}

function Container25() {
  return (
    <div className="h-[20.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[823.112px] pr-0 py-0 relative size-full">
          <TextBackgroundImageAndText1 text="هزینه" />
          <HeadingBackgroundImageAndText text="هزینه استهلاک" additionalClassNames="w-[88.575px]" />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[16px] left-[759.55px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[-0.6px]" dir="auto">
        کدهای حساب مرتبط با استهلاک دارایی‌ها
      </p>
    </div>
  );
}

function Container26() {
  return (
    <ContainerBackgroundImage2>
      <Container25 />
      <Paragraph4 />
    </ContainerBackgroundImage2>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <ContainerBackgroundImage>
      <Container27 />
    </ContainerBackgroundImage>
  );
}

function Container29() {
  return (
    <div className="h-[20.6px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[850.362px] pr-0 py-0 relative size-full">
          <TextBackgroundImageAndText text="درآمد" />
          <HeadingBackgroundImageAndText text="درآمد سایر" additionalClassNames="w-[63.538px]" />
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[16px] left-[826.55px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[-0.6px]" dir="auto">
        سایر درآمدهای غیر عملیاتی
      </p>
    </div>
  );
}

function Container30() {
  return (
    <ContainerBackgroundImage2>
      <Container29 />
      <Paragraph5 />
    </ContainerBackgroundImage2>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <ContainerBackgroundImage>
      <Container31 />
    </ContainerBackgroundImage>
  );
}

function Container33() {
  return (
    <ContainerBackgroundImage1>
      <TextBackgroundImageAndText2 text="دارایی" />
      <HeadingBackgroundImageAndText text="نقدینگی" additionalClassNames="w-[50.538px]" />
    </ContainerBackgroundImage1>
  );
}

function Container34() {
  return (
    <ContainerBackgroundImage2>
      <Container33 />
      <ParagraphBackgroundImageAndText1 text="کدهای حساب مرتبط با وجه نقد و بانک" />
    </ContainerBackgroundImage2>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <ContainerBackgroundImage>
      <Container35 />
    </ContainerBackgroundImage>
  );
}

function Heading1() {
  return <div className="h-[20px] shrink-0 w-[50.538px]" data-name="Heading 3" />;
}

function Container37() {
  return (
    <ContainerBackgroundImage1>
      <p className="font-['Vazirmatn:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-[116px]" dir="auto">
        سود و زیان ناخالص
      </p>
      <TextBackgroundImageAndText2 text="دارایی" />
      <Heading1 />
    </ContainerBackgroundImage1>
  );
}

function Container38() {
  return (
    <ContainerBackgroundImage2>
      <Container37 />
      <ParagraphBackgroundImageAndText1 text="کدهای حساب مرتبط با وجه نقد و بانک" />
    </ContainerBackgroundImage2>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <ContainerBackgroundImage>
      <Container39 />
    </ContainerBackgroundImage>
  );
}

function Heading2() {
  return <div className="h-[20px] shrink-0 w-[50.538px]" data-name="Heading 3" />;
}

function Container41() {
  return (
    <ContainerBackgroundImage1>
      <p className="font-['Vazirmatn:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-nowrap" dir="auto">
        سود و زیان عملیاتی
      </p>
      <TextBackgroundImageAndText2 text="دارایی" />
      <Heading2 />
    </ContainerBackgroundImage1>
  );
}

function Container42() {
  return (
    <ContainerBackgroundImage2>
      <Container41 />
      <ParagraphBackgroundImageAndText1 text="کدهای حساب مرتبط با وجه نقد و بانک" />
    </ContainerBackgroundImage2>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <ContainerBackgroundImage>
      <Container43 />
    </ContainerBackgroundImage>
  );
}

function Heading3() {
  return <div className="h-[20px] shrink-0 w-[50.538px]" data-name="Heading 3" />;
}

function Container45() {
  return (
    <ContainerBackgroundImage1>
      <p className="font-['Vazirmatn:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-nowrap" dir="auto">
        مالیات
      </p>
      <TextBackgroundImageAndText2 text="دارایی" />
      <Heading3 />
    </ContainerBackgroundImage1>
  );
}

function Container46() {
  return (
    <ContainerBackgroundImage2>
      <Container45 />
      <ParagraphBackgroundImageAndText1 text="کدهای حساب مرتبط با وجه نقد و بانک" />
    </ContainerBackgroundImage2>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <ContainerBackgroundImage>
      <Container47 />
    </ContainerBackgroundImage>
  );
}

function Heading4() {
  return <div className="h-[20px] shrink-0 w-[50.538px]" data-name="Heading 3" />;
}

function Container49() {
  return (
    <ContainerBackgroundImage1>
      <p className="font-['Vazirmatn:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-nowrap" dir="auto">
        سود و زیان خالص
      </p>
      <TextBackgroundImageAndText2 text="دارایی" />
      <Heading4 />
    </ContainerBackgroundImage1>
  );
}

function Container50() {
  return (
    <ContainerBackgroundImage2>
      <Container49 />
      <ParagraphBackgroundImageAndText1 text="کدهای حساب مرتبط با وجه نقد و بانک" />
    </ContainerBackgroundImage2>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <ContainerBackgroundImage>
      <Container51 />
    </ContainerBackgroundImage>
  );
}

function Heading5() {
  return <div className="h-[20px] shrink-0 w-[50.538px]" data-name="Heading 3" />;
}

function Container53() {
  return (
    <ContainerBackgroundImage1>
      <p className="font-['Vazirmatn:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-nowrap" dir="auto">
        سود و زیان انباشته
      </p>
      <TextBackgroundImageAndText2 text="دارایی" />
      <Heading5 />
    </ContainerBackgroundImage1>
  );
}

function Container54() {
  return (
    <ContainerBackgroundImage2>
      <Container53 />
      <ParagraphBackgroundImageAndText1 text="کدهای حساب مرتبط با وجه نقد و بانک" />
    </ContainerBackgroundImage2>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <ContainerBackgroundImage>
      <Container55 />
    </ContainerBackgroundImage>
  );
}

function Heading6() {
  return <div className="h-[20px] shrink-0 w-[50.538px]" data-name="Heading 3" />;
}

function Container57() {
  return (
    <ContainerBackgroundImage1>
      <p className="font-['Vazirmatn:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-nowrap" dir="auto">
        حقوق صاحبان سهام
      </p>
      <TextBackgroundImageAndText2 text="دارایی" />
      <Heading6 />
    </ContainerBackgroundImage1>
  );
}

function Container58() {
  return (
    <ContainerBackgroundImage2>
      <Container57 />
      <ParagraphBackgroundImageAndText1 text="کدهای حساب مرتبط با وجه نقد و بانک" />
    </ContainerBackgroundImage2>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[40.588px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <IconBackgroundImage />
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <ContainerBackgroundImage>
      <Container59 />
    </ContainerBackgroundImage>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[677.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container12 />
      <Container16 />
      <Container20 />
      <Container24 />
      <Container28 />
      <Container32 />
      <Container36 />
      <Container40 />
      <Container44 />
      <Container48 />
      <Container52 />
      <Container56 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[1416px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container4 />
      <Container61 />
    </div>
  );
}

function AccountMappingSettings() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2487px] items-start left-0 pb-0 pt-[32px] px-[127.6px] top-0 w-[1279px]" data-name="AccountMappingSettings" style={{ backgroundImage: "linear-gradient(117.216deg, rgb(248, 250, 252) 0%, rgb(243, 244, 246) 100%)" }}>
      <Container62 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#155dfc] h-[36px] relative rounded-[8px] shrink-0 w-[134.6px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
        <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white" dir="auto">
          ذخیره تنظیمات
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[84.638px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16.8px] py-[8.8px] relative size-full">
        <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-center text-nowrap" dir="auto">
          بازنشانی
        </p>
      </div>
    </div>
  );
}

function AccountMappingSettings1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex gap-[12px] h-[69.6px] items-start justify-end left-[127.6px] pb-[0.8px] pl-[0.8px] pr-[775.962px] pt-[16.8px] rounded-[14px] top-[1783px] w-[1024px]" data-name="AccountMappingSettings">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Button1 />
      <Button2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="تنظیمات اتصال کد حساب">
      <AccountMappingSettings />
      <AccountMappingSettings1 />
    </div>
  );
}