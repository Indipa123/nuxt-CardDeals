<script setup lang="ts">
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-vue-next'

const categories = [
  { id: 'shopping', name: 'Shopping' },
  { id: 'dining', name: 'Dining' },
  { id: 'travel', name: 'Travel' },
  { id: 'healthcare', name: 'Healthcare' }
]
</script>

<template>
  <footer class="bg-gray-900 text-gray-300 mt-16">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- About -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-2">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 class="font-bold text-white text-lg">CardDeals.lk</h3>
          </div>
          <p class="text-sm text-gray-400 mb-4">
            Sri Lanka's #1 platform for finding the best credit and debit card offers from all major banks.
          </p>
          <div class="flex gap-3">
            <a href="#" class="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Facebook class="w-5 h-5" />
            </a>
            <a href="#" class="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Twitter class="w-5 h-5" />
            </a>
            <a href="#" class="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <Instagram class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-white mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/" class="hover:text-white transition-colors flex items-center gap-2">Home</NuxtLink></li>
            <li><NuxtLink to="/apply-card" class="hover:text-white transition-colors flex items-center gap-2">Apply for Card</NuxtLink></li>
            <li><a href="#" class="hover:text-white transition-colors flex items-center gap-2">About Us</a></li>
            <li><a href="#" class="hover:text-white transition-colors flex items-center gap-2">Contact</a></li>
            <li><a href="#" class="hover:text-white transition-colors flex items-center gap-2">FAQs</a></li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h4 class="font-semibold text-white mb-4">Categories</h4>
          <ul class="space-y-2 text-sm">
            <li v-for="category in categories" :key="category.id">
              <NuxtLink 
                :to="`/category/${category.id}`" 
                class="hover:text-white transition-colors"
              >
                {{ category.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold text-white mb-4">Contact Us</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-2">
              <Mail class="w-4 h-4 mt-0.5 flex-shrink-0" />
              <a href="mailto:info@carddeals.lk" class="hover:text-white transition-colors">
                info@carddeals.lk
              </a>
            </li>
            <li class="flex items-start gap-2">
              <Phone class="w-4 h-4 mt-0.5 flex-shrink-0" />
              <a href="tel:+94112345678" class="hover:text-white transition-colors">
                +94 11 234 5678
              </a>
            </li>
            <li class="flex items-start gap-2">
              <MapPin class="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span class="text-gray-400">
                Colombo, Sri Lanka
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-gray-500 text-center md:text-left">
            &copy; 2026 CardDeals.lk. All rights reserved.
          </p>
          <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
