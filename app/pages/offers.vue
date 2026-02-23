<script setup lang="ts">
import { ref, computed } from 'vue'
import { Filter, Percent, TrendingUp } from 'lucide-vue-next'
import { MOCK_OFFERS } from '~/utils/mockData'

const selectedBanks = ref<string[]>([])
const selectedCategories = ref<string[]>([])
const selectedCardTypes = ref<string[]>([])
const selectedDistricts = ref<string[]>([])
const sortBy = ref<'discount' | 'latest' | 'popular'>('discount')

const getDiscountValue = (discount: string) => {
  const match = discount.match(/(\d+)%/)
  return match ? parseInt(match[1]) : 0
}

const filteredOffers = computed(() => {
  return MOCK_OFFERS.filter(offer => {
    // District filter
    const offerDistricts = (offer as any).districts || []
    if (selectedDistricts.value.length > 0) {
      const hasMatchingDistrict = selectedDistricts.value.some(district =>
        offerDistricts.includes(district)
      )
      if (!hasMatchingDistrict) return false
    }

    // Bank filter
    if (selectedBanks.value.length > 0 && !selectedBanks.value.includes(offer.bank.toLowerCase().replace(/\s+/g, ''))) {
      return false
    }

    // Category filter
    if (selectedCategories.value.length > 0 && !selectedCategories.value.includes(offer.category.toLowerCase())) {
      return false
    }

    return true
  })
})

const sortedOffers = computed(() => {
  const sorted = [...filteredOffers.value]

  switch (sortBy.value) {
    case 'discount':
      return sorted.sort((a, b) => getDiscountValue(b.discount) - getDiscountValue(a.discount))
    case 'latest':
      return sorted.reverse()
    case 'popular':
      return sorted
    default:
      return sorted
  }
})

const clearAllFilters = () => {
  selectedBanks.value = []
  selectedCategories.value = []
  selectedCardTypes.value = []
  selectedDistricts.value = []
}

const hasActiveFilters = computed(() => {
  return selectedBanks.value.length > 0 || selectedCategories.value.length > 0 || selectedCardTypes.value.length > 0 || selectedDistricts.value.length > 0
})

const banksOffered = [
  { id: 'hnb', name: 'HNB' },
  { id: 'commercialbank', name: 'Commercial Bank' },
  { id: 'sampathbank', name: 'Sampath Bank' },
  { id: 'ndbbank', name: 'NDB Bank' },
  { id: 'boc', name: 'Bank of Ceylon' },
  { id: 'seylanbank', name: 'Seylan Bank' },
  { id: "people'sbank", name: "People's Bank" }
]

const categoriesOffered = [
  { id: 'shopping', name: 'Shopping', icon: '🛍️' },
  { id: 'dining', name: 'Dining', icon: '🍽️' },
  { id: 'travel', name: 'Travel', icon: '✈️' },
  { id: 'hotels', name: 'Hotels', icon: '🏨' },
  { id: 'education', name: 'Education', icon: '📚' },
  { id: 'supermarket', name: 'Supermarket', icon: '🛒' },
  { id: 'healthcare', name: 'Healthcare', icon: '🏥' }
]

const cardTypesOffered = [
  { id: 'credit', name: 'Credit Card', icon: '💳' },
  { id: 'debit', name: 'Debit Card', icon: '💳' }
]

const districtsOffered = [
  'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
  'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
  'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
  'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla',
  'Monaragala', 'Ratnapura', 'Kegalle'
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

const toggleDistrict = (district: string) => {
  if (selectedDistricts.value.includes(district)) {
    selectedDistricts.value = selectedDistricts.value.filter(d => d !== district)
  } else {
    selectedDistricts.value.push(district)
  }
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-red-600 to-rose-700 text-white py-8 sm:py-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center gap-3 mb-3">
          <div class="bg-white/20 backdrop-blur-sm p-2.5 rounded-lg">
            <Percent class="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold">All Offers</h1>
        </div>
        <p class="text-base sm:text-lg text-white/90 max-w-2xl">
          Browse all available card offers and find the best deals for you
        </p>
      </div>
    </section>

    <!-- Main Flex Container -->
    <div class="max-w-7xl mx-auto px-4 mt-6 flex flex-col lg:flex-row gap-6 lg:gap-8 mb-12">
      
      <!-- Sidebar / Filter Option -->
      <aside class="w-full lg:w-72 xl:w-80 flex-shrink-0">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto scrollbar-thin">
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
                  <span class="font-bold text-gray-900">{{ sortedOffers.length }}</span> {{ sortedOffers.length === 1 ? 'offer' : 'offers' }}
                  <span v-if="hasActiveFilters" class="text-gray-500 text-xs mt-1 block"> • {{ selectedBanks.length + selectedCategories.length + selectedCardTypes.length + selectedDistricts.length }} filters active</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content (Sort Bar, Offers Grid) -->
      <main class="flex-1 min-w-0 flex flex-col gap-6">
        
        <!-- Sort Bar -->
        <section>
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div class="flex items-center justify-between flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <TrendingUp class="w-5 h-5 text-gray-600" />
                <span class="text-sm font-semibold text-gray-900">Sort by:</span>
              </div>
              <div class="flex gap-2">
                <button
                  @click="sortBy = 'discount'"
                  :class="['px-4 py-2 rounded-lg text-sm font-medium transition-all', sortBy === 'discount' ? 'bg-red-600 text-white shadow-sm' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200']"
                >
                  Highest Discount
                </button>
                <button
                  @click="sortBy = 'latest'"
                  :class="['px-4 py-2 rounded-lg text-sm font-medium transition-all', sortBy === 'latest' ? 'bg-red-600 text-white shadow-sm' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200']"
                >
                  Latest
                </button>
                <button
                  @click="sortBy = 'popular'"
                  :class="['px-4 py-2 rounded-lg text-sm font-medium transition-all', sortBy === 'popular' ? 'bg-red-600 text-white shadow-sm' : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200']"
                >
                  Popular
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Offers Grid -->
        <section>
          <div v-if="sortedOffers.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            <OfferCard v-for="offer in sortedOffers" :key="offer.id" v-bind="offer" />
          </div>
          <div v-else class="text-center py-12 bg-white rounded-xl shadow-md">
            <div class="text-gray-400 mb-4">
              <Filter class="w-16 h-16 mx-auto" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">No offers found</h3>
            <p class="text-gray-600 mb-4">Try adjusting your filters or selecting different options</p>
            <button
              @click="clearAllFilters"
              class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Clear All Filters
            </button>
          </div>
        </section>

      </main>
    </div>
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
