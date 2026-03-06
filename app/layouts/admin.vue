<template>
  <div class="admin-shell">

    <!-- Mobile Overlay -->
    <div v-if="mobileOpen" class="sidebar-overlay" @click="mobileOpen = false" />

    <!-- Sidebar -->
    <aside :class="['admin-sidebar', desktopOpen ? 'desk-open' : 'desk-collapsed', mobileOpen ? 'mob-open' : '']">
      <div class="sidebar-header">
        <div class="brand">
          <div class="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </div>
          <div v-if="desktopOpen || mobileOpen" class="brand-text">
            <span class="brand-name">CardDeals</span>
            <span class="brand-sub">Admin Panel</span>
          </div>
        </div>
        <!-- Desktop collapse toggle -->
        <button class="toggle-btn desktop-toggle" @click="desktopOpen = !desktopOpen" aria-label="Toggle sidebar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <!-- Mobile close X -->
        <button class="toggle-btn mobile-close" @click="mobileOpen = false" aria-label="Close sidebar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-label" v-if="desktopOpen || mobileOpen">MAIN</div>
        <NuxtLink to="/admin" class="nav-item" exact-active-class="active" @click="mobileOpen = false">
          <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </span>
          <span v-if="desktopOpen || mobileOpen" class="nav-label-text">Dashboard</span>
        </NuxtLink>

        <div class="nav-label" v-if="desktopOpen || mobileOpen">CONTENT</div>
        <NuxtLink to="/admin/banners" class="nav-item" active-class="active" @click="mobileOpen = false">
          <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M8 10l3 3 5-5"/>
            </svg>
          </span>
          <span v-if="desktopOpen || mobileOpen" class="nav-label-text">Banners</span>
        </NuxtLink>

        <NuxtLink to="/admin/categories" class="nav-item" active-class="active" @click="mobileOpen = false">
          <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 6h16M4 12h8M4 18h12"/>
            </svg>
          </span>
          <span v-if="desktopOpen || mobileOpen" class="nav-label-text">Categories</span>
        </NuxtLink>

        <NuxtLink to="/admin/offers" class="nav-item" active-class="active" @click="mobileOpen = false">
          <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/>
            </svg>
          </span>
          <span v-if="desktopOpen || mobileOpen" class="nav-label-text">Offers</span>
        </NuxtLink>

        <div class="nav-divider"></div>
        <NuxtLink to="/" class="nav-item" target="_blank" @click="mobileOpen = false">
          <span class="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </span>
          <span v-if="desktopOpen || mobileOpen" class="nav-label-text">View Site</span>
        </NuxtLink>
      </nav>
    </aside>

    <!-- Main -->
    <div :class="['admin-main', desktopOpen ? 'main-wide' : 'main-narrow']">
      <header class="admin-topbar">
        <div class="topbar-left">
          <!-- Mobile hamburger -->
          <button class="mobile-ham" @click="mobileOpen = true" aria-label="Open sidebar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <div>
            <h1 class="page-title">{{ pageTitle }}</h1>
            <span class="page-breadcrumb">CardDeals / {{ pageTitle }}</span>
          </div>
        </div>
        <div class="topbar-right">
          <div class="topbar-time">{{ currentTime }}</div>
          <div class="admin-avatar">A</div>
        </div>
      </header>
      <div class="admin-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const desktopOpen = ref(true)   // desktop sidebar expand/collapse
const mobileOpen  = ref(false)  // mobile drawer open/close
const route = useRoute()
const now = ref(new Date())
let timer: any

onMounted(() => { timer = setInterval(() => { now.value = new Date() }, 60000) })
onUnmounted(() => clearInterval(timer))

const currentTime = computed(() =>
  now.value.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
)

const pageTitle = computed(() => {
  const path = route.path
  if (path === '/admin') return 'Dashboard'
  if (path.includes('banners')) return 'Manage Banners'
  if (path.includes('categories')) return 'Manage Categories'
  if (path.includes('offers')) return 'Manage Offers'
  return 'Admin'
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }

/* ─── Shell ─── */
.admin-shell {
  display: flex;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background: #f1f5f9;
}

/* ─── Mobile overlay ─── */
.sidebar-overlay {
  position: fixed; inset: 0; z-index: 99;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(2px);
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* ─── Sidebar ─── */
.admin-sidebar {
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  color: #cbd5e1;
  position: fixed;
  top: 0; left: 0; bottom: 0;
  z-index: 100;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(.4,0,.2,1), transform 0.3s cubic-bezier(.4,0,.2,1);
}

/* Desktop modes */
.admin-sidebar.desk-open    { width: 240px; }
.admin-sidebar.desk-collapsed { width: 68px; }

/* Mobile: hidden off-screen by default, revealed via mob-open */
@media (max-width: 768px) {
  .admin-sidebar {
    width: 260px !important;
    transform: translateX(-100%);
  }
  .admin-sidebar.mob-open {
    transform: translateX(0);
  }
}

/* Header buttons visibility control */
.desktop-toggle { display: flex; }
.mobile-close   { display: none; }
@media (max-width: 768px) {
  .desktop-toggle { display: none; }
  .mobile-close   { display: flex; }
}

/* Sidebar header */
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  min-height: 72px;
}
.brand { display: flex; align-items: center; gap: 12px; overflow: hidden; }
.brand-icon {
  width: 38px; height: 38px; min-width: 38px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: white; box-shadow: 0 4px 12px rgba(99,102,241,0.4);
  flex-shrink: 0;
}
.brand-text { overflow: hidden; }
.brand-name { display: block; font-size: 14px; font-weight: 700; color: white; white-space: nowrap; }
.brand-sub  { display: block; font-size: 10px; color: #64748b; white-space: nowrap; }

.toggle-btn {
  background: rgba(255,255,255,0.05); border: none; cursor: pointer;
  color: #94a3b8; padding: 6px; border-radius: 8px; min-width: 32px;
  align-items: center; justify-content: center;
  transition: background 0.2s, color 0.2s; flex-shrink: 0;
}
.toggle-btn:hover { background: rgba(255,255,255,0.1); color: white; }

/* Sidebar nav */
.sidebar-nav {
  display: flex; flex-direction: column;
  padding: 16px 10px; gap: 2px; flex: 1;
  overflow-y: auto;
}
.nav-label {
  font-size: 9px; font-weight: 700; color: #475569;
  padding: 12px 8px 6px; letter-spacing: 0.1em;
  white-space: nowrap;
}
.nav-item {
  display: flex; align-items: center; gap: 12px;
  padding: 10px; border-radius: 10px;
  color: #94a3b8; text-decoration: none;
  transition: all 0.2s; font-size: 13px; font-weight: 500;
  white-space: nowrap;
}
.nav-item:hover { background: rgba(255,255,255,0.06); color: #e2e8f0; }
.nav-item.active { background: linear-gradient(135deg, rgba(59,130,246,0.2), rgba(99,102,241,0.2)); color: #93c5fd; }
.nav-item.active .nav-icon { color: #60a5fa; }
.nav-icon { display: flex; align-items: center; min-width: 20px; }
.nav-label-text { overflow: hidden; text-overflow: ellipsis; }
.nav-divider { height: 1px; background: rgba(255,255,255,0.06); margin: 8px 0; }

/* ─── Main area ─── */
.admin-main {
  flex: 1;
  display: flex; flex-direction: column;
  min-height: 100vh;
  transition: margin-left 0.3s cubic-bezier(.4,0,.2,1);
}
.admin-main.main-wide   { margin-left: 240px; }
.admin-main.main-narrow { margin-left: 68px; }

@media (max-width: 768px) {
  .admin-main.main-wide,
  .admin-main.main-narrow { margin-left: 0 !important; }
}

/* Topbar */
.admin-topbar {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 24px;
  height: 64px;
  display: flex; align-items: center; justify-content: space-between;
  position: sticky; top: 0; z-index: 50;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  gap: 12px;
}
.topbar-left {
  display: flex; align-items: center; gap: 12px; overflow: hidden; flex: 1;
}
.page-title { font-size: 16px; font-weight: 700; color: #0f172a; white-space: nowrap; }
.page-breadcrumb { font-size: 11px; color: #94a3b8; display: none; }
@media (min-width: 640px) {
  .page-breadcrumb { display: block; }
}

.topbar-right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
.topbar-time { font-size: 12px; color: #64748b; font-weight: 500; display: none; }
@media (min-width: 480px) {
  .topbar-time { display: block; }
}
.admin-avatar {
  width: 34px; height: 34px; border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white; font-size: 13px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

/* Mobile hamburger */
.mobile-ham {
  display: none;
  background: none; border: none; cursor: pointer;
  color: #374151; padding: 4px; border-radius: 6px;
  align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s;
}
.mobile-ham:hover { background: #f1f5f9; }
@media (max-width: 768px) {
  .mobile-ham { display: flex; }
}

/* Content area */
.admin-content {
  padding: 20px 16px;
  flex: 1;
}
@media (min-width: 640px) {
  .admin-content { padding: 24px 20px; }
}
@media (min-width: 1024px) {
  .admin-content { padding: 32px; }
}
</style>
