<script setup lang="ts">
import { ref, computed } from 'vue'
import { Grid3x3, MapPin } from 'lucide-vue-next'
import { CATEGORIES } from '~/utils/mockData'

const selectedDistricts = ref<string[]>([])

// Filter categories based on selected districts
// In a real app, categories would have district data
// For now, we show all categories regardless of district filter
const filteredCategories = computed(() => CATEGORIES)

const toggleDistrict = (district: string) => {
  if (selectedDistricts.value.includes(district)) {
    selectedDistricts.value = selectedDistricts.value.filter(d => d !== district)
  } else {
    selectedDistricts.value.push(district)
  }
}

const clearDistricts = () => {
  selectedDistricts.value = []
}

const districtsList = [
  'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
  'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
  'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
  'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla',
  'Monaragala', 'Ratnapura', 'Kegalle'
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 sm:py-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center gap-3 mb-3">
          <div class="bg-white/20 backdrop-blur-sm p-2.5 rounded-lg">
            <Grid3x3 class="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold">All Categories</h1>
        </div>
        <p class="text-base sm:text-lg text-white/90 max-w-2xl">
          Browse all available categories and discover the best card offers for your needs
        </p>
      </div>
    </section>

    <!-- Location Filter -->
    <section class="max-w-7xl mx-auto px-4 mt-6 sm:mt-8">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <!-- Filter Header -->
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="bg-blue-600 p-2 rounded-lg">
                <MapPin class="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900">Filter by Location</h3>
                <p class="text-xs text-gray-600">Select districts to see available categories</p>
              </div>
            </div>
            <button
              v-if="selectedDistricts.length > 0"
              @click="clearDistricts"
              class="px-4 py-2 bg-white border border-red-200 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>

        <!-- Location Filter Content -->
        <div class="p-6">
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <label class="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Location <span v-if="selectedDistricts.length > 0" class="text-blue-600">({{ selectedDistricts.length }})</span>
              </label>
              <button
                v-if="selectedDistricts.length > 0"
                @click="clearDistricts"
                class="text-xs text-gray-500 hover:text-blue-600"
              >
                Clear
              </button>
            </div>
            <div class="relative">
              <div class="flex flex-wrap gap-2 max-h-[200px] overflow-y-auto scrollbar-thin p-3 bg-gray-50 rounded-lg border border-gray-200">
                <!-- All Option -->
                <button
                  @click="clearDistricts"
                  :class="['px-3 py-1.5 rounded-md text-xs font-medium transition-all flex-shrink-0', selectedDistricts.length === 0 ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200']"
                >
                  All
                </button>
                <button
                  v-for="district in districtsList"
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

        <!-- Results Footer -->
        <div class="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-sm text-gray-700">
              Showing <span class="font-bold text-gray-900">{{ filteredCategories.length }}</span> {{ filteredCategories.length === 1 ? 'category' : 'categories' }}
              <span v-if="selectedDistricts.length > 0" class="text-gray-500"> in {{ selectedDistricts.length }} {{ selectedDistricts.length === 1 ? 'district' : 'districts' }}</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Grid -->
    <section class="max-w-7xl mx-auto px-4 mt-6 sm:mt-8 mb-12">
      <div v-if="filteredCategories.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        <CategoryCard v-for="category in filteredCategories" :key="category.id" v-bind="category" />
      </div>
      <div v-else class="text-center py-12 bg-white rounded-xl shadow-md">
        <div class="text-gray-400 mb-4">
          <Grid3x3 class="w-16 h-16 mx-auto" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 mb-2">No categories found</h3>
        <p class="text-gray-600 mb-4">Try selecting different districts</p>
        <button
          @click="clearDistricts"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Clear Filters
        </button>
      </div>
    </section>
  </div>
</template>
