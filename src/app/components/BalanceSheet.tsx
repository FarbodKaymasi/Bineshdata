import { useCurrentColors } from '../contexts/ThemeColorsContext';
import { FileText, TrendingUp, Download } from 'lucide-react';

interface BalanceItem {
  title: string;
  amount: string;
}

interface BalanceSection {
  title: string;
  items: BalanceItem[];
}

export function BalanceSheet() {
  const colors = useCurrentColors();

  // داده‌های تراز‌نامه
  const assets: BalanceSection[] = [
    {
      title: 'دارایی‌های جاری:',
      items: [
        { title: 'موجودی نقد و بانک', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
        { title: 'موجودی نقد و بانک', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
      ],
    },
    {
      title: 'دارایی‌های غیرجاری:',
      items: [
        { title: 'موجودی نقد و بانک', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
        { title: 'موجودی نقد و بانک', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
      ],
    },
    {
      title: 'دارایی‌های انتظامی:',
      items: [
        { title: 'موجودی نقد و بانک', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
        { title: 'موجودی نقد و بانک', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
      ],
    },
  ];

  const liabilities: BalanceSection[] = [
    {
      title: 'بدهی‌های جاری:',
      items: [
        { title: 'موجودی نقد و بانک', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
        { title: 'موجودی نقد و بانک', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
      ],
    },
    {
      title: 'بدهی‌های غیرجاری:',
      items: [
        { title: 'موجودی نقد و بانک', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
        { title: 'موجودی نقد و بانک', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
      ],
    },
    {
      title: 'بدهی‌های انتظامی:',
      items: [
        { title: 'موجودی نقد و بانک', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
        { title: 'موجودی نقد و بانک', amount: '۱,۱۵۱,۵۱۱,۰۰۰' },
      ],
    },
  ];

  const summaryCards = [
    {
      title: 'دارایی‌ها',
      amount: '۱۰۰۰۰',
      unit: 'تومان',
      growth: '+۵%۰ رشد نسبت به دوره قبل',
      icon: FileText,
    },
    {
      title: 'بدهی‌ها',
      amount: '۱۰۰۰۰',
      unit: 'تومان',
      growth: '+۵%۰ رشد نسبت به دوره قبل',
      icon: FileText,
    },
    {
      title: 'حقوق صاحبان سهام',
      amount: '۱۰۰۰۰',
      unit: 'تومان',
      growth: '+۵%۰ رشد نسبت به دوره قبل',
      icon: FileText,
    },
  ];

  const totalAssets = '۱,۱۵۱,۵۱۱,۰۰۰';
  const totalLiabilities = '۱,۱۵۱,۵۱۱,۰۰۰';

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
          تراز‌نامه
        </h2>
        
      </div>

      {/* Summary Cards */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="rounded-lg border p-6"
              style={{
                backgroundColor: colors.backgroundSecondary,
                borderColor: colors.border,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: colors.cardBackground }}
                >
                  <Icon className="w-5 h-5" style={{ color: colors.textPrimary }} />
                </div>
              </div>
              <p className="text-sm mb-2" style={{ color: colors.textSecondary }}>
                {card.title}
              </p>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold" style={{ color: colors.textPrimary }}>
                  {card.amount}
                </span>
                <span className="text-sm" style={{ color: colors.textSecondary }}>
                  {card.unit}
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs" style={{ color: colors.success }}>
                <TrendingUp className="w-3 h-3" />
                <span>{card.growth}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Balance Sheet Content */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* دارایی‌ها */}
        <div>
          <div
            className="rounded-lg p-4 mb-4"
            style={{ backgroundColor: colors.backgroundSecondary }}
          >
            <h3 className="font-bold" style={{ color: colors.textPrimary }}>
              دارایی‌ها
            </h3>
          </div>

          <div className="space-y-6">
            {assets.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h4
                  className="text-sm font-bold mb-3"
                  style={{ color: colors.textPrimary }}
                >
                  {section.title}
                </h4>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-between py-2 border-b"
                      style={{ borderColor: colors.border }}
                    >
                      <span className="text-sm" style={{ color: colors.textSecondary }}>
                        {item.title}
                      </span>
                      <span className="text-sm font-bold" style={{ color: colors.textPrimary }}>
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
                {sectionIndex < assets.length - 1 && (
                  <div className="py-2">
                    <div
                      className="flex items-center justify-between py-2"
                      style={{ color: colors.textPrimary }}
                    >
                      <span className="text-sm font-bold">جمع</span>
                      <span className="text-sm font-bold">{totalAssets}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Total Assets */}
            <div
              className="pt-4 mt-4 border-t-2"
              style={{ borderColor: colors.border }}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold" style={{ color: colors.textPrimary }}>
                  مجموع دارایی‌ها
                </span>
                <span className="font-bold text-lg" style={{ color: colors.primary }}>
                  {totalAssets}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* بدهی‌ها */}
        <div>
          <div
            className="rounded-lg p-4 mb-4"
            style={{ backgroundColor: colors.backgroundSecondary }}
          >
            <h3 className="font-bold" style={{ color: colors.textPrimary }}>
              بدهی‌ها
            </h3>
          </div>

          <div className="space-y-6">
            {liabilities.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h4
                  className="text-sm font-bold mb-3"
                  style={{ color: colors.textPrimary }}
                >
                  {section.title}
                </h4>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-between py-2 border-b"
                      style={{ borderColor: colors.border }}
                    >
                      <span className="text-sm" style={{ color: colors.textSecondary }}>
                        {item.title}
                      </span>
                      <span className="text-sm font-bold" style={{ color: colors.textPrimary }}>
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
                {sectionIndex < liabilities.length - 1 && (
                  <div className="py-2">
                    <div
                      className="flex items-center justify-between py-2"
                      style={{ color: colors.textPrimary }}
                    >
                      <span className="text-sm font-bold">جمع</span>
                      <span className="text-sm font-bold">{totalLiabilities}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Total Liabilities */}
            <div
              className="pt-4 mt-4 border-t-2"
              style={{ borderColor: colors.border }}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold" style={{ color: colors.textPrimary }}>
                  مجموع بدهی‌ها
                </span>
                <span className="font-bold text-lg" style={{ color: colors.error }}>
                  {totalLiabilities}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
