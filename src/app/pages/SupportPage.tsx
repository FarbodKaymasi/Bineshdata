import { Headphones, Mail, Phone, MessageSquare, Clock, CheckCircle, AlertCircle, Bot, Copy, Check, X, Send, MoreVertical, User, Mail as MailIcon, UserCircle } from "lucide-react";
import { useState, useMemo, useCallback } from "react";
import { useCurrentColors } from "../contexts/ThemeColorsContext";
import { useNavigation } from "../contexts/NavigationContext";

// Types
type TicketStatus = "resolved" | "in-progress" | "open";
type TicketPriority = "high" | "medium" | "low";
type MessageSender = "user" | "support";

interface Message {
  sender: MessageSender;
  text: string;
  time: string;
}

interface Ticket {
  id: string;
  subject: string;
  status: TicketStatus;
  date: string;
  priority: TicketPriority;
  messages: Message[];
}

interface SupportChannel {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  contact: string;
  color: string;
  details: {
    label: string;
    value: string;
    copyable: boolean;
  }[];
}

interface StatusInfo {
  label: string;
  color: string;
  icon: React.ElementType;
}

// Constants
const SUPPORT_CHANNELS: SupportChannel[] = [
  {
    id: 1,
    title: "تماس تلفنی",
    description: "پشتیبانی تلفنی 24/7",
    icon: Phone,
    contact: "021-12345678",
    color: "bg-[#e6f3ff] dark:bg-[#1a2a3a] text-[#0085ff]",
    details: [
      { label: "شماره تماس", value: "021-12345678", copyable: true },
      { label: "داخلی پشتیبانی", value: "123", copyable: false },
      { label: "ساعات پاسخگویی", value: "24 ساعته، 7 روز هفته", copyable: false },
    ]
  },
  {
    id: 2,
    title: "ایمیل",
    description: "پاسخگویی در کمتر از 24 ساعت",
    icon: Mail,
    contact: "support.bineshafzar.co@gmail.com",
    color: "bg-[#e6f9f0] dark:bg-[#1a3a2a] text-[#00c853]",
    details: [
      { label: "آدرس ایمیل", value: "support.bineshafzar.co@gmail.com", copyable: true },
      { label: "زمان پاسخگویی", value: "کمتر از 24 ساعت", copyable: false },
    ]
  },
  {
    id: 3,
    title: "گفتگوی آنلاین",
    description: "چت با پشتیبانی",
    icon: MessageSquare,
    contact: "شروع گفتگو",
    color: "bg-[#f3e5f5] dark:bg-[#2a1a3a] text-[#9c27b0]",
    details: [
      { label: "آیدی تلگرام", value: "@BineshAfzar_Support", copyable: true },
      { label: "آیدی واتساپ", value: "+98-912-345-6789", copyable: true },
    ]
  },
  {
    id: 4,
    title: "از هوش مصنوعی بپرس",
    description: "دستیار هوشمند پاسخگویی",
    icon: Bot,
    contact: "شروع گفتگو با AI",
    color: "bg-[#fff3e0] dark:bg-[#3a2a1a] text-[#ff9800]",
    details: [
      { label: "دستیار AI", value: "رهگیر AI Assistant", copyable: false },
      { label: "زبان‌های پشتیبانی", value: "فارسی، انگلیسی", copyable: false },
      { label: "دسترسی", value: "24/7 آنلاین", copyable: false },
    ]
  },
];

const TICKETS: Ticket[] = [
  {
    id: "TKT-1234",
    subject: "مشکل در ورود به سیستم",
    status: "resolved",
    date: "1403/10/03",
    priority: "high",
    messages: [
      { sender: "user", text: "سلام، نمی‌توانم وارد سیستم شوم. لطفاً کمک کنید.", time: "1403/10/03 - 14:30" },
      { sender: "support", text: "سلام، لطفاً نام کاربری خود را بررسی کنید و دوباره تلاش کنید.", time: "1403/10/03 - 14:45" },
      { sender: "user", text: "مشکل حل شد، متشکرم!", time: "1403/10/03 - 15:00" },
    ]
  },
  {
    id: "TKT-1235",
    subject: "درخواست افزودن ویژگی جدید",
    status: "in-progress",
    date: "1403/10/04",
    priority: "medium",
    messages: [
      { sender: "user", text: "آیا امکان افزودن فیلتر پیشرفته به جدول تماس‌ها وجود دارد؟", time: "1403/10/04 - 10:20" },
      { sender: "support", text: "درخواست شما ثبت شد و در حال بررسی توسط تیم فنی است.", time: "1403/10/04 - 11:00" },
    ]
  },
  {
    id: "TKT-1236",
    subject: "سوال درباره گزارش‌گیری",
    status: "open",
    date: "1403/10/05",
    priority: "low",
    messages: [
      { sender: "user", text: "چگونه می‌توانم گزارش ماهانه تماس‌ها را دریافت کنم؟", time: "1403/10/05 - 09:15" },
    ]
  },
  {
    id: "TKT-1237",
    subject: "خطا در صفحه آنالیتیکس",
    status: "resolved",
    date: "1403/10/02",
    priority: "high",
    messages: [
      { sender: "user", text: "صفحه آنالیتیکس نمودارها را نشان نمی‌دهد.", time: "1403/10/02 - 16:00" },
      { sender: "support", text: "مشکل شناسایی و برطرف شد. لطفاً صفحه را رفرش کنید.", time: "1403/10/02 - 16:30" },
      { sender: "user", text: "عالی، حل شد!", time: "1403/10/02 - 16:35" },
    ]
  },
  {
    id: "TKT-1238",
    subject: "تغییر رمز عبور",
    status: "resolved",
    date: "1403/10/01",
    priority: "medium",
    messages: [
      { sender: "user", text: "رمز عبورم را فراموش کرده‌ام.", time: "1403/10/01 - 11:00" },
      { sender: "support", text: "لینک بازیابی رمز عبور به ایمیل شما ارسال شد.", time: "1403/10/01 - 11:10" },
    ]
  },
];

// Helper Functions
const getStatusBadge = (status: TicketStatus): StatusInfo => {
  const statusMap: Record<TicketStatus, StatusInfo> = {
    resolved: {
      label: "حل شده",
      color: "bg-[#e6f9f0] dark:bg-[#1a3a2a] text-[#00c853]",
      icon: CheckCircle,
    },
    "in-progress": {
      label: "در حال بررسی",
      color: "bg-[#fff3e0] dark:bg-[#3a2a1a] text-[#ff9800]",
      icon: Clock,
    },
    open: {
      label: "باز",
      color: "bg-[#ffe6e6] dark:bg-[#3a1a1a] text-[#e92c2c]",
      icon: AlertCircle,
    },
  };

  return statusMap[status];
};

const getPriorityColor = (priority: TicketPriority): string => {
  const priorityMap: Record<TicketPriority, string> = {
    high: "#e92c2c",
    medium: "#ff9800",
    low: "#00c853",
  };

  return priorityMap[priority];
};

// Sub Components
interface TicketCardProps {
  ticket: Ticket;
  onClick: () => void;
  colors: ReturnType<typeof useCurrentColors>;
}

function TicketCard({ ticket, onClick, colors }: TicketCardProps) {
  const statusInfo = getStatusBadge(ticket.status);
  const StatusIcon = statusInfo.icon;
  const priorityColor = getPriorityColor(ticket.priority);

  return (
    <div
      className="p-4 rounded-lg transition-all cursor-pointer hover:shadow-md"
      style={{ backgroundColor: colors.backgroundSecondary }}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium" style={{ color: colors.textSecondary }}>
              {ticket.id}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: priorityColor }}
            />
          </div>
          <h4 className="text-sm font-medium mb-1" style={{ color: colors.textPrimary }}>
            {ticket.subject}
          </h4>
          <div className="text-xs" style={{ color: colors.textSecondary }}>
            {ticket.date}
          </div>
        </div>
        <span
          className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1.5 ${statusInfo.color}`}
        >
          <StatusIcon className="w-3.5 h-3.5" />
          {statusInfo.label}
        </span>
      </div>
    </div>
  );
}

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  zIndex?: number;
}

function ModalWrapper({ isOpen, onClose, children, zIndex = 50 }: ModalWrapperProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{ 
        zIndex,
        backgroundColor: 'rgba(0, 0, 0, 0.5)' 
      }}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

// Main Component
export function SupportPage() {
  const [formData, setFormData] = useState({
    subject: "",
    category: "technical",
    priority: "medium",
    message: "",
  });
  const [selectedChannel, setSelectedChannel] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [showAllTickets, setShowAllTickets] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [ticketStatus, setTicketStatus] = useState<TicketStatus>("open");
  const [callRequestData, setCallRequestData] = useState({
    name: "",
    phone: "",
    preferredTime: "",
    subject: "",
  });
  
  const colors = useCurrentColors();
  const navigation = useNavigation();

  // Handlers
  const handleCopy = useCallback((text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  }, []);

  const handleFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    alert("تیکت شما با موفقیت ثبت شد!");
    setFormData({
      subject: "",
      category: "technical",
      priority: "medium",
      message: "",
    });
  }, [formData]);

  const handleChannelClick = useCallback((channel: SupportChannel) => {
    if (channel.id === 4) {
      navigation.setActivePage('ai');
    } else if (channel.id === 1) {
      window.location.href = 'tel:02112345678';
    } else if (channel.id === 2) {
      window.location.href = 'mailto:support.bineshafzar.co@gmail.com';
    } else {
      setSelectedChannel(channel.id);
    }
  }, [navigation]);

  const handleTicketClick = useCallback((ticketId: string) => {
    setSelectedTicket(ticketId);
  }, []);

  const handleCallRequestSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement call request submission logic
    console.log("Call request submitted:", callRequestData);
    alert("درخواست تماس شما با موفقیت ثبت شد! تیم پشتیبانی به زودی با شما تماس می‌گیرد.");
    setCallRequestData({
      name: "",
      phone: "",
      preferredTime: "",
      subject: "",
    });
  }, [callRequestData]);

  // Memoized values
  const selectedChannelData = useMemo(
    () => SUPPORT_CHANNELS.find(ch => ch.id === selectedChannel),
    [selectedChannel]
  );

  const selectedTicketData = useMemo(
    () => TICKETS.find(t => t.id === selectedTicket),
    [selectedTicket]
  );

  const recentTickets = useMemo(() => TICKETS.slice(0, 3), []);

  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold mb-2" style={{ color: colors.textPrimary }}>
          پشتیبانی
        </h1>
        <p className="text-sm" style={{ color: colors.textSecondary }}>
          تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست
        </p>
      </div>

      {/* Support Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {SUPPORT_CHANNELS.map((channel) => {
          const Icon = channel.icon;
          return (
            <div
              key={channel.id}
              className="rounded-lg border p-6 hover:shadow-lg transition-all cursor-pointer"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.border
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => handleChannelClick(channel)}
            >
              <div className={`w-12 h-12 rounded-full ${channel.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: colors.textPrimary }}>
                {channel.title}
              </h3>
              <p className="text-sm mb-3" style={{ color: colors.textSecondary }}>
                {channel.description}
              </p>
              <p className="text-sm font-medium" style={{ color: colors.primary }} dir="ltr">
                {channel.contact}
              </p>
            </div>
          );
        })}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* New Ticket Form */}
        <div 
          className="rounded-lg border p-6"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: colors.border
          }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            ارسال تیکت جدید
          </h2>

          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: colors.textPrimary }}>
                موضوع
              </label>
              <input
                type="text"
                placeholder="موضوع تیکت را وارد کنید"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 transition-colors"
                style={{
                  backgroundColor: colors.backgroundSecondary,
                  borderColor: colors.border,
                  color: colors.textPrimary,
                }}
                dir="rtl"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.textPrimary }}>
                  دسته‌بندی
                </label>
                <select
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 transition-colors"
                  style={{
                    backgroundColor: colors.backgroundSecondary,
                    borderColor: colors.border,
                    color: colors.textPrimary,
                  }}
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="technical">فنی</option>
                  <option value="billing">مالی</option>
                  <option value="feature">درخواست ویژگی</option>
                  <option value="other">سایر</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: colors.textPrimary }}>
                  اولویت
                </label>
                <select
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 transition-colors"
                  style={{
                    backgroundColor: colors.backgroundSecondary,
                    borderColor: colors.border,
                    color: colors.textPrimary,
                  }}
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                >
                  <option value="low">کم</option>
                  <option value="medium">متوسط</option>
                  <option value="high">زیاد</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: colors.textPrimary }}>
                پیام
              </label>
              <textarea
                rows={6}
                placeholder="توضیحات خود را وارد کنید"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 resize-none transition-colors"
                style={{
                  backgroundColor: colors.backgroundSecondary,
                  borderColor: colors.border,
                  color: colors.textPrimary,
                }}
                dir="rtl"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 text-white rounded-lg transition-opacity flex items-center justify-center gap-2"
              style={{ backgroundColor: colors.primary }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <Headphones className="w-5 h-5" />
              <span>ارسال تیکت</span>
            </button>
          </form>
        </div>

        {/* Recent Tickets */}
        <div 
          className="rounded-lg border p-6"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: colors.border
          }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: colors.textPrimary }}>
            تیکت‌های اخیر
          </h2>

          <div className="space-y-3">
            {recentTickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onClick={() => handleTicketClick(ticket.id)}
                colors={colors}
              />
            ))}
          </div>

          <button 
            className="w-full mt-4 px-4 py-2 border rounded-lg transition-colors"
            style={{
              borderColor: colors.border,
              color: colors.primary
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.backgroundSecondary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            onClick={() => setShowAllTickets(true)}
          >
            مشاهده همه تیکت‌ها
          </button>
        </div>
      </div>

      {/* Call Request Section */}
      <div 
        className="rounded-lg border p-6"
        style={{
          backgroundColor: colors.cardBackground,
          borderColor: colors.border
        }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ 
              backgroundColor: colors.primary + '15',
              color: colors.primary
            }}
          >
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold" style={{ color: colors.textPrimary }}>
              درخواست تماس
            </h2>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت
            </p>
          </div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleCallRequestSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colors.textPrimary }}>
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              placeholder="نام خود را وارد کنید"
              className="w-full px-4 py-2.5 border rounded-lg outline-none focus:ring-2 transition-colors"
              style={{
                backgroundColor: colors.backgroundSecondary,
                borderColor: colors.border,
                color: colors.textPrimary,
              }}
              dir="rtl"
              value={callRequestData.name}
              onChange={(e) => setCallRequestData({ ...callRequestData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colors.textPrimary }}>
              شماره تماس
            </label>
            <input
              type="tel"
              placeholder="09123456789"
              className="w-full px-4 py-2.5 border rounded-lg outline-none focus:ring-2 transition-colors"
              style={{
                backgroundColor: colors.backgroundSecondary,
                borderColor: colors.border,
                color: colors.textPrimary,
              }}
              dir="ltr"
              value={callRequestData.phone}
              onChange={(e) => setCallRequestData({ ...callRequestData, phone: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colors.textPrimary }}>
              زمان مناسب تماس
            </label>
            <select
              className="w-full px-4 py-2.5 border rounded-lg outline-none focus:ring-2 transition-colors"
              style={{
                backgroundColor: colors.backgroundSecondary,
                borderColor: colors.border,
                color: colors.textPrimary,
              }}
              value={callRequestData.preferredTime}
              onChange={(e) => setCallRequestData({ ...callRequestData, preferredTime: e.target.value })}
              required
            >
              <option value="">انتخاب کنید</option>
              <option value="morning">صبح (8 تا 12)</option>
              <option value="afternoon">عصر (12 تا 16)</option>
              <option value="evening">عصر (16 تا 20)</option>
              <option value="anytime">هر زمان</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: colors.textPrimary }}>
              موضوع تماس
            </label>
            <select
              className="w-full px-4 py-2.5 border rounded-lg outline-none focus:ring-2 transition-colors"
              style={{
                backgroundColor: colors.backgroundSecondary,
                borderColor: colors.border,
                color: colors.textPrimary,
              }}
              value={callRequestData.subject}
              onChange={(e) => setCallRequestData({ ...callRequestData, subject: e.target.value })}
              required
            >
              <option value="">انتخاب کنید</option>
              <option value="demo">درخواست دمو</option>
              <option value="sales">اطلاعات فروش</option>
              <option value="technical">پشتیبانی فنی</option>
              <option value="consultation">مشاوره</option>
              <option value="other">سایر موارد</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 text-white rounded-lg transition-opacity flex items-center justify-center gap-2"
              style={{ backgroundColor: colors.primary }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">ثبت درخواست تماس</span>
            </button>
          </div>
        </form>
      </div>

      {/* Channel Selection Modal */}
      <ModalWrapper
        isOpen={!!selectedChannel}
        onClose={() => setSelectedChannel(null)}
        zIndex={50}
      >
        {selectedChannelData && (
          <div 
            className="w-full max-w-md rounded-xl border p-6 shadow-2xl"
            style={{
              backgroundColor: colors.cardBackground,
              borderColor: colors.border
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${selectedChannelData.color} flex items-center justify-center`}>
                  <selectedChannelData.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: colors.textPrimary }}>
                    {selectedChannelData.title}
                  </h3>
                  <p className="text-sm" style={{ color: colors.textSecondary }}>
                    {selectedChannelData.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedChannel(null)}
                className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
                style={{ color: colors.textSecondary }}
                aria-label="بستن"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {selectedChannelData.details.map((detail, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg border"
                  style={{ 
                    backgroundColor: colors.backgroundSecondary,
                    borderColor: colors.border
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-xs mb-1" style={{ color: colors.textSecondary }}>
                        {detail.label}
                      </p>
                      <p className="text-sm font-medium" style={{ color: colors.textPrimary }} dir="ltr">
                        {detail.value}
                      </p>
                    </div>
                    {detail.copyable && (
                      <button
                        onClick={() => handleCopy(detail.value, index)}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        style={{ color: copiedIndex === index ? colors.primary : colors.textSecondary }}
                        aria-label="کپی"
                      >
                        {copiedIndex === index ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ModalWrapper>

      {/* Ticket Details Modal - Chat Style */}
      <ModalWrapper
        isOpen={!!selectedTicket}
        onClose={() => setSelectedTicket(null)}
        zIndex={60}
      >
        {selectedTicketData && (
          <div 
            className="w-full max-w-3xl rounded-2xl border shadow-2xl flex flex-col" 
            style={{
              backgroundColor: colors.cardBackground,
              borderColor: colors.border,
              height: '85vh',
              maxHeight: '700px'
            }}
          >
            {/* Header */}
            <div 
              className="px-6 py-4 border-b flex items-center justify-between"
              style={{ borderColor: colors.border }}
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold" style={{ color: colors.textPrimary }}>
                    {selectedTicketData.subject}
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      style={{ color: colors.textSecondary }}
                      aria-label="منو"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setSelectedTicket(null)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      style={{ color: colors.textSecondary }}
                      aria-label="بستن"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm" style={{ color: colors.textSecondary }}>
                  <div className="flex items-center gap-1.5">
                    <UserCircle className="w-4 h-4" />
                    <span>علی احمدی</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MailIcon className="w-4 h-4" />
                    <span dir="ltr">ali@example.com</span>
                  </div>
                  <span>راهنما 🎧</span>
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div 
              className="px-6 py-3 border-b flex items-center gap-3"
              style={{ 
                borderColor: colors.border,
                backgroundColor: colors.backgroundSecondary + '55'
              }}
            >
              <span className="text-sm font-medium" style={{ color: colors.textPrimary }}>
                {selectedTicketData.id}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTicketStatus("open")}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                  style={{ 
                    backgroundColor: ticketStatus === "open" ? colors.primary : 'transparent',
                    color: ticketStatus === "open" ? 'white' : colors.textSecondary,
                    border: `1px solid ${ticketStatus === "open" ? colors.primary : colors.border}`
                  }}
                >
                  جدید
                </button>
                <button
                  onClick={() => setTicketStatus("in-progress")}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                  style={{ 
                    backgroundColor: ticketStatus === "in-progress" ? colors.primary : 'transparent',
                    color: ticketStatus === "in-progress" ? 'white' : colors.textSecondary,
                    border: `1px solid ${ticketStatus === "in-progress" ? colors.primary : colors.border}`
                  }}
                >
                  باز
                </button>
                <button
                  onClick={() => setTicketStatus("resolved")}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                  style={{ 
                    backgroundColor: ticketStatus === "resolved" ? colors.error : 'transparent',
                    color: ticketStatus === "resolved" ? 'white' : colors.textSecondary,
                    border: `1px solid ${ticketStatus === "resolved" ? colors.error : colors.border}`
                  }}
                >
                  بسته
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              className="flex-1 overflow-y-auto px-6 py-4 space-y-4"
              style={{ backgroundColor: colors.backgroundSecondary + '22' }}
            >
              {selectedTicketData.messages.map((message, index) => (
                <div 
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className="max-w-[75%] rounded-2xl px-4 py-3 shadow-sm"
                    style={{ 
                      backgroundColor: message.sender === 'user' 
                        ? colors.primary + 'dd'
                        : colors.cardBackground,
                      color: message.sender === 'user' ? 'white' : colors.textPrimary,
                      border: message.sender === 'support' ? `1px solid ${colors.border}` : 'none'
                    }}
                  >
                    {message.sender === 'support' && (
                      <div className="flex items-center gap-2 mb-2">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ backgroundColor: colors.primary + '22', color: colors.primary }}
                        >
                          ع
                        </div>
                        <span className="text-xs font-medium" style={{ color: colors.textSecondary }}>
                          علی احمدی
                        </span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed" dir="rtl">
                      {message.text}
                    </p>
                    <p 
                      className="text-xs mt-2" 
                      style={{ 
                        color: message.sender === 'user' ? 'rgba(255,255,255,0.7)' : colors.textSecondary,
                        direction: 'ltr',
                        textAlign: message.sender === 'user' ? 'left' : 'right'
                      }}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div 
              className="px-6 py-4 border-t"
              style={{ borderColor: colors.border }}
            >
              <div className="flex items-end gap-3">
                <div 
                  className="flex-1 rounded-2xl border overflow-hidden"
                  style={{ 
                    backgroundColor: colors.backgroundSecondary,
                    borderColor: colors.border
                  }}
                >
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="پاسخ خود را بنویسید..."
                    className="w-full px-4 py-3 outline-none resize-none"
                    style={{ 
                      backgroundColor: 'transparent',
                      color: colors.textPrimary,
                      minHeight: '60px',
                      maxHeight: '120px'
                    }}
                    dir="rtl"
                    rows={2}
                  />
                </div>
                <button
                  onClick={() => {
                    if (newMessage.trim()) {
                      // TODO: Send message
                      console.log('Sending:', newMessage);
                      setNewMessage("");
                    }
                  }}
                  className="px-6 py-3 rounded-xl flex items-center gap-2 text-white transition-opacity"
                  style={{ backgroundColor: colors.primary }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <Send className="w-5 h-5" />
                  <span className="font-medium">ارسال پاسخ</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </ModalWrapper>

      {/* All Tickets Modal */}
      <ModalWrapper
        isOpen={showAllTickets}
        onClose={() => setShowAllTickets(false)}
        zIndex={50}
      >
        <div 
          className="w-full max-w-2xl rounded-xl border p-6 shadow-2xl max-h-[80vh] flex flex-col"
          style={{
            backgroundColor: colors.cardBackground,
            borderColor: colors.border
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.backgroundSecondary }}
              >
                <Headphones className="w-5 h-5" style={{ color: colors.primary }} />
              </div>
              <h3 className="text-lg font-bold" style={{ color: colors.textPrimary }}>
                همه تیکت‌ها ({TICKETS.length})
              </h3>
            </div>
            <button
              onClick={() => setShowAllTickets(false)}
              className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
              style={{ color: colors.textSecondary }}
              aria-label="بستن"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3 overflow-y-auto flex-1">
            {TICKETS.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onClick={() => handleTicketClick(ticket.id)}
                colors={colors}
              />
            ))}
          </div>
        </div>
      </ModalWrapper>
    </div>
  );
}