import { DashboardPage } from "./pages/DashboardPage";
import { SalesPage } from "./pages/SalesPage";
import { ProductsPage } from "./pages/ProductsPage";
import { CustomersPage } from "./pages/CustomersPage";
import { WarehousePage } from "./pages/WarehousePage";
import { FinancialPage } from "./pages/FinancialPage";
import { AIPage } from "./pages/AIPage";
import { SettingsPage } from "./pages/SettingsPage";
import { TutorialsPage } from "./pages/TutorialsPage";
import { SupportPage } from "./pages/SupportPage";
import { NotificationsPage } from "./pages/NotificationsPage";
import { LoginPage } from "./pages/LoginPage";
import ExhibitionVisits from "./pages/ExhibitionVisits";
import { useState, createContext, useContext, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeColorsProvider } from "./contexts/ThemeColorsContext";
import { SettingsProvider } from "./contexts/SettingsContext";
import { SidebarProvider, useSidebar } from "./contexts/SidebarContext";
import { NavigationProvider, useNavigation } from "./contexts/NavigationContext";
import { SettingsTabProvider } from "./contexts/SettingsTabContext";
import { CustomersProvider } from "./contexts/CustomersContext";
import { ReportDataProvider } from "./contexts/ReportDataContext";
import { ExhibitionVisitsProvider } from "./contexts/ExhibitionVisitsContext";
import { useCurrentColors } from "./contexts/ThemeColorsContext";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Create Auth Context
interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

function MainContent() {
  const { activePage } = useNavigation();
  const { isOpen, closeSidebar } = useSidebar();
  const colors = useCurrentColors();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-30 transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}
      
      <main
        className={`flex-1 overflow-y-auto transition-all duration-300 ${
          isOpen ? "md:mr-64 mr-0" : "mr-0"
        } ${activePage === "ai" ? "pt-[64px]" : "p-6 pt-[88px]"}`}
        dir="rtl"
        style={{ backgroundColor: colors.background }}
      >
        {activePage === "dashboard" && <DashboardPage />}
        {activePage === "sales" && <SalesPage />}
        {activePage === "products" && <ProductsPage />}
        {activePage === "customers" && <CustomersPage />}
        {activePage === "warehouse" && <WarehousePage />}
        {activePage === "financial" && <FinancialPage />}
        {activePage === "ai" && <AIPage />}
        {activePage === "exhibition" && <ExhibitionVisits />}
        {activePage === "settings" && <SettingsPage />}
        {activePage === "tutorials" && <TutorialsPage />}
        {activePage === "support" && <SupportPage />}
        {activePage === "notifications" && <NotificationsPage />}
      </main>
    </>
  );
}

function AppContent() {
  return (
    <div 
      className="min-h-screen flex flex-col transition-colors duration-300 bg-[#fafafa] dark:bg-[#0f1419]"
    >
      {/* Navigation Bar */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <MainContent />

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize from localStorage
    const saved = localStorage.getItem('isLoggedIn');
    return saved === 'true';
  });

  // Save to localStorage whenever login state changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', String(isLoggedIn));
  }, [isLoggedIn]);

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  if (!isLoggedIn) {
    return (
      <ThemeProvider>
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      </ThemeProvider>
    );
  }

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <ThemeColorsProvider>
            <SettingsProvider>
              <CustomersProvider>
                <ReportDataProvider>
                  <ExhibitionVisitsProvider>
                    <SidebarProvider>
                      <NavigationProvider>
                        <SettingsTabProvider>
                          <DndProvider backend={HTML5Backend}>
                            <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
                              <AppContent />
                            </AuthContext.Provider>
                          </DndProvider>
                        </SettingsTabProvider>
                      </NavigationProvider>
                    </SidebarProvider>
                  </ExhibitionVisitsProvider>
                </ReportDataProvider>
              </CustomersProvider>
            </SettingsProvider>
          </ThemeColorsProvider>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}