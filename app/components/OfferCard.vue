<script setup lang="ts">
import { Calendar, MapPin } from 'lucide-vue-next'

defineProps<{
  id: string
  brand: string
  brandLogo: string
  bank: string
  bankLogo: string
  category: string
  expiryDate: string
  location?: string
  featured?: boolean
}>()
</script>

<template>
  <NuxtLink :to="`/offer/${id}`">
    <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 h-full flex flex-col">
      <!-- Brand Image -->
      <div class="relative h-40 sm:h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <img
          :src="brandLogo"
          :alt="brand"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <!-- Content -->
      <div class="p-3 sm:p-4 flex-1 flex flex-col">
        <div class="flex items-start justify-between gap-2 mb-2 sm:mb-3">
          <div class="flex-1 min-w-0">
            <h3 class="font-bold text-base sm:text-lg text-gray-900 mb-1 group-hover:text-blue-600 transition-colors truncate">
              {{ brand }}
            </h3>
            <span class="inline-block px-2 sm:px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
              {{ category }}
            </span>
          </div>
          <img
            :src="bankLogo"
            :alt="bank"
            class="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg bg-white border border-gray-200 p-1 flex-shrink-0"
          />
        </div>

        <div v-if="location" class="flex items-center gap-1 text-xs sm:text-sm text-gray-600 mb-2">
          <MapPin class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span class="truncate">{{ location }}</span>
        </div>

        <div class="flex items-center justify-between text-xs sm:text-sm mt-auto">
          <div class="flex items-center gap-1 text-gray-500">
            <Calendar class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span class="truncate">Expires {{ expiryDate }}</span>
          </div>
          <span class="text-blue-600 font-semibold group-hover:underline whitespace-nowrap">
            View &rarr;
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
