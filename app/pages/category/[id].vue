<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronRight, SlidersHorizontal, ChevronLeft } from 'lucide-vue-next'
import { CATEGORIES, MOCK_OFFERS } from '~/utils/mockData'

const route = useRoute()
const categoryId = computed(() => route.params.id as string)

const currentBannerSlide = ref(0)
const contextDistrict = ref('all') // Default context district

const category = computed(() => CATEGORIES.find(cat => cat.id === categoryId.value))
const Icon = computed(() => category.value?.icon)

const categoryBanners = computed(() => [
  category.value?.image || '',
  'https://images.unsplash.com/photo-1761207300250-a71b2ff68b99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMHJldGFpbCUyMHN0b3JlJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcwNjUwODU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1556742521-9713bf272865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5rJTIwY3JlZGl0JTIwY2FyZCUyMHBheW1lbnR8ZW58MXx8fHwxNzY5NjU5NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1667388968964-4aa652df0a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwZm9vZHxlbnwxfHx8fDE3Njk2MzQ5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1758274252132-a9599113429d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwcGF5bWVudCUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzA2NTA4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
])

let bannerInterval: any

onMounted(() => {
  bannerInterval = setInterval(() => {
    currentBannerSlide.value = (currentBannerSlide.value + 1) % categoryBanners.value.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(bannerInterval)
})



const nextBanner = () => {
  currentBannerSlide.value = (currentBannerSlide.value + 1) % categoryBanners.value.length
}

const prevBanner = () => {
  currentBannerSlide.value = (currentBannerSlide.value - 1 + categoryBanners.value.length) % categoryBanners.value.length
}

const filteredOffers = computed(() => {
  return MOCK_OFFERS.filter(offer => {
    // District filter - check if offer is available in selected district
    const offerDistricts = (offer as any).districts || []
    if (contextDistrict.value !== 'all' && !offerDistricts.includes(contextDistrict.value)) {
      return false
    }

    // Category filter
    if (offer.category.toLowerCase() !== categoryId.value.toLowerCase()) {
      return false
    }

    return true
  })
})
</script>

<template>
  <div>
    <!-- Category Hero Banner - Rotating -->
    <section class="relative max-w-7xl mx-auto px-4 mt-4 sm:mt-6">
      <div class="relative h-48 sm:h-56 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
        <div
          v-for="(bannerImage, index) in categoryBanners"
          :key="index"
          :class="['absolute inset-0 transition-opacity duration-700', index === currentBannerSlide ? 'opacity-100' : 'opacity-0']"
        >
          <img 
            :src="bannerImage"
            :alt="category?.name"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          
          <div v-if="index === 0" class="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8">
            <div>
              <div v-if="Icon" :class="`${category?.color} w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg`">
                <component :is="Icon" class="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">{{ category?.name }}</h1>
              <p class="text-base sm:text-lg md:text-xl text-white/90">{{ category?.count }} offers available</p>
            </div>
          </div>
        </div>

        <!-- Banner Controls -->
        <button
          @click="prevBanner"
          class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronLeft class="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          @click="nextBanner"
          class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronRight class="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div class="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
          <button
            v-for="(_, index) in categoryBanners"
            :key="index"
            @click="currentBannerSlide = index"
            :class="['h-1.5 sm:h-2 rounded-full transition-all', index === currentBannerSlide ? 'w-6 sm:w-8 bg-white' : 'w-1.5 sm:w-2 bg-white/50']"
          />
        </div>
      </div>
    </section>

    <!-- Breadcrumb -->
    <section class="max-w-7xl mx-auto px-4 mt-6">
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
        <ChevronRight class="w-4 h-4" />
        <span class="text-gray-900 font-medium">{{ category?.name }}</span>
      </div>
    </section>

    <!-- Main Content -->
    <section class="max-w-7xl mx-auto px-4 mt-6">
      <!-- Offers Section -->
      <div>


          <!-- Sort Bar -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
            <p class="text-sm sm:text-base text-gray-600">
              Showing <span class="font-semibold text-gray-900">{{ filteredOffers.length }}</span> offers
            </p>
            <select class="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm sm:text-base">
              <option>Sort: Trending</option>
              <option>Sort: Newest</option>
              <option>Sort: Expiring Soon</option>
              <option>Sort: Discount (High to Low)</option>
            </select>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            <OfferCard v-for="offer in filteredOffers" :key="offer.id" v-bind="offer" />
          </div>

          <div v-if="filteredOffers.length === 0" class="text-center py-12">
            <div class="text-gray-400 mb-4">
              <SlidersHorizontal class="w-16 h-16 mx-auto" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">No offers found</h3>
            <p class="text-gray-600">Try adjusting your filters to see more results</p>
          </div>
      </div>
    </section>
  </div>
</template>
