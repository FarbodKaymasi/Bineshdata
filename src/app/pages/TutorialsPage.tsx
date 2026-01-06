import { 
  GraduationCap, 
  Play, 
  Book, 
  Video, 
  FileText, 
  Clock,
  LayoutDashboard,
  Phone,
  Users,
  BarChart3,
  Settings,
  Bot,
  ChevronLeft,
  CheckCircle2,
  Info,
  AlertCircle,
  Lightbulb
} from "lucide-react";
import { useCurrentColors } from "../contexts/ThemeColorsContext";
import { useState } from "react";

const tutorials = [
  {
    id: 1,
    title: "شروع کار با سیستم رهگیر",
    description: "آموزش مقدماتی برای شروع کار با پنل کنترل کیفی",
    duration: "12:30",
    category: "مقدماتی",
    type: "video",
    thumbnail: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "مدیریت تماس‌ها و فیلترها",
    description: "نحوه استفاده از فیلترهای پیشرفته و مدیریت تماس‌ها",
    duration: "18:45",
    category: "متوسط",
    type: "video",
    thumbnail: "bg-gradient-to-br from-green-500 to-green-600",
  },
  {
    id: 3,
    title: "تحلیل داده و گزارش‌گیری",
    description: "استفاده از ابزارهای تحلیل داده و ایجاد گزارش‌های سفارشی",
    duration: "25:10",
    category: "پیشرفته",
    type: "video",
    thumbnail: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  {
    id: 4,
    title: "راهنمای مدیریت کارشناسان",
    description: "نحوه افزودن و مدیریت کارشناسان فروش",
    duration: "15:20",
    category: "متوسط",
    type: "video",
    thumbnail: "bg-gradient-to-br from-orange-500 to-orange-600",
  },
];

const guides = [
  {
    id: 1,
    title: "راهنمای کامل API",
    description: "مستندات کامل API سیستم رهگیر",
    icon: Book,
    color: "text-[#0085ff]",
  },
  {
    id: 2,
    title: "سوالات متداول (FAQ)",
    description: "پاسخ به سوالات رایج کاربران",
    icon: FileText,
    color: "text-[#00c853]",
  },
  {
    id: 3,
    title: "بهترین روش‌ها",
    description: "راهکارهای بهینه برای استفاده از سیستم",
    icon: GraduationCap,
    color: "text-[#9c27b0]",
  },
];

export function TutorialsPage() {
  const colors = useCurrentColors();
  const [activeView, setActiveView] = useState<"videos" | "docs">("docs");
  const [activeDocTab, setActiveDocTab] = useState("dashboard");
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "مقدماتی":
        return "bg-[#e6f9f0] dark:bg-[#1a3a2a] text-[#00c853]";
      case "متوسط":
        return "bg-[#fff3e0] dark:bg-[#3a2a1a] text-[#ff9800]";
      case "پیشرفته":
        return "bg-[#f3e5f5] dark:bg-[#2a1a3a] text-[#9c27b0]";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-600";
    }
  };

  const docTabs = [
    { id: "dashboard", label: "داشبورد", icon: LayoutDashboard },
    { id: "calls", label: "تماس‌ها", icon: Phone },
    { id: "agents", label: "کارشناسان", icon: Users },
    { id: "customers", label: "مشتریان", icon: Users },
    { id: "analytics", label: "تحلیل داده", icon: BarChart3 },
    { id: "ai", label: "هوش مصنوعی", icon: Bot },
    { id: "settings", label: "تنظیمات", icon: Settings },
  ];

  const renderDocContent = () => {
    switch (activeDocTab) {
      case "dashboard":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
                داشبورد - مرکز فرماندهی سیستم رهگیر
              </h2>
              <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                داشبورد قلب تپنده سیستم رهگیر است و اولین صفحه‌ای که پس از ورود به سیستم با آن مواجه می‌شوید. این صفحه به عنوان مرکز فرماندهی مرکز تماس شما عمل می‌کند و تمامی اطلاعات حیاتی را در یک نگاه در اختیارتان قرار می‌دهد. طراحی هوشمند داشبورد به گونه‌ای است که بدون نیاز به جابجایی بین صفحات مختلف، می‌توانید وضعیت کلی عملکرد مرکز تماس را ارزیابی کنید، روندهای مهم را شناسایی نمایید و تصمیمات مدیریتی آگاهانه بگیرید.
              </p>
              <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                یکی از ویژگی‌های برجسته داشبورد، قابلیت به‌روزرسانی خودکار داده‌ها است. سیستم به صورت خودکار هر 30 ثانیه یکبار اطلاعات را از پایگاه داده دریافت کرده و داشبورد را به‌روز می‌کند. این ویژگی تضمین می‌کند که شما همیشه با جدیدترین اطلاعات کار می‌کنید و هیچ تماس یا رویداد مهمی از دید شما پنهان نمی‌ماند. در دنیای پرشتاب مراکز تماس، داشتن اطلاعات لحظه‌ای می‌تواند تفاوت بین موفقیت و شکست باشد.
              </p>
            </div>

            <div 
              className="p-6 rounded-xl border-r-4"
              style={{ 
                backgroundColor: colors.backgroundSecondary,
                borderColor: colors.primary
              }}
            >
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.primary }} />
                <div className="flex-1">
                  <h4 className="font-bold mb-2" style={{ color: colors.textPrimary }}>نکته کلیدی: به‌روزرسانی خودکار</h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    سیستم رهگیر به صورت پیش‌فرض هر 30 ثانیه یکبار داده‌های داشبورد را به‌روزرسانی می‌کند. این فرآیند کاملاً خودکار است و نیازی به رفرش دستی صفحه ندارید. اگر در حال مشاهده یک نمودار یا ویجت خاص هستید، داده‌ها به صورت Smooth و بدون هیچ وقفه یا لرزشی به‌روز می‌شوند. این ویژگی به ویژه در ساعات شلوغ مرکز تماس که تماس‌های جدید به سرعت ثبت می‌شوند، بسیار حیاتی است.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.textPrimary }}>
                <BarChart3 className="w-5 h-5" style={{ color: colors.primary }} />
                کارت‌های آماری - نبض عملکرد مرکز تماس
              </h3>
              
              <p className="text-sm leading-loose mb-5" style={{ color: colors.textSecondary }}>
                در بالای صفحه داشبورد، چهار کارت آماری کلیدی قرار دارد که مهم‌ترین شاخص‌های عملکردی (KPI) مرکز تماس شما را نمایش می‌دهند. این کارت‌ها با طراحی بصری جذاب و رنگ‌بندی هوشمند، اطلاعات را به گونه‌ای ارائه می‌دهند که در یک نگاه می‌توانید وضعیت کلی را درک کنید. هر کارت شامل یک عدد بزرگ (مقدار فعلی)، یک آیکون نمادین، و یک اندیکاتور روند (نشان‌دهنده افزایش یا کاهش نسبت به دوره قبل) است.
              </p>

              <div className="space-y-5">
                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: colors.backgroundSecondary }}
                      >
                        <Phone className="w-6 h-6" style={{ color: colors.primary }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                        کل تماس‌ها (Total Calls)
                      </h4>
                      <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                        اولین و مهم‌ترین شاخص، تعداد کل تماس‌های ثبت شده در سیستم است. این عدد نشان‌دهنده حجم کلی فعالیت مرکز تماس شماست و می‌تواند شامل تماس‌های ورودی، خروجی، پاسخ داده شده، بی‌پاسخ و حتی تماس‌های لغو شده باشد. مشاهده روند این عدد در طول زمان به شما کمک می‌کند الگوهای فصلی، ساعات پیک و تغییرات رفتار مشتریان را شناسایی کنید. برای مثال، اگر متوجه شوید که در یک بازه زمانی خاص تعداد تماس‌ها به شدت افزایش یافته، می‌توانید منابع بیشتری را برای آن بازه زمانی اختصاص دهید.
                      </p>
                      <p className="text-sm leading-loose mt-3" style={{ color: colors.textSecondary }}>
                        کارت کل تماس‌ها همچنین شامل یک فلش کوچک سبز یا قرمز است که نشان‌دهنده افزایش یا کاهش نسبت به دوره قبل (معمولاً روز گذشته یا هفته گذشته) است. این اطلاعات به شما امکان می‌دهد بدون نیاز به مطالعه گزارش‌های پیچیده، بلافاصله بفهمید که آیا فعالیت مرکز تماس در حال رشد است یا کاهش.
                      </p>
                    </div>
                  </div>
                </div>

                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: colors.backgroundSecondary }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                        میزان رضایت مشتری (Customer Satisfaction Rate)
                      </h4>
                      <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                        شاخص رضایت مشتری یکی از حیاتی‌ترین معیارهای موفقیت هر مرکز تماس است. این عدد که به صورت درصد نمایش داده می‌شود، نشان‌دهنده این است که چه تعدادی از مشتریان از کیفیت خدمات دریافتی راضی بوده‌اند. سیستم رهگیر این شاخص را بر اساس امتیازات ثبت شده برای هر تماس محاسبه می‌کند. پس از پایان هر تماس، کارشناس یا سیستم خودکار می‌تواند یک امتیاز (معمولاً از 1 تا 5 ستاره) به تماس اختصاص دهد. سیستم این امتیازات را جمع‌آوری کرده و به صورت درصد نمایش می‌دهد.
                      </p>
                      <p className="text-sm leading-loose mt-3" style={{ color: colors.textSecondary }}>
                        حفظ میزان رضایت بالا (بالای 85٪) نشان‌دهنده عملکرد موفق تیم شماست. اگر این عدد کاهش یابد، باید به سرعت علت را بررسی کنید. ممکن است مشکل از آموزش ناکافی کارشناسان، فرآیندهای پیچیده، یا حتی محصولات و خدمات شما باشد. کارت رضایت مشتری به شما هشدار زودهنگام می‌دهد که قبل از اینکه مشکل بزرگ‌تر شود، اقدام کنید.
                      </p>
                    </div>
                  </div>
                </div>

                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: colors.backgroundSecondary }}
                      >
                        <Users className="w-6 h-6" style={{ color: colors.primary }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                        کارشناسان فعال (Active Agents)
                      </h4>
                      <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                        این کارت تعداد کارشناسانی را نشان می‌دهد که در حال حاضر آماده پاسخگویی به تماس‌ها هستند. این شاخص برای مدیریت منابع انسانی بسیار مهم است، چرا که به شما کمک می‌کند بفهمید آیا تعداد کافی کارشناس برای رسیدگی به حجم فعلی تماس‌ها در دسترس است یا خیر. اگر تعداد تماس‌ها زیاد باشد اما تعداد کارشناسان فعال کم، احتمالاً مشتریان مجبور خواهند بود زمان زیادی در صف انتظار بمانند که منجر به کاهش رضایت می‌شود.
                      </p>
                      <p className="text-sm leading-loose mt-3" style={{ color: colors.textSecondary }}>
                        سیستم رهگیر به صورت هوشمند وضعیت کارشناسان را پیگیری می‌کند. یک کارشناس "فعال" کسی است که وارد سیستم شده و وضعیت خود را روی "آماده" قرار داده است. کارشناسانی که در حال مکالمه هستند یا استراحت می‌کنند، در این شمارش لحاظ نم��‌شوند. این اطلاعات به شما امکان می‌دهد در لحظه تصمیم بگیرید که آیا نیاز دارید کارشناس اضافی فراخوانی کنید یا می‌توانید برخی از کارشناسان را به وظایف دیگری بگمارید.
                      </p>
                    </div>
                  </div>
                </div>

                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: colors.backgroundSecondary }}
                      >
                        <Clock className="w-6 h-6 text-purple-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                        متوسط مدت تماس (Average Call Duration)
                      </h4>
                      <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                        شاخص متوسط مدت تماس، میانگین زمانی که هر تماس طول می‌کشد را به شما نشان می‌دهد. این عدد معمولاً به دقیقه و ثانیه نمایش داده می‌شود (مثلاً 04:32 به معنای 4 دقیقه و 32 ثانیه). این شاخص ابزار بسیار قدرتمندی برای ارزیابی کارایی تیم شماست. مدت زمان بیش از حد طولانی می‌تواند نشان‌دهنده فرآیندهای پیچیده، آموزش ناکافی کارشناسان، یا سیستم‌های کند باشد. از طرف دیگر، مدت زمان بیش از حد کوتاه ممکن است به این معنا باشد که کارشناسان به اندازه کافی وقت برای حل مشکلات مشتریان نمی‌گذارند.
                      </p>
                      <p className="text-sm leading-loose mt-3" style={{ color: colors.textSecondary }}>
                        متوسط مدت تماس باید در تعادل باشد. هدف این نیست که تماس‌ها را هر چه سریع‌تر تمام کنید، بلکه باید در کوتاه‌ترین زمان ممکن، بهترین خدمت را ارائه دهید. سیستم رهگیر به شما امکان می‌دهد این شاخص را برای هر کارشناس جداگانه نیز مشاهده کنید تا متوجه شوید کدام کارشناس‌ها سریع‌تر و موثرتر عمل می‌کنند و کدام‌ها نیاز به آموزش بیشتری دارند.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.textPrimary }}>
                <BarChart3 className="w-5 h-5" style={{ color: colors.primary }} />
                نمودار روند تماس‌ها - تحلیل الگوهای زمانی
              </h3>

              <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                یکی از قدرتمندترین ابزارهای داشبورد، نمودار خطی روند تماس‌ها است که در مرکز صفحه قرار دارد. این نمودار به صورت پیش‌فرض تماس‌های 7 روز گذشته را نمایش می‌دهد، اما شما می‌توانید بازه زمانی را تغییر دهید تا داده‌های یک ماه، سه ماه یا حتی یک سال اخیر را مشاهده کنید. نمودار با استفاده از کتابخانه Recharts پیاده‌سازی شده و کاملاً تعاملی است، به این معنا که با حرکت موس روی نقاط مختلف، می‌توانید اطلاعات دقیق هر روز یا هر ساعت را ببینید.
              </p>

              <div 
                className="p-5 rounded-xl border mb-4"
                style={{ 
                  backgroundColor: colors.cardBackground,
                  borderColor: colors.border
                }}
              >
                <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                  چگونه از نمودار روند استفاده کنیم؟
                </h4>
                <p className="text-sm leading-loose mb-3" style={{ color: colors.textSecondary }}>
                  نمودار روند تماس‌ها ابزاری قدرتمند برای شناسایی الگوهای رفتاری مشتریان و برنامه‌ریزی منابع است. با مطالعه این نمودار می‌توانید بفهمید که در چه روزهایی از هفته یا چه ساعاتی از روز، حجم تماس‌ها بیشتر است. این اطلاعات به شما کمک می‌کند که شیفت‌های کاری کارشناسان را بهینه کنید و در ساعات پیک، تعداد کافی نیروی انسانی در دسترس باشد.
                </p>
                <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                  فرض کنید متوجه می‌شوید که هر روز از ساعت 10 تا 12 ظهر، تعداد تماس‌ها به شدت افزایش می‌یابد. با داشتن این اطلاعات، می‌توانید کارشناسان بیشتری را برای این بازه زمانی برنامه‌ریزی کنید تا زمان انتظار مشتریان کاهش یابد. همچنین اگر متوجه شوید که در روزهای خاصی (مثلاً دوشنبه‌ها) تماس‌ها کمتر است، می‌توانید از آن روزها برای جلسات آموزشی یا برنامه‌ریزی استراتژیک استفاده کنید.
                </p>
              </div>

              <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                نمودار همچنین به شما کمک می‌کند تاثیر کمپین‌های بازاریابی را ارزیابی کنید. اگر کمپین تبلیغاتی راه‌اندازی کرده‌اید، می‌توانید با مشاهده افزایش ناگهانی در نمودار، موفقیت آن را اندازه‌گیری کنید. یا اگر محصول جدیدی عرضه کرده‌اید، می‌توانید ببینید که آیا منجر به افزایش تماس‌های پشتیبانی شده است یا خیر.
              </p>
            </div>

            <div 
              className="p-6 rounded-xl border-r-4"
              style={{ 
                backgroundColor: colors.backgroundSecondary,
                borderColor: "#fbbf24"
              }}
            >
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-500" />
                <div className="flex-1">
                  <h4 className="font-bold mb-2" style={{ color: colors.textPrimary }}>نکات کاربردی برای استفاده بهینه از داشبورد</h4>
                  <p className="text-sm leading-loose mb-3" style={{ color: colors.textSecondary }}>
                    برای مشاهده جزئیات بیشتر هر ویجت، کافی است روی آن کلیک کنید. بیشتر ویجت‌ها قابلیت تعامل دارند و با کلیک روی آنها، اطلاعات تکمیلی نمایش داده می‌شود. برای مثال، اگر روی کارت "کل تماس‌ها" کلیک کنید، به صفحه تماس‌ها منتقل می‌شوید که لیست کامل تمام تماس‌ها را نمایش می‌دهد.
                  </p>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    همچنین توصیه می‌شود که داشبورد را در یک تب مرورگر همیشه باز نگه دارید تا بتوانید به صورت دوره‌ای آن را بررسی کنید. با توجه به اینکه داده‌ها هر 30 ثانیه به‌روز می‌شوند، می‌توانید تغییرات لحظه‌ای را دنبال کنید و در صورت نیاز فوراً واکنش نشان دهید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "calls":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
                مدیریت تماس‌ها - مرکز کنترل ارتباطات
              </h2>
              <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                صفحه تماس‌ها یکی از پرکاربردترین و مهم‌ترین بخش‌های سیستم رهگیر است. این صفحه به شما امکان می‌دهد تمامی تماس‌های ثبت شده در مرکز تماس خود را به صورت یک جدول جامع و قابل فیلتر مشاهده کنید. در این بخش نه تنها می‌توانید تاریخچه کامل تماس‌ها را ببینید، بلکه قادر خواهید بود با استفاده از ابزارهای قدرتمند جستجو و فیلتر، دقیقاً تماس‌هایی که به دنبالشان هستید را پیدا کنید.
              </p>
              <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                یکی از نقاط قوت این صفحه، استفاده از Redux Toolkit برای مدیریت وضعیت فیلترها است. این به معنای آن است که هر تغییری که در فیلترها ایجاد می‌کنید، بلافاصله و به صورت بسیار سریع اعمال می‌شود. همچنین تنظیمات فیلتر شما در Local Storage ذخیره می‌شود، بنابراین حتی اگر صفحه را ببندید و دوباره باز کنید، فیلترهای قبلی شما همچنان فعال خواهند بود.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.textPrimary }}>
                <FileText className="w-5 h-5" style={{ color: colors.primary }} />
                جدول تماس‌ها - قلب سیستم مدیریت ارتباطات
              </h3>

              <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                جدول تماس‌ها به صورت یک Grid پیشرفته طراحی شده که هر ردیف آن نماینده یک تماس است. جدول به صورت پیش‌فرض تماس‌های اخیر را در بالا نمایش می‌دهد (مرتب‌سازی بر اساس تاریخ نزولی)، اما شما می‌توانید ترتیب مرتب‌سازی را با کلیک روی هر ستون تغییر دهید. برای مثال، اگر روی ستون "مدت تماس" کلیک کنید، تماس‌ها از طولانی‌ترین به کوتاه‌ترین (یا بالعکس) مرتب می‌شوند.
              </p>

              <div className="space-y-5">
                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    ستون‌های جدول و کاربرد آنها
                  </h4>
                  <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                    جدول تماس‌ها شامل ستون‌های متعددی است که هر کدام اطلاعات خاصی را نمایش می‌دهند. ستون "شناسه تماس" یک کد یکتای عددی است که به هر تماس اختصاص داده می‌شود و برای پیگیری و ارجاع به تماس‌های خاص استفاده می‌شود. ستون "مشتری" نام و اطلاعات تماس مشتری را نشان می‌دهد و با کلیک روی نام مشتری، می‌توانید به صفحه پروفایل کامل او منتقل شوید که شامل تاریخچه تمام تماس‌های قبلی است.
                  </p>
                  <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                    ستون "کارشناس" نام کارشناسی که تماس را پاسخ داده یا انجام داده است را نمایش می‌دهد. این اطلاعات برای ارزیابی عملکرد فردی کارشناسان و شناسایی افرادی که بیشترین تعامل را با مشتریان دارند، بسیار ارزشمند است. ستون "تاریخ و زمان" دقیقاً مشخص می‌کند که تماس چه زمانی برقرار شده است، با فرمت شمسی و نمایش کامل روز، تاریخ، ساعت و دقیقه.
                  </p>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    ستون "مدت تماس" طول مکالمه را به دقیقه و ثانیه نشان می‌دهد. این اطلاعات به شما کمک می‌کند تماس‌های غیرعادی (بیش از حد کوتاه یا طولانی) را شناسایی کنید. ستون "وضعیت" با استفاده از Badge های رنگی مختلف، وضعیت تماس را نمایش می‌دهد: سبز برای "پاسخ داده شده"، قرمز برای "بی‌پاسخ"، زرد برای "در انتظار" و خاکستری برای "لغو شده". در نهایت ستون "امتیاز" کیفیت تماس را با ستاره‌های طلایی (از 1 تا 5) نشان می‌دهد.
                  </p>
                </div>

                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    شخصی‌سازی ستون‌ها - طراحی جدول اختصاصی
                  </h4>
                  <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                    یکی از قدرتمندترین ویژگی‌های جدول تماس‌ها، امکان شخصی‌سازی ستون‌های نمایش داده شده است. هر کاربر ممکن است به اطلاعات خاصی نیاز داشته باشد و نیازی نباشد همه ستون‌ها را ببیند. برای مثال، یک مدیر ممکن است بخواهد فقط "مشتری"، "کارشناس"، "تاریخ" و "امتیاز" را ببیند، در حالی که یک کارشناس پشتیبانی ممکن است به "شناسه تماس"، "مدت تماس" و "وضعیت" نیز نیاز داشته باشد.
                  </p>
                  <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                    برای شخصی‌سازی ستون‌ها، روی دکمه "ستون‌ها" که در بالای جدول قرار دارد کلیک کنید. یک منوی کشویی (Dropdown) باز می‌شود که لیست تمام ستون‌های موجود را با یک چک‌باکس کنار هر کدام نمایش می‌دهد. ستون‌هایی که فعال هستند علامت تیک دارند و در جدول نمایش داده می‌شوند. با کلیک روی هر چک‌باکس می‌توانید آن ستون را فعال یا غیرفعال کنید. تغییرات بلافاصله اعمال می‌شود و جدول به‌روزرسانی می‌گردد.
                  </p>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    تنظیمات ستون‌های شما در Local Storage ذخیره می‌شود، بنابراین هر بار که به صفحه تماس‌ها بازگردید، جدول دقیقاً همان‌طور که تنظیم کرده‌اید نمایش داده می‌شود. این ویژگی به شما کمک می‌کند کارایی کار خود را افزایش دهید و فقط روی اطلاعاتی که واقعاً اهمیت دارند تمرکز کنید. همچنین با کاهش تعداد ستون‌ها، جدول سریع‌تر بارگذاری می‌شود و تجربه کاربری بهتری خواهید داشت.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.textPrimary }}>
                <Settings className="w-5 h-5" style={{ color: colors.primary }} />
                سیستم فیلترینگ پیشرفته - یافتن سریع تماس‌های مورد نظر
              </h3>

              <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                وقتی تعداد تماس‌ها به صدها یا هزاران مورد می‌رسد، یافتن تماس خاصی می‌تواند چالش‌برانگیز باشد. سیستم فیلترینگ پیشرفته رهگیر این مشکل را حل می‌کند. با استفاده از فیلترهای متنوع می‌توانید در کمتر از چند ثانیه، دقیقاً تماس‌هایی که به دنبالشان هستید را پیدا کنید. فیلترها به صورت هوشمند با هم ترکیب می‌شوند، به این معنا که می‌توانید چندین فیلتر را همزمان فعال کنید و نتایج با دقت بیشتری نمایش داده شوند.
              </p>

              <div className="space-y-5">
                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    فیلتر کارشناس - تحلیل عملکرد فردی
                  </h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    فیلتر کارشناس به شما امکان می‌دهد تماس‌های یک کارشناس خاص را مشاهده کنید. این فیلتر به صورت یک Dropdown با قابلیت جستجو طراحی شده است. وقتی روی آن کلیک می‌کنید، لیست تمام کارشناسان فعال نمایش داده می‌شود و می‌توانید با تایپ نام، به سرعت کارشناس مورد نظر را پیدا کنید. پس از انتخاب کارشناس، جدول بلافاصله به‌روزرسانی می‌شود و فقط تماس‌هایی که آن کارشناس پاسخ داده یا انجام داده است نمایش داده می‌شود. این ویژگی برای ارزیابی عملکرد فردی، شناسایی نقاط قوت و ضعف هر کارشناس، و ارائه بازخورد هدفمند بسیار مفید است.
                  </p>
                </div>

                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    فیلتر وضعیت - دسته‌بندی تماس‌ها
                  </h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    فیلتر وضعیت یکی از پرکاربردترین فیلترها است. با استفاده از آن می‌توانید تماس‌ها را بر اساس وضعیت آنها فیلتر کنید: "پاسخ داده شده"، "بی‌پاسخ"، "در انتظار"، یا "لغو شده". برای مثال، اگر می‌خواهید بدانید چند تماس در روز گذشته بی‌پاسخ مانده است، کافی است فیلتر وضعیت را روی "بی‌پاسخ" تنظیم کنید و فیلتر تاریخ را روی "امروز" قرار دهید. این اطلاعات به شما کمک می‌کند بفهمید که آیا نیاز به افزایش تعداد کارشناسان یا بهبود فرآیندها دارید یا خیر.
                  </p>
                </div>

                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    فیلتر بازه زمانی - مسافرت در زمان
                  </h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    فیلتر بازه زمانی به شما امکان می‌دهد تماس‌های یک دوره خاص را مشاهده کنید. این فیلتر شامل گزینه‌های پیش‌فرض مانند "امروز"، "دیروز"، "7 روز گذشته"، "30 روز گذشته" و "سفارشی" است. اگر گزینه "سفارشی" را انتخاب کنید، یک Date Picker باز می‌شود که می‌توانید دقیقاً تاریخ شروع و پایان را مشخص کنید. این قابلیت برای تهیه گزارش‌های دوره‌ای، مقایسه عملکرد در بازه‌های مختلف، و تحلیل روندها بسیار کاربردی است.
                  </p>
                </div>

                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    جستجوی سریع - قدرت Full-Text Search
                  </h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    علاوه بر فیلترهای ساختاریافته، یک باکس جستجوی قدرتمند نیز در بالای جدول وجود دارد. این جستجو در تمام فیلدهای تماس به دنبال کلمه کلیدی شما می‌گردد. برای مثال، اگر نام یک مشتری، بخشی از شماره تلفن، یا حتی بخشی از یادداشت تماس را تایپ کنید، تمام تماس‌هایی که شامل آن کلمه هستند نمایش داده می‌شوند. جستجو Real-time است، یعنی همزمان با تایپ کردن، نتایج فیلتر می‌شوند و نیازی نیست دکمه جستجو بزنید.
                  </p>
                </div>
              </div>
            </div>

            <div 
              className="p-6 rounded-xl border-r-4"
              style={{ 
                backgroundColor: colors.backgroundSecondary,
                borderColor: "#ef4444"
              }}
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" />
                <div className="flex-1">
                  <h4 className="font-bold mb-2" style={{ color: colors.textPrimary }}>توجه: ترکیب فیلترها</h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    استفاده همزمان از چندین فیلتر ممکن است تعداد نتایج را به شدت محدود کند. برای مثال، اگر فیلتر کارشناس، وضعیت، و بازه زمانی را همزمان فعال کنید و هیچ تماسی این سه شرط را با هم ندا شته باشد، جدول خالی خواهد بود. در صورتی که نتیجه‌ای مشاهده نکردید، سعی کنید برخی فیلترها را غیرفعال کنید. همچنین می‌توانید با کلیک روی دکمه "پاک کردن فیلترها" تمام فیلترها را یکباره حذف کنید و دوباره از ابتدا شروع نمایید.
                  </p>
                </div>
              </div>
            </div>

            <div 
              className="p-6 rounded-xl border-r-4"
              style={{ 
                backgroundColor: colors.backgroundSecondary,
                borderColor: colors.primary
              }}
            >
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-500" />
                <div className="flex-1">
                  <h4 className="font-bold mb-2" style={{ color: colors.textPrimary }}>نکته حرفه‌ای: ذخیره فیلترهای پرکاربرد</h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    اگر مجبورید هر روز یک مجموعه خاصی از فیلترها را اعمال کنید (مثلاً تماس‌های بی‌پاسخ امروز)، تنظیمات فیلتر شما به صورت خودکار در سیستم ذخیره می‌شود. بنابراین فردا که دوباره وارد صفحه تماس‌ها شوید، همان فیلترها فعال خواهند بود. البته اگر می‌خواهید با فیلترهای خالی شروع کنید، کافی است دکمه "پاک کردن فیلترها" را بزنید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "agents":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
                مدیریت کارشناسان - قلب تپنده مرکز تماس
              </h2>
              <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                بخش مدیریت کارشناسان یکی از استراتژیک‌ترین صفحات سیستم رهگیر است، جایی که می‌توانید تیم خود را به صورت کامل مدیریت کنید. این صفحه نه تنها یک فهرست ساده از کارشناسان نیست، بلکه یک سیستم جامع برای نظارت بر عملکرد، ارزیابی مهارت‌ها، و بهینه‌سازی نیروی انسانی است. در این بخش می‌توانید کارشناسان جدید اضافه کنید، اطلاعات آنها را ویرایش نمایید، عملکرد هر فرد را به صورت جداگانه بررسی کنید، و حتی کارشناسان را به پروژه‌ها یا تیم‌های خاص اختصاص دهید.
              </p>
              <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                یکی از ویژگی‌های منحصربه‌فرد این صفحه، نمایش داده‌های زنده و به‌روز از عملکرد هر کارشناس است. سیستم به صورت خودکار تعداد تماس‌ها، میانگین امتیاز، نرخ موفقیت، و متوسط مدت تماس هر کارشناس را محاسبه و نمایش می‌دهد. این اطلاعات به شما کمک می‌کند تا بهترین و ضعیف‌ترین کارشناسان را شناسایی کنید، برنامه‌های آموزشی هدفمند طراحی نمایید، و پاداش‌ها را به صورت عادلانه توزیع کنید.
              </p>
            </div>

            <div 
              className="p-6 rounded-xl border-r-4"
              style={{ 
                backgroundColor: colors.backgroundSecondary,
                borderColor: colors.primary
              }}
            >
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.primary }} />
                <div className="flex-1">
                  <h4 className="font-bold mb-2" style={{ color: colors.textPrimary }}>نکته کلیدی: به‌روزرسانی لحظه‌ای آمار</h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    آمار عملکرد کارشناسان به صورت real-time محاسبه می‌شود. هر بار که یک کارشناس تماس جدیدی را پاسخ می‌دهد یا یک تماس به پایان می‌رسد، آمار او بلافاصله به‌روزرسانی می‌شود. این ویژگی به شما امکان می‌دهد عملکرد لحظه‌ای تیم را زیر نظر داشته باشید و در صورت نیاز، سریعاً مداخله کنید.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.textPrimary }}>
                <Users className="w-5 h-5" style={{ color: colors.primary }} />
                افزودن کارشناس جدید - گسترش تیم
              </h3>

              <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                افزودن کارشناس جدید به سیستم یک فرآیند ساده و سریع است که در عین حال امنیت و یکپارچگی داده‌ها را تضمین می‌کند. برای شروع، روی دکمه "+ افزودن کارشناس" که در گوشه بالا سمت چپ صفحه قرار دارد کلیک کنید. این کار یک مودال (Modal) زیبا و حرفه‌ای را باز می‌کند که شامل یک فرم چند مرحله‌ای برای ثبت اطلاعات کارشناس است.
              </p>

              <div className="space-y-5">
                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    اطلاعات پایه کارشناس
                  </h4>
                  <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                    در مرحله اول، باید اطلاعات پایه کارشناس را وارد کنید. این اطلاعات شامل نام و نام خانوادگی، کد پرسنلی (یک شناسه یکتا برای هر کارشناس)، شماره تماس مستقیم، و آدرس ایمیل است. سیستم به صورت خودکار اعتبارسنجی انجام می‌دهد و مطمئن می‌شود که کد پرسنلی تکراری نباشد و فرمت ایمیل و شماره تلفن صحیح است.
                  </p>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    فیلد نام و نام خانوادگی باید به صورت کامل و با حروف فارسی وارد شود تا در گزارش‌ها و رابط کاربری به درستی نمایش داده شود. کد پرسنلی معمولاً یک عدد 4 تا 6 رقمی است که از طرف سازمان شما تعیین می‌شود.
                  </p>
                </div>

                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    تخصیص نقش و سطح دسترسی
                  </h4>
                  <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                    یکی از مهم‌ترین بخش‌های فرم افزودن کارشناس، تعیین نقش و سطح دسترسی اوست. سیستم رهگیر از یک مدل سطح دسترسی چند لایه استفاده می‌کند که انعطاف‌پذیری بالایی دارد. نقش‌های اصلی شامل "کارشناس فروش"، "کارشناس پشتیبانی"، "سرپرست تیم"، "مدیر"، و "مدیر ارشد" است.
                  </p>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    برای مثال، یک "کارشناس فروش" فقط می‌تواند تماس‌های خود را ببیند، در حالی که یک "مدیر" می‌تواند تماس‌های تمام تیم را مشاهده کند، گزارش‌های جامع دریافت نماید، و تنظیمات سیستم را تغییر دهد.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.textPrimary }}>
                <BarChart3 className="w-5 h-5" style={{ color: colors.primary }} />
                مشاهده و تحلیل عملکرد کارشناسان
              </h3>

              <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                پس از اینکه کارشناسان به سیستم اضافه شدند، می‌توانید عملکرد آنها را به صورت real-time پیگیری کنید. صفحه کارشناسان شامل یک جدول جامع است که هر ردیف آن نماینده یک کارشناس و شاخص‌های کلیدی عملکرد اوست.
              </p>

              <div className="space-y-5">
                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    شاخص‌های کلیدی عملکرد (KPIs)
                  </h4>
                  <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                    برای هر کارشناس، چندین شاخص مهم نمایش داده می‌شود. "تعداد کل تماس‌ها" نشان می‌دهد که کارشناس چند تماس را پاسخ داده است. "میانگین امتیاز" که از 1 تا 5 ستاره است، کیفیت تماس‌های کارشناس را نشان می‌دهد. این امتیاز بر اساس ارزیابی‌های مشتریان محاسبه می‌شود.
                  </p>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    شاخص "نرخ موفقیت" درصدی از تماس‌هایی که به نتیجه مطلوب رسیده‌اند را نمایش می‌دهد. شاخص "متوسط مدت تماس" نشان می‌دهد که به طور میانگین هر تماس چند دقیقه طول می‌کشد.
                  </p>
                </div>

                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    مقایسه عملکرد و رتبه‌بندی
                  </h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    یکی از کاربردی‌ترین ویژگی‌ها، امکان مقایسه عملکرد کارشناسان با یکدیگر است. می‌توانید جدول را بر اساس میانگین امتیاز مرتب‌سازی کنید تا ببینید چه کسی بالاترین کیفیت کار را دارد. این اطلاعات برای برنامه‌های تشویقی و پاداش‌دهی بسیار ارزشمند است.
                  </p>
                </div>
              </div>
            </div>

            <div 
              className="p-6 rounded-xl border-r-4"
              style={{ 
                backgroundColor: colors.backgroundSecondary,
                borderColor: "#fbbf24"
              }}
            >
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-500" />
                <div className="flex-1">
                  <h4 className="font-bold mb-2" style={{ color: colors.textPrimary }}>نکته مدیریتی: ارزیابی منظم عملکرد</h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    توصیه می‌شود که حداقل یکبار در هفته عملکرد کارشناسان را بررسی کنید و با آنهایی که عملکرد پایین‌تری دارند جلسه بازخورد داشته باشید. همچنین از کارشناسان برتر بخواهید تجربیات خود را با دیگران به اشتراک بگذارند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case "customers":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: colors.textPrimary }}>
                مدیریت مشتریان - قلب کسب‌وکار شما
              </h2>
              <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                بخش مدیریت مشتریان یکی از حیاتی‌ترین اجزای سیستم رهگیر است، چرا که در نهایت تمام فعالیت‌های مرکز تماس در خدمت مشتریان است. این صفحه یک سیستم CRM (مدیریت ارتباط با مشتری) کامل و حرفه‌ای است که به شما امکان می‌دهد اطلاعات کامل تمام مشتریان خود را در یک جا داشته باشید، تاریخچه تعاملات با هر مشتری را ببینید، و بر اساس این اطلاعات، خدمات بهتری ارائه دهید.
              </p>
              <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                سیستم مدیریت مشتریان رهگیر بر اساس مفهوم "مشتری محوری" طراحی شده است. این به معنای آن است که هر تماس، هر درخواست، و هر فیدبک مشتری در پروفایل او ثبت می‌شود و یک تصویر جامع از رابطه شما با آن مشتری ایجاد می‌کند.
              </p>
            </div>

            <div 
              className="p-6 rounded-xl border-r-4"
              style={{ 
                backgroundColor: colors.backgroundSecondary,
                borderColor: colors.primary
              }}
            >
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.primary }} />
                <div className="flex-1">
                  <h4 className="font-bold mb-2" style={{ color: colors.textPrimary }}>نکته کلیدی: یکپارچگی اطلاعات</h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    تمام اطلاعات مشتری به صورت یکپارچه و متمرکز ذخیره می‌شود. این بدان معناست که هر کارشناسی که با یک مشتری تماس می‌گیرد، می‌تواند تمام تاریخچه تعاملات قبلی را ببیند. این یکپارچگی از تکرار سوالات جلوگیری می‌کند.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.textPrimary }}>
                <Users className="w-5 h-5" style={{ color: colors.primary }} />
                افزودن مشتری جدید - ساخت پایگاه داده مشتریان
              </h3>

              <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                افزودن مشتری جدید به سیستم اولین قدم در ایجاد یک رابطه بلندمدت است. برای افزودن مشتری، روی دکمه "+ افزودن مشتری" کلیک کنید. یک فرم کامل و حرفه‌ای باز می‌شود که شامل تمام فیلدهای ضروری برای ثبت اطلاعات مشتری است.
              </p>

              <div className="space-y-5">
                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    اطلاعات تماس اولیه
                  </h4>
                  <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                    حداقل اطلاعاتی که برای ثبت مشتری نیاز دارید شامل نام و نام خانوادگی، شماره تلفن (موبایل یا ثابت)، و به صورت اختیاری آدرس ایمیل است. شماره تلفن به عنوان شناسه اصلی مشتری عمل می‌کند و باید یکتا باشد.
                  </p>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    آدرس ایمیل اگرچه اختیاری است، اما بسیار توصیه می‌شود که آن را ثبت کنید. داشتن ایمیل به شما امکان می‌دهد خبرنامه و پیشنهادات ویژه را به صورت الکترونیکی برای مشتری ارسال کنید.
                  </p>
                </div>

                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    دسته‌بندی و برچسب‌گذاری مشتریان
                  </h4>
                  <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                    یکی از ویژگی‌های قدرتمند سیستم، امکان دسته‌بندی مشتریان با استفاده از برچسب‌ها (Tags) است. می‌توانید مشتریان را بر اساس معیارهای مختلفی مانند "مشتری VIP"، "مشتری جدید"، "مشتری وفادار" طبقه‌بندی کنید.
                  </p>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    این دسته‌بندی‌ها بعداً برای فیلتر کردن، ارسال پیام‌های هدفمند، و ایجاد کمپین‌های بازاریابی استفاده می‌شود.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.textPrimary }}>
                <Phone className="w-5 h-5" style={{ color: colors.primary }} />
                مشاهده تاریخچه تعاملات و تماس‌ها
              </h3>

              <p className="text-sm leading-loose mb-4" style={{ color: colors.textSecondary }}>
                یکی از ارزشمندترین ویژگی‌ها، قابلیت مشاهده تاریخچه کامل تمام تعاملات با هر مشتری است. با کلیک روی نام هر مشتری، به صفحه پروفایل او منتقل می‌شوید که شامل Timeline کامل از تمام تماس‌ها، ایمیل‌ها و تعاملات است.
              </p>

              <div className="space-y-5">
                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    جزئیات هر تماس و تعامل
                  </h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    برای هر تماس در تاریخچه، می‌توانید اطلاعات کاملی مشاهده کنید: کدام کارشناس تماس را پاسخ داده، تاریخ و ساعت دقیق، مدت تماس، موضوع تماس، و حتی فایل صوتی ضبط شده. این سطح از جزئیات به شما کمک می‌کند کیفیت خدمات را ارزیابی کنید.
                  </p>
                </div>

                <div 
                  className="p-5 rounded-xl border"
                  style={{ 
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                >
                  <h4 className="font-bold mb-3 text-base" style={{ color: colors.textPrimary }}>
                    تحلیل رفتار مشتری
                  </h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    با مطالعه تاریخچه تعاملات، می‌توانید الگوهای رفتاری مشتری را شناسایی کنید. این بینش‌ها به شما کمک می‌کند خدمات پیش‌گیرانه (Proactive Service) ارائه دهید - یعنی قبل از اینکه مشتری مشکلی را مطرح کند، شما آن را پیش‌بینی می‌کنید.
                  </p>
                </div>
              </div>
            </div>

            <div 
              className="p-6 rounded-xl border-r-4"
              style={{ 
                backgroundColor: colors.backgroundSecondary,
                borderColor: "#10b981"
              }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
                <div className="flex-1">
                  <h4 className="font-bold mb-2" style={{ color: colors.textPrimary }}>بهترین روش: به‌روزرسانی مداوم اطلاعات</h4>
                  <p className="text-sm leading-loose" style={{ color: colors.textSecondary }}>
                    اطلاعات مشتری یک دارایی ارزشمند است که باید همیشه به‌روز نگه داشته شود. پس از هر تماس، یادداشت‌های مربوط را ثبت کنید. این به‌روزرسانی‌های منظم تضمین می‌کند که همیشه با آخرین اطلاعات کار می‌کنید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <p style={{ color: colors.textSecondary }}>
              مستندات این بخش به زودی اضافه خواهد شد...
            </p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2" style={{ color: colors.textPrimary }}>آموزش‌ها</h1>
        <p className="text-sm" style={{ color: colors.textSecondary }}>
          آموزش‌های ویدیویی و مستندات جامع استفاده از سیستم رهگیر
        </p>
      </div>

      {/* View Toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveView("videos")}
          className="px-6 py-2.5 rounded-lg font-medium transition-all text-sm"
          style={{
            backgroundColor: activeView === "videos" ? colors.primary : colors.backgroundSecondary,
            color: activeView === "videos" ? "#ffffff" : colors.textSecondary,
          }}
        >
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            <span>ویدیوهای آموزشی</span>
          </div>
        </button>
        <button
          onClick={() => setActiveView("docs")}
          className="px-6 py-2.5 rounded-lg font-medium transition-all text-sm"
          style={{
            backgroundColor: activeView === "docs" ? colors.primary : colors.backgroundSecondary,
            color: activeView === "docs" ? "#ffffff" : colors.textSecondary,
          }}
        >
          <div className="flex items-center gap-2">
            <Book className="w-4 h-4" />
            <span>مستندات متنی</span>
          </div>
        </button>
      </div>

      {/* Videos View */}
      {activeView === "videos" && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div 
              className="rounded-lg p-4 border transition-colors"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.border
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <Video className="w-5 h-5" style={{ color: colors.primary }} />
                <span className="text-xs" style={{ color: colors.textSecondary }}>ویدیوهای آموزشی</span>
              </div>
              <p className="text-2xl font-bold" style={{ color: colors.textPrimary }}>24</p>
            </div>

            <div 
              className="rounded-lg p-4 border transition-colors"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.border
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <Book className="w-5 h-5 text-[#00c853]" />
                <span className="text-xs" style={{ color: colors.textSecondary }}>راهنماها</span>
              </div>
              <p className="text-2xl font-bold" style={{ color: colors.textPrimary }}>12</p>
            </div>

            <div 
              className="rounded-lg p-4 border transition-colors"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.border
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-5 h-5 text-[#9c27b0]" />
                <span className="text-xs" style={{ color: colors.textSecondary }}>مدت زمان کل</span>
              </div>
              <p className="text-2xl font-bold" style={{ color: colors.textPrimary }}>4:32:15</p>
            </div>
          </div>

          {/* Video Tutorials */}
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: colors.textPrimary }}>
              ویدیوهای آموزشی
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="rounded-lg border overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                  style={{
                    backgroundColor: colors.cardBackground,
                    borderColor: colors.border
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    className={`${tutorial.thumbnail} h-40 flex items-center justify-center relative`}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Play className="w-8 h-8 text-white mr-1" />
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {tutorial.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base font-bold" style={{ color: colors.textPrimary }}>
                        {tutorial.title}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(
                          tutorial.category
                        )}`}
                      >
                        {tutorial.category}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: colors.textSecondary }}>
                      {tutorial.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guides */}
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: colors.textPrimary }}>راهنماها</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {guides.map((guide) => {
                const Icon = guide.icon;
                return (
                  <div
                    key={guide.id}
                    className="rounded-lg border p-6 hover:shadow-lg transition-all cursor-pointer"
                    style={{
                      backgroundColor: colors.cardBackground,
                      borderColor: colors.border
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: colors.backgroundSecondary }}
                      >
                        <Icon className={`w-8 h-8 ${guide.color}`} />
                      </div>
                      <h3 className="text-base font-bold mb-2" style={{ color: colors.textPrimary }}>
                        {guide.title}
                      </h3>
                      <p className="text-sm" style={{ color: colors.textSecondary }}>
                        {guide.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Documentation View */}
      {activeView === "docs" && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1">
            <div 
              className="rounded-lg border p-2 sticky top-6"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.border
              }}
            >
              <nav className="space-y-1">
                {docTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveDocTab(tab.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm"
                      style={{
                        backgroundColor: activeDocTab === tab.id ? colors.backgroundSecondary : 'transparent',
                        color: activeDocTab === tab.id ? colors.textPrimary : colors.textSecondary,
                        fontWeight: activeDocTab === tab.id ? '500' : '400'
                      }}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div 
              className="rounded-lg border p-6"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.border
              }}
            >
              {renderDocContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}