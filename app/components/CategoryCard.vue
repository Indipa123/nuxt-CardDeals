<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  id: string
  name: string
  icon: Component
  count: number
  color: string
  image: string
}>()
</script>

<template>
  <NuxtLink :to="`/category/${id}`">
    <div class="group relative bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <!-- Background Image -->
      <div class="relative h-32 sm:h-40 overflow-hidden">
        <img 
          :src="image" 
          :alt="name"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <!-- Icon -->
        <div :class="`absolute top-2 right-2 sm:top-3 sm:right-3 ${color} p-2 sm:p-3 rounded-full shadow-lg`">
          <component :is="icon" class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
        </div>

        <!-- Content -->
        <div class="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
          <h3 class="font-bold text-white text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1">{{ name }}</h3>
          <p class="text-white/90 text-xs sm:text-sm">{{ count }} offers available</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
