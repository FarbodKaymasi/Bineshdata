import { DonutChart, BarChart, LineChart, AreaChart, PieChart } from "../components/aicharts";

export function TestPage() {
  // ============== داده‌های ساده (برای Donut, Bar, Pie) ==============
  const simpleData = [
    { name: "تهران", value: 35000 },
    { name: "مشهد", value: 25000 },
    { name: "اصفهان", value: 18000 },
    { name: "شیراز", value: 15000 },
    { name: "تبریز", value: 12000 },
  ];

  const monthlyData = [
    { name: "فروردین", value: 12000 },
    { name: "اردیبهشت", value: 15000 },
    { name: "خرداد", value: 18000 },
    { name: "تیر", value: 14000 },
    { name: "مرداد", value: 20000 },
    { name: "شهریور", value: 17000 },
  ];

  // ============== داده‌های چند بعدی (برای Line و Area) ==============
  // توجه: Series ها خودکار از keys استخراج می‌شوند
  const multiSeriesData = [
    { name: "هفته ۱", فروش: 4000, سود: 2400, هزینه: 1800 },
    { name: "هفته ۲", فروش: 3000, سود: 1398, هزینه: 2100 },
    { name: "هفته ۳", فروش: 2000, سود: 9800, هزینه: 1200 },
    { name: "هفته ۴", فروش: 2780, سود: 3908, هزینه: 2500 },
    { name: "هفته ۵", فروش: 1890, سود: 4800, هزینه: 1600 },
    { name: "هفته ۶", فروش: 2390, سود: 3800, هزینه: 1900 },
    { name: "هفته ۷", فروش: 3490, سود: 4300, هزینه: 2200 },
  ];

  const dailyData = [
    { name: "شنبه", بازدید: 4000, تبدیل: 2400, فروش: 2400 },
    { name: "یکشنبه", بازدید: 3000, تبدیل: 1398, فروش: 2210 },
    { name: "دوشنبه", بازدید: 2000, تبدیل: 9800, فروش: 2290 },
    { name: "سه‌شنبه", بازدید: 2780, تبدیل: 3908, فروش: 2000 },
    { name: "چهارشنبه", بازدید: 1890, تبدیل: 4800, فروش: 2181 },
    { name: "پنجشنبه", بازدید: 2390, تبدیل: 3800, فروش: 2500 },
    { name: "جمعه", بازدید: 3490, تبدیل: 4300, فروش: 2100 },
  ];

  const deviceData = [
    { name: "فروردین", موبایل: 4000, تبلت: 2400, دسکتاپ: 2400 },
    { name: "اردیبهشت", موبایل: 3000, تبلت: 1398, دسکتاپ: 2210 },
    { name: "خرداد", موبایل: 2000, تبلت: 9800, دسکتاپ: 2290 },
    { name: "تیر", موبایل: 2780, تبلت: 3908, دسکتاپ: 2000 },
    { name: "مرداد", موبایل: 1890, تبلت: 4800, دسکتاپ: 2181 },
    { name: "شهریور", موبایل: 2390, تبلت: 3800, دسکتاپ: 2500 },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fb] dark:bg-[#0e1526] transition-colors duration-300 p-4 md:p-6 lg:p-8" dir="rtl">
      {/* Header */}
      <div className="mb-8 bg-gradient-to-r from-white to-[#f7f9fb] dark:from-[#1a1f2e] dark:to-[#151b2b] rounded-2xl p-6 border border-[#e8e8e8] dark:border-[#2a3142] shadow-sm">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0e1526] dark:text-white mb-3">
          صفحه تست چارت‌های هوشمند
        </h1>
        <p className="text-sm md:text-base text-[#585757] dark:text-[#8b92a8]">
          نمایش تمامی نمودارهای موجود در سیستم با طراحی responsive و پشتیبانی کامل از حالت تاریک
        </p>
        <div className="mt-3 flex items-center gap-2 text-xs text-[#8b92a8]">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>رنگ‌ها از تم سیستم | Series ها خودکار از data استخراج می‌شوند</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="space-y-8">
        {/* Section 1: یک داده در سه چارت مختلف */}
        <div>
          <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-xl">
            <h2 className="text-lg md:text-xl font-semibold text-blue-900 dark:text-blue-200 mb-2">
              📊 نمونه ۱: یک داده در سه نمودار مختلف
            </h2>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              داده یکسان "simpleData" در نمودار دایره‌ای، حلقه‌ای و میله‌ای
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            <DonutChart
              title="نمودار حلقه‌ای - فروش شهرها"
              data={simpleData}
              showLegend
              showTooltip
              height={350}
            />

            <PieChart
              title="نمودار دایره‌ای - فروش شهرها"
              data={simpleData}
              showLegend
              showTooltip
              showPercentage
              interactive
              height={350}
            />

            <BarChart
              title="نمودار میله‌ای - فروش شهرها"
              data={simpleData}
              showGrid
              showTooltip
              height={350}
            />
          </div>
        </div>

        {/* Section 2: داده ماهانه در چارت‌های مختلف */}
        <div>
          <div className="mb-4 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30 rounded-xl">
            <h2 className="text-lg md:text-xl font-semibold text-green-900 dark:text-green-200 mb-2">
              📈 نمونه ۲: داده ماهانه در نمودارهای مختلف
            </h2>
            <p className="text-sm text-green-700 dark:text-green-300">
              داده یکسان "monthlyData" در نمودار میله‌ای عمودی، افقی و حلقه‌ای
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <BarChart
              title="نمودار میله‌ای عمودی - فروش ماهانه"
              data={monthlyData}
              showGrid
              showTooltip
              height={350}
              yAxisLabel="مبلغ (میلیون تومان)"
            />

            <BarChart
              title="نمودار میله‌ای افقی - فروش ماهانه"
              data={monthlyData}
              showGrid
              showTooltip
              horizontal
              height={350}
            />
          </div>
        </div>

        {/* Section 3: داده چند بعدی با استخراج خودکار Series */}
        <div>
          <div className="mb-4 p-4 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/30 rounded-xl">
            <h2 className="text-lg md:text-xl font-semibold text-purple-900 dark:text-purple-200 mb-2">
              📉 نمونه ۳: استخراج خودکار Series از داده
            </h2>
            <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
              داده "multiSeriesData" شامل فروش، سود و هزینه است - Series ها خودکار شناسایی می‌شوند
            </p>
            <div className="bg-purple-100 dark:bg-purple-900/20 rounded-lg p-3 font-mono text-xs">
              <code className="text-purple-800 dark:text-purple-300">
                {'{ name: "هفته ۱", فروش: 4000, سود: 2400, هزینه: 1800 }'}
              </code>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <LineChart
              title="نمودار خطی - تحلیل هفتگی (بدون تعریف series)"
              data={multiSeriesData}
              showGrid
              showLegend
              showTooltip
              showDots
              smooth
              height={350}
            />

            <AreaChart
              title="نمودار ناحیه‌ای - تحلیل هفتگی (بدون تعریف series)"
              data={multiSeriesData}
              showGrid
              showLegend
              showTooltip
              smooth
              stacked={false}
              height={350}
            />
          </div>
        </div>

        {/* Section 4: مقایسه Stacked و Normal Area Chart */}
        <div>
          <div className="mb-4 p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/30 rounded-xl">
            <h2 className="text-lg md:text-xl font-semibold text-orange-900 dark:text-orange-200 mb-2">
              🔄 نمونه ۴: یک داده در حالت Normal و Stacked
            </h2>
            <p className="text-sm text-orange-700 dark:text-orange-300 mb-2">
              داده "dailyData" شامل بازدید، تبدیل و فروش - نمایش معمولی و انباشته
            </p>
            <div className="bg-orange-100 dark:bg-orange-900/20 rounded-lg p-3 font-mono text-xs">
              <code className="text-orange-800 dark:text-orange-300">
                {'{ name: "شنبه", بازدید: 4000, تبدیل: 2400, فروش: 2400 }'}
              </code>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <AreaChart
              title="نمودار ناحیه‌ای معمولی - قیف فروش روزانه"
              data={dailyData}
              showGrid
              showLegend
              showTooltip
              smooth
              stacked={false}
              height={350}
            />

            <AreaChart
              title="نمودار ناحیه‌ای انباشته - قیف فروش روزانه"
              data={dailyData}
              showGrid
              showLegend
              showTooltip
              smooth
              stacked={true}
              height={350}
            />
          </div>
        </div>

        {/* Section 5: نمودار خطی و ناحیه‌ای با داده دستگاه */}
        <div>
          <div className="mb-4 p-4 bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-900/30 rounded-xl">
            <h2 className="text-lg md:text-xl font-semibold text-pink-900 dark:text-pink-200 mb-2">
              💻 نمونه ۵: تحلیل ترافیک دستگاه‌ها
            </h2>
            <p className="text-sm text-pink-700 dark:text-pink-300 mb-2">
              داده "deviceData" شامل موبایل، تبلت و دسکتاپ - در ۳ نوع نمودار مختلف
            </p>
            <div className="bg-pink-100 dark:bg-pink-900/20 rounded-lg p-3 font-mono text-xs">
              <code className="text-pink-800 dark:text-pink-300">
                {'{ name: "فروردین", موبایل: 4000, تبلت: 2400, دسکتاپ: 2400 }'}
              </code>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <LineChart
              title="نمودار خطی - ترافیک دستگاه"
              data={deviceData}
              showGrid
              showLegend
              showTooltip
              showDots
              smooth
              height={300}
            />

            <AreaChart
              title="ناحیه‌ای معمولی - ترافیک"
              data={deviceData}
              showGrid
              showLegend
              showTooltip
              smooth
              stacked={false}
              height={300}
            />

            <AreaChart
              title="ناحیه‌ای انباشته - ترافیک"
              data={deviceData}
              showGrid
              showLegend
              showTooltip
              smooth
              stacked={true}
              height={300}
            />
          </div>
        </div>

        {/* Section 6: مجموعه کامل */}
        <div>
          <div className="mb-4 p-4 bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900/30 rounded-xl">
            <h2 className="text-lg md:text-xl font-semibold text-teal-900 dark:text-teal-200 mb-2">
              🎨 نمونه ۶: گالری کامل نمودارها
            </h2>
            <p className="text-sm text-teal-700 dark:text-teal-300">
              نمایش همه‌ی نمودارها با تنظیمات مختلف در کنار هم
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
            <DonutChart
              title="حلقه‌ای کوچک"
              data={simpleData.slice(0, 4)}
              showLegend
              showTooltip
              height={280}
              innerRadius={50}
              outerRadius={70}
            />

            <PieChart
              title="دایره‌ای ساده"
              data={monthlyData.slice(0, 4)}
              showLegend
              showTooltip
              showPercentage={false}
              interactive={false}
              height={280}
            />

            <BarChart
              title="میله‌ای ساده"
              data={monthlyData.slice(0, 4)}
              showGrid
              showTooltip
              height={280}
            />

            <BarChart
              title="میله‌ای افقی کوچک"
              data={simpleData.slice(0, 4)}
              showGrid
              showTooltip
              horizontal
              height={280}
            />
          </div>
        </div>

        {/* Section 7: نمایش سادگی استفاده */}
        <div>
          <div className="mb-4 p-4 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/30 rounded-xl">
            <h2 className="text-lg md:text-xl font-semibold text-indigo-900 dark:text-indigo-200 mb-2">
              ⚡ نمونه ۷: سادگی استفاده - فقط یک JSON!
            </h2>
            <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-2">
              کافیست داده خود را بسازید و به چارت‌های مختلف پاس دهید
            </p>
            <div className="bg-indigo-100 dark:bg-indigo-900/20 rounded-lg p-3 font-mono text-xs space-y-2">
              <div>
                <span className="text-indigo-600 dark:text-indigo-400">// داده شما:</span>
              </div>
              <code className="text-indigo-800 dark:text-indigo-300">
                {'const data = [{ name: "A", مقدار۱: 100, مقدار۲: 200 }]'}
              </code>
              <div className="pt-2">
                <span className="text-indigo-600 dark:text-indigo-400">// استفاده:</span>
              </div>
              <code className="text-indigo-800 dark:text-indigo-300">
                {'<LineChart data={data} />'}
              </code>
              <div className="text-indigo-600 dark:text-indigo-400 pt-1">
                ✅ Series ها خودکار شناسایی می‌شوند: مقدار۱، مقدار۲
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <LineChart
              title="فقط با data - بدون series"
              data={multiSeriesData.slice(0, 5)}
              showGrid
              showLegend
              showTooltip
              height={300}
            />
            <AreaChart
              title="فقط با data - بدون series"
              data={deviceData.slice(0, 4)}
              showGrid
              showLegend
              showTooltip
              stacked={true}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-12 p-6 bg-gradient-to-br from-white to-[#f7f9fb] dark:from-[#1a1f2e] dark:to-[#151b2b] border border-[#e8e8e8] dark:border-[#2a3142] rounded-2xl shadow-sm">
        <h3 className="text-lg font-bold text-[#0e1526] dark:text-white mb-4">
          ✨ ویژگی‌های چارت‌های هوشمند
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-[#0e1526]/30 hover:shadow-md transition-shadow">
            <div className="w-2 h-2 bg-[#0085ff] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm text-[#585757] dark:text-[#8b92a8]">
              رنگ‌ها از تم سیستم (بینش/حافظ) گرفته می‌شوند
            </p>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-[#0e1526]/30 hover:shadow-md transition-shadow">
            <div className="w-2 h-2 bg-[#4ade80] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm text-[#585757] dark:text-[#8b92a8]">
              Series ها خودکار از data استخراج می‌شوند
            </p>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-[#0e1526]/30 hover:shadow-md transition-shadow">
            <div className="w-2 h-2 bg-[#fbbf24] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm text-[#585757] dark:text-[#8b92a8]">
              پشتیبانی کامل از Dark Mode با تغییر خودکار
            </p>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-[#0e1526]/30 hover:shadow-md transition-shadow">
            <div className="w-2 h-2 bg-[#f87171] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm text-[#585757] dark:text-[#8b92a8]">
              فقط یک JSON برای همه چارت‌ها
            </p>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-[#0e1526]/30 hover:shadow-md transition-shadow">
            <div className="w-2 h-2 bg-[#a78bfa] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm text-[#585757] dark:text-[#8b92a8]">
              طراحی Responsive با Grid های هوشمند
            </p>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-[#0e1526]/30 hover:shadow-md transition-shadow">
            <div className="w-2 h-2 bg-[#fb923c] rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-sm text-[#585757] dark:text-[#8b92a8]">
              نیازی به تعریف رنگ یا series نیست
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
