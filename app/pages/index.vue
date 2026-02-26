<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { Filter, Percent, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { CATEGORIES, MOCK_OFFERS } from '~/utils/mockData'
import localBanner1 from '~/assets/img/Gemini_Generated_Image_b9dmz7b9dmz7b9dm.png'
import localBanner2 from '~/assets/img/Gemini_Generated_Image_arkc2garkc2garkc.png'
import bannerBarista from '~/assets/img/barista.png'
import bannerCinnamon from '~/assets/img/cinnamon.png'
import bannerScope from '~/assets/img/scope.png'

const selectedBanks = ref<string[]>([])
const selectedCategories = ref<string[]>([])
const popupCardTypes = ref<string[]>([])
const selectedCardTypes = ref<string[]>([])
const selectedDistricts = ref<string[]>([])

const currentSlide = ref(0)
const currentHighestOffersSlide = ref(0)
const currentMidBannerSlide = ref(0)

const searchQuery = useState('searchQuery', () => '')

const getDiscountValue = (discount?: string) => {
  if (!discount) return 0
  const match = discount.match(/(\d+)%/)
  return match && match[1] ? parseInt(match[1]) : 0
}

const filteredOffers = computed(() => {
  return MOCK_OFFERS.filter(offer => {
    const offerDistricts = (offer as any).districts || []
    if (selectedDistricts.value.length > 0) {
      const hasMatchingDistrict = selectedDistricts.value.some(district =>
        offerDistricts.includes(district)
      )
      if (!hasMatchingDistrict) return false
    }

    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase()
      const matchesSearch =
        offer.brand.toLowerCase().includes(query) ||
        offer.description.toLowerCase().includes(query) ||
        offer.category.toLowerCase().includes(query) ||
        offer.bank.toLowerCase().includes(query)

      if (!matchesSearch) return false
    }

    if (selectedBanks.value.length > 0 && !selectedBanks.value.includes(offer.bank.toLowerCase().replace(/\s+/g, ''))) {
      return false
    }

    if (selectedCategories.value.length > 0 && !selectedCategories.value.includes(offer.category.toLowerCase())) {
      return false
    }

    return true
  })
})

const allHighestOffers = computed(() => {
  return [...filteredOffers.value]
    .sort((a, b) => getDiscountValue(b.discount) - getDiscountValue(a.discount))
    .slice(0, 9)
})

const offersPerSlide = 3
const totalSlides = computed(() => Math.max(1, Math.ceil(allHighestOffers.value.length / offersPerSlide)))

watch(totalSlides, (newTotal) => {
  if (currentHighestOffersSlide.value >= newTotal) {
    currentHighestOffersSlide.value = Math.max(0, newTotal - 1)
  }
})

const highestOffers = computed(() => {
  const safeSlideIndex = Math.min(currentHighestOffersSlide.value, Math.max(0, totalSlides.value - 1))
  
  return allHighestOffers.value.slice(
    safeSlideIndex * offersPerSlide,
    (safeSlideIndex + 1) * offersPerSlide
  )
})

const bannerSlides = [
  { title: 'Mega Flash Sale', subtitle: 'Save up to 30% on fashion, electronics & more', description: 'Limited time offer • Valid until Feb 28', image: localBanner1, discountLabel: '30% OFF' },
  { title: 'Dine & Save Every Weekend', subtitle: 'Exclusive discounts at premium restaurants', description: 'Buy 1 Get 1 Free • 30% cashback offers', image: localBanner2, discountLabel: '30% OFF' },
  { title: 'Barista Specials', subtitle: 'Coffee & cafe deals', description: 'Discounts on coffee and bakery items', image: bannerBarista, discountLabel: '30% OFF' },
  { title: 'Cinnamon Market', subtitle: 'Spices & gourmet foods', description: 'Special offers on gourmet products', image: bannerCinnamon, discountLabel: '20% OFF' },
  { title: 'Scope Collection', subtitle: 'Handpicked collections', description: 'Curated products with exclusive savings', image: bannerScope, discountLabel: '10% OFF' }
]

const midBannerSlides = [
  { title: 'Exclusive Bank Deals', image: localBanner1 },
  { title: 'Weekend Shopping Spree', image: localBanner2 },
  { title: 'Tech Gadgets Sale', image: bannerBarista },
  { title: 'Summer Getaways', image: bannerCinnamon },
  { title: 'Fine Dining Experiences', image: bannerScope }
]

const handleBankToggle = (bankId: string) => {
  if (selectedBanks.value.includes(bankId)) {
    selectedBanks.value = selectedBanks.value.filter(id => id !== bankId)
  } else {
    selectedBanks.value.push(bankId)
  }
}

const toggleCategory = (categoryId: string) => {
  if (selectedCategories.value.includes(categoryId)) {
    selectedCategories.value = selectedCategories.value.filter(id => id !== categoryId)
  } else {
    selectedCategories.value.push(categoryId)
  }
}

const toggleCardType = (cardTypeId: string) => {
  if (selectedCardTypes.value.includes(cardTypeId)) {
    selectedCardTypes.value = selectedCardTypes.value.filter(id => id !== cardTypeId)
  } else {
    selectedCardTypes.value.push(cardTypeId)
  }
}

const toggleDistrict = (districtId: string) => {
  if (selectedDistricts.value.includes(districtId)) {
    selectedDistricts.value = selectedDistricts.value.filter(id => id !== districtId)
  } else {
    selectedDistricts.value.push(districtId)
  }
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % bannerSlides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + bannerSlides.length) % bannerSlides.length
}

const clearAllFilters = () => {
  selectedBanks.value = []
  selectedCategories.value = []
  selectedCardTypes.value = []
  selectedDistricts.value = []
}

const hasActiveFilters = computed(() => {
  return selectedBanks.value.length > 0 || selectedCategories.value.length > 0 || selectedCardTypes.value.length > 0 || selectedDistricts.value.length > 0
})

const categoryScrollRef = ref<HTMLElement | null>(null)
let autoRotateMainBannerObj: any
let autoRotateCategoryObj: any
let autoRotateHighestOffersObj: any
let autoRotateMidBannerObj: any

onMounted(() => {
  autoRotateMainBannerObj = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % bannerSlides.length
  }, 5000)

  autoRotateCategoryObj = setInterval(() => {
    if (categoryScrollRef.value) {
      const container = categoryScrollRef.value
      const cardWidth = 288 
      const maxScroll = container.scrollWidth - container.clientWidth
      const currentScroll = container.scrollLeft
      let newPosition = currentScroll + cardWidth
      if (newPosition >= maxScroll) newPosition = 0
      container.scrollTo({ left: newPosition, behavior: 'smooth' })
    }
  }, 3000)

  autoRotateHighestOffersObj = setInterval(() => {
    if (allHighestOffers.value.length > 3) {
      currentHighestOffersSlide.value = (currentHighestOffersSlide.value + 1) % totalSlides.value
    }
  }, 4000)
  
  autoRotateMidBannerObj = setInterval(() => {
    currentMidBannerSlide.value = (currentMidBannerSlide.value + 1) % midBannerSlides.length
  }, 6000)
})

onUnmounted(() => {
  clearInterval(autoRotateMainBannerObj)
  clearInterval(autoRotateCategoryObj)
  clearInterval(autoRotateHighestOffersObj)
  clearInterval(autoRotateMidBannerObj)
})

const banksOffered = [
  { id: 'boc', name: 'Bank of Ceylon' },
  { id: 'commercialbank', name: 'Commercial Bank' },
  { id: 'hnb', name: 'HNB' },
  { id: 'ndbbank', name: 'NDB Bank' },
  { id: 'ntb', name: 'NTB Bank' },
  { id: "people'sbank", name: "People's Bank" },
  { id: 'sampathbank', name: 'Sampath Bank' },
  { id: 'seylanbank', name: 'Seylan Bank' }
]

const categoriesOffered = [
  { id: 'dining', name: 'Dining', icon: '🍽️' },
  { id: 'education', name: 'Education', icon: '📚' },
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
  { id: 'hotels', name: 'Hotels', icon: '🏨' },
  { id: 'fashion', name: 'Fashion', icon: '🛍️' },
  { id: 'supermarket', name: 'Supermarket', icon: '🛒' },
  { id: 'travel', name: 'Travel', icon: '✈️' }
]

const cardTypesOffered = [
  { id: 'credit', name: 'Credit Card', icon: '💳' },
  { id: 'debit', name: 'Debit Card', icon: '💳' }
]

const districtsOffered = [
  'Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle',
  'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara', 'Kandy', 'Kegalle',
  'Kilinochchi', 'Kurunegala', 'Mannar', 'Matale', 'Matara', 'Monaragala',
  'Mullaitivu', 'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Ratnapura',
  'Trincomalee', 'Vavuniya'
]
</script>

<template>
  <div>
    <!-- Hero Banner Slider -->
    <section class="relative max-w-7xl mx-auto px-4 mt-4 sm:mt-6">
      <div class="relative h-80 sm:h-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
        <div
          v-for="(slide, index) in bannerSlides"
          :key="index"
          :class="['absolute inset-0 transition-opacity duration-700', index === currentSlide ? 'opacity-100' : 'opacity-0']"
        >
          <img
            :src="slide.image"
            :alt="slide.title"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div
            v-if="slide.discountLabel"
            class="absolute top-4 right-4 sm:top-6 sm:right-6 bg-red-600 text-white font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg text-sm sm:text-base border-2 border-white/20 backdrop-blur-sm shadow-red-600/30 transform rotate-3 z-10"
          >
            {{ slide.discountLabel }}
          </div>
        </div>

        <button
          @click="prevSlide"
          class="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white p-2.5 sm:p-3 rounded-full shadow-2xl transition-all hover:scale-110 group z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft class="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 group-hover:text-blue-600 transition-colors" />
        </button>
        <button
          @click="nextSlide"
          class="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white p-2.5 sm:p-3 rounded-full shadow-2xl transition-all hover:scale-110 group z-10"
          aria-label="Next slide"
        >
          <ChevronRight class="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 group-hover:text-blue-600 transition-colors" />
        </button>

        <div class="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-md px-4 py-2.5 rounded-full z-10">
          <button
            v-for="(_, index) in bannerSlides"
            :key="index"
            @click="currentSlide = index"
            :class="['rounded-full transition-all duration-300', index === currentSlide ? 'w-8 sm:w-10 h-2.5 bg-white shadow-lg' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/70']"
            :aria-label="`Go to slide ${index + 1}`"
          />
        </div>
      </div>
    </section>

    <!-- Main Flex Container -->
    <div class="max-w-7xl mx-auto px-4 mt-6 sm:mt-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
      
      <!-- Sidebar / Filter Option -->
      <aside class="w-full lg:w-72 xl:w-80 flex-shrink-0">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 lg:sticky lg:top-24 max-h-[400px] lg:max-h-[calc(100vh-7rem)] overflow-y-auto scrollbar-thin">
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-4 border-b border-gray-200 sticky top-0 z-10">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="bg-blue-600 p-2 rounded-lg">
                  <Filter class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900">Filters</h3>
                </div>
              </div>
              <button
                v-if="hasActiveFilters"
                @click="clearAllFilters"
                class="px-3 py-1.5 bg-white border border-red-200 text-red-600 hover:bg-red-50 rounded-lg text-xs font-medium transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>

          <div class="p-5">
            <div class="flex flex-col gap-6">
              <!-- Bank Filter -->
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <label class="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Bank <span v-if="selectedBanks.length > 0" class="text-blue-600">({{ selectedBanks.length }})</span>
                  </label>
                  <button v-if="selectedBanks.length > 0" @click="selectedBanks = []" class="text-xs text-gray-500 hover:text-blue-600">Clear</button>
                </div>
                <div class="flex flex-wrap gap-2">
                  <button
                    @click="selectedBanks = []"
                    :class="['px-3 py-1.5 rounded-lg text-xs font-medium transition-all', selectedBanks.length === 0 ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200']"
                  >
                    All
                  </button>
                  <button
                    v-for="bank in banksOffered"
                    :key="bank.id"
                    @click="handleBankToggle(bank.id)"
                    :class="['px-3 py-1.5 rounded-lg text-xs font-medium transition-all', selectedBanks.includes(bank.id) ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200']"
                  >
                    {{ bank.name }}
                  </button>
                </div>
              </div>

              <!-- Category Filter -->
              <div class="space-y-3 border-t border-gray-100 pt-5">
                <div class="flex items-center justify-between">
                  <label class="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Category <span v-if="selectedCategories.length > 0" class="text-blue-600">({{ selectedCategories.length }})</span>
                  </label>
                  <button v-if="selectedCategories.length > 0" @click="selectedCategories = []" class="text-xs text-gray-500 hover:text-blue-600">Clear</button>
                </div>
                <div class="flex flex-wrap gap-2">
                  <button
                    @click="selectedCategories = []"
                    :class="['px-3 py-1.5 rounded-lg text-xs font-medium transition-all', selectedCategories.length === 0 ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200']"
                  >
                    All
                  </button>
                  <button
                    v-for="category in categoriesOffered"
                    :key="category.id"
                    @click="toggleCategory(category.id)"
                    :class="['px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5', selectedCategories.includes(category.id) ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200']"
                  >
                    <span class="text-sm">{{ category.icon }}</span>
                    <span>{{ category.name }}</span>
                  </button>
                </div>
              </div>

              <!-- Card Type Filter -->
              <div class="space-y-3 border-t border-gray-100 pt-5">
                <div class="flex items-center justify-between">
                  <label class="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Card Type <span v-if="selectedCardTypes.length > 0" class="text-blue-600">({{ selectedCardTypes.length }})</span>
                  </label>
                  <button v-if="selectedCardTypes.length > 0" @click="selectedCardTypes = []" class="text-xs text-gray-500 hover:text-blue-600">Clear</button>
                </div>
                <div class="flex flex-wrap gap-2">
                  <button
                    @click="selectedCardTypes = []"
                    :class="['px-3 py-1.5 rounded-lg text-xs font-medium transition-all', selectedCardTypes.length === 0 ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200']"
                  >
                    All
                  </button>
                  <button
                    v-for="cardType in cardTypesOffered"
                    :key="cardType.id"
                    @click="toggleCardType(cardType.id)"
                    :class="['px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5', selectedCardTypes.includes(cardType.id) ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200']"
                  >
                    <span class="text-sm">{{ cardType.icon }}</span>
                    <span>{{ cardType.name }}</span>
                  </button>
                </div>
              </div>

              <!-- Location Filter -->
              <div class="space-y-3 border-t border-gray-100 pt-5">
                <div class="flex items-center justify-between">
                  <label class="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    Location <span v-if="selectedDistricts.length > 0" class="text-blue-600">({{ selectedDistricts.length }})</span>
                  </label>
                  <button v-if="selectedDistricts.length > 0" @click="selectedDistricts = []" class="text-xs text-gray-500 hover:text-blue-600">Clear</button>
                </div>
                <div class="relative">
                  <div class="flex flex-wrap gap-2 max-h-[160px] overflow-y-auto scrollbar-thin p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <button
                      @click="selectedDistricts = []"
                      :class="['px-3 py-1.5 rounded-md text-xs font-medium transition-all flex-shrink-0', selectedDistricts.length === 0 ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200']"
                    >
                      All
                    </button>
                    <button
                      v-for="district in districtsOffered"
                      :key="district"
                      @click="toggleDistrict(district)"
                      :class="['px-3 py-1.5 rounded-md text-xs font-medium transition-all flex-shrink-0', selectedDistricts.includes(district) ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200']"
                    >
                      {{ district }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-5 py-4 border-t border-gray-200">
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-sm text-gray-700">
                  <span class="font-bold text-gray-900">{{ filteredOffers.length }}</span> {{ filteredOffers.length === 1 ? 'offer' : 'offers' }}
                  <span v-if="hasActiveFilters" class="text-gray-500 text-xs mt-1 block"> • {{ selectedBanks.length + selectedCategories.length + selectedCardTypes.length + selectedDistricts.length }} active</span>
                </span>
              </div>
              <span v-if="searchQuery" class="text-xs text-gray-500 bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-200 mt-2">
                Searching for "{{ searchQuery }}"
              </span>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content (Categories, Highest Offers, etc.) -->
      <main class="flex-1 min-w-0 flex flex-col gap-8 sm:gap-12 mb-8 sm:mb-12">
        
        <!-- Categories Section -->
        <section v-if="!hasActiveFilters && !searchQuery.trim()">
          <div class="flex items-center justify-between mb-4 sm:mb-6">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900">Browse by Category</h2>
            <NuxtLink to="/categories" class="text-sm sm:text-base text-blue-600 hover:text-blue-700 font-medium">
              View All &rarr;
            </NuxtLink>
          </div>
          <div class="relative">
            <div ref="categoryScrollRef" class="overflow-x-auto scrollbar-hide scroll-smooth">
              <div class="flex gap-4 pb-4">
                <div v-for="category in CATEGORIES" :key="category.id" class="flex-shrink-0 w-64 sm:w-72">
                  <CategoryCard v-bind="category" />
                </div>
              </div>
            </div>
            <div class="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none hidden lg:block"></div>
            <div class="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none hidden lg:block"></div>
          </div>
        </section>

        <!-- Highest Offers -->
        <section>
          <div class="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div class="bg-gradient-to-r from-red-500 to-red-600 p-1.5 sm:p-2 rounded-lg">
              <Percent class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900">
              Highest Offers{{ selectedDistricts.length === 1 ? ` in ${selectedDistricts[0]}` : selectedDistricts.length > 1 ? ` (${selectedDistricts.length} Districts)` : '' }}
            </h2>
            <span class="ml-auto text-sm sm:text-base text-gray-600 bg-red-50 px-3 py-1 rounded-full font-medium">
              Best Discounts
            </span>
            <div v-if="allHighestOffers.length > 3" class="flex items-center gap-2">
              <button @click="currentHighestOffersSlide = (currentHighestOffersSlide - 1 + totalSlides) % totalSlides" class="bg-white hover:bg-gray-50 p-2 rounded-lg shadow-md transition-all hover:scale-105 border border-gray-200">
                <ChevronLeft class="w-5 h-5 text-gray-700" />
              </button>
              <div class="flex gap-1">
                 <button v-for="(_, index) in Array.from({ length: totalSlides })" :key="index" @click="currentHighestOffersSlide = index" :class="['rounded-full transition-all', index === currentHighestOffersSlide ? 'w-6 h-2 bg-red-600' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400']" />
              </div>
              <button @click="currentHighestOffersSlide = (currentHighestOffersSlide + 1) % totalSlides" class="bg-white hover:bg-gray-50 p-2 rounded-lg shadow-md transition-all hover:scale-105 border border-gray-200">
                <ChevronRight class="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          <div v-if="highestOffers.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            <OfferCard v-for="offer in highestOffers" :key="offer.id" v-bind="offer" />
          </div>
          <div v-else class="text-center py-8 bg-white rounded-xl shadow-md">
            <div class="text-gray-400 mb-3">
              <Percent class="w-12 h-12 mx-auto" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">No offers available</h3>
            <p class="text-gray-600 text-sm">Try selecting different districts or adjusting your filters</p>
          </div>
        </section>

        <!-- Mid-Page Promotional Banner -->
        <section>
          <div class="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-2xl">
            <div v-for="(slide, index) in midBannerSlides" :key="index" :class="['absolute inset-0 transition-opacity duration-700', index === currentMidBannerSlide ? 'opacity-100' : 'opacity-0']">
              <img :src="slide.image" :alt="slide.title" class="absolute inset-0 w-full h-full object-cover" />
            </div>

            <button @click="currentMidBannerSlide = (currentMidBannerSlide - 1 + midBannerSlides.length) % midBannerSlides.length" class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 p-2 rounded-full shadow z-10">
              <ChevronLeft class="w-5 h-5 text-gray-900" />
            </button>
            <button @click="currentMidBannerSlide = (currentMidBannerSlide + 1) % midBannerSlides.length" class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 p-2 rounded-full shadow z-10">
              <ChevronRight class="w-5 h-5 text-gray-900" />
            </button>

            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              <button v-for="(_, i) in midBannerSlides" :key="i" @click="currentMidBannerSlide = i" :class="['rounded-full transition-all', i === currentMidBannerSlide ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/50']" />
            </div>
          </div>
        </section>

        <!-- All Offers Grid -->
        <section>
          <div class="flex items-center justify-between mb-4 sm:mb-6">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900">
              All Offers{{ selectedDistricts.length === 1 ? ` in ${selectedDistricts[0]}` : selectedDistricts.length > 1 ? ` (${selectedDistricts.length} Districts)` : '' }}
            </h2>
            <NuxtLink to="/offers" class="text-sm sm:text-base text-blue-600 hover:text-blue-700 font-medium">
              View All &rarr;
            </NuxtLink>
          </div>

          <div v-if="filteredOffers.length > 0">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              <OfferCard v-for="offer in filteredOffers.slice(0, 9)" :key="offer.id" v-bind="offer" />
            </div>
            <div class="mt-8 text-center" v-if="filteredOffers.length > 9">
              <NuxtLink to="/offers" class="inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold transition-colors shadow-sm">
                View All {{ filteredOffers.length }} Offers
              </NuxtLink>
            </div>
          </div>
          <div v-else class="text-center py-12 bg-white rounded-xl shadow-md">
            <div class="text-gray-400 mb-4">
              <Filter class="w-16 h-16 mx-auto" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">No offers found</h3>
            <p class="text-gray-600 mb-4">Try adjusting your filters or selecting different districts</p>
            <button @click="clearAllFilters" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Clear All Filters
            </button>
          </div>
        </section>
      </main>
    </div>

    <!-- CTA Section -->
    <section class="max-w-7xl mx-auto px-4 mt-12 sm:mt-16 mb-8 sm:mb-12">
      <div class="bg-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white shadow-xl">
        <h2 class="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to start saving?</h2>
        <p class="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Apply for a credit card today and unlock exclusive discounts at thousands of merchants
        </p>
        <NuxtLink to="/apply-card" class="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg text-base sm:text-lg">
          Apply for Credit Card
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 20px;
}
.scrollbar-thin:hover::-webkit-scrollbar-thumb {
  background-color: #94a3b8;
}
</style>
