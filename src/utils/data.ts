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
    imgSrc: '/landscape/gym_01.jpg',
    paragraph:
      'We are VIO FITNESS, a top-tier fitness center located in Da Nang providing the best environment to achieve your health goals.',
    link: 'Learn more',
  },
  {
    heading: 'Services.',
    imgSrc: '/landscape/gym_02.jpg',
    paragraph:
      'From personal training to group classes, we offer a variety of services tailored to your fitness journey.',
    link: 'Learn more',
  },
  {
    heading: 'Our Space.',
    imgSrc: '/landscape/gym_03.jpg',
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
    imgSrc: '/landscape/gym_04.jpg',
  },
  {
    profession: 'Personal Trainer',
    name: 'Sarah',
    imgSrc: '/landscape/gym_05.jpg',
  },
  {
    profession: 'Yoga Instructor',
    name: 'Michael',
    imgSrc: '/landscape/gym_06.jpg',
  },
  {
    profession: 'Nutritionist',
    name: 'Emily',
    imgSrc: '/landscape/gym_07.jpg',
  },
  {
    profession: 'Strength Coach',
    name: 'David',
    imgSrc: '/landscape/gym_08.jpg',
  },
  {
    profession: 'Fitness Expert',
    name: 'Jessica',
    imgSrc: '/landscape/gym_09.jpg',
  },
]

// featured data
export const FeaturedData: featureddata[] = [
  {
    heading: 'High intensity workout session.',
    imgSrc: '/landscape/gym_10.jpg',
  },
  {
    heading: 'Modern equipment and facilities.',
    imgSrc: '/landscape/gym_11.jpg',
  },
  {
    heading: 'Yoga and mindfulness classes.',
    imgSrc: '/landscape/gym_12.jpg',
  },
  {
    heading: 'Strength and conditioning area.',
    imgSrc: '/landscape/gym_13.jpg',
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
    imgSrc: '/landscape/gym_14.jpg',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'Member',
    comment:
      'Amazing atmosphere! It’s the best gym in Da Nang with a very supportive community.',
    imgSrc: '/landscape/gym_15.jpg',
    rating: 4,
  },
  {
    name: 'Cody Fisher',
    profession: 'Member',
    comment:
      'I have seen great results since joining. The group classes are intense and really fun.',
    imgSrc: '/landscape/gym_16.jpg',
    rating: 4,
  },
  {
    name: 'Jenny Wilson',
    profession: 'Member',
    comment:
      'Clean facilities, great location, and very knowledgeable personal trainers. Highly recommended.',
    imgSrc: '/landscape/gym_17.jpg',
    rating: 4,
  },
  {
    name: 'Cameron Williamson',
    profession: 'Member',
    comment:
      'VIO FITNESS is the best place to work out. I love their cardio section and the huge free weight area.',
    imgSrc: '/landscape/gym_18.jpg',
    rating: 4,
  },
  {
    name: 'Eleanor Pena',
    profession: 'Member',
    comment:
      'The yoga studio here is so relaxing, and the premium amenities are a big plus. Five stars!',
    imgSrc: '/landscape/gym_19.jpg',
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
    imgSrc: '/landscape/gym_20.jpg',
  },
  {
    time: '5 min',
    heading: 'Beginner\'s Guide',
    heading2: 'To Strength Training',
    name: 'Published on VIO FITNESS',
    date: 'February 19, 2025',
    imgSrc: '/landscape/gym_21.jpg',
  },
  {
    time: '5 min',
    heading: 'How to Build',
    heading2: 'A Healthy Diet Plan',
    name: 'Published on VIO FITNESS',
    date: 'February 19, 2025',
    imgSrc: '/landscape/gym_22.jpg',
  },
  {
    time: '5 min',
    heading: 'The Importance of',
    heading2: 'Rest and Recovery',
    name: 'Published on VIO FITNESS',
    date: 'February 19, 2025',
    imgSrc: '/landscape/gym_23.jpg',
  },
  {
    time: '5 min',
    heading: 'Yoga Poses',
    heading2: 'For Better Flexibility',
    name: 'Published on VIO FITNESS',
    date: 'February 19, 2025',
    imgSrc: '/landscape/gym_24.jpg',
  },
  {
    time: '5 min',
    heading: 'Staying Motivated',
    heading2: 'During Winter',
    name: 'Published on VIO FITNESS',
    date: 'February 19, 2025',
    imgSrc: '/landscape/gym_25.jpg',
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
