<script setup lang="ts">
import { TrendingUp, Gift, Percent, Wallet } from 'lucide-vue-next'

const cashOffers = [
  {
    id: 1,
    bank: 'HNB',
    bankLogo: '🏦',
    title: 'Up to 5% Cashback on Fashion & Apparel',
    description: 'Get instant cashback on all online purchases made with HNB Credit Cards',
    cashback: '5%',
    maxCashback: 'LKR 5,000',
    cardType: 'Credit Card',
    validUntil: '31 Dec 2026',
    terms: 'Minimum transaction LKR 10,000. Valid for Visa & Mastercard only.',
    category: 'fashion',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    id: 2,
    bank: 'Commercial Bank',
    bankLogo: '🏦',
    title: '10% Cashback on Fuel Purchases',
    description: 'Fill up and save! Get 10% cashback on all fuel purchases nationwide',
    cashback: '10%',
    maxCashback: 'LKR 3,000',
    cardType: 'Credit Card',
    validUntil: '28 Feb 2026',
    terms: 'Valid at all CEYPETCO and IOC stations. Maximum 3 transactions per month.',
    category: 'fuel',
    bgColor: 'from-green-50 to-green-100'
  },
  {
    id: 3,
    bank: 'Sampath Bank',
    bankLogo: '🏦',
    title: '15% Cashback on Supermarket Spending',
    description: 'Save more on groceries with our exclusive cashback offer',
    cashback: '15%',
    maxCashback: 'LKR 4,000',
    cardType: 'Debit Card',
    validUntil: '30 Jun 2026',
    terms: 'Valid at Cargills, Keells, and Arpico supermarkets. Minimum spend LKR 5,000.',
    category: 'supermarket',
    bgColor: 'from-purple-50 to-purple-100'
  },
  {
    id: 4,
    bank: 'NDB Bank',
    bankLogo: '🏦',
    title: '8% Cashback on Dining',
    description: 'Enjoy delicious meals and earn cashback at over 500 restaurants',
    cashback: '8%',
    maxCashback: 'LKR 2,500',
    cardType: 'Credit Card',
    validUntil: '31 Mar 2026',
    terms: 'Valid at participating restaurants. Not applicable for delivery orders.',
    category: 'dining',
    bgColor: 'from-orange-50 to-orange-100'
  },
  {
    id: 5,
    bank: 'Bank of Ceylon',
    bankLogo: '🏦',
    title: '12% Cashback on Utility Bill Payments',
    description: 'Pay your bills and get rewarded with instant cashback',
    cashback: '12%',
    maxCashback: 'LKR 1,500',
    cardType: 'Credit Card',
    validUntil: '31 Dec 2026',
    terms: 'Valid for electricity, water, and telephone bill payments through BOC online banking.',
    category: 'utilities',
    bgColor: 'from-yellow-50 to-yellow-100'
  },
  {
    id: 6,
    bank: 'Seylan Bank',
    bankLogo: '🏦',
    title: '20% Cashback on Fashion & Apparel',
    description: 'Upgrade your wardrobe and save with our fashion cashback offer',
    cashback: '20%',
    maxCashback: 'LKR 6,000',
    cardType: 'Credit Card',
    validUntil: '15 Apr 2026',
    terms: 'Valid at Cotton Collection, Odel, and Fashion Bug outlets. Minimum purchase LKR 15,000.',
    category: 'fashion',
    bgColor: 'from-pink-50 to-pink-100'
  },
  {
    id: 7,
    bank: "People's Bank",
    bankLogo: '🏦',
    title: '6% Cashback on Healthcare & Pharmacy',
    description: 'Take care of your health and your wallet with our healthcare cashback',
    cashback: '6%',
    maxCashback: 'LKR 2,000',
    cardType: 'Debit Card',
    validUntil: '30 Sep 2026',
    terms: 'Valid at Osu Sala, Healthguard, and hospital pharmacies nationwide.',
    category: 'healthcare',
    bgColor: 'from-red-50 to-red-100'
  },
  {
    id: 8,
    bank: 'HNB',
    bankLogo: '🏦',
    title: '18% Cashback on Travel Bookings',
    description: 'Book flights, hotels, and tours with amazing cashback rewards',
    cashback: '18%',
    maxCashback: 'LKR 10,000',
    cardType: 'Credit Card',
    validUntil: '31 Aug 2026',
    terms: 'Valid on bookings made through Booking.com, Agoda, and Expedia using HNB cards.',
    category: 'travel',
    bgColor: 'from-indigo-50 to-indigo-100'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
            <Wallet class="w-8 h-8" />
          </div>
          <h1 class="text-3xl md:text-5xl font-bold">Cash Offers</h1>
        </div>
        <p class="text-center text-green-50 text-lg max-w-2xl mx-auto">
          Get instant cashback on your everyday purchases. Discover the best cash offers from all major banks in Sri Lanka.
        </p>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <TrendingUp class="w-6 h-6 mx-auto mb-2" />
            <div class="text-2xl font-bold">5-20%</div>
            <div class="text-sm text-green-100">Cashback Range</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Gift class="w-6 h-6 mx-auto mb-2" />
            <div class="text-2xl font-bold">8</div>
            <div class="text-sm text-green-100">Active Offers</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Percent class="w-6 h-6 mx-auto mb-2" />
            <div class="text-2xl font-bold">LKR 10K</div>
            <div class="text-sm text-green-100">Max Cashback</div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <Wallet class="w-6 h-6 mx-auto mb-2" />
            <div class="text-2xl font-bold">7</div>
            <div class="text-sm text-green-100">Partner Banks</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cash Offers Grid -->
    <section class="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="offer in cashOffers"
          :key="offer.id"
          class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
        >
          <!-- Cashback Badge -->
          <div :class="`bg-gradient-to-r ${offer.bgColor} p-6 relative`">
            <div class="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-sm">
              <span class="text-xs font-medium text-gray-600">{{ offer.cardType }}</span>
            </div>
            <div class="text-center pt-4">
              <div class="text-5xl font-bold text-gray-900 mb-1">{{ offer.cashback }}</div>
              <div class="text-sm font-medium text-gray-700">CASHBACK</div>
              <div class="text-xs text-gray-600 mt-1">Max: {{ offer.maxCashback }}</div>
            </div>
          </div>

          <!-- Offer Details -->
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-2xl">{{ offer.bankLogo }}</span>
              <span class="font-semibold text-gray-900">{{ offer.bank }}</span>
            </div>

            <h3 class="font-bold text-lg text-gray-900 mb-2">{{ offer.title }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ offer.description }}</p>

            <!-- Valid Until -->
            <div class="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
              <span class="text-xs text-gray-500">Valid Until</span>
              <span class="text-sm font-semibold text-gray-900">{{ offer.validUntil }}</span>
            </div>

            <!-- Terms -->
            <div class="bg-blue-50 rounded-lg p-3 mb-4">
              <div class="text-xs font-semibold text-blue-900 mb-1">Terms &amp; Conditions</div>
              <div class="text-xs text-blue-700">{{ offer.terms }}</div>
            </div>

            <!-- Action Button -->
            <button class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-sm">
              View Full Details
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 md:py-16 mt-8">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Want to Maximize Your Cashback?</h2>
        <p class="text-blue-100 text-lg mb-8">
          Apply for a new credit card and start earning cashback on every purchase
        </p>
        <NuxtLink
          to="/apply-card"
          class="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
        >
          Apply for Credit Card
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
