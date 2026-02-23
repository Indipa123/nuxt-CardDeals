<script setup lang="ts">
import { ref, computed } from 'vue'
import { CreditCard, Check, ExternalLink, Gift, Shield, Percent, TrendingUp } from 'lucide-vue-next'
import { BANKS, CREDIT_CARDS } from '~/utils/mockData'

const selectedBank = ref<string>('')

const bankCards = computed(() => {
  return selectedBank.value
    ? CREDIT_CARDS.filter(card => card.bank === BANKS.find(b => b.id === selectedBank.value)?.name)
    : CREDIT_CARDS
})

const handleApplyNow = (cardName: string, bankName: string) => {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScqLFB12qAqU-59YBBUzlHS5R-VPpAZFR9sMUouA6SVNkG2Rg/viewform?usp=sf_link'
  window.open(googleFormUrl, '_blank', 'noopener,noreferrer')
  console.log(`Application initiated for ${cardName} from ${bankName}`)
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <div class="inline-block bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4">
          <p class="text-xs sm:text-sm font-semibold">Start Saving Today</p>
        </div>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Apply for a Credit Card</h1>
        <p class="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
          Choose from Sri Lanka's top credit cards and unlock exclusive discounts at thousands of merchants
        </p>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="max-w-7xl mx-auto px-4 mt-8 sm:mt-12">
      <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Why Get a Credit Card?</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div class="bg-white rounded-xl shadow-md p-4 sm:p-6 text-center">
          <div class="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Percent class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 class="font-bold text-base sm:text-lg text-gray-900 mb-2">Exclusive Discounts</h3>
          <p class="text-gray-600 text-xs sm:text-sm">Save up to 50% at restaurants, shops, and more</p>
        </div>

        <div class="bg-white rounded-xl shadow-md p-4 sm:p-6 text-center">
          <div class="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Gift class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 class="font-bold text-base sm:text-lg text-gray-900 mb-2">Reward Points</h3>
          <p class="text-gray-600 text-xs sm:text-sm">Earn points on every purchase and redeem rewards</p>
        </div>

        <div class="bg-white rounded-xl shadow-md p-4 sm:p-6 text-center">
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <Shield class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 class="font-bold text-base sm:text-lg text-gray-900 mb-2">Travel Insurance</h3>
          <p class="text-gray-600 text-xs sm:text-sm">Complimentary travel and accident insurance coverage</p>
        </div>

        <div class="bg-white rounded-xl shadow-md p-4 sm:p-6 text-center">
          <div class="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <TrendingUp class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 class="font-bold text-base sm:text-lg text-gray-900 mb-2">Flexible Payments</h3>
          <p class="text-gray-600 text-xs sm:text-sm">Interest-free installment plans available</p>
        </div>
      </div>
    </section>

    <!-- Bank Selection -->
    <section class="max-w-7xl mx-auto px-4 mt-8 sm:mt-12">
      <div class="bg-white rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-6">
        <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Select Your Bank</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          <button
            @click="selectedBank = ''"
            :class="['p-3 sm:p-4 border-2 rounded-xl transition-all', selectedBank === '' ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 hover:border-gray-300']"
          >
            <p class="font-semibold text-xs sm:text-sm text-gray-900">All Banks</p>
          </button>
          <button
            v-for="bank in BANKS"
            :key="bank.id"
            @click="selectedBank = bank.id"
            :class="['p-3 sm:p-4 border-2 rounded-xl transition-all', selectedBank === bank.id ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 hover:border-gray-300']"
          >
            <div class="bg-gradient-to-br from-blue-600 to-blue-800 w-10 h-10 sm:w-12 sm:h-12 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span class="text-white text-xs font-bold">{{ bank.name.substring(0, 2).toUpperCase() }}</span>
            </div>
            <p class="font-semibold text-xs text-gray-900 line-clamp-2">{{ bank.name }}</p>
          </button>
        </div>
      </div>
    </section>

    <!-- Credit Cards Grid -->
    <section class="max-w-7xl mx-auto px-4 mt-8 sm:mt-12 mb-8 sm:mb-12">
      <h2 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
        {{ selectedBank ? `${BANKS.find(b => b.id === selectedBank)?.name} Credit Cards` : 'All Credit Cards' }}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div v-for="card in bankCards" :key="card.id" class="relative bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all flex flex-col">
          <!-- Card Image -->
          <div class="relative h-40 sm:h-48 bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6">
            <img 
              :src="card.image"
              :alt="card.name"
              class="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div class="relative">
              <div class="flex items-center gap-2 mb-3 sm:mb-4">
                <CreditCard class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                <span class="text-white text-xs font-semibold">{{ card.bank }}</span>
              </div>
              <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-white line-clamp-2">{{ card.name }}</h3>
            </div>
            <div class="absolute bottom-3 sm:bottom-4 right-3 sm:right-4">
              <div class="bg-white/20 backdrop-blur-sm px-2.5 py-1 sm:px-3 sm:py-1 rounded-full">
                <p class="text-white text-xs font-semibold">Premium Card</p>
              </div>
            </div>
          </div>

          <!-- Card Details -->
          <div class="p-4 sm:p-6 flex-1 flex flex-col">
            <div class="mb-4">
              <p class="text-xs sm:text-sm text-gray-600 mb-1">Annual Fee</p>
              <p class="text-lg sm:text-xl font-bold text-gray-900">{{ card.annualFee }}</p>
            </div>

            <div class="mb-4 sm:mb-6">
              <p class="font-semibold text-sm sm:text-base text-gray-900 mb-3">Key Benefits</p>
              <ul class="space-y-2">
                <li v-for="(benefit, index) in card.benefits.slice(0, 3)" :key="index" class="flex items-start gap-2 text-xs sm:text-sm">
                  <Check class="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span class="text-gray-700">{{ benefit }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-auto pt-4">
                <button 
                  @click="handleApplyNow(card.name, card.bank)"
                  class="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md font-semibold text-sm sm:text-base"
                >
                  <ExternalLink class="w-4 h-4 sm:w-5 sm:h-5" />
                  Apply Now
                </button>

                <p class="text-xs text-gray-500 text-center mt-3">
                  Opens application form in new window
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-green-600 to-green-800 py-12 sm:py-16">
      <div class="max-w-7xl mx-auto px-4 text-center text-white">
        <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Need Help Choosing?</h2>
        <p class="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Compare cards side-by-side and find the perfect match for your spending habits
        </p>
        <button class="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg text-base sm:text-lg">
          Compare All Cards
        </button>
      </div>
    </section>
  </div>
</template>
