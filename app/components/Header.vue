<script setup lang="ts">
import { ref } from 'vue'
import { Search, Menu, X } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

const mobileMenuOpen = ref(false)
const searchQuery = useState('searchQuery', () => '')
const route = useRoute()

const isActive = (path: string) => route.path === path
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-3 md:py-4">
      <div class="flex items-center justify-between gap-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0">
          <div class="flex items-center gap-2">
            <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-2">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <h1 class="font-bold text-lg text-gray-900">CardDeals</h1>
              <p class="text-xs text-gray-500 hidden sm:block">Sri Lanka Card Offers</p>
            </div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1">
          <NuxtLink
            to="/"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'
            ]"
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/cash-offers"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              isActive('/cash-offers') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'
            ]"
          >
            Cash Offers
          </NuxtLink>

          <NuxtLink
            to="/apply-card"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              isActive('/apply-card') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'
            ]"
          >
            Apply Card
          </NuxtLink>
        </nav>

        <!-- Search Bar - Desktop -->
        <div class="hidden md:flex flex-1 max-w-xl">
          <div class="relative w-full">
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search brands, shops, hotels..."
              class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              v-model="searchQuery"
            />
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <X v-if="mobileMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Search -->
      <div class="mt-3 md:hidden">
        <div class="relative">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search offers..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            v-model="searchQuery"
          />
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="lg:hidden mt-4 pb-4 border-t pt-4 space-y-2">
        <NuxtLink
          to="/"
          @click="mobileMenuOpen = false"
          :class="[
            'block px-4 py-2 rounded-lg font-medium transition-colors',
            isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'
          ]"
        >
          Home
        </NuxtLink>

        <NuxtLink
          to="/cash-offers"
          @click="mobileMenuOpen = false"
          :class="[
            'block px-4 py-2 rounded-lg font-medium transition-colors',
            isActive('/cash-offers') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'
          ]"
        >
          Cash Offers
        </NuxtLink>

        <NuxtLink
          to="/apply-card"
          @click="mobileMenuOpen = false"
          :class="[
            'block px-4 py-2 rounded-lg font-medium transition-colors',
            isActive('/apply-card') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'
          ]"
        >
          Apply for Card
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
