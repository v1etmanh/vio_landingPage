// ─────────────────────────────────────────────────────────────────────────────
// NGUỒN DỮ LIỆU DUY NHẤT về thông tin kinh doanh VIO Fitness.
// Mọi section trên site đọc từ đây — muốn đổi giờ/số liệu/link, chỉ sửa file này.
// Mọi giá trị phải khớp bảng "claim → nguồn → ngày xác minh" trong REMAKE_PLAN.md.
// ─────────────────────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: 'VIO Fitness & Gym Đà Nẵng',
  address: '15 Trần Phú – 02 Nguyễn Du, Hải Châu, Đà Nẵng',
  landmark: 'Cách chợ Hàn 200m — mặt tiền Trần Phú, lối vào 02 Nguyễn Du',
  phone: '0961119495',
  phoneDisplay: '0961 119 495',
  phoneIntl: '+84961119495',
  email: 'viofitness0961119495@gmail.com',
  hours: { open: '05:30', close: '20:30', label: 'Thứ 2 – Chủ nhật: 05:30 – 20:30' },
  floors: 3,
  offer: {
    vi: 'Miễn phí buổi tập + đo InBody miễn phí',
    en: 'Free trial session + free InBody scan',
  },
  socials: {
    facebook: 'https://www.facebook.com/viofitnessdanang',
    instagram: 'https://www.instagram.com/vio.gymfitness',
    instagramDm: 'https://ig.me/m/vio.gymfitness',
    tiktok: 'https://www.tiktok.com/@viofitness.dn',
    zalo: 'https://zalo.me/0961119495',
    whatsapp: 'https://wa.me/84961119495',
  },
  mapsUrl: 'https://maps.app.goo.gl/oF3KHEfNwWbVswZa7',
}

// Số liệu xác minh từ Google Business Profile (chủ phòng xác nhận).
// Cập nhật score/countLabel + lastVerifiedAt mỗi lần kiểm tra lại (khuyến nghị: mỗi quý).
export const GOOGLE_RATING = {
  score: '5.0',
  countLabel: '99+ đánh giá',
  mapsUrl: BUSINESS.mapsUrl,
  lastVerifiedAt: '2026-07-17',
}
