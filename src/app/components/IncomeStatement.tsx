import { useCurrentColors } from '../contexts/ThemeColorsContext';
import { TrendingUp, Download } from 'lucide-react';

interface IncomeStatementItem {
  title: string;
  amount: string;
  isNegative?: boolean;
  isBold?: boolean;
  isTotal?: boolean;
}

export function IncomeStatement() {
  const colors = useCurrentColors();

  const items: IncomeStatementItem[] = [
    { title: 'فروش', amount: '۱,۱۵۱,۵۱۱,۰۰۰', isBold: false },
    { title: 'بهای تمام شده', amount: '(۱,۱۵۱,۵۱۱,۰۰۰)', isNegative: true },
    { title: 'سود (زیان) ناخالص', amount: '۱,۱۵۱,۵۱۱,۰۰۰', isBold: true, isTotal: true },
    { title: 'درآمدهای عملیاتی', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
    { title: 'هزینه‌های عملیاتی', amount: '(۱,۱۵۱,۵۱۱,۰۰۰)', isNegative: true },
    { title: 'سود (زیان) عملیاتی', amount: '۱,۱۵۱,۵۱۱,۰۰۰', isBold: true, isTotal: true },
    { title: 'درآمدهای غیر عملیاتی', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
    { title: 'هزینه‌های غیر عملیاتی', amount: '(۱,۱۵۱,۵۱۱,۰۰۰)', isNegative: true },
    { title: 'سود (زیان) قبل از کسر مالیات', amount: '۱,۱۵۱,۵۱۱,۰۰۰', isBold: true, isTotal: true },
    { title: 'مالیات', amount: '(۱,۱۵۱,۵۱۱,۰۰۰)', isNegative: true },
    { title: 'سود (زیان) خالص', amount: '۱,۱۵۱,۵۱۱,۰۰۰', isBold: true, isTotal: true },
    { title: 'سود (زیان) انباشته ابتدای دوره', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
    { title: 'سود سهام نقدی', amount: '(۱,۱۵۱,۵۱۱,۰۰۰)', isNegative: true },
    { title: 'سود سهمی', amount: '(۱,۱۵۱,۵۱۱,۰۰۰)', isNegative: true },
    { title: 'سود (زیان) انباشته', amount: '۱,۱۵۱,۵۱۱,۰۰۰', isBold: true, isTotal: true },
  ];

  return (
    <div
      className="rounded-xl border overflow-hidden"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.border,
      }}
      dir="rtl"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between p-6 border-b"
        style={{ borderColor: colors.border }}
      >
        <h2 className="text-2xl font-bold" style={{ color: colors.textPrimary }}>
          سود و زیان جامع
        </h2>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:opacity-80"
          style={{
            backgroundColor: colors.backgroundSecondary,
            borderColor: colors.border,
            color: colors.textPrimary,
          }}
        >
          <Download className="w-4 h-4" />
          <span className="text-sm">گزارش‌گیری</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-1">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between py-3 ${
                item.isTotal ? 'border-t' : 'border-b'
              }`}
              style={{
                borderColor: item.isTotal ? colors.border : `${colors.border}66`,
                ...(item.isTotal && {
                  paddingTop: '1rem',
                  marginTop: '0.5rem',
                }),
              }}
            >
              <span
                className={`text-sm ${item.isBold ? 'font-bold' : ''}`}
                style={{
                  color: item.isBold ? colors.textPrimary : colors.textSecondary,
                }}
              >
                {item.title}
              </span>
              <span
                className={`text-sm ${item.isBold ? 'font-bold' : ''} ${
                  !item.isBold ? 'opacity-90' : ''
                }`}
                style={{
                  color: item.isNegative
                    ? colors.error
                    : item.isBold
                    ? colors.success
                    : colors.textPrimary,
                }}
              >
                {item.amount} تومان
              </span>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-8 pt-6 border-t-2" style={{ borderColor: colors.border }}>
          <div
            className="rounded-lg p-6"
            style={{
              backgroundColor: colors.backgroundSecondary,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs mb-2" style={{ color: colors.textSecondary }}>
                  کل درآمد
                </p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" style={{ color: colors.success }} />
                  <span className="font-bold text-lg" style={{ color: colors.success }}>
                    ۱۵,۰۰۰,۰۰۰ تومان
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs mb-2" style={{ color: colors.textSecondary }}>
                  کل هزینه
                </p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 rotate-180" style={{ color: colors.error }} />
                  <span className="font-bold text-lg" style={{ color: colors.error }}>
                    ۸,۵۰۰,۰۰۰ تومان
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs mb-2" style={{ color: colors.textSecondary }}>
                  سود خالص
                </p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" style={{ color: colors.primary }} />
                  <span className="font-bold text-lg" style={{ color: colors.primary }}>
                    ۶,۵۰۰,۰۰۰ تومان
                  </span>
                </div>
              </div>
            </div>

            <div
              className="mt-6 pt-6 border-t text-center"
              style={{ borderColor: colors.border }}
            >
              <p className="text-xs" style={{ color: colors.textSecondary }}>
                دوره مالی:{' '}
                <span className="font-bold" style={{ color: colors.textPrimary }}>
                  از ۰۱/۰۱/۱۴۰۳ تا ۳۰/۰۹/۱۴۰۳
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
