import { RefreshCw, ChevronDown } from "lucide-react";
import { useCurrentColors } from "../contexts/ThemeColorsContext";
import { useState, useEffect } from "react";
import { Toggle } from "./Toggle";

interface AutoBackupSettingsProps {
  onHasChanges?: (hasChanges: boolean) => void;
}

export function AutoBackupSettings({ onHasChanges }: AutoBackupSettingsProps) {
  const colors = useCurrentColors();
  const [isEnabled, setIsEnabled] = useState(() => {
    const saved = localStorage.getItem("autoBackupEnabled");
    return saved ? JSON.parse(saved) : false;
  });
  const [interval, setInterval] = useState(() => {
    const saved = localStorage.getItem("autoBackupInterval");
    return saved || "5";
  });
  
  // Initial values for comparison
  const [initialEnabled] = useState(() => {
    const saved = localStorage.getItem("autoBackupEnabled");
    return saved ? JSON.parse(saved) : false;
  });
  const [initialInterval] = useState(() => {
    const saved = localStorage.getItem("autoBackupInterval");
    return saved || "5";
  });
  
  const [showDropdown, setShowDropdown] = useState(false);

  const intervals = [
    { value: "5", label: "۵ ثانیه" },
    { value: "10", label: "۱۰ ثانیه" },
    { value: "30", label: "۳۰ ثانیه" },
    { value: "60", label: "۱ دقیقه" },
    { value: "300", label: "۵ دقیقه" },
    { value: "600", label: "۱۰ دقیقه" },
    { value: "1800", label: "۳۰ دقیقه" },
    { value: "3600", label: "۱ ساعت" },
  ];

  // Check if there are changes
  useEffect(() => {
    const hasChanges = isEnabled !== initialEnabled || interval !== initialInterval;
    onHasChanges?.(hasChanges);
  }, [isEnabled, interval, initialEnabled, initialInterval, onHasChanges]);

  useEffect(() => {
    localStorage.setItem("autoBackupEnabled", JSON.stringify(isEnabled));
  }, [isEnabled]);

  useEffect(() => {
    localStorage.setItem("autoBackupInterval", interval);
  }, [interval]);

  const selectedLabel = intervals.find((i) => i.value === interval)?.label || "۵ ثانیه";

  return (
    <div
      className="rounded-xl border p-6"
      style={{
        backgroundColor: colors.cardBackground,
        borderColor: colors.border,
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: colors.primary + "15" }}
          >
            <RefreshCw className="w-5 h-5" style={{ color: colors.primary }} />
          </div>
          <div>
            <h3 className="font-semibold mb-0.5" style={{ color: colors.textPrimary }}>
              به‌روزرسانی خودکار
            </h3>
            <p className="text-xs" style={{ color: colors.textSecondary }}>
              پشتیبان‌گیری خودکار از اطلاعات
            </p>
          </div>
        </div>
        <Toggle checked={isEnabled} onChange={setIsEnabled} />
      </div>

      {/* Dropdown for interval */}
      <div className="relative">
        <label className="block text-sm mb-2" style={{ color: colors.textSecondary }}>
          بازه زمانی
        </label>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          disabled={!isEnabled}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: colors.backgroundSecondary,
            borderColor: colors.border,
            color: colors.textPrimary,
          }}
        >
          <span>{selectedLabel}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${showDropdown ? "rotate-180" : ""}`}
            style={{ color: colors.textSecondary }}
          />
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowDropdown(false)}
            />
            
            {/* Menu */}
            <div
              className="absolute top-full left-0 right-0 mt-2 rounded-lg border shadow-lg overflow-hidden z-20"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.border,
              }}
            >
              {intervals.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setInterval(item.value);
                    setShowDropdown(false);
                  }}
                  className="w-full px-4 py-3 text-right transition-colors hover:opacity-80"
                  style={{
                    backgroundColor: interval === item.value ? colors.backgroundSecondary : "transparent",
                    color: interval === item.value ? colors.primary : colors.textPrimary,
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Status Indicator */}
      {isEnabled && (
        <div
          className="mt-4 p-3 rounded-lg flex items-center gap-2"
          style={{ backgroundColor: colors.success + "15" }}
        >
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: colors.success }}
          />
          <span className="text-sm" style={{ color: colors.success }}>
            پشتیبان‌گیری خودکار فعال است
          </span>
        </div>
      )}
    </div>
  );
}