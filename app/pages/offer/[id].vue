<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronRight, Share2, ExternalLink, CreditCard } from 'lucide-vue-next'
import { MOCK_OFFERS } from '~/utils/mockData'

const route = useRoute()
const offerId = route.params.id as string

const offer = computed(() => MOCK_OFFERS.find(o => o.id === offerId))

const selectedBankOffer = ref<number>(0)
const currentMainBanner = ref<number>(0)

let bannerInterval: any

onMounted(() => {
  bannerInterval = setInterval(() => {
    currentMainBanner.value = (currentMainBanner.value + 1) % 3
  }, 5000)
})

onUnmounted(() => {
  clearInterval(bannerInterval)
})

const bankOffers = computed(() => {
  if (!offer.value) return []
  return (offer.value as any).bankOffers || [{
    bank: offer.value.bank,
    bankLogo: offer.value.bankLogo,
    cardType: 'Credit',
    discount: offer.value.discount,
    startDate: '2026-02-02',
    endDate: offer.value.expiryDate ? '2026-' + (offer.value.expiryDate.includes('Feb') ? '02-28' : offer.value.expiryDate.includes('Mar') ? '03-31' : '04-30') : '2026-12-31',
    description: offer.value.description,
    terms: (offer.value as any).terms || []
  }]
})

const groupedBankOffers = computed(() => {
  if (!bankOffers.value.length) return []
  const grouped = bankOffers.value.reduce((acc: Record<string, any>, o: any) => {
    const key = o.bank || 'Other'
    if (!acc[key]) acc[key] = { bank: key, bankLogo: o.bankLogo, offers: [] }
    acc[key].offers.push(o)
    return acc
  }, {})

  return Object.values(grouped).map((b: any) => {
    const credit = b.offers.find((x: any) => x.cardType === 'Credit') || null
    const debit = b.offers.find((x: any) => x.cardType === 'Debit') || null
    const appliesSet = Array.from(new Set(b.offers.map((x: any) => x.appliesTo || 'Both')))
    const startDates = b.offers.map((x: any) => new Date(x.startDate).getTime())
    const endDates = b.offers.map((x: any) => new Date(x.endDate).getTime())
    const startDate = startDates.length ? new Date(Math.min(...startDates)) : new Date()
    const endDate = endDates.length ? new Date(Math.max(...endDates)) : new Date()
    return {
      ...b,
      credit,
      debit,
      appliesTo: appliesSet.length === 1 ? appliesSet[0] : 'Varies',
      startDate,
      endDate,
    }
  }).sort((a: any, b: any) => a.bank.localeCompare(b.bank))
})

const handleShare = (platform: string) => {
  if (!offer.value) return
  const url = window.location.href
  const text = `Check out this amazing offer at ${offer.value.brand}!`

  if (platform === 'whatsapp') {
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank')
  } else if (platform === 'facebook') {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
  }
}

const handleApplyCard = () => {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScqLFB12qAqU-59YBBUzlHS5R-VPpAZFR9sMUouA6SVNkG2Rg/viewform?usp=sf_link'
  window.open(googleFormUrl, '_blank', 'noopener,noreferrer')
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
</script>

<template>
  <div>
    <div v-if="!offer" class="max-w-7xl mx-auto px-4 py-12 text-center">
      <h2 class="text-2xl font-bold text-gray-900">Offer not found</h2>
      <NuxtLink to="/" class="text-blue-600 hover:underline mt-4 inline-block">
        Return to home
      </NuxtLink>
    </div>

    <div v-else>
      <!-- Breadcrumb -->
      <section class="max-w-7xl mx-auto px-4 mt-6">
        <div class="flex items-center gap-2 text-sm text-gray-600">
          <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
          <ChevronRight class="w-4 h-4" />
          <NuxtLink :to="`/category/${offer.category.toLowerCase()}`" class="hover:text-blue-600">
            {{ offer.category }}
          </NuxtLink>
          <ChevronRight class="w-4 h-4" />
          <span class="text-gray-900 font-medium">{{ offer.brand }}</span>
        </div>
      </section>

      <!-- Company Banner -->
      <section class="max-w-7xl mx-auto px-4 mt-4 sm:mt-6">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="relative h-48 sm:h-64 md:h-80">
            <!-- Banner 1 - Standard -->
            <div :class="['absolute inset-0 transition-opacity duration-700', currentMainBanner === 0 ? 'opacity-100' : 'opacity-0']">
              <img
                :src="(offer as any).mainBanners ? (offer as any).mainBanners[0] : offer.brandLogo"
                :alt="offer.brand"
                class="w-full h-full object-cover"
              />
              <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <span class="inline-block px-3 py-1 bg-blue-500 text-white text-xs sm:text-sm font-medium rounded-full mb-2 sm:mb-3 shadow-sm">
                  {{ offer.category }}
                </span>
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-md">{{ offer.brand }}</h1>
                <p class="text-white/95 text-sm sm:text-base md:text-lg max-w-2xl drop-shadow-md">{{ offer.location }}</p>
              </div>
            </div>

            <!-- Banner 2 - Special Offer Highlight -->
            <div :class="['absolute inset-0 transition-opacity duration-700', currentMainBanner === 1 ? 'opacity-100' : 'opacity-0']">
              <img
                :src="(offer as any).mainBanners ? (offer as any).mainBanners[0] : offer.brandLogo"
                :alt="offer.brand"
                class="w-full h-full object-cover"
              />
              <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div class="bg-white/20 backdrop-blur-sm shadow-sm px-3 py-1.5 rounded-full inline-block mb-2 sm:mb-3">
                  <span class="text-white text-xs sm:text-sm font-bold">🎉 Special Offer</span>
                </div>
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-md">{{ offer.brand }}</h1>
                <p class="text-white/95 text-sm sm:text-base md:text-lg max-w-2xl drop-shadow-md">Multiple banks, Multiple benefits • {{ offer.location }}</p>
              </div>
            </div>

            <!-- Banner 3 - Limited Time -->
            <div :class="['absolute inset-0 transition-opacity duration-700', currentMainBanner === 2 ? 'opacity-100' : 'opacity-0']">
              <img
                :src="(offer as any).mainBanners ? (offer as any).mainBanners[0] : offer.brandLogo"
                :alt="offer.brand"
                class="w-full h-full object-cover"
              />
              <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-green-900/80 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <span class="inline-block px-3 py-1 bg-red-500 text-white shadow-sm text-xs sm:text-sm font-bold rounded-full mb-2 sm:mb-3 animate-pulse">
                  ⏰ Limited Time Offers
                </span>
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-md">Visit {{ offer.brand }} Today!</h1>
                <p class="text-white/95 text-sm sm:text-base md:text-lg max-w-2xl drop-shadow-md">{{ offer.category }} • {{ offer.location }}</p>
              </div>
            </div>

            <!-- Banner Navigation Indicators -->
            <div class="absolute bottom-4 right-4 sm:right-6 md:right-8 flex gap-2 z-20">
              <button
                v-for="(_, index) in Array(3).fill(0)"
                :key="index"
                @click="currentMainBanner = index"
                :class="['h-2 rounded-full transition-all', index === currentMainBanner ? 'w-8 bg-white' : 'w-2 bg-white/50']"
                :aria-label="`Go to banner ${index + 1}`"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section class="max-w-7xl mx-auto px-4 mt-6 sm:mt-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Left Column - Bank Offers Table -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Bank Offers Table -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
              <div class="p-3 bg-gradient-to-r from-blue-600 to-blue-700">
                <h2 class="text-base font-bold text-white flex items-center gap-2">
                  <CreditCard class="w-4 h-4" />
                  Available Bank Offers
                </h2>
                <p class="text-blue-100 text-xs mt-0.5">
                  Click a bank to view complete offer details
                </p>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead class="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Bank</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Credit</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Debit</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Applies To</th>
                      <th class="px-3 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Period</th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-gray-200">
                    <tr
                      v-for="(bank, index) in groupedBankOffers"
                      :key="index"
                      @click="selectedBankOffer = index"
                      :class="['cursor-pointer transition-all hover:bg-blue-50', selectedBankOffer === index ? 'bg-blue-50 border-l-4 border-blue-600' : '']"
                    >
                      <td class="px-3 py-2.5">
                        <div class="flex items-center gap-2">
                          <img
                            :src="bank.bankLogo"
                            :alt="bank.bank"
                            class="w-8 h-8 object-contain bg-white rounded-lg border border-gray-200 p-1"
                          />
                          <span class="font-semibold text-gray-900 text-sm">{{ bank.bank }}</span>
                        </div>
                      </td>

                      <td class="px-3 py-2.5">
                        <span v-if="bank.credit" class="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
                          {{ bank.credit.discount }}
                        </span>
                        <span v-else class="text-gray-400 text-xs">—</span>
                      </td>

                      <td class="px-3 py-2.5">
                        <span v-if="bank.debit" class="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                          {{ bank.debit.discount }}
                        </span>
                        <span v-else class="text-gray-400 text-xs">—</span>
                      </td>

                      <td class="px-3 py-2.5">
                        <span class="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          {{ bank.appliesTo }}
                        </span>
                      </td>

                      <td class="px-3 py-2.5">
                        <span class="text-xs text-gray-600 whitespace-nowrap">
                          {{ formatDate(bank.startDate) }} - {{ formatDate(bank.endDate) }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Selected Bank Offer Details -->
              <div v-if="groupedBankOffers[selectedBankOffer]" class="p-4 border-t-2 border-gray-200 bg-gray-50">
                <div v-for="(offerItem, idx) in groupedBankOffers[selectedBankOffer].offers" :key="idx" class="mb-6 last:mb-0">
                  <div class="flex items-center gap-3 mb-3">
                    <img
                      :src="offerItem.bankLogo"
                      :alt="offerItem.bank"
                      class="w-12 h-12 object-contain bg-white rounded-lg border-2 border-blue-200 p-2 shadow-sm"
                    />
                    <div>
                      <h3 class="text-lg font-bold text-gray-900">
                        {{ offerItem.bank }} – {{ offerItem.cardType }} Card
                      </h3>
                      <p class="text-xs text-gray-600">
                        {{ offerItem.discount }} OFF
                      </p>
                    </div>
                  </div>

                  <div class="mb-3">
                    <h4 class="text-sm font-bold text-gray-900 mb-1">Offer Details</h4>
                    <p class="text-gray-700 text-sm">{{ offerItem.description }}</p>
                  </div>

                  <div>
                    <h4 class="text-sm font-bold text-gray-900 mb-1">Terms &amp; Conditions</h4>
                    <ul class="space-y-1">
                      <li v-for="(term, tIndex) in offerItem.terms" :key="tIndex" class="text-xs text-gray-700">
                        • {{ term }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Visit Website & Apply Buttons Card -->
              <div class="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <a
                  v-if="(offer as any)?.website"
                  :href="(offer as any).website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all shadow-md font-bold text-base mb-3"
                >
                  <ExternalLink class="w-5 h-5" />
                  Visit Website
                </a>
                <button
                  @click="handleApplyCard"
                  class="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md font-bold text-base"
                >
                  <ExternalLink class="w-5 h-5" />
                  Apply for Card
                </button>
              </div>

              <!-- Share Section Card -->
              <div class="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <p class="text-sm font-bold text-gray-900 mb-3">Share this offer</p>
                <div class="flex gap-2">
                  <button
                    @click="handleShare('whatsapp')"
                    class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors font-semibold"
                  >
                    <Share2 class="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    @click="handleShare('facebook')"
                    class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                  >
                    <Share2 class="w-4 h-4" />
                    <span>Facebook</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Info Box -->
            <div class="bg-blue-50 border border-blue-200 rounded-xl shadow-sm p-4">
              <p class="text-xs text-blue-800">
                <strong>💡 Tip:</strong> Click on any bank row in the table to view detailed terms and conditions for that specific offer.
              </p>
            </div>
          </div>

          <!-- Right Sidebar - Company Banners Only -->
          <div class="lg:col-span-1">
            <div class="space-y-4 lg:sticky lg:top-24">
              <!-- Vertical Company Banner 1 -->
              <div class="bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div class="h-56 sm:h-64 relative">
                  <img
                    :src="(offer as any).verticalBanners ? (offer as any).verticalBanners[0] : offer.brandLogo"
                    :alt="offer.brand"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div class="p-4 sm:p-6 flex-1">
                  <h3 class="text-xl font-bold text-white mb-2">{{ offer.brand }}</h3>
                  <p class="text-white/90 text-sm mb-4">Experience exclusive benefits</p>
                  <div class="space-y-2">
                    <div class="flex items-center gap-2 text-white/90 text-sm">
                      <span>📍</span>
                      <span>{{ offer.location }}</span>
                    </div>
                    <div class="flex items-center gap-2 text-white/90 text-sm">
                      <span>🏷️</span>
                      <span>{{ offer.category }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Vertical Company Banner 2 -->
              <div class="bg-gradient-to-b from-purple-600 via-purple-700 to-purple-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div class="h-56 sm:h-64 relative">
                  <img
                    :src="(offer as any).verticalBanners ? (offer as any).verticalBanners[1] : offer.brandLogo"
                    :alt="offer.brand"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div class="p-4 sm:p-6 flex-1">
                  <div class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block mb-3">
                    <span class="text-white text-xs font-semibold">Special Offer</span>
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">Save More at {{ offer.brand }}</h3>
                  <p class="text-white/90 text-sm">Multiple banks, multiple benefits</p>
                </div>
              </div>

              <!-- Vertical Company Banner 3 -->
              <div class="bg-gradient-to-b from-green-600 via-green-700 to-green-800 rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div class="h-56 sm:h-64 relative">
                  <img
                    :src="(offer as any).verticalBanners ? (offer as any).verticalBanners[2] : offer.brandLogo"
                    :alt="offer.brand"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div class="p-4 sm:p-6 flex-1">
                  <h3 class="text-2xl font-bold text-white mb-3">Visit Us Today!</h3>
                  <p class="text-white/90 text-sm mb-4">Discover amazing deals with your favorite bank cards</p>
                  <div class="inline-block bg-white text-green-800 px-4 py-2 rounded-lg font-bold text-sm">
                    🎉 Limited Time Offers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
