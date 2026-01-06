import { useCurrentColors } from "../contexts/ThemeColorsContext";
import { Receipt, TrendingUp, TrendingDown, ArrowUpDown, Download } from "lucide-react";

interface ExpenseItem {
  category: string;
  icon: string;
  currentMonth: number;
  lastMonth: number;
  change: number;
  status: "up" | "down";
}

const expenseData: ExpenseItem[] = [
  { 
    category: "حقوق و دستمزد", 
    icon: "👥", 
    currentMonth: 8500000, 
    lastMonth: 8200000, 
    change: 3.7,
    status: "up"
  },
  { 
    category: "اجاره", 
    icon: "🏢", 
    currentMonth: 3200000, 
    lastMonth: 3200000, 
    change: 0,
    status: "up"
  },
  { 
    category: "بازاریابی", 
    icon: "📢", 
    currentMonth: 2100000, 
    lastMonth: 2800000, 
    change: -25.0,
    status: "down"
  },
  { 
    category: "لوازم اداری", 
    icon: "📝", 
    currentMonth: 1800000, 
    lastMonth: 1650000, 
    change: 9.1,
    status: "up"
  },
  { 
    category: "برق و آب", 
    icon: "⚡", 
    currentMonth: 1400000, 
    lastMonth: 1550000, 
    change: -9.7,
    status: "down"
  },
  { 
    category: "تعمیرات", 
    icon: "🔧", 
    currentMonth: 1200000, 
    lastMonth: 950000, 
    change: 26.3,
    status: "up"
  },
  { 
    category: "حمل و نقل", 
    icon: "🚚", 
    currentMonth: 1850000, 
    lastMonth: 1700000, 
    change: 8.8,
    status: "up"
  },
  { 
    category: "بیمه", 
    icon: "🛡️", 
    currentMonth: 2400000, 
    lastMonth: 2400000, 
    change: 0,
    status: "up"
  },
  { 
    category: "سایر", 
    icon: "📊", 
    currentMonth: 950000, 
    lastMonth: 1100000, 
    change: -13.6,
    status: "down"
  },
];

export function ExpenseDistributionChart() {
  const colors = useCurrentColors();

  // محاسبات
  const totalCurrentMonth = expenseData.reduce((sum, item) => sum + item.currentMonth, 0);
  const totalLastMonth = expenseData.reduce((sum, item) => sum + item.lastMonth, 0);
  const totalChange = ((totalCurrentMonth - totalLastMonth) / totalLastMonth * 100).toFixed(1);
  const totalChangeStatus = totalCurrentMonth > totalLastMonth ? "up" : "down";

  // مرتب‌سازی بر اساس مبلغ
  const sortedExpenses = [...expenseData].sort((a, b) => b.currentMonth - a.currentMonth);

  return (
    <div
      className="rounded-2xl p-6 border"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.border,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}dd 100%)`,
              boxShadow: `0 8px 16px ${colors.primary}33`
            }}
          >
            <Receipt className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1" style={{ color: colors.textPrimary }}>
              صورت هزینه‌ها
            </h3>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              گزارش تفصیلی هزینه‌های ماه جاری
            </p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="flex gap-3">
          <div 
            className="px-4 py-2 rounded-lg border"
            style={{ 
              backgroundColor: colors.cardBackground,
              borderColor: colors.border 
            }}
          >
            <p className="text-xs mb-1" style={{ color: colors.textSecondary }}>ماه جاری</p>
            <p className="text-lg font-bold" style={{ color: colors.textPrimary }}>
              {(totalCurrentMonth / 1000000).toFixed(1).toLocaleString("fa-IR")} م
            </p>
          </div>
          <div 
            className="px-4 py-2 rounded-lg border"
            style={{ 
              backgroundColor: colors.cardBackground,
              borderColor: colors.border 
            }}
          >
            <p className="text-xs mb-1" style={{ color: colors.textSecondary }}>ماه گذشته</p>
            <p className="text-lg font-bold" style={{ color: colors.textSecondary }}>
              {(totalLastMonth / 1000000).toFixed(1).toLocaleString("fa-IR")} م
            </p>
          </div>
          <div 
            className="px-4 py-2 rounded-lg border"
            style={{ 
              backgroundColor: colors.cardBackground,
              borderColor: totalChangeStatus === "up" ? colors.error : colors.success
            }}
          >
            <p className="text-xs mb-1" style={{ color: colors.textSecondary }}>تغییر</p>
            <div className="flex items-center gap-1">
              {totalChangeStatus === "up" ? (
                <TrendingUp className="w-4 h-4" style={{ color: colors.error }} />
              ) : (
                <TrendingDown className="w-4 h-4" style={{ color: colors.success }} />
              )}
              <p className="text-lg font-bold" style={{ color: totalChangeStatus === "up" ? colors.error : colors.success }}>
                {Math.abs(parseFloat(totalChange)).toLocaleString("fa-IR")}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border" style={{ borderColor: colors.border }}>
        {/* Table Header */}
        <div 
          className="grid grid-cols-12 gap-4 px-6 py-3 border-b font-bold text-sm"
          style={{ 
            backgroundColor: colors.primary + "11",
            borderColor: colors.border,
            color: colors.textPrimary
          }}
        >
          <div className="col-span-3">دسته هزینه</div>
          <div className="col-span-2 text-center">ماه جاری</div>
          <div className="col-span-2 text-center">ماه گذشته</div>
          <div className="col-span-2 text-center">تغییر</div>
          <div className="col-span-2 text-center">سهم از کل</div>
          <div className="col-span-1 text-center">وضعیت</div>
        </div>

        {/* Table Body */}
        <div className="divide-y" style={{ borderColor: colors.border }}>
          {sortedExpenses.map((expense, index) => {
            const percentage = ((expense.currentMonth / totalCurrentMonth) * 100).toFixed(1);
            
            return (
              <div
                key={index}
                className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-opacity-50 transition-all"
                style={{
                  backgroundColor: index % 2 === 0 ? "transparent" : colors.border + "22",
                }}
              >
                {/* Category */}
                <div className="col-span-3 flex items-center gap-3">
                  <span className="text-2xl">{expense.icon}</span>
                  <span className="font-medium" style={{ color: colors.textPrimary }}>
                    {expense.category}
                  </span>
                </div>

                {/* Current Month */}
                <div className="col-span-2 flex items-center justify-center">
                  <span className="font-bold" style={{ color: colors.textPrimary }}>
                    {(expense.currentMonth / 1000000).toFixed(2).toLocaleString("fa-IR")} م
                  </span>
                </div>

                {/* Last Month */}
                <div className="col-span-2 flex items-center justify-center">
                  <span className="text-sm" style={{ color: colors.textSecondary }}>
                    {(expense.lastMonth / 1000000).toFixed(2).toLocaleString("fa-IR")} م
                  </span>
                </div>

                {/* Change */}
                <div className="col-span-2 flex items-center justify-center gap-1">
                  {expense.change === 0 ? (
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3.5 h-3.5" style={{ color: colors.textSecondary }} />
                      <span className="text-sm font-medium" style={{ color: colors.textSecondary }}>
                        ۰%
                      </span>
                    </div>
                  ) : expense.status === "up" ? (
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" style={{ color: colors.error }} />
                      <span className="text-sm font-bold" style={{ color: colors.error }}>
                        +{expense.change.toLocaleString("fa-IR")}%
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5" style={{ color: colors.success }} />
                      <span className="text-sm font-bold" style={{ color: colors.success }}>
                        {expense.change.toLocaleString("fa-IR")}%
                      </span>
                    </div>
                  )}
                </div>

                {/* Percentage */}
                <div className="col-span-2 flex items-center justify-center">
                  <div className="flex items-center gap-2 w-full">
                    <div 
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: colors.primary,
                      }}
                    />
                    <span className="text-xs font-bold whitespace-nowrap" style={{ color: colors.primary }}>
                      {percentage.toLocaleString("fa-IR")}%
                    </span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="col-span-1 flex items-center justify-center">
                  {expense.change === 0 ? (
                    <span 
                      className="px-2 py-1 rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: colors.textSecondary + "22",
                        color: colors.textSecondary
                      }}
                    >
                      ثابت
                    </span>
                  ) : expense.status === "up" ? (
                    <span 
                      className="px-2 py-1 rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: colors.error + "22",
                        color: colors.error
                      }}
                    >
                      افزایش
                    </span>
                  ) : (
                    <span 
                      className="px-2 py-1 rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: colors.success + "22",
                        color: colors.success
                      }}
                    >
                      کاهش
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Table Footer */}
        <div 
          className="grid grid-cols-12 gap-4 px-6 py-4 border-t font-bold"
          style={{ 
            backgroundColor: colors.primary + "11",
            borderColor: colors.border,
          }}
        >
          <div className="col-span-3 flex items-center" style={{ color: colors.textPrimary }}>
            جمع کل
          </div>
          <div className="col-span-2 flex items-center justify-center" style={{ color: colors.textPrimary }}>
            {(totalCurrentMonth / 1000000).toFixed(2).toLocaleString("fa-IR")} م
          </div>
          <div className="col-span-2 flex items-center justify-center" style={{ color: colors.textSecondary }}>
            {(totalLastMonth / 1000000).toFixed(2).toLocaleString("fa-IR")} م
          </div>
          <div className="col-span-2 flex items-center justify-center gap-1">
            {totalChangeStatus === "up" ? (
              <>
                <TrendingUp className="w-4 h-4" style={{ color: colors.error }} />
                <span style={{ color: colors.error }}>
                  +{Math.abs(parseFloat(totalChange)).toLocaleString("fa-IR")}%
                </span>
              </>
            ) : (
              <>
                <TrendingDown className="w-4 h-4" style={{ color: colors.success }} />
                <span style={{ color: colors.success }}>
                  {totalChange.toLocaleString("fa-IR")}%
                </span>
              </>
            )}
          </div>
          <div className="col-span-2 flex items-center justify-center" style={{ color: colors.primary }}>
            ۱۰۰%
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
}
