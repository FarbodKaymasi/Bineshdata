import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface ExhibitionVisit {
  id: string;
  fullName: string;
  phoneNumber: string;
  company: string;
  city: string;
  province: string;
  interestedProducts: string;
  notes: string;
  recordedConversation?: string; // لینک فایل صوتی یا متن مکالمه
  visitDate: Date;
  followUpStatus: "pending" | "contacted" | "converted" | "not_interested";
  priority: "low" | "medium" | "high";
}

interface ExhibitionVisitsContextType {
  visits: ExhibitionVisit[];
  addVisit: (visit: Omit<ExhibitionVisit, "id">) => void;
  updateVisit: (id: string, visit: Partial<ExhibitionVisit>) => void;
  deleteVisit: (id: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterStatus: string;
  setFilterStatus: (status: string) => void;
  filterPriority: string;
  setFilterPriority: (priority: string) => void;
}

const ExhibitionVisitsContext = createContext<ExhibitionVisitsContextType | undefined>(undefined);

// Sample data for initial visits
const sampleVisits: ExhibitionVisit[] = [
  {
    id: "1",
    fullName: "علی احمدی",
    phoneNumber: "09121234567",
    company: "شرکت تجارت نوین",
    city: "تهران",
    province: "تهران",
    interestedProducts: "پمپ‌های صنعتی، شیرآلات فشار قوی",
    notes: "مشتری بسیار علاقه‌مند به خرید پمپ‌های صنعتی با ظرفیت بالا",
    recordedConversation: "مشتری به دنبال پمپ‌های با ظرفیت بالا و گارانتی طولانی است. بودجه پروژه حدود 500 میلیون تومان. تاریخ تصمیم‌گیری نهایی: پایان بهمن ماه",
    visitDate: new Date(2024, 11, 15, 10, 30),
    followUpStatus: "contacted",
    priority: "high",
  },
  {
    id: "2",
    fullName: "زهرا محمدی",
    phoneNumber: "09359876543",
    company: "صنایع فولاد پارس",
    city: "اصفهان",
    province: "اصفهان",
    interestedProducts: "کمپرسورهای صنعتی، تجهیزات هوای فشرده",
    notes: "نیاز به پیشنهاد قیمت برای ۱۰ دستگاه کمپرسور",
    recordedConversation: "درخواست کمپرسورهای 10 اسب بخار. مشتری قبلاً با برند آطلس کپکو کار کرده و از کیفیت راضی بوده. تمایل به پرداخت نقدی در صورت تخفیف مناسب",
    visitDate: new Date(2024, 11, 18, 14, 15),
    followUpStatus: "pending",
    priority: "high",
  },
  {
    id: "3",
    fullName: "محمد رضایی",
    phoneNumber: "09171122334",
    company: "گروه صنعتی سپهر",
    city: "شیراز",
    province: "فارس",
    interestedProducts: "موتورهای الکتریکی، تابلوهای برق صنعتی",
    notes: "درخواست کاتالوگ محصولات و لیست قیمت",
    visitDate: new Date(2024, 11, 20, 11, 0),
    followUpStatus: "contacted",
    priority: "medium",
  },
  {
    id: "4",
    fullName: "فاطمه کریمی",
    phoneNumber: "09381234567",
    company: "شرکت ساختمانی آسمان",
    city: "مشهد",
    province: "خراسان رضوی",
    interestedProducts: "ابزارآلات برقی، دستگاه جوش",
    notes: "مشتری در حال بررسی برندهای مختلف است",
    visitDate: new Date(2024, 11, 22, 9, 45),
    followUpStatus: "pending",
    priority: "medium",
  },
  {
    id: "5",
    fullName: "حسین نوری",
    phoneNumber: "09131234567",
    company: "کارخانه نساجی رضوان",
    city: "یزد",
    province: "یزد",
    interestedProducts: "ماشین‌آلات نساجی، تجهیزات اتوماسیون",
    notes: "خرید قطعی در صورت تطابق قیمت با رقبا",
    visitDate: new Date(2024, 11, 25, 16, 20),
    followUpStatus: "converted",
    priority: "high",
  },
  {
    id: "6",
    fullName: "سارا احمدپور",
    phoneNumber: "09191234567",
    company: "شرکت بسته‌بندی پاک",
    city: "کرج",
    province: "البرز",
    interestedProducts: "دستگاه‌های بسته‌بندی، کانوایرها",
    notes: "نیاز به دموی محصولات در کارخانه",
    visitDate: new Date(2024, 11, 28, 13, 30),
    followUpStatus: "pending",
    priority: "low",
  },
  {
    id: "7",
    fullName: "رضا موسوی",
    phoneNumber: "09211234567",
    company: "صنایع غذایی سحر",
    city: "تبریز",
    province: "آذربایجان شرقی",
    interestedProducts: "تجهیزات سردخانه، یخچال‌های صنعتی",
    notes: "پروژه گسترش سردخانه در دست اجرا",
    visitDate: new Date(2024, 11, 30, 10, 0),
    followUpStatus: "contacted",
    priority: "high",
  },
  {
    id: "8",
    fullName: "مریم صادقی",
    phoneNumber: "09361234567",
    company: "مجتمع تجاری آرمان",
    city: "اهواز",
    province: "خوزستان",
    interestedProducts: "سیستم‌های تهویه مطبوع، چیلرها",
    notes: "مشتری به محصولات با گارانتی طولانی علاقه دارد",
    visitDate: new Date(2025, 0, 2, 15, 45),
    followUpStatus: "pending",
    priority: "medium",
  },
  {
    id: "9",
    fullName: "امیر حسینی",
    phoneNumber: "09141234567",
    company: "شرکت معدنی زرین",
    city: "کرمان",
    province: "کرمان",
    interestedProducts: "تجهیزات معدنی، کامیون‌های سنگین",
    notes: "درخواست بازدید از کارخانه تولیدی",
    visitDate: new Date(2025, 0, 5, 11, 30),
    followUpStatus: "contacted",
    priority: "high",
  },
  {
    id: "10",
    fullName: "نرگس عباسی",
    phoneNumber: "09181234567",
    company: "آزمایشگاه دانش پژوه",
    city: "قم",
    province: "قم",
    interestedProducts: "تجهیزات آزمایشگاهی، دستگاه‌های اندازه‌گیری",
    notes: "نیاز به مشاوره فنی تخصصی",
    visitDate: new Date(2025, 0, 8, 14, 0),
    followUpStatus: "pending",
    priority: "low",
  },
  {
    id: "11",
    fullName: "مهدی جعفری",
    phoneNumber: "09371234567",
    company: "کارخانه شیمیایی پارس",
    city: "ساوه",
    province: "مرکزی",
    interestedProducts: "پمپ‌های مقاوم در برابر اسید، شیرآلات ضد خورندگی",
    notes: "پروژه توسعه خط تولید جدید",
    visitDate: new Date(2025, 0, 10, 9, 15),
    followUpStatus: "converted",
    priority: "high",
  },
  {
    id: "12",
    fullName: "لیلا رحمانی",
    phoneNumber: "09331234567",
    company: "شرکت لبنیات سپید",
    city: "رشت",
    province: "گیلان",
    interestedProducts: "دستگاه‌های پاستوریزاسیون، تانک‌های استیل",
    notes: "خرید فوری برای شروع فصل تولید",
    visitDate: new Date(2025, 0, 12, 16, 30),
    followUpStatus: "contacted",
    priority: "medium",
  },
  {
    id: "13",
    fullName: "سعید باقری",
    phoneNumber: "09221234567",
    company: "",
    city: "زنجان",
    province: "زنجان",
    interestedProducts: "ابزارآلات دستی، جعبه ابزار",
    notes: "خرید شخصی برای تعمیرگاه خانگی",
    visitDate: new Date(2025, 0, 14, 10, 45),
    followUpStatus: "not_interested",
    priority: "low",
  },
  {
    id: "14",
    fullName: "پریسا ملکی",
    phoneNumber: "09391234567",
    company: "مجتمع تولیدی آینده سازان",
    city: "قزوین",
    province: "قزوین",
    interestedProducts: "رباتهای صنعتی، سیستم‌های اتوماسیون",
    notes: "علاقه‌مند به راه‌اندازی خط تولید هوشمند",
    visitDate: new Date(2025, 0, 16, 13, 0),
    followUpStatus: "contacted",
    priority: "high",
  },
  {
    id: "15",
    fullName: "علیرضا کاظمی",
    phoneNumber: "09151234567",
    company: "شرکت ساختمانی بنیاد",
    city: "ارومیه",
    province: "آذربایجان غربی",
    interestedProducts: "دستگاه‌های سنگ‌بری، ابزار سنگ‌کاری",
    notes: "پروژه ساخت مجتمع مسکونی در دست اجرا",
    visitDate: new Date(2025, 0, 18, 11, 20),
    followUpStatus: "pending",
    priority: "medium",
  },
  {
    id: "16",
    fullName: "سمانه حیدری",
    phoneNumber: "09127654321",
    company: "شرکت داروسازی سلامت",
    city: "تهران",
    province: "تهران",
    interestedProducts: "تجهیزات داروسازی، دستگاه‌های بسته‌بندی دارو",
    notes: "نیاز به تجهیزات استاندارد GMP",
    visitDate: new Date(2025, 0, 20, 9, 0),
    followUpStatus: "contacted",
    priority: "high",
  },
  {
    id: "17",
    fullName: "کامران رستمی",
    phoneNumber: "09351112233",
    company: "کارگاه صنایع چوب آوند",
    city: "اصفهان",
    province: "اصفهان",
    interestedProducts: "دستگاه‌های CNC چوب، اره‌های نواری",
    notes: "مشتری جدید با برنامه توسعه کارگاه",
    visitDate: new Date(2025, 0, 22, 14, 30),
    followUpStatus: "pending",
    priority: "medium",
  },
  {
    id: "18",
    fullName: "نیلوفر امینی",
    phoneNumber: "09177778888",
    company: "فرش ماشینی کاشان",
    city: "کاشان",
    province: "اصفهان",
    interestedProducts: "دستگاه بافت فرش، ماشین‌آلات نساجی",
    notes: "سفارش عمده برای نوسازی ماشین‌آلات",
    visitDate: new Date(2025, 0, 24, 10, 15),
    followUpStatus: "converted",
    priority: "high",
  },
  {
    id: "19",
    fullName: "بهرام قاسمی",
    phoneNumber: "09385556677",
    company: "صنایع پلاستیک زاگرس",
    city: "کرمانشاه",
    province: "کرمانشاه",
    interestedProducts: "ماشین‌های تزریق پلاستیک، قالب‌سازی",
    notes: "درخواست اقساط بلندمدت",
    visitDate: new Date(2024, 11, 10, 11, 45),
    followUpStatus: "contacted",
    priority: "medium",
  },
  {
    id: "20",
    fullName: "آیدا سلیمانی",
    phoneNumber: "09131122334",
    company: "مرکز تحقیقات صنعتی ایران",
    city: "تهران",
    province: "تهران",
    interestedProducts: "تجهیزات آزمایشگاهی، دستگاه‌های تست مواد",
    notes: "خرید برای پروژه تحقیقاتی دولتی",
    visitDate: new Date(2024, 11, 12, 15, 0),
    followUpStatus: "pending",
    priority: "high",
  },
  {
    id: "21",
    fullName: "جواد شریفی",
    phoneNumber: "09199998877",
    company: "شرکت حمل‌ونقل بارسان",
    city: "کرج",
    province: "البرز",
    interestedProducts: "سیستم‌های GPS، تجهیزات ردیابی",
    notes: "نیاز به سیستم مدیریت ناوگان",
    visitDate: new Date(2024, 11, 16, 13, 20),
    followUpStatus: "contacted",
    priority: "low",
  },
  {
    id: "22",
    fullName: "شیرین فتحی",
    phoneNumber: "09211239876",
    company: "کارخانه کاشی و سرامیک پارسیان",
    city: "تبریز",
    province: "آذربایجان شرقی",
    interestedProducts: "کوره‌های صنعتی، دستگاه‌های پرس",
    notes: "بازدید از نمایشگاه با مدیر تولید",
    visitDate: new Date(2024, 11, 19, 9, 30),
    followUpStatus: "converted",
    priority: "high",
  },
  {
    id: "23",
    fullName: "احسان محمودی",
    phoneNumber: "09367778899",
    company: "فروشگاه زنجیره‌ای اتکا",
    city: "شیراز",
    province: "فارس",
    interestedProducts: "قفسه‌های فلزی، سیستم‌های نگهداری کالا",
    notes: "نیاز به تجهیزات برای شعب جدید",
    visitDate: new Date(2024, 11, 23, 16, 10),
    followUpStatus: "pending",
    priority: "medium",
  },
  {
    id: "24",
    fullName: "مینا اکبری",
    phoneNumber: "09141237777",
    company: "آرایشی بهداشتی گلستان",
    city: "گرگان",
    province: "گلستان",
    interestedProducts: "خطوط تولید کرم و لوسیون، دستگاه پرکن",
    notes: "راه‌اندازی خط تولید محصولات آرایشی",
    visitDate: new Date(2024, 11, 26, 10, 50),
    followUpStatus: "contacted",
    priority: "high",
  },
  {
    id: "25",
    fullName: "وحید نظری",
    phoneNumber: "09181118888",
    company: "شرکت آب معدنی کوهسار",
    city: "سمنان",
    province: "سمنان",
    interestedProducts: "خطوط بطری‌سازی، دستگاه‌های پرکن آب",
    notes: "توسعه ظرفیت تولید",
    visitDate: new Date(2024, 11, 29, 14, 40),
    followUpStatus: "pending",
    priority: "medium",
  },
  {
    id: "26",
    fullName: "طاهره یوسفی",
    phoneNumber: "09373334455",
    company: "صنایع قطعات خودرو سایپا",
    city: "ساوه",
    province: "مرکزی",
    interestedProducts: "دستگاه‌های برش فلز، پرس‌های هیدرولیک",
    notes: "خرید فوری برای قرارداد جدید با خودروساز",
    visitDate: new Date(2025, 0, 3, 11, 0),
    followUpStatus: "converted",
    priority: "high",
  },
  {
    id: "27",
    fullName: "فرهاد صفری",
    phoneNumber: "09333332222",
    company: "کارخانه کاغذسازی شمال",
    city: "رشت",
    province: "گیلان",
    interestedProducts: "ماشین‌آلات کاغذسازی، سیستم‌های خمیرسازی",
    notes: "بررسی تکنولوژی‌های جدید تولید کاغذ",
    visitDate: new Date(2025, 0, 6, 15, 15),
    followUpStatus: "contacted",
    priority: "medium",
  },
  {
    id: "28",
    fullName: "ساناز حسنی",
    phoneNumber: "09225557777",
    company: "شرکت توسعه گردشگری آذربایجان",
    city: "تبریز",
    province: "آذربایجان شرقی",
    interestedProducts: "تجهیزات هتلداری، سیستم‌های امنیتی",
    notes: "راه‌اندازی هتل 5 ستاره در حال احداث",
    visitDate: new Date(2025, 0, 9, 13, 45),
    followUpStatus: "pending",
    priority: "low",
  },
  {
    id: "29",
    fullName: "بابک توکلی",
    phoneNumber: "09395554433",
    company: "مجتمع کشاورزی دشت سبز",
    city: "مشهد",
    province: "خراسان رضوی",
    interestedProducts: "تجهیزات کشاورزی، سیستم‌های آبیاری مدرن",
    notes: "پروژه گلخانه‌های هیدروپونیک",
    visitDate: new Date(2025, 0, 11, 10, 30),
    followUpStatus: "contacted",
    priority: "high",
  },
  {
    id: "30",
    fullName: "زینب مرادی",
    phoneNumber: "09151119999",
    company: "پوشاک برند ایرانی",
    city: "مشهد",
    province: "خراسان رضوی",
    interestedProducts: "چرخ‌های صنعتی، دستگاه‌های برش پارچه",
    notes: "توسعه تولید برای صادرات",
    visitDate: new Date(2025, 0, 13, 16, 0),
    followUpStatus: "pending",
    priority: "medium",
  },
];

export function ExhibitionVisitsProvider({ children }: { children: ReactNode }) {
  const [visits, setVisits] = useState<ExhibitionVisit[]>(() => {
    const saved = localStorage.getItem("exhibitionVisits");
    if (saved) {
      return JSON.parse(saved, (key, value) => {
        if (key === "visitDate") return new Date(value);
        return value;
      });
    }
    // اگر داده‌ای ذخیره نشده، از داده‌های نمونه استفاده کن
    return sampleVisits;
  });
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");

  useEffect(() => {
    localStorage.setItem("exhibitionVisits", JSON.stringify(visits));
  }, [visits]);

  const addVisit = (visit: Omit<ExhibitionVisit, "id">) => {
    const newVisit: ExhibitionVisit = {
      ...visit,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    };
    setVisits((prev) => [newVisit, ...prev]);
  };

  const updateVisit = (id: string, updatedData: Partial<ExhibitionVisit>) => {
    setVisits((prev) =>
      prev.map((visit) =>
        visit.id === id ? { ...visit, ...updatedData } : visit
      )
    );
  };

  const deleteVisit = (id: string) => {
    setVisits((prev) => prev.filter((visit) => visit.id !== id));
  };

  return (
    <ExhibitionVisitsContext.Provider
      value={{
        visits,
        addVisit,
        updateVisit,
        deleteVisit,
        searchTerm,
        setSearchTerm,
        filterStatus,
        setFilterStatus,
        filterPriority,
        setFilterPriority,
      }}
    >
      {children}
    </ExhibitionVisitsContext.Provider>
  );
}

export function useExhibitionVisits() {
  const context = useContext(ExhibitionVisitsContext);
  if (!context) {
    throw new Error("useExhibitionVisits must be used within ExhibitionVisitsProvider");
  }
  return context;
}