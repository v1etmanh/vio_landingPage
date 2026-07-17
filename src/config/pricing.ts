export interface PricingPlan {
  id: string
  name: string
  prefix: string
  priceVnd: string
  priceUsd: string
  period: string
  features: string[]
  isPopular?: boolean
  buttonText: string
  backgroundImage: string
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'day-pass',
    name: 'DAY PASS',
    prefix: 'FLEXIBLE',
    priceVnd: '200K',
    priceUsd: '$8',
    period: '/ DAY',
    features: ['Unlimited Gym Access', 'Air-conditioned training space'],
    buttonText: 'Đăng ký tập thử',
    backgroundImage: "url('/images/pricing/essential.png')",
  },
  {
    id: 'short-term',
    name: 'SHORT TERM',
    prefix: 'VISITOR',
    priceVnd: '500K',
    priceUsd: '$20',
    period: '/ 3 DAYS',
    features: ['Unlimited Gym Access', 'Air-conditioned training space'],
    buttonText: 'Chọn gói này',
    backgroundImage: "url('/images/pricing/abstract_white.png')",
  },
  {
    id: 'weekly-pass',
    name: 'WEEKLY PASS',
    prefix: 'TRAVELER',
    priceVnd: '900K',
    priceUsd: '$36',
    period: '/ 1 WK',
    features: ['2 Weeks: 1.25M VND / $50', 'Unlimited Gym Access', 'Air-conditioned training space'],
    isPopular: true,
    buttonText: 'Chọn gói này',
    backgroundImage: "url('/output_ms/abstract_kinetic_energy.png')",
  },
  {
    id: 'membership',
    name: 'MEMBERSHIP',
    prefix: 'COMMITTED',
    priceVnd: '1.65M',
    priceUsd: '$66',
    period: '/ 1 MO',
    features: ['2 Months: 2.9M VND / $116', '3 Months: 3.9M VND / $156', '6 Months: 6.6M VND / $264', 'Unlimited Gym Access'],
    buttonText: 'Chọn gói này',
    backgroundImage: "url('/images/pricing/elite.png')",
  },
  {
    id: 'long-term',
    name: 'LONG TERM',
    prefix: 'LIFESTYLE',
    priceVnd: '10.2M',
    priceUsd: '$408',
    period: '/ 12 MO',
    features: ['Unlimited Gym Access', 'Air-conditioned training space'],
    buttonText: 'Chọn gói này',
    backgroundImage: "url('/images/pricing/abstract_gold.png')",
  },
]
