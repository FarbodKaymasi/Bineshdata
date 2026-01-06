import { useCurrentColors } from "../contexts/ThemeColorsContext";
import { TrendingUp, Award } from "lucide-react";

const topProducts = [
  { name: "فرش ۴۰۰*۳ شانه پرستیژ", sales: 45, revenue: 18500000, growth: 12 },
  { name: "مبل راحتی 7 نفره چستر", sales: 38, revenue: 15200000, growth: 8 },
  { name: "تابلو فرش دستباف ۱۰۰*۱۵۰", sales: 32, revenue: 12800000, growth: -3 },
  { name: "موکت ۷۰۰*۵ شانه تراکم ۲۵۰۰", sales: 28, revenue: 11200000, growth: 15 },
  { name: "فرش ماشینی ۱۲۰۰*۹ شانه", sales: 25, revenue: 10000000, growth: 5 },
];

export function TopProductsWidget() {
  const colors = useCurrentColors();

  return (
    <div
      className="rounded-xl p-6 border"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.border,
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold mb-1" style={{ color: colors.textPrimary }}>
            پرفروش‌ترین محصولات
          </h2>
          <p className="text-sm" style={{ color: colors.textSecondary }}>
            برترین محصولات از نظر تعداد فروش
          </p>
        </div>
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: colors.primary + "22" }}
        >
          <Award className="w-5 h-5" style={{ color: colors.primary }} />
        </div>
      </div>

      <div className="space-y-4">
        {topProducts.map((product, index) => (
          <div key={index} className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm"
              style={{
                backgroundColor: index === 0 ? colors.primary + "33" : colors.backgroundSecondary,
                color: index === 0 ? colors.primary : colors.textSecondary,
              }}
            >
              {(index + 1).toLocaleString("fa-IR")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-sm truncate" style={{ color: colors.textPrimary }}>
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 flex-shrink-0 mr-2">
                  <TrendingUp
                    className="w-3 h-3"
                    style={{ color: product.growth > 0 ? colors.success : colors.error }}
                  />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: product.growth > 0 ? colors.success : colors.error }}
                  >
                    {product.growth > 0 ? "+" : ""}
                    {product.growth.toLocaleString("fa-IR")}%
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span style={{ color: colors.textSecondary }}>
                  {product.sales.toLocaleString("fa-IR")} فروش
                </span>
                <span className="font-semibold" style={{ color: colors.textPrimary }}>
                  {(product.revenue / 1000000).toLocaleString("fa-IR")} میلیون تومان
                </span>
              </div>
              <div
                className="h-1.5 rounded-full mt-2"
                style={{ backgroundColor: colors.backgroundSecondary }}
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${(product.sales / topProducts[0].sales) * 100}%`,
                    backgroundColor: colors.primary,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
