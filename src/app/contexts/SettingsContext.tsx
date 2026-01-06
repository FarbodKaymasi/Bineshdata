import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// تعریف نوع تنظیمات
export interface UserSettings {
  // تنظیمات عمومی
  organizationName: string;
  language: string;
  timezone: string;

  // تنظیمات اعلان‌ها
  notifications: {
    newCalls: boolean;
    systemMessages: boolean;
    dailyReports: boolean;
    securityAlerts: boolean;
  };

  // تنظیمات پروفایل
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    position: string;
    title: string;
  };

  // تنظیمات ظاهر
  appearance: {
    fontSize: "small" | "medium" | "large";
  };

  // تنظیمات داده و پشتیبان
  data: {
    autoBackup: boolean;
  };
}

// مقادیر پیش‌فرض
const defaultSettings: UserSettings = {
  organizationName: "مرکز تماس رهگیر",
  language: "فارسی",
  timezone: "تهران (UTC+3:30)",
  notifications: {
    newCalls: true,
    systemMessages: true,
    dailyReports: true,
    securityAlerts: true,
  },
  profile: {
    firstName: "مهندس",
    lastName: "میرحسینی",
    email: "m.mirhosseini@company.com",
    phone: "09121234567",
    position: "مدیر مرکز تماس",
    title: "مهندس",
  },
  appearance: {
    fontSize: "medium",
  },
  data: {
    autoBackup: true,
  },
};

interface SettingsContextType {
  settings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => void;
  resetSettings: () => void;
  saveSettings: () => void;
  hasUnsavedChanges: boolean;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<UserSettings>(() => {
    // بارگذاری تنظیمات از localStorage
    const saved = localStorage.getItem("userSettings");
    if (saved) {
      try {
        return { ...defaultSettings, ...JSON.parse(saved) };
      } catch (e) {
        console.error("Error loading settings:", e);
        return defaultSettings;
      }
    }
    return defaultSettings;
  });

  const [savedSettings, setSavedSettings] = useState<UserSettings>(settings);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // بررسی تغییرات
  useEffect(() => {
    const hasChanges = JSON.stringify(settings) !== JSON.stringify(savedSettings);
    setHasUnsavedChanges(hasChanges);
  }, [settings, savedSettings]);

  // به روزرسانی تنظیمات
  const updateSettings = (newSettings: Partial<UserSettings>) => {
    setSettings((prev) => {
      // Deep merge برای nested objects
      const updated = { ...prev };
      
      Object.keys(newSettings).forEach((key) => {
        const value = newSettings[key as keyof UserSettings];
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          updated[key as keyof UserSettings] = {
            ...prev[key as keyof UserSettings],
            ...value,
          } as any;
        } else {
          updated[key as keyof UserSettings] = value as any;
        }
      });
      
      return updated;
    });
  };

  // ذخیره تنظیمات
  const saveSettings = () => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
    setSavedSettings(settings);
    setHasUnsavedChanges(false);
  };

  // بازگردانی به تنظیمات پیش‌فرض
  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.setItem("userSettings", JSON.stringify(defaultSettings));
    setSavedSettings(defaultSettings);
    setHasUnsavedChanges(false);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        resetSettings,
        saveSettings,
        hasUnsavedChanges,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within SettingsProvider");
  }
  return context;
}
