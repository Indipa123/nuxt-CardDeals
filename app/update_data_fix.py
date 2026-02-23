import re

with open('e:/DTL/nuxt-app/app/utils/mockData.ts', 'r', encoding='utf-8') as f:
    code = f.read()

# The offers were incorrectly added to CATEGORIES. Let's fix it by completely rewriting those parts from a clean slate.
# Or just replacing the messed up CATEGORIES end.
# I will find the first occurrence of ",{" and Odel and remove it up to the next ] ;

new_offers = """  },{
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
  }
"""

if "Jetwing Hotels" in code:
    # Safely remove from CATEGORIES buffer if it's there
    # The string new_offers was injected.
    # It starts with "  ,{" and ends with "];" replaced.
    # Let's just find where it starts in CATEGORIES and slice it out.
    import re
    # Match the injected chunk (from the comma before id 8 to the end of the injected array)
    code = re.sub(r',\s*\{\s*id:\s*\'8\',\s*brand:\s*\'Odel\'.*?Jetwing Hotels.*?bankOffers:\s*\[\]\s*\}\s*\];', '\n];', code, flags=re.DOTALL)
    
    # Now append cleanly to MOCK_OFFERS
    # The end of MOCK_OFFERS is before `export const BANKS = [`
    code = code.replace("export const BANKS = [", new_offers + "\n];\n\nexport const BANKS = [")

with open('e:/DTL/nuxt-app/app/utils/mockData.ts', 'w', encoding='utf-8') as f:
    f.write(code)
