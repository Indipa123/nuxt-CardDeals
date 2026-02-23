<script setup lang="ts">
import { ref } from 'vue'
import {
  LayoutDashboard,
  Tag,
  Image as ImageIcon,
  FolderTree,
  Users,
  BarChart3,
  Plus,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  Calendar,
  Menu,
  X
} from 'lucide-vue-next'

definePageMeta({
  layout: false
})

type TabType = 'dashboard' | 'offers' | 'banners' | 'categories' | 'subscriptions' | 'analytics'

const activeTab = ref<TabType>('dashboard')
const sidebarOpen = ref(false)

const stats = [
  { label: 'Total Offers', value: '847', change: '+12%', trend: 'up' },
  { label: 'Active Users', value: '24,521', change: '+18%', trend: 'up' },
  { label: 'Premium Members', value: '1,245', change: '+24%', trend: 'up' },
  { label: 'Monthly Revenue', value: 'LKR 622,500', change: '+15%', trend: 'up' }
]

const recentOffers = [
  { id: 1, brand: 'Fashion Bug', bank: 'HNB', discount: '30% OFF', status: 'Active', date: 'Jan 28, 2026' },
  { id: 2, brand: 'Cinnamon Hotels', bank: 'Commercial', discount: '25% OFF', status: 'Active', date: 'Jan 27, 2026' },
  { id: 3, brand: 'Keells Super', bank: 'BOC', discount: '15% OFF', status: 'Expiring', date: 'Jan 26, 2026' },
  { id: 4, brand: 'Singer', bank: 'Seylan', discount: '20% OFF', status: 'Active', date: 'Jan 25, 2026' }
]

const banners = [
  { id: 1, title: 'Flash Sale Weekend', status: 'Active', clicks: 12543, schedule: 'Jan 28 - Feb 3' },
  { id: 2, title: 'Travel Season', status: 'Scheduled', clicks: 0, schedule: 'Feb 5 - Feb 12' },
  { id: 3, title: 'Dining Special', status: 'Ended', clicks: 8234, schedule: 'Jan 15 - Jan 22' }
]

const setTab = (tab: TabType) => {
  activeTab.value = tab
  sidebarOpen.value = false
}

const getTabTitle = () => {
  return activeTab.value.charAt(0).toUpperCase() + activeTab.value.slice(1)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar - Desktop -->
    <aside class="hidden lg:block w-64 bg-white border-r border-gray-200 fixed h-screen">
      <div class="p-6">
        <NuxtLink to="/" class="flex items-center gap-2 mb-8">
          <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-2">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <div>
            <h1 class="font-bold text-lg">CardDeals Admin</h1>
            <p class="text-xs text-gray-500">Management Portal</p>
          </div>
        </NuxtLink>

        <nav class="space-y-2">
          <button @click="setTab('dashboard')" :class="['w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'dashboard' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100']"><LayoutDashboard class="w-5 h-5" /><span class="font-medium">Dashboard</span></button>
          <button @click="setTab('offers')" :class="['w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'offers' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100']"><Tag class="w-5 h-5" /><span class="font-medium">Offers</span></button>
          <button @click="setTab('banners')" :class="['w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'banners' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100']"><ImageIcon class="w-5 h-5" /><span class="font-medium">Banners</span></button>
          <button @click="setTab('categories')" :class="['w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'categories' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100']"><FolderTree class="w-5 h-5" /><span class="font-medium">Categories</span></button>
          <button @click="setTab('subscriptions')" :class="['w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'subscriptions' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100']"><Users class="w-5 h-5" /><span class="font-medium">Subscriptions</span></button>
          <button @click="setTab('analytics')" :class="['w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'analytics' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100']"><BarChart3 class="w-5 h-5" /><span class="font-medium">Analytics</span></button>
        </nav>
      </div>
    </aside>

    <!-- Mobile Sidebar -->
    <div v-if="sidebarOpen" class="lg:hidden fixed inset-0 z-50">
      <div class="absolute inset-0 bg-black/50" @click="sidebarOpen = false"></div>
      <aside class="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl">
        <div class="p-6">
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-2">
              <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-2">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h1 class="font-bold text-lg">CardDeals</h1>
              </div>
            </div>
            <button @click="sidebarOpen = false"><X class="w-6 h-6" /></button>
          </div>

          <nav class="space-y-2">
            <button @click="setTab('dashboard')" :class="['w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'dashboard' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100']"><LayoutDashboard class="w-5 h-5" /><span class="font-medium">Dashboard</span></button>
            <button @click="setTab('offers')" :class="['w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'offers' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100']"><Tag class="w-5 h-5" /><span class="font-medium">Offers</span></button>
            <button @click="setTab('banners')" :class="['w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'banners' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100']"><ImageIcon class="w-5 h-5" /><span class="font-medium">Banners</span></button>
            <button @click="setTab('categories')" :class="['w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'categories' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100']"><FolderTree class="w-5 h-5" /><span class="font-medium">Categories</span></button>
            <button @click="setTab('subscriptions')" :class="['w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'subscriptions' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100']"><Users class="w-5 h-5" /><span class="font-medium">Subscriptions</span></button>
            <button @click="setTab('analytics')" :class="['w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'analytics' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100']"><BarChart3 class="w-5 h-5" /><span class="font-medium">Analytics</span></button>
          </nav>
        </div>
      </aside>
    </div>

    <!-- Main Content -->
    <main class="flex-1 lg:ml-64">
      <!-- Header -->
      <header class="bg-white border-b border-gray-200 px-4 lg:px-8 py-4 sticky top-0 z-40">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <button class="lg:hidden p-2 hover:bg-gray-100 rounded-lg" @click="sidebarOpen = true">
              <Menu class="w-6 h-6" />
            </button>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 capitalize">{{ activeTab }}</h2>
              <p class="text-sm text-gray-600">Manage your platform content</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <NuxtLink to="/" class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium">
              View Site
            </NuxtLink>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Admin Profile
            </button>
          </div>
        </div>
      </header>

      <!-- Content Area -->
      <div class="p-4 lg:p-8">
        <!-- Dashboard View -->
        <template v-if="activeTab === 'dashboard'">
          <!-- Stats Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div v-for="(stat, index) in stats" :key="index" class="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <div class="flex items-start justify-between mb-2 sm:mb-3">
                <p class="text-gray-600 text-xs sm:text-sm">{{ stat.label }}</p>
                <div :class="['px-2 py-1 rounded-full text-xs font-semibold', stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700']">
                  {{ stat.change }}
                </div>
              </div>
              <p class="text-2xl sm:text-3xl font-bold text-gray-900">{{ stat.value }}</p>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <!-- Recent Offers -->
            <div class="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <div class="flex items-center justify-between mb-4 sm:mb-6">
                <h3 class="text-base sm:text-lg font-bold text-gray-900">Recent Offers</h3>
                <button class="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium">View All</button>
              </div>
              <div class="space-y-3 sm:space-y-4">
                <div v-for="offer in recentOffers" :key="offer.id" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div class="flex-1 min-w-0">
                    <p class="font-semibold text-sm sm:text-base text-gray-900 truncate">{{ offer.brand }}</p>
                    <p class="text-xs sm:text-sm text-gray-600 truncate">{{ offer.bank }} • {{ offer.discount }}</p>
                  </div>
                  <div class="text-right ml-2">
                    <span :class="['inline-block px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap', offer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700']">
                      {{ offer.status }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">Quick Actions</h3>
              <div class="space-y-2 sm:space-y-3">
                <button class="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm sm:text-base">
                  <Plus class="w-4 h-4 sm:w-5 sm:h-5" /> Add New Offer
                </button>
                <button class="w-full flex items-center gap-3 px-4 py-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors font-medium text-sm sm:text-base">
                  <ImageIcon class="w-4 h-4 sm:w-5 sm:h-5" /> Upload Banner
                </button>
                <button class="w-full flex items-center gap-3 px-4 py-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors font-medium text-sm sm:text-base">
                  <BarChart3 class="w-4 h-4 sm:w-5 sm:h-5" /> View Analytics
                </button>
                <button class="w-full flex items-center gap-3 px-4 py-3 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-100 transition-colors font-medium text-sm sm:text-base">
                  <Users class="w-4 h-4 sm:w-5 sm:h-5" /> Manage Users
                </button>
              </div>
            </div>
          </div>
        </template>

        <!-- Offers View -->
        <template v-else-if="activeTab === 'offers'">
          <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <div class="p-4 sm:p-6 border-b border-gray-200">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <h3 class="text-base sm:text-lg font-bold text-gray-900">Manage Offers</h3>
                <button class="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base">
                  <Plus class="w-4 h-4 sm:w-5 sm:h-5" /> Add New Offer
                </button>
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th class="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Brand</th>
                    <th class="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Bank</th>
                    <th class="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Discount</th>
                    <th class="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase hidden sm:table-cell">Status</th>
                    <th class="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase hidden md:table-cell">Date</th>
                    <th class="px-4 sm:px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr v-for="offer in recentOffers" :key="offer.id" class="hover:bg-gray-50">
                    <td class="px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-900 font-medium">{{ offer.brand }}</td>
                    <td class="px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-700">{{ offer.bank }}</td>
                    <td class="px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-700">{{ offer.discount }}</td>
                    <td class="px-4 sm:px-6 py-4 hidden sm:table-cell">
                      <span :class="['inline-block px-3 py-1 rounded-full text-xs font-semibold', offer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700']">
                        {{ offer.status }}
                      </span>
                    </td>
                    <td class="px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-700 hidden md:table-cell">{{ offer.date }}</td>
                    <td class="px-4 sm:px-6 py-4">
                      <div class="flex items-center justify-end gap-1 sm:gap-2">
                        <button class="p-1.5 sm:p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Eye class="w-4 h-4" /></button>
                        <button class="p-1.5 sm:p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"><Edit class="w-4 h-4" /></button>
                        <button class="p-1.5 sm:p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 class="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </template>

        <!-- Banners View -->
        <template v-else-if="activeTab === 'banners'">
          <div class="bg-white rounded-xl shadow-md">
            <div class="p-6 border-b border-gray-200">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 class="text-lg font-bold text-gray-900">Banner Manager</h3>
                <button class="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  <Plus class="w-5 h-5" /> Upload Banner
                </button>
              </div>
            </div>
            <div class="p-6">
              <div class="grid grid-cols-1 gap-6">
                <!-- Banners List -->
                <div v-for="banner in banners" :key="banner.id" class="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg gap-4">
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-900 mb-1">{{ banner.title }}</h4>
                    <div class="flex items-center gap-4 text-sm text-gray-600">
                      <span class="flex items-center gap-1"><Calendar class="w-4 h-4" /> {{ banner.schedule }}</span>
                      <span class="flex items-center gap-1"><Eye class="w-4 h-4" /> {{ banner.clicks.toLocaleString() }} views</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <span :class="['px-3 py-1 rounded-full text-xs font-semibold', banner.status === 'Active' ? 'bg-green-100 text-green-700' : banner.status === 'Scheduled' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700']">
                      {{ banner.status }}
                    </span>
                    <button class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"><Edit class="w-4 h-4" /></button>
                    <button class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 class="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- Analytics View -->
        <template v-else-if="activeTab === 'analytics'">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Trending Banks -->
            <div class="bg-white rounded-xl shadow-md p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-6">Trending Banks</h3>
              <div class="space-y-4">
                <div v-for="(bank, index) in [{ name: 'HNB', offers: 234, growth: '+12%' }, { name: 'Commercial Bank', offers: 198, growth: '+18%' }, { name: 'Sampath Bank', offers: 176, growth: '+8%' }, { name: 'BOC', offers: 143, growth: '+15%' }]" :key="index" class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
                      <span class="text-white text-xs font-bold">{{ index + 1 }}</span>
                    </div>
                    <div>
                      <p class="font-semibold text-gray-900">{{ bank.name }}</p>
                      <p class="text-sm text-gray-600">{{ bank.offers }} offers</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <TrendingUp class="w-4 h-4 text-green-600" />
                    <span class="text-green-600 font-semibold">{{ bank.growth }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Popular Categories -->
            <div class="bg-white rounded-xl shadow-md p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-6">Popular Categories</h3>
              <div class="space-y-4">
                <div v-for="(category, index) in [{ name: 'Dining', clicks: 45231, percentage: 35 }, { name: 'Fashion', clicks: 38542, percentage: 30 }, { name: 'Supermarket', clicks: 25487, percentage: 20 }, { name: 'Travel', clicks: 19234, percentage: 15 }]" :key="index">
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-medium text-gray-900">{{ category.name }}</span>
                    <span class="text-sm text-gray-600">{{ category.clicks.toLocaleString() }} clicks</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full" :style="{ width: `${category.percentage}%` }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- Other tabs placeholder -->
        <template v-if="activeTab === 'categories' || activeTab === 'subscriptions'">
          <div class="bg-white rounded-xl shadow-md p-12 text-center">
            <div class="text-gray-400 mb-4">
              <FolderTree class="w-16 h-16 mx-auto" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ getTabTitle() }} Management</h3>
            <p class="text-gray-600">This section is under development</p>
          </div>
        </template>
      </div>
    </main>
  </div>
</template>
