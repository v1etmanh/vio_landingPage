import React, { useState, useCallback } from 'react';
import { Icon } from '@iconify/react';
import Button from '../../ui/Button';
import type { SiteLanguage } from '../../../App';

type GoalId = 'muscle' | 'beginner' | 'personalTraining' | 'wellness' | 'visitor' | 'recovery';

interface FormData {
  name: string;
  phone: string;
  goal: GoalId;
  bookingDate: string;
}

const WHATSAPP_NUMBER = '84961119495'; // 0961 119 495
const DISPLAY_PHONE = '0961 119 495';

interface RegistrationFormProps {
  language: SiteLanguage;
}

const content = {
  vi: {
    eyebrow: 'BẮT ĐẦU NGAY',
    headingLead: 'Sẵn sàng',
    headingAccent: 'thay đổi',
    headingEnd: 'bản thân?',
    intro: 'Đăng ký ngay hôm nay để nhận tư vấn lộ trình tập luyện cá nhân hóa và trải nghiệm không gian Fitness tiêu chuẩn quốc tế.',
    addressLabel: 'Địa chỉ',
    address: '15 Trần Phú, Hải Châu, Đà Nẵng',
    hoursLabel: 'Giờ mở cửa',
    weekdayHours: 'T2–T7: 5:30 AM – 8:30 PM',
    sundayHours: 'Chủ nhật: 8:00 AM – 7:00 PM',
    formTitle: 'Đăng ký buổi tập',
    formIntro: 'Điền thông tin bên dưới, chuyên viên sẽ liên hệ sắp xếp lịch phù hợp nhất.',
    nameLabel: 'Họ và tên',
    namePlaceholder: 'Nhập tên của bạn',
    phoneLabel: 'Số điện thoại',
    phonePlaceholder: 'Nhập số điện thoại',
    goalLabel: 'Mục tiêu tập luyện',
    dateLabel: 'Lịch hẹn dự kiến (Tùy chọn)',
    submit: 'Xác nhận đăng ký',
    responseTime: 'Chuyên viên Vio Fitness sẽ liên hệ với bạn trong vòng 30 phút.',
    missingDate: 'Chưa xác định',
    whatsappGreeting: 'Chào Vio Fitness, tôi muốn đăng ký tư vấn:',
    whatsappName: 'Tên',
    whatsappPhone: 'Số điện thoại',
    whatsappGoal: 'Mục tiêu',
    whatsappDate: 'Lịch hẹn dự kiến',
    goals: {
      muscle: 'Tăng cơ / Giảm mỡ',
      beginner: 'Mới bắt đầu tập luyện',
      personalTraining: 'Huấn luyện viên 1-1 (PT)',
      wellness: 'Duy trì sức khoẻ',
      visitor: 'Khách du lịch (ngắn ngày)',
      recovery: 'Phục hồi & trị liệu',
    },
  },
  en: {
    eyebrow: 'START TODAY',
    headingLead: 'Ready to',
    headingAccent: 'transform',
    headingEnd: 'yourself?',
    intro: 'Register today for a personalised training consultation and experience a world-class fitness space.',
    addressLabel: 'Address',
    address: '15 Tran Phu, Hai Chau, Da Nang',
    hoursLabel: 'Opening hours',
    weekdayHours: 'Mon–Sat: 5:30 AM – 8:30 PM',
    sundayHours: 'Sunday: 8:00 AM – 7:00 PM',
    formTitle: 'Book a workout',
    formIntro: 'Share your details below and our team will arrange a time that works best for you.',
    nameLabel: 'Full name',
    namePlaceholder: 'Enter your name',
    phoneLabel: 'Phone number',
    phonePlaceholder: 'Enter your phone number',
    goalLabel: 'Training goal',
    dateLabel: 'Preferred appointment (optional)',
    submit: 'Confirm booking',
    responseTime: 'A Vio Fitness consultant will contact you within 30 minutes.',
    missingDate: 'Not specified',
    whatsappGreeting: 'Hello Vio Fitness, I would like to book a consultation:',
    whatsappName: 'Name',
    whatsappPhone: 'Phone number',
    whatsappGoal: 'Goal',
    whatsappDate: 'Preferred appointment',
    goals: {
      muscle: 'Muscle building / Fat loss',
      beginner: 'New to training',
      personalTraining: 'One-to-one personal training',
      wellness: 'Maintain my health',
      visitor: 'Short-term visitor',
      recovery: 'Recovery & therapy',
    },
  },
} satisfies Record<SiteLanguage, Record<string, unknown>>;

const goalIds: GoalId[] = ['muscle', 'beginner', 'personalTraining', 'wellness', 'visitor', 'recovery'];

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ language }) => {
  const copy = content[language];
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    goal: 'muscle',
    bookingDate: ''
  });

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = formData.bookingDate ? formData.bookingDate.replace('T', ' ') : copy.missingDate;
    const message = `${copy.whatsappGreeting}\n- ${copy.whatsappName}: ${formData.name}\n- ${copy.whatsappPhone}: ${formData.phone}\n- ${copy.whatsappGoal}: ${copy.goals[formData.goal]}\n- ${copy.whatsappDate}: ${formattedDate}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }, [copy, formData]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  return (
    <section id="Registration" className="py-24 lg:py-32 bg-white relative z-10">
      <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-0 overflow-hidden bg-[#111111] border border-white/5">
          
          {/* Left Column: Visual / Value Prop */}
          <div className="lg:w-5/12 p-10 md:p-16 flex flex-col justify-between relative overflow-hidden text-white min-h-[450px]">
            {/* Gym Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
              style={{ backgroundImage: 'url(/webp/images/KSP02428-HDR-Edit.webp)' }}
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-[#111]/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059] opacity-30 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#C5A059]"></div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                  {copy.eyebrow}
                </span>
              </div>
              <h2 className="font-heading font-bold text-white uppercase leading-[0.92] text-4xl md:text-5xl lg:text-6xl mb-6">
                {copy.headingLead} <br/> <span className="font-serif italic font-light text-[#C5A059] tracking-normal lowercase">{copy.headingAccent}</span> <br/> {copy.headingEnd}
              </h2>
              <p className="text-white/60 font-light leading-relaxed max-w-sm text-sm">
                {copy.intro}
              </p>
            </div>
            
            <div className="relative z-10 mt-12 lg:mt-0 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon icon="ph:whatsapp-logo-light" className="text-2xl text-[#C5A059]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Hotline / Zalo / WhatsApp</p>
                  <p className="text-lg font-medium text-white">{DISPLAY_PHONE}</p>
                </div>
              </div>
              <div className="mt-6 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Icon icon="ph:map-pin" className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A059]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">{copy.addressLabel}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/85">{copy.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon icon="ph:clock" className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A059]" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">{copy.hoursLabel}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/85">{copy.weekdayHours}<br />{copy.sundayHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-7/12 p-10 md:p-16 flex items-center bg-[#151515] relative border-l border-white/5">
            <div className="w-full max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                
                {/* Form Header */}
                <div className="mb-2">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">{copy.formTitle}</h3>
                  <p className="text-white/50 text-sm font-light">{copy.formIntro}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 cursor-pointer">
                      {copy.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pb-3 border-b border-white/20 bg-transparent text-white text-lg focus:outline-none focus:border-[#C5A059] transition-colors rounded-none placeholder:text-white/20"
                      placeholder={copy.namePlaceholder}
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 cursor-pointer">
                      {copy.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pb-3 border-b border-white/20 bg-transparent text-white text-lg focus:outline-none focus:border-[#C5A059] transition-colors rounded-none placeholder:text-white/20"
                      placeholder={copy.phonePlaceholder}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="goal" className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 cursor-pointer">
                    {copy.goalLabel}
                  </label>
                  <div className="relative">
                    <select
                      id="goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full pb-3 border-b border-white/20 bg-transparent text-white text-lg focus:outline-none focus:border-[#C5A059] transition-colors appearance-none cursor-pointer rounded-none"
                      style={{ colorScheme: 'dark' }}
                    >
                      {goalIds.map((goal) => (
                        <option key={goal} value={goal} className="bg-[#151515] text-white">{copy.goals[goal]}</option>
                      ))}
                    </select>
                    <Icon icon="ph:caret-down" className="absolute right-0 top-1/2 -translate-y-[80%] text-white/50 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="bookingDate" className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 cursor-pointer">
                    {copy.dateLabel}
                  </label>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      id="bookingDate"
                      name="bookingDate"
                      value={formData.bookingDate}
                      onChange={handleChange}
                      className="w-full pb-3 border-b border-white/20 bg-transparent text-white text-lg focus:outline-none focus:border-[#C5A059] transition-colors rounded-none placeholder:text-white/20 cursor-pointer"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                </div>

                <div className="mt-4 w-full">
                  <Button 
                    type="submit" 
                    variant="gold" 
                    icon="logos:whatsapp-icon"
                    className="w-full !py-5"
                  >
                    {copy.submit}
                  </Button>
                </div>
                
                <p className="text-center text-xs text-white/40 font-light mt-[-16px]">
                  {copy.responseTime}
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
