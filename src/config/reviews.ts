import { BUSINESS, GOOGLE_RATING } from './business'

export const REVIEWS_CONFIG = {
  ...GOOGLE_RATING,
  sourceLabel: 'Google Business Profile',
  sourceUrl: BUSINESS.mapsUrl,
  note: 'Điểm đánh giá được xác minh lần cuối theo thông tin chủ phòng cung cấp.',
}
