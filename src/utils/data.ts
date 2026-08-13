import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
export const headerData: HeaderItem[] = [
  { label: 'Về chúng tôi', href: '#About' },
  { label: 'Dịch vụ', href: '#Services' },
  { label: 'Bảng giá', href: '#Pricing' },
  { label: 'HLV', href: '#Trainers' },
  { label: 'Đánh giá', href: '#Reviews' },
  { label: 'Liên hệ', href: '#Contact' },
]

// about data
export const Aboutdata: aboutdata[] = [
  {
    heading: 'About us.',
    imgSrc: '/webp/landscape/gym_01.webp',
    paragraph:
      'We are VIO FITNESS, a top-tier fitness center located in Da Nang providing the best environment to achieve your health goals.',
    link: 'Learn more',
  },
  {
    heading: 'Services.',
    imgSrc: '/webp/landscape/gym_02.webp',
    paragraph:
      'From personal training to group classes, we offer a variety of services tailored to your fitness journey.',
    link: 'Learn more',
  },
  {
    heading: 'Our Space.',
    imgSrc: '/webp/landscape/gym_03.webp',
    paragraph:
      'Check out our state-of-the-art facilities and see the transformations of our dedicated members.',
    link: 'Learn more',
  },
]

// work-data
export const WorkData: workdata[] = [
  {
    profession: 'Personal Trainer',
    name: 'Alex',
    imgSrc: '/webp/landscape/gym_04.webp',
  },
  {
    profession: 'Personal Trainer',
    name: 'Sarah',
    imgSrc: '/webp/landscape/gym_05.webp',
  },
  {
    profession: 'Yoga Instructor',
    name: 'Michael',
    imgSrc: '/webp/landscape/gym_06.webp',
  },
  {
    profession: 'Nutritionist',
    name: 'Emily',
    imgSrc: '/webp/landscape/gym_07.webp',
  },
  {
    profession: 'Strength Coach',
    name: 'David',
    imgSrc: '/webp/landscape/gym_08.webp',
  },
  {
    profession: 'Fitness Expert',
    name: 'Jessica',
    imgSrc: '/webp/landscape/gym_09.webp',
  },
]

// featured data
export const FeaturedData: featureddata[] = [
  {
    heading: 'High intensity workout session.',
    imgSrc: '/webp/landscape/gym_10.webp',
  },
  {
    heading: 'Modern equipment and facilities.',
    imgSrc: '/webp/landscape/gym_11.webp',
  },
  {
    heading: 'Yoga and mindfulness classes.',
    imgSrc: '/webp/landscape/gym_12.webp',
  },
  {
    heading: 'Strength and conditioning area.',
    imgSrc: '/webp/landscape/gym_13.webp',
  },
]

// plans data
export const PlansData = [
  {
    heading: 'Basic',
    price: {
      monthly: 19,
      yearly: 190,
    },
    user: 'per month',
    features: {
      profiles: 'Gym Access',
      posts: 'Free Weights Area',
      templates: 'Cardio Equipment',
      view: 'Locker Rooms',
      support: 'Standard Support',
    },
  },
  {
    heading: 'Premium',
    price: {
      monthly: 29,
      yearly: 290,
    },
    user: 'per month',
    features: {
      profiles: 'All Basic Features',
      posts: 'Group Classes',
      templates: 'Yoga Studio Access',
      view: 'Sauna & Spa',
      support: 'Premium Support',
    },
  },
  {
    heading: 'VIP',
    price: {
      monthly: 59,
      yearly: 590,
    },
    user: 'per month',
    features: {
      profiles: 'All Premium Features',
      posts: 'Personal Training Sessions',
      templates: 'Nutrition Plan',
      view: 'Private Lockers',
      support: '24/7 VIP Support',
    },
  },
]

// testimonial data
export const TestimonialsData: testimonials[] = [
  {
    name: 'Robert Fox',
    profession: 'Member',
    comment:
      'VIO FITNESS has completely transformed my lifestyle. The trainers are excellent and the equipment is top notch.',
    imgSrc: '/webp/landscape/gym_14.webp',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'Member',
    comment:
      'Amazing atmosphere! It’s the best gym in Da Nang with a very supportive community.',
    imgSrc: '/webp/landscape/gym_15.webp',
    rating: 4,
  },
  {
    name: 'Cody Fisher',
    profession: 'Member',
    comment:
      'I have seen great results since joining. The group classes are intense and really fun.',
    imgSrc: '/webp/landscape/gym_16.webp',
    rating: 4,
  },
  {
    name: 'Jenny Wilson',
    profession: 'Member',
    comment:
      'Clean facilities, great location, and very knowledgeable personal trainers. Highly recommended.',
    imgSrc: '/webp/landscape/gym_17.webp',
    rating: 4,
  },
  {
    name: 'Cameron Williamson',
    profession: 'Member',
    comment:
      'VIO FITNESS is the best place to work out. I love their cardio section and the huge free weight area.',
    imgSrc: '/webp/landscape/gym_18.webp',
    rating: 4,
  },
  {
    name: 'Eleanor Pena',
    profession: 'Member',
    comment:
      'The yoga studio here is so relaxing, and the premium amenities are a big plus. Five stars!',
    imgSrc: '/webp/landscape/gym_19.webp',
    rating: 4,
  },
]

// artical data
export const ArticlesData: articles[] = [
  {
    time: '5 min',
    heading: 'Top 5 Cardio Exercises',
    heading2: 'To Burn Fat Fast',
    name: 'Published on VIO FITNESS',
    date: 'February 19, 2025',
    imgSrc: '/webp/landscape/gym_20.webp',
  },
  {
    time: '5 min',
    heading: 'Beginner\'s Guide',
    heading2: 'To Strength Training',
    name: 'Published on VIO FITNESS',
    date: 'February 19, 2025',
    imgSrc: '/webp/landscape/gym_21.webp',
  },
  {
    time: '5 min',
    heading: 'How to Build',
    heading2: 'A Healthy Diet Plan',
    name: 'Published on VIO FITNESS',
    date: 'February 19, 2025',
    imgSrc: '/webp/landscape/gym_22.webp',
  },
  {
    time: '5 min',
    heading: 'The Importance of',
    heading2: 'Rest and Recovery',
    name: 'Published on VIO FITNESS',
    date: 'February 19, 2025',
    imgSrc: '/webp/landscape/gym_23.webp',
  },
  {
    time: '5 min',
    heading: 'Yoga Poses',
    heading2: 'For Better Flexibility',
    name: 'Published on VIO FITNESS',
    date: 'February 19, 2025',
    imgSrc: '/webp/landscape/gym_24.webp',
  },
  {
    time: '5 min',
    heading: 'Staying Motivated',
    heading2: 'During Winter',
    name: 'Published on VIO FITNESS',
    date: 'February 19, 2025',
    imgSrc: '/webp/landscape/gym_25.webp',
  },
]

// footer links data
export const FooterLinksData: footerlinks[] = [
  {
    section: 'Khám phá',
    links: [
      { label: 'Về chúng tôi', href: '#About' },
      { label: 'Dịch vụ', href: '#Services' },
      { label: 'Bảng giá', href: '#Pricing' },
      { label: 'HLV cá nhân', href: '#Trainers' },
    ],
  },
  {
    section: 'Tiện ích',
    links: [
      { label: 'Khu tập tạ', href: '#Services' },
      { label: 'Phòng xông hơi', href: '#Services' },
      { label: 'Quầy Protein', href: '#Services' },
      { label: 'Khu phục hồi', href: '#Services' },
    ],
  },
  {
    section: 'Chính sách',
    links: [
      { label: 'Điều khoản sử dụng', href: '/' },
      { label: 'Bảo mật thông tin', href: '/' },
      { label: 'Chính sách hội viên', href: '/' },
    ],
  },
  {
    section: 'Liên hệ',
    links: [
      { label: 'Hotline: 0961119495', href: 'tel:0961119495' },
      { label: '15 Trần Phú, Đà Nẵng', href: '/' },
    ],
  },
]
