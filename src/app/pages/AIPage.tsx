import { useState, useRef, useEffect } from "react";
import { Send, Mic, Plus, AlertTriangle, Sparkles, Lightbulb, X, Trash2 } from "lucide-react";
import { useCurrentColors } from "../contexts/ThemeColorsContext";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

type TabType = "limitations" | "capabilities" | "examples";

const defaultSuggestions = [
  "تحلیل‌های بخش فروش",
  "تحلیل‌های بخش محصولات",
  "تحلیل‌های بخش انبار",
  "تحلیل‌های بخش مالی",
];

const tabContent = {
  limitations: [
    "ممکن است گاهی اوقات اطلاعات نادرست تولید کند",
    "ممکن است گاهی اوقات دستورالعمل‌های مضر تولید کند",
    "دانش محدود در مورد رویدادهای پس از سال 2021",
  ],
  capabilities: [
    "به سوالات مربوط به داده‌های داشبورد پاسخ می‌دهد",
    "می‌تواند گفتگو را در طول جلسه به خاطر بسپارد",
    "امکان ارائه پیگیری‌های تکمیلی را فراهم می‌کند",
  ],
  examples: [
    "چطور می‌توانم به شما کمک کنم؟",
    "میزان فروش امروز چقدر است؟",
    "آمار تماس‌های امروز را نشان بده",
  ],
};

const tabIcons = {
  limitations: AlertTriangle,
  capabilities: Sparkles,
  examples: Lightbulb,
};

const tabLabels = {
  limitations: "محدودیت‌ها",
  capabilities: "توانایی‌ها",
  examples: "مثال‌ها",
};

export function AIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState<TabType>("capabilities");
  const [customPrompts, setCustomPrompts] = useState<string[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPrompt, setNewPrompt] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const colors = useCurrentColors();

  // Load custom prompts from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("customAIPrompts");
    if (saved) {
      try {
        setCustomPrompts(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load custom prompts:", e);
      }
    }
  }, []);

  // Save custom prompts to localStorage
  useEffect(() => {
    if (customPrompts.length > 0) {
      localStorage.setItem("customAIPrompts", JSON.stringify(customPrompts));
    }
  }, [customPrompts]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: "سلام! من یک دستیار هوش مصنوعی هستم که برای کمک به شما در تحلیل داده‌های داشبورد طراحی شده‌ام. چطور می‌توانم کمک کنم؟",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAddPrompt = () => {
    if (!newPrompt.trim()) return;
    
    setCustomPrompts((prev) => [...prev, newPrompt.trim()]);
    setNewPrompt("");
    setShowAddModal(false);
  };

  const handleDeletePrompt = (index: number) => {
    setCustomPrompts((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      if (updated.length === 0) {
        localStorage.removeItem("customAIPrompts");
      }
      return updated;
    });
  };

  const allSuggestions = [...defaultSuggestions, ...customPrompts];

  return (
    <div 
      className="flex flex-col h-full" 
      dir="rtl"
      style={{ backgroundColor: colors.background }}
    >
      {/* Add Prompt Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div 
            className="rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4 animate-fadeIn"
            style={{ backgroundColor: colors.cardBackground }}
          >
            <div className="flex items-center justify-between">
              <h3 
                className="text-lg"
                style={{ color: colors.textPrimary }}
              >
                افزودن پرامپت جدید
              </h3>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setNewPrompt("");
                }}
                className="transition-colors"
                style={{ color: colors.textSecondary }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.textPrimary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.textSecondary;
                }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <label 
                className="block text-sm"
                style={{ color: colors.textSecondary }}
              >
                متن پرامپت
              </label>
              <textarea
                value={newPrompt}
                onChange={(e) => setNewPrompt(e.target.value)}
                placeholder="پرامپت دلخواه خود را وارد کنید..."
                className="w-full rounded-lg p-3 text-sm outline-none transition-colors resize-none"
                style={{
                  backgroundColor: colors.backgroundSecondary,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: colors.border,
                  color: colors.textPrimary
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = colors.primary;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                }}
                rows={3}
                dir="rtl"
                autoFocus
              />
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setNewPrompt("");
                }}
                className="px-4 py-2 text-sm transition-colors"
                style={{ color: colors.textSecondary }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.textPrimary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.textSecondary;
                }}
              >
                انصراف
              </button>
              <button
                onClick={handleAddPrompt}
                disabled={!newPrompt.trim()}
                className="px-4 py-2 text-sm text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: colors.primary }}
              >
                افزودن
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {messages.length === 0 ? (
          // Welcome Screen
          <div className="max-w-3xl w-full space-y-4 sm:space-y-8">
            {/* Welcome Header */}
            <div className="text-center space-y-2 sm:space-y-4">
              <h1 
                className="text-2xl sm:text-4xl" 
                dir="auto"
                style={{ color: colors.textPrimary }}
              >
                مدیر گرامی
              </h1>
              <p 
                className="text-base sm:text-xl" 
                dir="auto"
                style={{ color: colors.textSecondary }}
              >
                چطور می‌توانم به شما کمک کنم؟
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
              {(Object.keys(tabContent) as TabType[]).map((tab) => {
                const Icon = tabIcons[tab];
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all text-xs sm:text-sm"
                    style={{
                      backgroundColor: isActive ? colors.primary : colors.cardBackground,
                      color: isActive ? '#ffffff' : colors.textSecondary,
                      border: `1px solid ${isActive ? colors.primary : colors.border}`
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = colors.backgroundSecondary;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = colors.cardBackground;
                      }
                    }}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{tabLabels[tab]}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {tabContent[activeTab].map((item, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 rounded-lg transition-colors"
                  style={{
                    backgroundColor: colors.cardBackground,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: colors.border
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.border;
                  }}
                >
                  <p 
                    className="text-xs sm:text-sm" 
                    dir="auto"
                    style={{ color: colors.textPrimary }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Messages Area
          <div className="max-w-3xl w-full space-y-3 sm:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-start" : "justify-end"} animate-fadeIn`}
              >
                <div
                  className="max-w-[85%] sm:max-w-[70%] rounded-lg p-3 sm:p-4"
                  style={{
                    backgroundColor: message.sender === "user" ? colors.primary : colors.cardBackground,
                    color: message.sender === "user" ? '#ffffff' : colors.textPrimary,
                    borderWidth: message.sender === "user" ? '0' : '1px',
                    borderStyle: 'solid',
                    borderColor: message.sender === "user" ? 'transparent' : colors.border
                  }}
                >
                  <p className="text-xs sm:text-sm" dir="auto">
                    {message.text}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div 
        className="border-t p-3 sm:p-6"
        style={{
          borderColor: colors.border,
          backgroundColor: colors.cardBackground
        }}
      >
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {/* Suggestions */}
          {messages.length === 0 && (
            <div className="flex gap-2 justify-center flex-wrap">
              {allSuggestions.map((suggestion, index) => {
                const isCustom = index >= defaultSuggestions.length;
                const customIndex = index - defaultSuggestions.length;
                
                return (
                  <div key={index} className="relative group">
                    <button
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors"
                      style={{
                        backgroundColor: colors.cardBackground,
                        color: colors.textPrimary,
                        border: `1px solid ${colors.border}`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colors.backgroundSecondary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = colors.cardBackground;
                      }}
                    >
                      {suggestion}
                    </button>
                    
                    {isCustom && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeletePrompt(customIndex);
                        }}
                        className="absolute -top-2 -left-2 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                        style={{ backgroundColor: colors.error }}
                        aria-label="حذف پرامپت"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Input Box */}
          <div 
            className="rounded-lg p-2.5 sm:p-4 flex items-center gap-2 sm:gap-3"
            style={{ backgroundColor: colors.backgroundSecondary }}
          >
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="text-white p-1.5 sm:p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="ارسال پیام"
              style={{ backgroundColor: colors.primary }}
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button 
              className="hidden sm:block transition-colors"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.textPrimary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.textSecondary;
              }}
            >
              <Mic className="w-5 h-5" />
            </button>

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="پیام خود را اینجا بنویسید..."
              className="flex-1 bg-transparent outline-none text-xs sm:text-sm"
              style={{ color: colors.textPrimary }}
              dir="rtl"
            />

            <button
              onClick={() => setShowAddModal(true)}
              className="transition-colors"
              aria-label="افزودن پرامپت جدید"
              style={{ color: colors.textSecondary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.textPrimary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.textSecondary;
              }}
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}