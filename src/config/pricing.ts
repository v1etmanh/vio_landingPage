export interface PricingPlan {
  id: string
  name: string
  priceVnd: string
  priceUsd: string
  isPopular?: boolean
  backgroundImage: string
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'day-pass',
    name: 'DAY PASS',
    priceVnd: '200K',
    priceUsd: '$8',
    backgroundImage: "url('/images/pricing/essential.png')",
  },
  {
    id: 'short-term',
    name: 'SHORT TERM',
    priceVnd: '500K',
    priceUsd: '$20',
    backgroundImage: "url('/images/pricing/abstract_white.png')",
  },
  {
    id: 'weekly-pass',
    name: 'WEEKLY PASS',
    priceVnd: '900K',
    priceUsd: '$36',
    isPopular: true,
    backgroundImage: "url('/output_ms/abstract_kinetic_energy.png')",
  },
  {
    id: 'membership',
    name: 'MEMBERSHIP',
    priceVnd: '1.65M',
    priceUsd: '$66',
    backgroundImage: "url('/images/pricing/elite.png')",
  },
  {
    id: 'long-term',
    name: 'LONG TERM',
    priceVnd: '10.2M',
    priceUsd: '$408',
    backgroundImage: "url('/images/pricing/abstract_gold.png')",
  },
]
