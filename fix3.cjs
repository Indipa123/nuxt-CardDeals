const fs = require('fs');
let code = fs.readFileSync('app/utils/mockData.ts', 'utf8');

const newShops = `  ,{
    id: '8',
    brand: 'Odel',
    brandLogo: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
    bankOffers: []
  },
  {
    id: '9',
    brand: 'Kelly Felder',
    brandLogo: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
    bankOffers: []
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
    bankOffers: []
  }`;

if (!code.includes('Odel')) {
    let banksIdx = code.indexOf('export const BANKS = [');
    let beforeBanks = code.substring(0, banksIdx);
    let afterBanks = code.substring(banksIdx);

    let endBracket = beforeBanks.lastIndexOf('];');
    if (endBracket !== -1) {
        let finalCode = beforeBanks.substring(0, endBracket) + newShops + '\n];\n\n' + afterBanks;
        fs.writeFileSync('app/utils/mockData.ts', finalCode, 'utf8');
    }
}
