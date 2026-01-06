import { SupportChannel, Ticket } from "./types";

export const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    id: 1,
    title: "تماس تلفنی",
    description: "پشتیبانی تلفنی 24/7",
    icon: "Phone",
    contact: "021-12345678",
    color: "bg-[#e6f3ff] dark:bg-[#1a2a3a] text-[#0085ff]",
    details: [
      { label: "شماره تماس", value: "021-12345678", copyable: true },
      { label: "داخلی پشتیبانی", value: "123", copyable: false },
      { label: "ساعات پاسخگویی", value: "24 ساعته، 7 روز هفته", copyable: false },
    ]
  },
  {
    id: 2,
    title: "ایمیل",
    description: "پاسخگویی در کمتر از 24 ساعت",
    icon: "Mail",
    contact: "support.bineshafzar.co@gmail.com",
    color: "bg-[#e6f9f0] dark:bg-[#1a3a2a] text-[#00c853]",
    details: [
      { label: "آدرس ایمیل", value: "support.bineshafzar.co@gmail.com", copyable: true },
      { label: "زمان پاسخگویی", value: "کمتر از 24 ساعت", copyable: false },
    ]
  },
  {
    id: 3,
    title: "گفتگوی آنلاین",
    description: "چت با پشتیبانی",
    icon: "MessageSquare",
    contact: "شروع گفتگو",
    color: "bg-[#f3e5f5] dark:bg-[#2a1a3a] text-[#9c27b0]",
    details: [
      { label: "آیدی تلگرام", value: "@BineshAfzar_Support", copyable: true },
      { label: "آیدی واتساپ", value: "+98-912-345-6789", copyable: true },
    ]
  },
  {
    id: 4,
    title: "از هوش مصنوعی بپرس",
    description: "دستیار هوشمند پاسخگویی",
    icon: "Bot",
    contact: "شروع گفتگو با AI",
    color: "bg-[#fff3e0] dark:bg-[#3a2a1a] text-[#ff9800]",
    details: [
      { label: "دستیار AI", value: "رهگیر AI Assistant", copyable: false },
      { label: "زبان‌های پشتیبانی", value: "فارسی، انگلیسی", copyable: false },
      { label: "دسترسی", value: "24/7 آنلاین", copyable: false },
    ]
  },
];

export const MOCK_TICKETS: Ticket[] = [
  {
    id: "TKT-1234",
    subject: "مشکل در ورود به سیستم",
    status: "resolved",
    date: "1403/10/03",
    priority: "high",
    messages: [
      { sender: "user", text: "سلام، نمی‌توانم وارد سیستم شوم. لطفاً کمک کنید.", time: "1403/10/03 - 14:30" },
      { sender: "support", text: "سلام، لطفاً نام کاربری خود را بررسی کنید و دوباره تلاش کنید.", time: "1403/10/03 - 14:45" },
      { sender: "user", text: "مشکل حل شد، متشکرم!", time: "1403/10/03 - 15:00" },
    ]
  },
  {
    id: "TKT-1235",
    subject: "درخواست افزودن ویژگی جدید",
    status: "in-progress",
    date: "1403/10/04",
    priority: "medium",
    messages: [
      { sender: "user", text: "آیا امکان افزودن فیلتر پیشرفته به جدول تماس‌ها وجود دارد؟", time: "1403/10/04 - 10:20" },
      { sender: "support", text: "درخواست شما ثبت شد و در حال بررسی توسط تیم فنی است.", time: "1403/10/04 - 11:00" },
    ]
  },
  {
    id: "TKT-1236",
    subject: "سوال درباره گزارش‌گیری",
    status: "open",
    date: "1403/10/05",
    priority: "low",
    messages: [
      { sender: "user", text: "چگونه می‌توانم گزارش ماهانه تماس‌ها را دریافت کنم؟", time: "1403/10/05 - 09:15" },
    ]
  },
  {
    id: "TKT-1237",
    subject: "خطا در صفحه آنالیتیکس",
    status: "resolved",
    date: "1403/10/02",
    priority: "high",
    messages: [
      { sender: "user", text: "صفحه آنالیتیکس نمودارها را نشان نمی‌دهد.", time: "1403/10/02 - 16:00" },
      { sender: "support", text: "مشکل شناسایی و برطرف شد. لطفاً صفحه را رفرش کنید.", time: "1403/10/02 - 16:30" },
      { sender: "user", text: "عالی، حل شد!", time: "1403/10/02 - 16:35" },
    ]
  },
  {
    id: "TKT-1238",
    subject: "تغییر رمز عبور",
    status: "resolved",
    date: "1403/10/01",
    priority: "medium",
    messages: [
      { sender: "user", text: "رمز عبورم را فراموش کرده‌ام.", time: "1403/10/01 - 11:00" },
      { sender: "support", text: "لینک بازیابی رمز عبور به ایمیل شما ارسال شد.", time: "1403/10/01 - 11:10" },
    ]
  },
];
