import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
export const headerData: HeaderItem[] = [
  { label: 'About Us', href: '#About' },
  { label: 'Standards', href: '#Standards' },
  { label: 'Services', href: '#Services' },
  { label: 'Pricing', href: '#Pricing' },
  { label: 'Reviews', href: '#Reviews' },
  { label: 'Studio', href: '#Studio' },
  { label: 'Expertise', href: '#Knowledge' },
  { label: 'Contact', href: '#Contact' },
]

// about data
export const Aboutdata: aboutdata[] = [
  {
    heading: 'About us.',
    imgSrc: '/landscape/gym_01.jpg',
    paragraph:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
    link: 'Learn more',
  },
  {
    heading: 'Services.',
    imgSrc: '/landscape/gym_02.jpg',
    paragraph:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
    link: 'Learn more',
  },
  {
    heading: 'Our Works.',
    imgSrc: '/landscape/gym_03.jpg',
    paragraph:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
    link: 'Learn more',
  },
]

// work-data
export const WorkData: workdata[] = [
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/landscape/gym_04.jpg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/landscape/gym_05.jpg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/landscape/gym_06.jpg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/landscape/gym_07.jpg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/landscape/gym_08.jpg',
  },
  {
    profession: 'Co-founder',
    name: 'John Doe',
    imgSrc: '/landscape/gym_09.jpg',
  },
]

// featured data
export const FeaturedData: featureddata[] = [
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/landscape/gym_10.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/landscape/gym_11.jpg',
  },
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/landscape/gym_12.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/landscape/gym_13.jpg',
  },
]

// plans data
export const PlansData = [
  {
    heading: 'Startup',
    price: {
      monthly: 19,
      yearly: 190,
    },
    user: 'per user',
    features: {
      profiles: '5 Social Profiles',
      posts: '5 Scheduled Posts Per Profile',
      templates: '400+ Templated',
      view: 'Calendar View',
      support: '24/7 Support',
    },
  },
  {
    heading: 'Business',
    price: {
      monthly: 29,
      yearly: 290,
    },
    user: 'per user',
    features: {
      profiles: '10 Social Profiles',
      posts: '5 Scheduled Posts Per Profile',
      templates: '600+ Templated',
      view: 'Calendar View',
      support: '24/7 VIP Support',
    },
  },
  {
    heading: 'Agency',
    price: {
      monthly: 59,
      yearly: 590,
    },
    user: 'per user',
    features: {
      profiles: '100 Social Profiles',
      posts: '100 Scheduled Posts Per Profile',
      templates: '800+ Templated',
      view: 'Calendar View',
      support: '24/7 VIP Support',
    },
  },
]

// testimonial data
export const TestimonialsData: testimonials[] = [
  {
    name: 'Robert Fox',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/landscape/gym_14.jpg',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/landscape/gym_15.jpg',
    rating: 4,
  },
  {
    name: 'Cody Fisher',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/landscape/gym_16.jpg',
    rating: 4,
  },
  {
    name: 'Robert Fox',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/landscape/gym_17.jpg',
    rating: 4,
  },
  {
    name: 'Leslie Alexander',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/landscape/gym_18.jpg',
    rating: 4,
  },
  {
    name: 'Cody Fisher',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/landscape/gym_19.jpg',
    rating: 4,
  },
]

// artical data
export const ArticlesData: articles[] = [
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/landscape/gym_20.jpg',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/landscape/gym_21.jpg',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/landscape/gym_22.jpg',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/landscape/gym_23.jpg',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/landscape/gym_24.jpg',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/landscape/gym_25.jpg',
  },
]

// footer links data
export const FooterLinksData: footerlinks[] = [
  {
    section: 'Menu',
    links: [
      { label: 'About Us', href: '#About' },
      { label: 'Team', href: '#Team' },
      { label: 'FAQ', href: '#FAQ' },
      { label: 'Blog', href: '#Blog' },
    ],
  },
  {
    section: 'Category',
    links: [
      { label: 'Design', href: '/' },
      { label: 'Mockup', href: '/' },
      { label: 'View all', href: '/' },
      { label: 'Log In', href: '/' },
    ],
  },
  {
    section: 'Pages',
    links: [
      { label: '404', href: '/' },
      { label: 'Instructions', href: '/' },
      { label: 'License', href: '/' },
    ],
  },
  {
    section: 'Others',
    links: [
      { label: 'Styleguide', href: '/' },
      { label: 'Changelog', href: '/' },
    ],
  },
]
