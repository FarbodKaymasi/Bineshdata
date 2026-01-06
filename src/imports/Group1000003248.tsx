function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[19px] inset-0 items-end justify-center px-[13px] py-0 rounded-[8px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-right w-full" dir="auto">
        مساوی
      </p>
      <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-right w-full" dir="auto">
        نامساوی
      </p>
      <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-right w-full" dir="auto">
        بیشتر از
      </p>
      <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-right w-full" dir="auto">
        بیشتر یا مساوی
      </p>
      <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-right w-full" dir="auto">
        کوچک‌تر از
      </p>
      <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-right w-full" dir="auto">
        کمتر یا مساوی
      </p>
      <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-right w-full" dir="auto">
        دارای داده ناقص
      </p>
      <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-right w-full" dir="auto">
        دارای داده کامل
      </p>
      <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-right w-full" dir="auto">
        شامل متن
      </p>
      <p className="font-['Yekan_Bakh_FaNum:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] text-right w-full" dir="auto">
        بدون داده
      </p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Frame />
    </div>
  );
}