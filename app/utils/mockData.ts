import { Smartphone, ShoppingBag, UtensilsCrossed, Plane, GraduationCap, ShoppingCart, Heart, Hotel } from 'lucide-vue-next';

export const CATEGORIES = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: Smartphone,
    count: 42,
    color: 'bg-indigo-500',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: ShoppingBag,
    count: 156,
    color: 'bg-pink-500',
    image: 'https://images.unsplash.com/photo-1757152323431-e74d8bf4086c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBiYWdzfGVufDF8fHx8MTc2OTU1MDM2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'dining',
    name: 'Dining',
    icon: UtensilsCrossed,
    count: 243,
    color: 'bg-orange-500',
    image: 'https://images.unsplash.com/photo-1667388968964-4aa652df0a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwZm9vZHxlbnwxfHx8fDE3Njk2MzQ5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'travel',
    name: 'Travel',
    icon: Plane,
    count: 89,
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1706208224221-0944db693705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHRyYXZlbCUyMHZhY2F0aW9ufGVufDF8fHx8MTc2OTY1OTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'hotels',
    name: 'Hotels',
    icon: Hotel,
    count: 78,
    color: 'bg-teal-500',
    image: 'https://images.unsplash.com/photo-1695686017650-f2a8d6a498ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydHxlbnwxfHx8fDE3Njk2MDU5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    count: 67,
    color: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1613950145734-535ace80e3c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBib29rcyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2OTYwMjY2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'supermarket',
    name: 'Supermarket',
    icon: ShoppingCart,
    count: 198,
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1670684684445-a4504dca0bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMGdyb2NlcmllcyUyMHNob3BwaW5nfGVufDF8fHx8MTc2OTY1OTU0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Heart,
    count: 124,
    color: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmUlMjBtZWRpY2FsfGVufDF8fHx8MTc2OTY1OTU0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export const MOCK_OFFERS = [
  {
    id: '1',
    brand: 'Fashion Bug',
    brandLogo: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    mainBanners: ['https://images.unsplash.com/photo-1479064555552-3ef4979f8908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'],
    verticalBanners: [
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    ],
    bank: 'HNB',
    bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    discount: '30% OFF',
    category: 'Fashion',
    expiryDate: 'Feb 28',
    location: 'All Outlets',
    website: 'https://fashionbug.lk/',
    districts: ['Colombo', 'Gampaha', 'Kandy', 'Galle', 'Jaffna', 'Kurunegala'],
    description: 'Get 30% discount on all items when you pay with your HNB credit card. Valid for purchases above LKR 5,000.',
    terms: [
      'Valid for HNB Credit Cards only',
      'Minimum purchase: LKR 5,000',
      'Cannot be combined with other offers',
      'Valid until February 28, 2026'
    ],
    bankOffers: [
      {
        bank: 'HNB',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '30%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-02',
        endDate: '2026-02-28',
        description: 'Get 30% discount on all items when you pay with your HNB credit card. Valid for purchases above LKR 5,000.',
        terms: [
          'Valid for HNB Credit Cards only',
          'Minimum purchase: LKR 5,000',
          'Cannot be combined with other offers',
          'Valid until February 28, 2026'
        ]
      },
      {
        bank: 'HNB',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '25%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-02',
        endDate: '2026-02-28',
        description: 'Get 25% discount on all items when you pay with your HNB debit card. Valid for purchases above LKR 3,000.',
        terms: [
          'Valid for HNB Debit Cards only',
          'Minimum purchase: LKR 3,000',
          'Cannot be combined with other offers',
          'Valid until February 28, 2026'
        ]
      },
      {
        bank: 'Commercial Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '25%',
        appliesTo: 'Both',
        startDate: '2026-02-01',
        endDate: '2026-03-15',
        description: 'Enjoy 25% discount at Fashion Bug with Commercial Bank credit cards on purchases over LKR 10,000.',
        terms: [
          'Valid for Commercial Bank Credit Cards',
          'Minimum purchase: LKR 10,000',
          'Not valid on sale items',
          'Valid until March 15, 2026'
        ]
      },
      {
        bank: 'Commercial Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '20%',
        appliesTo: 'Both',
        startDate: '2026-02-01',
        endDate: '2026-03-15',
        description: 'Enjoy 20% discount at Fashion Bug with Commercial Bank debit cards on purchases over LKR 8,000.',
        terms: [
          'Valid for Commercial Bank Debit Cards',
          'Minimum purchase: LKR 8,000',
          'Not valid on sale items',
          'Valid until March 15, 2026'
        ]
      },
      {
        bank: 'Sampath Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '22%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-01',
        endDate: '2026-02-28',
        description: 'Get 22% off with Sampath Bank credit cards. Valid on weekends only.',
        terms: [
          'Valid for Sampath Bank Credit Cards',
          'Minimum purchase: LKR 3,500',
          'Valid on weekends only (Saturday & Sunday)',
          'Maximum discount: LKR 5,000'
        ]
      },
      {
        bank: 'Sampath Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '18%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-01',
        endDate: '2026-02-28',
        description: 'Get 18% off with Sampath Bank debit cards. Valid on weekends only.',
        terms: [
          'Valid for Sampath Bank Debit Cards',
          'Minimum purchase: LKR 2,500',
          'Valid on weekends only (Saturday & Sunday)',
          'Maximum discount: LKR 4,000'
        ]
      },
      {
        bank: 'BOC',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '15%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-05',
        endDate: '2026-04-30',
        description: '15% discount with Bank of Ceylon credit cards. Extended validity period.',
        terms: [
          'Valid for BOC Credit Cards',
          'Minimum purchase: LKR 5,000',
          'Valid on all days',
          'Valid until April 30, 2026'
        ]
      },
      {
        bank: 'BOC',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '12%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-05',
        endDate: '2026-04-30',
        description: '12% discount with Bank of Ceylon debit cards. Extended validity period.',
        terms: [
          'Valid for BOC Debit Cards',
          'Minimum purchase: LKR 4,000',
          'Valid on all days',
          'Valid until April 30, 2026'
        ]
      }
    ]
  },
  {
    id: '2',
    brand: 'Cinnamon Hotels',
    brandLogo: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bank: 'Commercial Bank',
    bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    discount: '25% OFF',
    category: 'Hotels',
    expiryDate: 'Mar 15',
    location: 'Colombo, Kandy, Bentota',
    website: 'https://www.cinnamonhotels.com/',
    districts: ['Colombo', 'Kandy', 'Galle'],
    description: 'Enjoy 25% discount on room bookings at all Cinnamon Hotels across Sri Lanka with your Commercial Bank card.',
    terms: [
      'Valid for Commercial Bank Credit & Debit Cards',
      'Advance booking required',
      'Subject to availability',
      'Blackout dates apply'
    ],
    bankOffers: [
      {
        bank: 'Commercial Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '25%',
        appliesTo: 'Online Store',
        startDate: '2026-02-01',
        endDate: '2026-03-15',
        description: 'Enjoy 25% discount on room bookings at all Cinnamon Hotels across Sri Lanka with your Commercial Bank credit card.',
        terms: [
          'Valid for Commercial Bank Credit Cards',
          'Advance booking required',
          'Subject to availability',
          'Blackout dates apply'
        ]
      },
      {
        bank: 'HNB',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '20%',
        appliesTo: 'Online Store',
        startDate: '2026-02-05',
        endDate: '2026-03-31',
        description: '20% discount on hotel stays with HNB credit cards. Complimentary breakfast included.',
        terms: [
          'Valid for HNB Credit Cards only',
          'Minimum 2 nights stay required',
          'Complimentary breakfast for 2 persons',
          'Valid until March 31, 2026'
        ]
      },
      {
        bank: 'Seylan Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '15%',
        appliesTo: 'Online Store',
        startDate: '2026-02-01',
        endDate: '2026-04-30',
        description: 'Get 15% off with Seylan Bank debit cards. Valid for weekend bookings.',
        terms: [
          'Valid for Seylan Bank Debit Cards',
          'Weekend bookings only (Friday-Sunday)',
          'Book 7 days in advance',
          'Valid until April 30, 2026'
        ]
      }
    ]
  },
  {
    id: '3',
    brand: 'Barista Coffee',
    brandLogo: 'https://images.unsplash.com/photo-1642647916129-3909c75c0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3Njk2MjEzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bank: 'Sampath Bank',
    bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    discount: '30% OFF',
    category: 'Dining',
    expiryDate: 'Feb 20',
    location: 'Island Wide',
    website: 'https://www.barista.lk/',
    districts: ['Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Galle', 'Matara', 'Jaffna', 'Batticaloa', 'Kurunegala', 'Anuradhapura'],
    description: 'Get 30% off your total bill when you pay with Sampath Bank cards.',
    terms: [
      'Valid for all Sampath Bank cards',
      'Valid Monday to Friday',
      'Cannot be used with meal combos',
      'One redemption per day per card'
    ],
    bankOffers: [
      {
        bank: 'Sampath Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '30%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-01',
        endDate: '2026-02-20',
        description: 'Get 30% off your total bill when you pay with Sampath Bank credit cards.',
        terms: [
          'Valid for Sampath Bank Credit Cards',
          'Valid Monday to Friday',
          'Cannot be used with meal combos',
          'One redemption per day per card'
        ]
      },
      {
        bank: 'NDB Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '30%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-01',
        endDate: '2026-02-28',
        description: 'Get 30% discount on all beverages and snacks with NDB Bank credit cards.',
        terms: [
          'Valid for NDB Bank Credit Cards',
          'Valid all days of the week',
          'Minimum purchase: LKR 1,000',
          'Valid until February 28, 2026'
        ]
      },
      {
        bank: 'NDB Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '25%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-01',
        endDate: '2026-02-28',
        description: 'Get 25% discount on all beverages and snacks with NDB Bank debit cards.',
        terms: [
          'Valid for NDB Bank Debit Cards',
          'Valid all days of the week',
          'Minimum purchase: LKR 800',
          'Valid until February 28, 2026'
        ]
      },
      {
        bank: 'BOC',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '20%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-05',
        endDate: '2026-03-15',
        description: '20% off on weekends with Bank of Ceylon debit cards.',
        terms: [
          'Valid for BOC Debit Cards',
          'Valid on weekends only (Saturday & Sunday)',
          'Maximum discount: LKR 500',
          'Valid until March 15, 2026'
        ]
      },
      {
        bank: "People's Bank",
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '25%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-10',
        endDate: '2026-03-31',
        description: '25% discount with People\'s Bank credit cards. Valid for all beverages.',
        terms: [
          'Valid for People\'s Bank Credit Cards',
          'Valid all days',
          'Not valid for promotional items',
          'Valid until March 31, 2026'
        ]
      }
    ]
  },
  {
    id: '4',
    brand: 'Keells Super',
    brandLogo: 'https://images.unsplash.com/photo-1670684684445-a4504dca0bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMGdyb2NlcmllcyUyMHNob3BwaW5nfGVufDF8fHx8MTc2OTY1OTU0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bank: 'BOC',
    bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    discount: '15% OFF',
    category: 'Supermarket',
    expiryDate: 'Mar 31',
    location: 'All Branches',
    website: 'https://www.keellssuper.com/',
    districts: ['Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Batticaloa', 'Trincomalee', 'Kurunegala', 'Anuradhapura'],
    description: 'Get 15% discount on your total bill at Keells Super with Bank of Ceylon cards.',
    terms: [
      'Valid for BOC Credit Cards only',
      'Minimum purchase: LKR 3,000',
      'Valid on weekends only',
      'Maximum discount: LKR 2,000'
    ],
    bankOffers: [
      {
        bank: 'BOC',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '15%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-01',
        endDate: '2026-03-31',
        description: 'Get 15% discount on your total bill at Keells Super with Bank of Ceylon credit cards.',
        terms: [
          'Valid for BOC Credit Cards only',
          'Minimum purchase: LKR 3,000',
          'Valid on weekends only',
          'Maximum discount: LKR 2,000'
        ]
      },
      {
        bank: 'BOC',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '12%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-01',
        endDate: '2026-03-31',
        description: 'Get 12% discount on your total bill at Keells Super with Bank of Ceylon debit cards.',
        terms: [
          'Valid for BOC Debit Cards only',
          'Minimum purchase: LKR 2,500',
          'Valid on weekends only',
          'Maximum discount: LKR 1,500'
        ]
      },
      {
        bank: 'Sampath Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '10%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-01',
        endDate: '2026-04-30',
        description: '10% discount with Sampath Bank credit cards on all grocery items.',
        terms: [
          'Valid for Sampath Bank Credit Cards',
          'Minimum purchase: LKR 5,000',
          'Valid all days',
          'Valid until April 30, 2026'
        ]
      },
      {
        bank: 'Commercial Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '8%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-10',
        endDate: '2026-03-31',
        description: '8% discount on groceries with Commercial Bank debit cards.',
        terms: [
          'Valid for Commercial Bank Debit Cards',
          'Minimum purchase: LKR 2,500',
          'Valid on weekdays only',
          'Maximum discount: LKR 1,500'
        ]
      }
    ]
  },
  {
    id: '5',
    brand: 'Singer Electronics',
    brandLogo: 'https://images.unsplash.com/photo-1761494296583-99b15e9063c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHRlY2hub2xvZ3klMjBzdG9yZXxlbnwxfHx8fDE3Njk2MzQ5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bank: 'Seylan Bank',
    bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    discount: '20% OFF',
    category: 'Electronics',
    expiryDate: 'Feb 25',
    location: 'Colombo, Kandy',
    website: 'https://www.singer.lk/',
    districts: ['Colombo', 'Kandy'],
    description: '20% off on home appliances and electronics with Seylan Bank credit cards.',
    terms: [
      'Valid for Seylan Credit Cards',
      'Minimum purchase: LKR 10,000',
      'Valid for selected items only',
      'Interest-free installments available'
    ],
    bankOffers: [
      {
        bank: 'Seylan Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '20%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-01',
        endDate: '2026-02-25',
        description: '20% off on home appliances and electronics with Seylan Bank credit cards.',
        terms: [
          'Valid for Seylan Credit Cards',
          'Minimum purchase: LKR 10,000',
          'Valid for selected items only',
          'Interest-free installments available'
        ]
      },
      {
        bank: 'HNB',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '18%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-05',
        endDate: '2026-03-15',
        description: '18% discount on electronics and appliances with HNB credit cards. 0% interest for 6 months.',
        terms: [
          'Valid for HNB Credit Cards',
          'Minimum purchase: LKR 15,000',
          '0% interest for 6 months',
          'Valid until March 15, 2026'
        ]
      },
      {
        bank: 'NDB Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '15%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-01',
        endDate: '2026-04-30',
        description: '15% discount with NDB Bank credit cards. Extended validity and flexible payment options.',
        terms: [
          'Valid for NDB Bank Credit Cards',
          'Minimum purchase: LKR 12,000',
          'Installment plans available',
          'Valid until April 30, 2026'
        ]
      }
    ]
  },
  {
    id: '6',
    brand: 'Scope Cinemas',
    brandLogo: 'https://images.unsplash.com/photo-1762235634044-ac18d682a0d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMGVudGVydGFpbm1lbnR8ZW58MXx8fHwxNzY5NjU5NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bank: 'NDB Bank',
    bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    discount: '50% OFF',
    category: 'Dining',
    expiryDate: 'Mar 10',
    location: 'All Cinemas',
    website: 'https://www.scopecinemas.com/',
    districts: ['Colombo', 'Gampaha', 'Kandy', 'Galle'],
    description: 'Get 50% discount on movie tickets every Tuesday with NDB Bank cards.',
    terms: [
      'Valid for all NDB cards',
      'Valid on Tuesdays only',
      'Maximum 2 tickets per transaction',
      'Not valid for 3D/IMAX screenings'
    ],
    bankOffers: [
      {
        bank: 'NDB Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '50%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-01',
        endDate: '2026-03-10',
        description: 'Get 50% discount on movie tickets every Tuesday with NDB Bank credit cards.',
        terms: [
          'Valid for NDB Bank Credit Cards',
          'Valid on Tuesdays only',
          'Maximum 2 tickets per transaction',
          'Not valid for 3D/IMAX screenings'
        ]
      },
      {
        bank: 'Commercial Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '40%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-05',
        endDate: '2026-03-31',
        description: '40% discount on movie tickets with Commercial Bank credit cards. Valid on weekdays.',
        terms: [
          'Valid for Commercial Bank Credit Cards',
          'Valid on weekdays (Monday-Friday)',
          'Maximum 4 tickets per transaction',
          'Valid for all movie formats'
        ]
      },
      {
        bank: 'Sampath Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '30%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-01',
        endDate: '2026-02-28',
        description: '30% off with Sampath Bank debit cards. Valid on all days.',
        terms: [
          'Valid for Sampath Bank Debit Cards',
          'Valid all days',
          'Maximum 3 tickets per card',
          'Valid until February 28, 2026'
        ]
      },
      {
        bank: 'BOC',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '35%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-10',
        endDate: '2026-04-15',
        description: '35% discount on movie tickets with BOC credit cards. Special weekend offer.',
        terms: [
          'Valid for BOC Credit Cards',
          'Valid on weekends (Saturday & Sunday)',
          'Maximum 2 tickets per transaction',
          'Valid until April 15, 2026'
        ]
      }
    ]
  },
  {
    id: '7',
    brand: 'Nolimit',
    brandLogo: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    mainBanners: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'],
    verticalBanners: [
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    ],
    bank: 'HNB',
    bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    discount: '40% OFF',
    category: 'Fashion',
    expiryDate: 'Mar 31',
    location: 'All Island',
    website: 'https://www.nolimit.lk/',
    districts: ['Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Galle', 'Matara', 'Kurunegala', 'Anuradhapura', 'Jaffna', 'Batticaloa'],
    description: 'Experience fashion without limits! Get up to 40% OFF on the latest clothing, footwear, and accessories at Nolimit stores across Sri Lanka. Valid on all credit and debit cards from major banks.',
    terms: [
      'Valid for HNB, Commercial Bank, Sampath Bank, NDB Bank, and BOC cards',
      'Minimum purchase varies by bank (see offer details)',
      'Cannot be combined with other promotional offers',
      'Valid at all Nolimit stores island-wide',
      'Excludes already discounted sale items',
      'Valid until March 31, 2026'
    ],
    bankOffers: [
      {
        bank: 'HNB',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '40%',
        appliesTo: 'Both',
        startDate: '2026-02-16',
        endDate: '2026-03-31',
        description: 'Get 40% OFF on all fashion items at Nolimit with your HNB credit card! Shop the latest trends in clothing, footwear, and accessories. Valid for purchases above LKR 8,000 at all Nolimit stores and online at nolimit.lk.',
        terms: [
          'Valid for HNB Credit Cards (Visa, Mastercard, American Express)',
          'Minimum purchase: LKR 8,000',
          'Maximum discount: LKR 15,000 per transaction',
          'Valid at physical stores and online (nolimit.lk)',
          'Excludes sale items and clearance sections',
          '3-month interest-free installment available',
          'Valid until March 31, 2026'
        ]
      },
      {
        bank: 'HNB',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '35%',
        appliesTo: 'Both',
        startDate: '2026-02-16',
        endDate: '2026-03-31',
        description: 'Enjoy 35% discount at Nolimit stores with your HNB debit card. Shop the newest fashion collections both in-store and online.',
        terms: [
          'Valid for HNB Debit Cards (Visa Debit, Mastercard Debit)',
          'Minimum purchase: LKR 6,000',
          'Maximum discount: LKR 12,000 per transaction',
          'Valid at physical stores and online',
          'Excludes sale items',
          'One-time discount per day per card',
          'Valid until March 31, 2026'
        ]
      },
      {
        bank: 'Commercial Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '38%',
        appliesTo: 'Both',
        startDate: '2026-02-16',
        endDate: '2026-03-31',
        description: '38% OFF on all Nolimit purchases with Commercial Bank credit cards. Upgrade your wardrobe with the latest fashion trends at unbeatable prices.',
        terms: [
          'Valid for Commercial Bank Credit Cards',
          'Minimum purchase: LKR 10,000',
          'Maximum discount: LKR 18,000 per transaction',
          'Valid Monday to Sunday',
          'Available in-store and online',
          'Interest-free installments up to 6 months',
          'Cannot combine with other bank offers',
          'Valid until March 31, 2026'
        ]
      },
      {
        bank: 'Commercial Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '32%',
        appliesTo: 'Both',
        startDate: '2026-02-16',
        endDate: '2026-03-31',
        description: 'Get 32% discount with Commercial Bank debit cards at all Nolimit outlets. Fashion for everyone, savings for all!',
        terms: [
          'Valid for Commercial Bank Debit Cards',
          'Minimum purchase: LKR 7,500',
          'Maximum discount: LKR 14,000',
          'Valid all days',
          'Physical and online purchases',
          'Sale items excluded',
          'Valid until March 31, 2026'
        ]
      },
      {
        bank: 'Sampath Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '35%',
        appliesTo: 'Both',
        startDate: '2026-02-16',
        endDate: '2026-03-31',
        description: 'Enjoy 35% OFF with Sampath Bank credit cards at Nolimit. Special weekend bonus: Extra 5% OFF on Saturday and Sunday!',
        terms: [
          'Valid for Sampath Bank Credit Cards',
          'Minimum purchase: LKR 9,000',
          'Weekend bonus: Total 40% OFF (35% + 5% extra)',
          'Maximum discount: LKR 16,000 per transaction',
          'Valid at all locations and online',
          'Interest-free installments available',
          '2x reward points on weekends',
          'Valid until March 31, 2026'
        ]
      },
      {
        bank: 'Sampath Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '30%',
        appliesTo: 'Both',
        startDate: '2026-02-16',
        endDate: '2026-03-31',
        description: '30% discount with Sampath Bank debit cards. Weekend shoppers get an additional 5% OFF!',
        terms: [
          'Valid for Sampath Bank Debit Cards',
          'Minimum purchase: LKR 6,500',
          'Weekend special: Total 35% OFF',
          'Maximum discount: LKR 12,000',
          'Valid in-store and online',
          'Limited to 2 transactions per day',
          'Valid until March 31, 2026'
        ]
      },
      {
        bank: 'NDB Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '36%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-16',
        endDate: '2026-03-31',
        description: '36% OFF at Nolimit stores with NDB Bank credit cards. In-store exclusive offer with complimentary gift wrapping!',
        terms: [
          'Valid for NDB Bank Credit Cards',
          'Minimum purchase: LKR 8,500',
          'In-store purchases only',
          'Free gift wrapping on purchases over LKR 15,000',
          'Maximum discount: LKR 17,000',
          '6-month interest-free installment option',
          'Personal shopper assistance available',
          'Valid until March 31, 2026'
        ]
      },
      {
        bank: 'NDB Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '28%',
        appliesTo: 'Physical Store',
        startDate: '2026-02-16',
        endDate: '2026-03-31',
        description: '28% discount with NDB debit cards at Nolimit physical stores. Visit your nearest outlet today!',
        terms: [
          'Valid for NDB Bank Debit Cards',
          'Minimum purchase: LKR 5,500',
          'In-store only',
          'Maximum discount: LKR 11,000',
          'Valid all days',
          'One transaction per card per day',
          'Valid until March 31, 2026'
        ]
      },
      {
        bank: 'BOC',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '33%',
        appliesTo: 'Both',
        startDate: '2026-02-16',
        endDate: '2026-03-31',
        description: 'Bank of Ceylon credit cardholders get 33% OFF at Nolimit. Shop smart, save more with BOC!',
        terms: [
          'Valid for Bank of Ceylon Credit Cards',
          'Minimum purchase: LKR 9,500',
          'Maximum discount: LKR 15,000 per transaction',
          'Valid at physical stores and online',
          'Excludes clearance items',
          '4-month installment plan available',
          'Valid Monday to Sunday',
          'Valid until March 31, 2026'
        ]
      },
      {
        bank: 'BOC',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '27%',
        appliesTo: 'Both',
        startDate: '2026-02-16',
        endDate: '2026-03-31',
        description: '27% discount for BOC debit cardholders at Nolimit stores island-wide and online.',
        terms: [
          'Valid for Bank of Ceylon Debit Cards',
          'Minimum purchase: LKR 6,000',
          'Maximum discount: LKR 10,000',
          'Valid at all Nolimit locations',
          'Online shopping supported',
          'Cannot be combined with loyalty points',
          'Valid until March 31, 2026'
        ]
      },
      {
        bank: 'Seylan Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Credit',
        discount: '34%',
        appliesTo: 'Both',
        startDate: '2026-02-16',
        endDate: '2026-03-31',
        description: 'Seylan Bank credit card exclusive: 34% OFF on all Nolimit fashion items. Includes free delivery for online orders above LKR 12,000!',
        terms: [
          'Valid for Seylan Bank Credit Cards',
          'Minimum purchase: LKR 8,800',
          'Free delivery on online orders over LKR 12,000',
          'Maximum discount: LKR 16,500 per transaction',
          'Valid in-store and online',
          '3-month interest-free installments',
          'Priority customer service',
          'Valid until March 31, 2026'
        ]
      },
      {
        bank: 'Seylan Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        cardType: 'Debit',
        discount: '29%',
        appliesTo: 'Both',
        startDate: '2026-02-16',
        endDate: '2026-03-31',
        description: '29% OFF with Seylan Bank debit cards. Shop online with free delivery or visit any Nolimit store island-wide.',
        terms: [
          'Valid for Seylan Bank Debit Cards',
          'Minimum purchase: LKR 7,000',
          'Free delivery on online orders over LKR 10,000',
          'Maximum discount: LKR 13,000',
          'Valid at physical stores and online',
          'Weekday and weekend shopping',
          'Valid until March 31, 2026'
        ]
      }
    ]
  }
  , {
    id: '8',
    brand: 'Odel',
    brandLogo: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    mainBanners: ['https://images.unsplash.com/photo-1445205170230-053b83016050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'],
    verticalBanners: [
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    ],
    bank: 'Commercial Bank',
    bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    discount: '25% OFF',
    category: 'Fashion',
    expiryDate: 'Apr 30',
    location: 'Colombo, Kandy, Galle',
    website: 'https://odel.lk/',
    districts: ['Colombo', 'Kandy', 'Galle'],
    description: 'Get 25% off on the latest fashion trends at Odel outlets across Sri Lanka with your Commercial Bank Card.',
    terms: ['Valid for Commercial Bank Cards', 'Not valid on sale items'],
    bankOffers: [
      {
        bank: 'Commercial Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        cardType: 'Credit',
        discount: '25% OFF',
        appliesTo: 'Both',
        startDate: '2026-02-01',
        endDate: '2026-04-30',
        description: 'Get 25% off on the latest fashion trends at Odel outlets across Sri Lanka with your Commercial Bank Card.',
        terms: ['Valid for Commercial Bank Cards', 'Not valid on sale items']
      }
    ]
  },
  {
    id: '9',
    brand: 'Kelly Felder',
    brandLogo: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    mainBanners: ['https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'],
    verticalBanners: [
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    ],
    bank: 'HNB',
    bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    discount: '20% OFF',
    category: 'Fashion',
    expiryDate: 'May 15',
    location: 'Colombo',
    website: 'https://kellyfelder.com/',
    districts: ['Colombo'],
    description: 'Elevate your style with Kelly Felder! 20% savings when you pay with your HNB Credit Card.',
    terms: ['Valid for HNB Credit Cards', 'Minimum spend LKR 5000'],
    bankOffers: [
      {
        bank: 'HNB',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        cardType: 'Credit',
        discount: '20% OFF',
        appliesTo: 'Both',
        startDate: '2026-02-01',
        endDate: '2026-05-15',
        description: 'Elevate your style with Kelly Felder! 20% savings when you pay with your HNB Credit Card.',
        terms: ['Valid for HNB Credit Cards', 'Minimum spend LKR 5000']
      }
    ]
  },
  {
    id: '10',
    brand: 'Jetwing Hotels',
    brandLogo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    bank: 'NTB Bank',
    bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    discount: '30% OFF',
    category: 'Hotels',
    expiryDate: 'Jun 30',
    location: 'Islandwide',
    website: 'https://www.jetwinghotels.com/',
    districts: ['Colombo', 'Galle', 'Kandy', 'Nuwara Eliya', 'Hambantota'],
    description: 'Explore Sri Lanka with Jetwing Hotels and get 30% OFF your staycation using NTB Bank Cards.',
    terms: ['Valid for NTB Cards', 'Subject to availability'],
    bankOffers: [
      {
        bank: 'NTB Bank',
        bankLogo: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        cardType: 'Credit',
        discount: '30% OFF',
        appliesTo: 'Online Store',
        startDate: '2026-02-01',
        endDate: '2026-06-30',
        description: 'Explore Sri Lanka with Jetwing Hotels and get 30% OFF your staycation using NTB Bank Cards.',
        terms: ['Valid for NTB Cards', 'Subject to availability']
      }
    ]
  }
];

export const BANKS = [
  { id: 'hnb', name: 'HNB', fullName: 'Hatton National Bank' },
  { id: 'commercial', name: 'Commercial Bank', fullName: 'Commercial Bank of Ceylon' },
  { id: 'sampath', name: 'Sampath Bank', fullName: 'Sampath Bank PLC' },
  { id: 'boc', name: 'Bank of Ceylon', fullName: 'Bank of Ceylon' },
  { id: 'seylan', name: 'Seylan Bank', fullName: 'Seylan Bank PLC' },
  { id: 'ndb', name: 'NDB Bank', fullName: 'National Development Bank' },
  { id: 'peoples', name: "People's Bank", fullName: "People's Bank" }
];

export const CREDIT_CARDS = [
  {
    id: 'hnb-gold',
    bank: 'HNB',
    name: 'HNB Gold Credit Card',
    image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    benefits: [
      'Up to 30% discounts at partner merchants',
      'Reward points on every purchase',
      'Travel insurance coverage',
      'Interest-free installments up to 12 months'
    ],
    annualFee: 'LKR 2,500'
  },
  {
    id: 'commercial-platinum',
    bank: 'Commercial Bank',
    name: 'Commercial Platinum Card',
    image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    benefits: [
      'Airport lounge access',
      '25% off at luxury hotels',
      'Exclusive dining privileges',
      'Concierge services'
    ],
    annualFee: 'LKR 5,000'
  },
  {
    id: 'sampath-visa',
    bank: 'Sampath Bank',
    name: 'Sampath Visa Signature',
    image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    benefits: [
      'Cashback on fuel purchases',
      'Dining rewards program',
      'Travel and accident insurance',
      'Flexible payment plans'
    ],
    annualFee: 'LKR 3,000'
  }
];
