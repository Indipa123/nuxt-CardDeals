<script setup lang="ts">
import { Check } from 'lucide-vue-next'

const BANKS = [
  { id: 'hnb', name: 'HNB', color: 'bg-green-600' },
  { id: 'commercial', name: 'Commercial Bank', color: 'bg-yellow-500' },
  { id: 'sampath', name: 'Sampath Bank', color: 'bg-red-600' },
  { id: 'boc', name: 'Bank of Ceylon', color: 'bg-blue-700' },
  { id: 'seylan', name: 'Seylan Bank', color: 'bg-purple-600' },
  { id: 'ndb', name: 'NDB Bank', color: 'bg-orange-600' },
  { id: 'peoples', name: "People's Bank", color: 'bg-blue-500' },
]

const props = defineProps<{
  selectedBanks: string[]
  horizontal?: boolean
}>()

const emit = defineEmits<{
  (e: 'bankToggle', bankId: string): void
}>()
</script>

<template>
  <div :class="horizontal ? 'flex gap-2 overflow-x-auto pb-2 -mx-1 px-1' : 'space-y-2'">
    <button
      v-for="bank in BANKS"
      :key="bank.id"
      @click="emit('bankToggle', bank.id)"
      :class="[
        horizontal ? 'flex-shrink-0 min-w-[160px]' : 'w-full',
        'flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border-2 transition-all text-sm sm:text-base',
        selectedBanks.includes(bank.id)
          ? 'border-blue-500 bg-blue-50 shadow-sm'
          : 'border-gray-200 bg-white hover:border-gray-300'
      ]"
    >
      <div :class="[`w-7 h-7 sm:w-8 sm:h-8 ${bank.color} rounded-lg flex items-center justify-center flex-shrink-0`]">
        <span class="text-white text-xs font-bold">
          {{ bank.name.substring(0, 2).toUpperCase() }}
        </span>
      </div>
      <span :class="[`text-xs sm:text-sm font-medium truncate`, selectedBanks.includes(bank.id) ? 'text-blue-900' : 'text-gray-700']">
        {{ bank.name }}
      </span>
      <Check v-if="selectedBanks.includes(bank.id)" class="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 ml-auto flex-shrink-0" />
    </button>
  </div>
</template>
