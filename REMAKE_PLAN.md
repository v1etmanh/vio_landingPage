# VIO FITNESS — Kế hoạch Remake UI Landing Page (v2)

*Cập nhật: 18/07/2026 — bản v2 sau vòng phản biện (Codex debate) + xác minh trực tiếp trên repo và xác nhận của chủ phòng.*
*Repo: `vio_landingPage` (Vite + React 19 + TS + Tailwind 4) · Site: https://vio-landing-page-seven.vercel.app/*

> ## ✅ TRẠNG THÁI: Phase 0–3 ĐÃ HOÀN THÀNH trên branch `feat/remake-ui` (18/07/2026)
>
> Gate cuối đã pass: lint 0 warning · `tsc --noEmit` sạch · build pass · bundle JS **116.6KB gzip** (mục tiêu <150KB, giảm từ 195KB) · `public/` **5.8MB** (từ 869MB) · robots.txt + sitemap.xml đã thêm.
>
> Đã triển khai: form tập thử 3 trường → VI-Zalo (copy clipboard) / EN-WhatsApp (prefill) / IG, mã nguồn [WEB-VI-A]/[WEB-EN-A], analytics events, sticky CTA + modal (focus-trap, Esc), i18n VI/EN toggle + đổi `<html lang>`, section Trainers placeholder trung thực, Member Stories 3 video FB (có consent 17/07/2026), thanh toán Tiền mặt·Thẻ·Chuyển khoản, Map + landmark chợ Hàn + nút chỉ đường, hợp nhất animation về Framer (`m.*` + LazyMotion, gỡ GSAP/Lenis/react-slick), tôn trọng `prefers-reduced-motion`.
>
> **Việc còn lại (cần chủ phòng / sau deploy):**
> 1. QA hình ảnh trên thiết bị thật (iPhone + Android) → merge `feat/remake-ui` vào `master` → Vercel deploy.
> 2. Bổ sung ảnh + tên HLV vào `src/config/media.ts` (TRAINERS) khi có.
> 3. (Tùy chọn, nên làm) Tải 3 video FB về, nén 720p, đặt vào `public/videos/` và điền `videoSrc`/`poster` trong `src/config/media.ts` — hiện đang mở link FB trực tiếp.
> 4. Mua domain riêng → cập nhật canonical/OG/sitemap URL.
> 5. Mỗi quý: xác minh lại số review GBP, cập nhật `lastVerifiedAt` trong `src/config/reviews.ts`.
> 6. Sau deploy 28 ngày: kiểm tra Core Web Vitals field data (p75) trong Search Console.

---

## 0. Bảng dữ kiện đã xác minh (claim → nguồn → ngày)

Mọi thông tin hiển thị trên site phải nằm trong bảng này. Không có trong bảng = không được đưa lên site.

| Claim | Giá trị chốt | Nguồn | Xác minh |
|---|---|---|---|
| Số tầng | **3 tầng** | Chủ phòng xác nhận | 17/07/2026 |
| Giờ mở cửa | **05:30–20:30, tất cả các ngày (kể cả CN)** | Chủ phòng xác nhận | 17/07/2026 |
| Review Google | **5.0★ · ~99 đánh giá** (GBP chính chủ) | Chủ phòng xác nhận | 17/07/2026 · thêm `reviewsLastVerifiedAt` vào config |
| Bảng giá | Giá trên website đúng (Day 200K → Năm 10.2M) | Chủ phòng xác nhận | 17/07/2026 |
| Thanh toán | **Tiền mặt + thẻ + chuyển khoản** | Chủ phòng xác nhận | 17/07/2026 |
| Email liên hệ | **viofitness0961119495@gmail.com** | Chủ phòng cung cấp | 17/07/2026 |
| Video học viên | 3 video FB: [video 1](https://www.facebook.com/share/r/1BTJHCnGT8/) · [video 2](https://www.facebook.com/share/r/1EgMQbZDMB/) · [video 3](https://www.facebook.com/share/r/1M7chDDrsd/) — **đã xác nhận quyền sử dụng**, nhưng repo chưa có file gốc để tự host | Chủ phòng cung cấp | 17/07/2026 |
| HLV | **Placeholder tạm** (khung section làm sẵn, chủ phòng bổ sung ảnh + tên sau) | Chủ phòng | Chờ bổ sung |
| Kênh chốt sale | **VI → Zalo · EN → WhatsApp (+84 961 119 495) · IG @vio.gymfitness phụ** | Chủ phòng chọn | 17/07/2026 |
| GG Maps listing | "VIO FITNESS & GYM DA NANG" (kgmid `/g/11ms606l_z`) | Đã resolve link share | 17/07/2026 |
| Socials | FB `viofitnessdanang` (~2,4K follower) · IG `vio.gymfitness` · TikTok `viofitness.dn` | Đã xác minh | 17/07/2026 |
| "10+ năm, 5000+ phiên" | Placeholder, **bỏ** | Chủ phòng đồng ý thay bằng điểm mạnh thật | 17/07/2026 |
| Quyền dùng hình ảnh học viên trong video | **Đã đồng ý** (cả 3 học viên) | Chủ phòng xác nhận | 17/07/2026 |
| Offer tập thử | **CHỐT: Miễn phí buổi tập + đo InBody miễn phí** | Chủ phòng duyệt đề xuất | 17/07/2026 |

## 0b. Quyết định thiết kế đã chốt

Giữ tông dark + gold, nâng cấp · Song ngữ VI/EN · Framer Motion là hệ animation chính (không Three.js) · Member Stories = video reel dọc + quote · Review nhúng tĩnh có ghi nguồn, cập nhật tay định kỳ.

---

## 1. Hiện trạng đã kiểm chứng trên repo (kèm mức nghiêm trọng)

**🔴 Blocker deploy/performance:**
1. **`public/` nặng 869MB / 170 file** — Vite copy nguyên vào `dist/` không tối ưu. Phải dọn allow-list trước mọi việc khác (brand guideline, video gốc, ảnh không dùng → đưa ra khỏi `public/`).
2. **IntroScreen che toàn màn hình 2.8s + ~1.35s animation thoát** (`src/components/ui/IntroScreen.tsx`) — phá LCP, mâu thuẫn mục tiêu "không chặn tương tác". Bỏ hẳn hoặc rút còn ≤600ms và không che Hero.
3. **Form footer là form giả** (`Footer/index.tsx` ~dòng 72): bấm gửi chỉ đổi UI "Đã nhận!", dữ liệu không đi đâu — gây hiểu nhầm cho khách thật. Xóa/thay ngay ở Phase 0.
4. **Bundle JS ~616KB minified (~198KB gzip)**, Vite cảnh báo chunk >500KB. 4 thư viện animation/carousel cùng tồn tại (Framer + GSAP + Lenis + react-slick), Hero có GSAP import không dùng.

**🟡 Sai/lệch nội dung:**
5. Footer ghi giờ sai (05:30–22:30...) → sửa thành 05:30–20:30 mỗi ngày.
6. Hero "5.0 · 99+" vs Reviews "4.9 (124)" — số 124 là placeholder không cơ sở; số đúng là **5.0 · 99+** (đã xác minh GBP). Một nguồn duy nhất trong config.
7. Reviews hiển thị placeholder (John Smith, Sarah Connor...), menu "HLV" trỏ `#Trainers` không tồn tại, `data.ts` còn data mẫu tiếng Anh + import path sai `@/app/types/*`.
8. Link "Chính sách riêng tư/Điều khoản" ở footer trỏ `#` — cần trang thật hoặc bỏ.
9. Import `AboutUs` trong `App.tsx` không hợp lệ (thư mục không tồn tại). *Đính chính: không làm vỡ build hiện tại vì unused + bị tree-shake, nhưng là nợ kỹ thuật cần dọn.*
10. `index.html`: `lang="en"`, thiếu meta description/OG/JSON-LD.
11. Lint: 11 warning cần xử lý.
12. 3 nút liên hệ nổi chồng nhau trên mobile.

**Git:** repo mount hiện ở nhánh `master` (có remote `feature/luc`, `manhle`). Mọi việc remake làm trên **feature branch mới tạo trong chính repo `vio_landingPage`** (vd `feat/remake-ui`), không commit thẳng master. Lưu ý của Codex về repo cha lồng nhau: kiểm tra lại trên máy bạn — nếu thư mục cha cũng là git repo, đảm bảo không commit nhầm vào repo cha.

---

## 2. Kiến trúc thông tin mới

Nguyên tắc: mỗi section trả lời một câu hỏi tâm lý của khách (chi tiết: `docs/phan-tich-tam-ly-khach-hang.md`). Điều chỉnh theo phản biện UX: **kéo Reviews lên gần Hero/Pricing**, trang ngắn lại còn 9 section thay vì 11.

| # | Section | Câu hỏi tâm lý | Trạng thái |
|---|---|---|---|
| 1 | **Hero** + badge 5.0★ + CTA tập thử | "Đây là đâu, có đáng dừng lại không?" | Remake |
| 2 | **TrustBar** (Panatta/Hammer + điểm mạnh thật) | "Có uy tín không?" | Sửa |
| 3 | **Reviews Google** (kéo lên sớm) | "Người khác nói gì?" | Remake, vị trí mới |
| 4 | **Về VIO + Dịch vụ & tiện ích** (gộp) | "Chỗ này hợp với mình không? Mình được gì?" | Remake nội dung |
| 5 | **Đội ngũ HLV** | "Ai đồng hành với mình?" | MỚI |
| 6 | **Member Stories** (reels + quote) | "Người như mình có thành công ở đây không?" | MỚI (thay StudioInMotion) |
| 7 | **Bảng giá** + phương thức thanh toán | "Tốn bao nhiêu, có ràng buộc không?" | Sửa |
| 8 | **Form đăng ký tập thử** → Zalo/WhatsApp/IG | "Bước tiếp theo dễ không?" | MỚI (trọng tâm) |
| 9 | **Map + Footer** (giờ đúng, landmark chợ Hàn) | "Đến bằng cách nào?" | Sửa |

Knowledge/blog: bỏ khỏi trang chính (placeholder EN, không phục vụ conversion). Positioning + Services gộp làm một để rút chiều dài trang.

---

## 3. Tính năng trọng tâm: Form đăng ký → Zalo / WhatsApp / IG

**Form 3 trường, KHÔNG hỏi số điện thoại** (tiếp thu phản biện: chuyển sang chat thì danh tính khách nằm sẵn trong kênh chat, hỏi SĐT là ma sát thừa): **Tên · Mục tiêu tập (dropdown) · Khung giờ muốn đến**. Nguyên tắc: giảm trường không cần thiết thường tăng tỉ lệ hoàn thành — mức tăng cụ thể phụ thuộc traffic, sẽ A/B test trên số liệu thật của VIO, không trích dẫn "+120%" như quy luật.

**Điều hướng theo ngôn ngữ đang xem:**
- **Giao diện VI → nút chính "Đăng ký qua Zalo"**: Zalo **không hỗ trợ điền sẵn tin nhắn** → click = copy tin nhắn soạn sẵn vào clipboard + toast "Đã copy tin nhắn, dán vào chat nhé!" + mở `zalo.me/0961119495`. Nút phụ: gọi điện.
- **Giao diện EN → nút chính "Book via WhatsApp"**: mở `wa.me/84961119495?text=<encoded>` với tin nhắn điền sẵn (WhatsApp hỗ trợ chính thức).
- **IG (nút phụ cả 2 ngôn ngữ)**: copy clipboard + mở `ig.me/m/vio.gymfitness` (IG không hỗ trợ prefill).

**Mẫu tin nhắn (kèm mã nguồn đo lường):**
```
[WEB-VI-A] Xin chào VIO Fitness! Em là {Tên}.
Em muốn đăng ký TẬP THỬ MIỄN PHÍ.
Mục tiêu: {Mục tiêu}. Giờ muốn đến: {Khung giờ}.
```
Mã `[WEB-VI-A]`/`[WEB-EN-A]` cho biết lead đến từ web + ngôn ngữ + phiên bản form — nhân viên trực chat đánh dấu lead nào đã gửi tin/đã đến tập → đo được conversion thật (frontend chỉ đo được click, không đo được tin đã gửi).

**Sự kiện analytics đặt tên rõ:** `trial_form_started` · `zalo_outbound_clicked` · `whatsapp_outbound_clicked` · `instagram_outbound_clicked` · `phone_clicked` · `directions_clicked`.

**Dữ liệu & riêng tư (tiếp thu phản biện security):** không lưu PII vào `localStorage`. Bản nháp form (tên/mục tiêu/giờ) chỉ giữ trong `sessionStorage`, tự xóa khi đóng tab. Không có backend = không giữ lead nào ngoài kênh chat; nếu sau này muốn "cứu" khách bỏ dở form thì cần backend/CRM + thông báo đồng ý xử lý dữ liệu — ghi nhận là nâng cấp tương lai, không làm ở đợt này.

Form xuất hiện ở section #8 + **sticky CTA mobile** "Tập thử miễn phí" (mở modal form).

---

## 4. Đặc tả section (những phần thay đổi so với v1)

- **4.1 Hero:** giữ ảnh thật + BlurText; video nền chỉ cân nhắc sau khi Phase 0 đưa asset về mức an toàn, và chỉ trên desktop. Badge "5.0★ · 99+ đánh giá Google" (số đã xác minh, một nguồn từ config).
- **4.2 TrustBar:** bỏ số giả → "Thiết bị mới 100%" · "**3 tầng** không gian" · "PT kèm 1-1" · "Mở cửa 7 ngày/tuần".
- **4.3 Reviews:** hiển thị **rating snapshot** (5.0★, số review, ngày xác minh) + nút "Xem tất cả trên Google Maps". Nội dung review chi tiết: ưu tiên **testimonial khách đồng ý cho VIO sử dụng** (xin qua Zalo/FB — chủ phòng có quan hệ trực tiếp); không scrape hàng loạt nội dung review Google (nếu sau này dùng Places API thì phải kèm attribution tác giả + link về review gốc theo policy của Google).
- **4.4 Về VIO + Dịch vụ:** gộp; giữ câu định vị "Chúng tôi không theo đuổi sự đông đúc..."; grid 9 tiện ích thật (máy đủ nhóm cơ, kick-boxing, PT riêng tư, cardio, sauna + phòng tắm, khăn sạch, tủ đồ, **InBody**, bar dinh dưỡng).
- **4.5 HLV:** dựng sẵn khung section với placeholder trung thực (ảnh silhouette + "Đội ngũ HLV đang cập nhật" — KHÔNG dùng tên/ảnh giả kiểu "Alex, Sarah"); chủ phòng bổ sung ảnh + tên + chuyên môn sau, chỉ cần sửa `src/config/business.ts`. Không bịa số năm kinh nghiệm.
- **4.6 Member Stories:** 3–5 video FB tự host (nén H.264 720p, `preload="none"` + poster). **Chỉ ghi kết quả kiểu "−8kg/3 tháng" khi có bằng chứng và học viên đồng ý bằng văn bản/tin nhắn** — không thì chỉ dùng quote cảm nhận chung.
- **4.7 Bảng giá:** giữ gói; thêm khối thanh toán "Tiền mặt · Thẻ" (QR chờ xác nhận); nút gói → scroll form + auto-điền tên gói vào tin nhắn.
- **4.9 Offer đề xuất:** "Buổi tập thử MIỄN PHÍ — HLV hướng dẫn làm quen máy + đo InBody miễn phí". Chỉ thêm yếu tố khan hiếm ("20 suất/tháng") nếu chủ phòng cam kết là thật.
- **4.10 Map/Footer:** giờ 05:30–20:30 mỗi ngày; landmark "cách chợ Hàn 200m, mặt tiền Trần Phú, lối vào 02 Nguyễn Du"; nút "Chỉ đường"; sửa/bỏ link Privacy/Terms trỏ `#`; **xóa form giả**.

---

## 5. Song ngữ VI/EN — 2 nấc

- **Nấc 1 (đợt này):** toggle VI/EN trên cùng URL (context + 2 file locale). Phục vụ **conversion** cho khách đang ở trên trang. `<html lang>` đổi động, mặc định `vi`.
- **Nấc 2 (khi mua domain riêng, nếu muốn SEO tiếng Anh):** tách URL `/vi/` và `/en/` + hreflang — Google khuyến nghị mỗi ngôn ngữ một URL riêng và có thể không crawl hết biến thể đổi động bằng JS. Ghi nhận là nâng cấp có chủ đích, không làm nửa vời ở đợt này.
- SEO đợt này tập trung **tiếng Việt + Google Business Profile** (kênh local search quan trọng nhất cho cả khách Tây tìm "gym near me").

## 6. Animation & Performance

- **Hợp nhất về một hệ chính: Framer Motion.** GSAP chỉ giữ nếu có hiệu ứng Framer không làm được (rà lại — Hero đang import GSAP thừa). react-slick + slick-carousel → thay bằng CSS scroll-snap hoặc embla (nhẹ hơn nhiều) cho marquee/reels.
- LazyMotion: dùng đúng cách — đổi toàn bộ `motion.*` sang `m.*` bên trong `<LazyMotion features={domAnimation}>`, không chỉ bọc provider.
- Chỉ animate `transform`/`opacity`, `whileInView` với `once: true`, giữ chỗ layout để hết "nháy trắng", tôn trọng `prefers-reduced-motion`.
- Ảnh: allow-list → WebP/AVIF, `srcset`, kích thước cố định. Font `display: swap` + preload.
- **Mục tiêu:** bundle JS gzip < 150KB (từ 198KB), `dist/` < 30MB (từ 869MB), Lighthouse mobile ≥ 90. **Lighthouse là lab gate; sau deploy theo dõi Core Web Vitals thực tế (p75) qua Search Console/CrUX** — mục tiêu thật là LCP p75 < 2.5s, CLS p75 < 0.1 trên field data.

## 7. SEO checklist

- `lang="vi"`, title "VIO Fitness — Phòng Gym Cao Cấp Gần Chợ Hàn, Hải Châu, Đà Nẵng", meta description có từ khóa local.
- OG tags (og:image 1200×630) cho preview Zalo/FB/WhatsApp.
- JSON-LD **một entity loại `ExerciseGym`** (subtype của LocalBusiness — không tạo 2 entity trùng): NAP, geo, `openingHoursSpecification` 05:30–20:30 Mo–Su, priceRange, sameAs. Chỉ nhúng `aggregateRating` nếu tuân thủ guideline của Google về review snippet tự phục vụ (rủi ro bị bỏ qua — không phụ thuộc vào nó).
- H1 duy nhất, alt text tiếng Việt, sitemap + robots.txt, NAP khớp 100% GBP.
- Khuyến nghị mạnh: mua domain riêng (`viofitness.vn`) — điều kiện để làm Nấc 2 i18n và rank local bền vững.

---

## 8. Lộ trình thực thi (đã sửa theo phản biện: dọn nền trước, content sau)

### Phase -1 — Truth & Git gate *(nửa buổi, cần bạn)*
- Tạo feature branch `feat/remake-ui` trong repo `vio_landingPage`; xác nhận không dính repo cha lồng nhau trên máy bạn.
- ~~Email · chuyển khoản · video FB~~ → **đã cung cấp 17/07/2026** (xem bảng mục 0).
- Đã chốt: **quyền sử dụng của học viên trong 3 video** và **offer tập thử miễn phí + đo InBody**. Còn thiếu để nâng cấp Phase 2: ảnh/tên/chuyên môn HLV, file video gốc và testimonial có phép dạng văn bản.
- Hoàn thiện bảng dữ kiện mục 0 — mọi claim lên site phải có nguồn + ngày.

### Phase 0 — Deploy-safe baseline *(1 buổi, mình làm)*
- **Dọn `public/` 869MB → allow-list ảnh đang dùng** (brand guideline, video gốc chuyển ra ngoài repo hoặc git-ignore), nén WebP.
- Bỏ/rút IntroScreen (≤600ms, không che Hero) — đo lại LCP.
- **Xóa form footer giả**, sửa link Privacy/Terms trỏ `#`.
- Dọn import chết (AboutUs), sửa 11 lint warning, sửa import path `@/app/types/*`.
- Sửa giờ mở cửa, thống nhất "5.0★ · 99+" một nguồn, sửa "3 tầng" nhất quán, NAP + social links đúng.
- `lang="vi"` + meta + OG + JSON-LD ExerciseGym.
- Gộp nút liên hệ nổi.
- **Gate:** build pass · lint 0 warning · `dist/` < 30MB · preview Vercel OK trên mobile thật.

### Phase 1 — Conversion MVP *(1–2 buổi, mình làm)*
- Form 3 trường + điều hướng VI→Zalo (clipboard) / EN→WhatsApp (prefill) / IG phụ + sticky CTA mobile + mã nguồn `[WEB-*]` + analytics events.
- Section Reviews mới (snapshot + link GG Maps + testimonial có phép) — đặt vị trí sớm trên trang.
- Khối phương thức thanh toán.
- Tách config: `src/config/business.ts` · `pricing.ts` · `reviews.ts` · `media.ts` (tiếp thu phản biện: không dồn 1 file khổng lồ); `src/locales/vi.ts`, `en.ts` chỉ chứa chuỗi dịch.
- i18n toggle (Nấc 1).
- **Gate:** test flow Zalo/WhatsApp/IG trên iPhone + Android thật; bundle gzip < 150KB.

### Phase 2 — Trust content *(1–2 buổi, cần tài nguyên Phase -1)*
- Section HLV, Member Stories (video tự host + consent), viết lại Hero/Về VIO/Dịch vụ theo content thật, song ngữ hóa toàn bộ.
- **Gate:** mọi claim đối chiếu bảng mục 0; video có poster + preload none; không có kết quả học viên nào thiếu consent.

### Phase 3 — Polish & QA *(1 buổi)*
- Hợp nhất animation về Framer (gỡ GSAP/slick nếu không còn dùng), LazyMotion `m.*`.
- Test: mobile thật 2 hệ máy, reduced-motion, keyboard navigation, fallback khi khách không có Zalo/WhatsApp (hiện số điện thoại để gọi).
- Lighthouse ≥90 mobile (lab gate) → deploy → **theo dõi CWV field data (p75) sau 28 ngày**.

### Sau deploy (vận hành, tối thiểu việc tay)
- Push git → Vercel tự deploy, không thao tác tay.
- Cập nhật giá/giờ/review = sửa 1 file config tương ứng (hoặc nhắn mình làm).
- Nhắc định kỳ mỗi quý: xác minh lại số review GBP + cập nhật `reviewsLastVerifiedAt` (mình có thể tạo scheduled task nhắc).
- Việc ngoài website quan trọng nhất cho SEO local: duy trì xin review Google sau mỗi buổi khách vui (QR code trỏ thẳng form review).

---

## 9. Những gì đã thay đổi so với v1 (theo phản biện Codex)

1. "Import AboutUs làm vỡ build" → đính chính: nợ kỹ thuật, không vỡ build hiện tại.
2. "99+ đánh giá là số giả" → đính chính: **số thật** (chủ phòng xác nhận 5.0★ · ~99 review trên GBP, 17/07/2026); 124 mới là placeholder.
3. "2 tầng" → sai, chốt lại **3 tầng** (chủ phòng xác nhận).
4. Giờ CN → chốt 05:30–20:30 như mọi ngày (chủ phòng xác nhận, hard-code vào JSON-LD được).
5. Bỏ claim "+120% conversion" như quy luật → nguyên tắc giảm ma sát + A/B test thực tế.
6. Bỏ lưu PII vào localStorage → sessionStorage, không lưu SĐT; bỏ luôn trường SĐT khỏi form.
7. Thêm hệ đo lường: event đặt tên rõ + mã nguồn trong tin nhắn chat để đo lead thật.
8. i18n: toggle là giải pháp conversion; tách URL /vi/ /en/ + hreflang là nâng cấp SEO có điều kiện (domain riêng).
9. Loại bỏ IntroScreen (2.8s) để khách vào thẳng nội dung và **dọn asset 869MB** trong Phase 0.
10. Xóa form footer giả + fix link `#` — thêm vào Phase 0.
11. Kênh theo ngôn ngữ: VI→Zalo, EN→WhatsApp (thay vì tất cả qua WhatsApp). Đính chính: Zalo không prefill được tin nhắn → dùng clipboard + toast.
12. Review Google: chuyển từ "copy review vào site" → snapshot + link + testimonial có phép (tôn trọng policy attribution).
13. Tách `site.config.ts` thành 4 file config + locale riêng.
14. Thêm Phase -1 (truth gate) và gate cụ thể cho từng phase; Lighthouse là lab gate, bổ sung theo dõi CWV field data p75 sau deploy.
15. ExerciseGym một entity duy nhất trong JSON-LD.
16. Hợp nhất animation về một hệ chính (Framer), thay react-slick bằng giải pháp nhẹ, LazyMotion dùng đúng cách (`m.*`).

---

## 10. Trạng thái thực thi — 18/07/2026

- **Phase 0 — hoàn thành:** bỏ IntroScreen/form giả, chuẩn hóa dữ liệu doanh nghiệp và SEO, allow-list asset còn khoảng 6.2 MiB trong `dist/`.
- **Phase 1 — hoàn thành trên mã nguồn:** form 3 trường, VI → Zalo, EN → WhatsApp, IG phụ, lưu nháp bằng sessionStorage, gắn mã nguồn và analytics, CTA mobile, tự điền gói quan tâm, toggle ngôn ngữ cho luồng conversion; pricing được chia thành một gói nổi bật + bốn gói compact và dải phương thức thanh toán cùng hệ thị giác. Bundle chính khoảng 118 KB gzip.
- **Phase 2 — hoàn thành có điều kiện:** đã có placeholder HLV trung thực, dữ liệu HLV đọc từ `src/config/media.ts`, locale VI/EN cho toàn bộ section và ba Member Stories đã xác nhận consent. Mỗi story hiện có poster thật và link Facebook chính chủ; không iframe URL `/share/r/...` vì đó là URL redirect, không phải media URL ổn định. Khi có video gốc, chỉ cần điền `videoSrc` trong config để chuyển sang player tự host với `preload="none"`.
- **Phase 3 — hoàn thành phần có thể kiểm chứng cục bộ:** bỏ scroll stack nặng, CSS slick và dependency GSAP/Lenis không dùng; dùng `LazyMotion` + `m.*`, tôn trọng reduced-motion, dọn source/assets chết; modal mobile có Escape, focus trap và trả focus về nút mở; typecheck, lint, build và smoke test preview đều đạt. Lighthouse, kiểm thử iPhone/Android thật và CWV sau 28 ngày chỉ thực hiện được khi có môi trường deploy/thiết bị thật.

**Quyết định triển khai:** CTA mobile mở modal form dùng chung state với form chính. Người dùng không mất dữ liệu nháp khi chuyển giữa modal và section; nút đóng và `aria-modal` giữ luồng bàn phím rõ ràng.

**UI follow-up (18/07/2026):** Header no longer uses vertical divider borders between logo, navigation, and utility actions. The trial form section now uses a lighter paper-toned background while retaining a dark, high-contrast form panel for readability.
