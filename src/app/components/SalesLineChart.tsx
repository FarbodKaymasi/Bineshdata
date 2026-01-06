import { useCurrentColors } from "../contexts/ThemeColorsContext";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "فروردین", sales: 45000000, orders: 120 },
  { month: "اردیبهشت", sales: 52000000, orders: 145 },
  { month: "خرداد", sales: 48000000, orders: 135 },
  { month: "تیر", sales: 61000000, orders: 160 },
  { month: "مرداد", sales: 55000000, orders: 150 },
  { month: "شهریور", sales: 67000000, orders: 180 },
  { month: "مهر", sales: 72000000, orders: 195 },
  { month: "آبان", sales: 69000000, orders: 185 },
  { month: "آذر", sales: 78000000, orders: 210 },
  { month: "دی", sales: 85000000, orders: 230 },
];

export function SalesLineChart() {
  const colors = useCurrentColors();

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="rounded-lg p-3 shadow-lg border"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: colors.border,
          }}
        >
          <p className="font-semibold mb-2" style={{ color: colors.textPrimary }}>
            {payload[0].payload.month}
          </p>
          <p className="text-sm" style={{ color: colors.primary }}>
            فروش: {payload[0].value.toLocaleString("fa-IR")} تومان
          </p>
          <p className="text-sm" style={{ color: colors.success }}>
            تعداد سفارش: {payload[1].value.toLocaleString("fa-IR")}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="rounded-xl p-6 border"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.border,
      }}
    >
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-1" style={{ color: colors.textPrimary }}>
          روند فروش ماهانه
        </h2>
        <p className="text-sm" style={{ color: colors.textSecondary }}>
          مقایسه مبلغ فروش و تعداد سفارشات
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
          <XAxis
            dataKey="month"
            stroke={colors.textSecondary}
            style={{ fontSize: "12px", fontFamily: "inherit" }}
          />
          <YAxis
            yAxisId="left"
            stroke={colors.textSecondary}
            style={{ fontSize: "12px", fontFamily: "inherit" }}
            domain={[40000000, 90000000]}
            ticks={[40000000, 50000000, 60000000, 70000000, 80000000, 90000000]}
            tickFormatter={(value) => (value / 1000000).toLocaleString("fa-IR") + "م"}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke={colors.textSecondary}
            style={{ fontSize: "12px", fontFamily: "inherit" }}
            domain={[100, 250]}
            ticks={[100, 125, 150, 175, 200, 225, 250]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontFamily: "inherit" }}
            formatter={(value) => (value === "sales" ? "مبلغ فروش (میلیون تومان)" : "تعداد سفارش")}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="sales"
            stroke={colors.primary}
            strokeWidth={3}
            dot={{ fill: colors.primary, r: 5 }}
            activeDot={{ r: 7 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="orders"
            stroke={colors.success}
            strokeWidth={3}
            dot={{ fill: colors.success, r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}