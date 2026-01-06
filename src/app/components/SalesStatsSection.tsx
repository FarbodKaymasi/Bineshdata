import { useCurrentColors } from "../contexts/ThemeColorsContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Package, Tag } from "lucide-react";

export function SalesStatsSection() {
  const colors = useCurrentColors();

  // Data for donut chart
  const chartData = [
    { name: "قالی", value: 30, color: "#10B981" },
    { name: "فرش", value: 35, color: "#06B6D4" },
    { name: "موکت", value: 20, color: "#F59E0B" },
    { name: "سوت", value: 5, color: "#EC4899" },
    { name: "بافت", value: 10, color: "#8B5CF6" },
  ];

  const totalValue = chartData.reduce((sum, item) => sum + item.value, 0);
  const centerValue = "86,000,000";

  // Stats cards data
  const statsCards = [
    {
      icon: ShoppingCart,
      label: "مبلغ بازگشت کالا",
      value: "14,000,000",
      unit: "تومان",
      trend: -5,
      color: colors.error,
    },
    {
      icon: DollarSign,
      label: "فروش خالص",
      value: "86,000,000",
      unit: "تومان",
      trend: 50,
      color: colors.success,
    },
    {
      icon: Package,
      label: "فروش بیل‌های تکی",
      value: "60,000,000",
      unit: "تومان",
      trend: -50,
      color: colors.warning,
    },
    {
      icon: Tag,
      label: "فروش محصولات تخفیف دار",
      value: "40,000,000",
      unit: "تومان",
      trend: -50,
      color: colors.primary,
    },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      const percentage = ((data.value / totalValue) * 100).toFixed(1);
      return (
        <div
          className="px-3 py-2 rounded-lg border shadow-lg"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: colors.border,
          }}
        >
          <p className="text-sm font-medium" style={{ color: colors.textPrimary }}>
            {data.name}
          </p>
          <p className="text-xs" style={{ color: colors.textSecondary }}>
            {percentage}٪
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" dir="rtl">
      {/* Left side - Stats Cards (2/3 width) */}
      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {statsCards.map((stat, index) => {
            const Icon = stat.icon;
            const isPositive = stat.trend > 0;
            const TrendIcon = isPositive ? TrendingUp : TrendingDown;
            
            return (
              <div
                key={index}
                className="rounded-xl p-6 border"
                style={{
                  backgroundColor: colors.cardBackground,
                  borderColor: colors.border,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}22` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <div
                    className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium"
                    style={{
                      backgroundColor: isPositive ? `${colors.success}22` : `${colors.error}22`,
                      color: isPositive ? colors.success : colors.error,
                    }}
                  >
                    <TrendIcon className="w-3 h-3" />
                    <span>{Math.abs(stat.trend)}٪</span>
                  </div>
                </div>
                <p className="text-xs mb-2" style={{ color: colors.textSecondary }}>
                  {stat.label}
                </p>
                <p className="text-2xl font-bold mb-1" style={{ color: colors.textPrimary }}>
                  {stat.value}
                </p>
                <p className="text-xs" style={{ color: colors.textSecondary }}>
                  {stat.unit}
                </p>
                <div className="mt-3 pt-3 border-t" style={{ borderColor: colors.border }}>
                  <p className="text-xs" style={{ color: colors.textSecondary }}>
                    {isPositive ? "رشد" : "کاهشی"} نسبت به دوره قبل
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right side - Donut Chart (1/3 width) */}
      <div className="lg:col-span-1">
        <div
          className="rounded-xl border h-full"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: colors.border,
          }}
        >
          {/* Chart Header */}
          <div className="p-4 text-center border-b" style={{ borderColor: colors.border }}>
            <h3 className="text-sm font-medium mb-1" style={{ color: colors.textPrimary }}>
              فیلتر داده‌ها (براساس تایم)
            </h3>
          </div>

          {/* Donut Chart */}
          <div className="relative" style={{ height: "280px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            
            {/* Center value */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-2xl font-bold" style={{ color: colors.textPrimary }}>
                {centerValue}
              </p>
              <p className="text-xs mt-1" style={{ color: colors.textSecondary }}>
                تومان
              </p>
            </div>
          </div>

          {/* Legend */}
          <div className="p-4 pt-0">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {chartData.map((item, index) => {
                const percentage = ((item.value / totalValue) * 100).toFixed(0);
                return (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-xs" style={{ color: colors.textSecondary }}>
                      {item.name}
                    </span>
                    <span className="text-xs font-medium" style={{ color: colors.textPrimary }}>
                      {percentage}٪
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 pt-3 border-t text-center" style={{ borderColor: colors.border }}>
              <p className="text-xs" style={{ color: colors.textSecondary }}>
                دسته‌بندی محصولات
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}