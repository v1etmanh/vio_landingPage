import React, { useState, useCallback } from 'react';
import { Icon } from '@iconify/react';
import Button from '../../ui/Button';

interface FormData {
  name: string;
  phone: string;
  service: string;
}

const SERVICES = [
  'Thiết Bị Đỉnh Cao',
  'Không Gian Luyện Tập',
  'Phục Hồi Và Trị Liệu',
  'Phòng Xông Hơi',
  'Nạp Dinh Dưỡng'
];

const WHATSAPP_NUMBER = '84961119495'; // 0961 119 495
const DISPLAY_PHONE = '0961 119 495';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: SERVICES[0]
  });

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const message = `Chào Vio Fitness, tôi muốn đăng ký tư vấn:\n- Tên: ${formData.name}\n- Số điện thoại: ${formData.phone}\n- Dịch vụ quan tâm: ${formData.service}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }, [formData]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-white relative z-10">
      <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-0 overflow-hidden bg-[#111111] border border-white/5">
          
          {/* Left Column: Visual / Value Prop */}
          <div className="lg:w-5/12 p-10 md:p-16 flex flex-col justify-between relative overflow-hidden text-white min-h-[450px]">
            {/* Gym Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
              style={{ backgroundImage: 'url(/images/KSP02428-HDR-Edit.jpg)' }}
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-[#111]/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059] opacity-30 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#C5A059]"></div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                  BẮT ĐẦU NGAY
                </span>
              </div>
              <h2 className="font-heading font-bold text-white uppercase leading-[0.92] text-4xl md:text-5xl lg:text-6xl mb-6">
                Sẵn sàng <br/> <span className="font-serif italic font-light text-[#C5A059] tracking-normal lowercase">thay đổi</span> <br/> bản thân?
              </h2>
              <p className="text-white/60 font-light leading-relaxed max-w-sm text-sm">
                Đăng ký ngay hôm nay để nhận tư vấn lộ trình tập luyện cá nhân hóa và trải nghiệm không gian Fitness tiêu chuẩn quốc tế.
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
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-7/12 p-10 md:p-16 flex items-center bg-[#151515] relative border-l border-white/5">
            <div className="w-full max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 cursor-pointer">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pb-3 border-b border-white/20 bg-transparent text-white text-lg focus:outline-none focus:border-[#C5A059] transition-colors rounded-none placeholder:text-white/20"
                    placeholder="Nhập tên của bạn"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 cursor-pointer">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pb-3 border-b border-white/20 bg-transparent text-white text-lg focus:outline-none focus:border-[#C5A059] transition-colors rounded-none placeholder:text-white/20"
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="service" className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 cursor-pointer">
                    Dịch vụ quan tâm
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pb-3 border-b border-white/20 bg-transparent text-white text-lg focus:outline-none focus:border-[#C5A059] transition-colors appearance-none cursor-pointer rounded-none"
                      style={{ colorScheme: 'dark' }}
                    >
                      {SERVICES.map(s => (
                        <option key={s} value={s} className="bg-[#151515] text-white">{s}</option>
                      ))}
                    </select>
                    <Icon icon="ph:caret-down" className="absolute right-0 top-1/2 -translate-y-[80%] text-white/50 pointer-events-none" />
                  </div>
                </div>

                <div className="mt-4 w-full">
                  <Button 
                    type="submit" 
                    variant="gold" 
                    icon="logos:whatsapp-icon"
                    className="w-full !py-5"
                  >
                    Đăng Ký Ngay
                  </Button>
                </div>
                
                <p className="text-center text-xs text-white/40 font-light mt-[-16px]">
                  Chuyên viên Vio Fitness sẽ liên hệ với bạn trong vòng 30 phút.
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
