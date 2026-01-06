import { createContext, useContext, useState, ReactNode } from "react";

export type PageType =
  | "dashboard"
  | "sales"
  | "products"
  | "customers"
  | "warehouse"
  | "financial"
  | "ai"
  | "exhibition"
  | "settings"
  | "tutorials"
  | "support"
  | "notifications";

interface NavigationContextType {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
  push: (path: string) => void;
  showNotifications: boolean;
  setShowNotifications: (show: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activePage, setActivePage] = useState<PageType>("dashboard");
  const [showNotifications, setShowNotifications] = useState(false);

  const push = (path: string) => {
    // Map paths to page types
    const pathMap: Record<string, PageType> = {
      '/notifications': 'notifications',
      '/settings': 'settings',
      '/dashboard': 'dashboard',
      '/sales': 'sales',
      '/products': 'products',
      '/customers': 'customers',
      '/warehouse': 'warehouse',
      '/financial': 'financial',
      '/ai': 'ai',
      '/exhibition': 'exhibition',
      '/tutorials': 'tutorials',
      '/support': 'support',
    };
    
    const page = pathMap[path];
    if (page) {
      setActivePage(page);
    }
  };

  return (
    <NavigationContext.Provider value={{ activePage, setActivePage, push, showNotifications, setShowNotifications }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
}