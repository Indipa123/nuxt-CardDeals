<script setup lang="ts">
definePageMeta({ layout: 'admin' })
import { ref } from 'vue'

/* ── State ── */
const activeTab = ref<'main' | 'mid'>('main')

// Main banner slots (hero carousel — 5 slides)
const mainBanners = ref([
  { id: 1, label: 'Slide 1 – Mega Flash Sale', preview: null as string | null, title: '', subtitle: '', discount: '', file: null as File | null },
  { id: 2, label: 'Slide 2 – Dine & Save', preview: null as string | null, title: '', subtitle: '', discount: '', file: null as File | null },
  { id: 3, label: 'Slide 3 – Barista Specials', preview: null as string | null, title: '', subtitle: '', discount: '', file: null as File | null },
  { id: 4, label: 'Slide 4 – Cinnamon Market', preview: null as string | null, title: '', subtitle: '', discount: '', file: null as File | null },
  { id: 5, label: 'Slide 5 – Scope Collection', preview: null as string | null, title: '', subtitle: '', discount: '', file: null as File | null },
])

// Mid-page (secondary) banners — 5 slots
const midBanners = ref([
  { id: 1, label: 'Mid Slide 1 – Exclusive Bank Deals', preview: null as string | null, title: '', file: null as File | null },
  { id: 2, label: 'Mid Slide 2 – Weekend Shopping Spree', preview: null as string | null, title: '', file: null as File | null },
  { id: 3, label: 'Mid Slide 3 – Tech Gadgets Sale', preview: null as string | null, title: '', file: null as File | null },
  { id: 4, label: 'Mid Slide 4 – Summer Getaways', preview: null as string | null, title: '', file: null as File | null },
  { id: 5, label: 'Mid Slide 5 – Fine Dining Experiences', preview: null as string | null, title: '', file: null as File | null },
])

const toast = ref<{ msg: string; type: 'success' | 'error' } | null>(null)

function showToast(msg: string, type: 'success' | 'error' = 'success') {
  toast.value = { msg, type }
  setTimeout(() => { toast.value = null }, 3000)
}

function onFileChange(banner: any, e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  banner.file = file
  banner.preview = URL.createObjectURL(file)
}

function clearSlot(banner: any) {
  banner.file = null
  banner.preview = null
}

function saveMainBanners() {
  showToast('Main banners saved successfully!', 'success')
}
function saveMidBanners() {
  showToast('Mid-page banners saved successfully!', 'success')
}
</script>

<template>
  <div>
    <!-- Toast -->
    <Transition name="toast">
      <div v-if="toast" :class="['toast', toast.type]">
        <svg v-if="toast.type === 'success'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        {{ toast.msg }}
      </div>
    </Transition>

    <!-- Tab Switcher -->
    <div class="tab-bar">
      <button :class="['tab-btn', activeTab === 'main' ? 'active' : '']" @click="activeTab = 'main'">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/></svg>
        Main Hero Banners
      </button>
      <button :class="['tab-btn', activeTab === 'mid' ? 'active' : '']" @click="activeTab = 'mid'">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="2"/></svg>
        Mid-Page Banners
      </button>
    </div>

    <!-- ── MAIN BANNERS ── -->
    <div v-if="activeTab === 'main'">
      <div class="page-desc">
        These 5 slides appear in the <strong>hero carousel</strong> at the top of the home page. Each slide requires an image, title, subtitle, and discount label.
      </div>
      <div class="banner-grid">
        <div v-for="b in mainBanners" :key="b.id" class="banner-card">
          <div class="banner-card-header">
            <span class="slide-badge">{{ b.id }}</span>
            <span class="slide-label">{{ b.label }}</span>
          </div>

          <!-- Upload Zone -->
          <div class="upload-zone" :class="{ 'has-preview': b.preview }" @click="($refs['mf' + b.id] as HTMLInputElement)?.click()">
            <img v-if="b.preview" :src="b.preview" class="preview-img" :alt="b.label" />
            <div v-else class="upload-placeholder">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>Click to upload banner image</span>
              <span class="upload-hint">Recommended: 1920 × 800px • JPG/PNG/WebP</span>
            </div>
            <input :ref="'mf' + b.id" type="file" accept="image/*" style="display:none" @change="onFileChange(b, $event)" />
          </div>

          <!-- Controls -->
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Slide Title</label>
              <input v-model="b.title" class="form-input" placeholder="e.g. Mega Flash Sale" />
            </div>
            <div class="form-group">
              <label class="form-label">Subtitle</label>
              <input v-model="b.subtitle" class="form-input" placeholder="e.g. Save up to 30% on fashion & more" />
            </div>
            <div class="form-group half">
              <label class="form-label">Discount Label</label>
              <input v-model="b.discount" class="form-input" placeholder="e.g. 30% OFF" />
            </div>
            <div class="form-group half form-actions-inline">
              <button v-if="b.preview" class="btn-clear" @click="clearSlot(b)">Remove Image</button>
            </div>
          </div>
        </div>
      </div>

      <div class="sticky-footer">
        <button class="btn-save" @click="saveMainBanners">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
          Save Main Banners
        </button>
      </div>
    </div>

    <!-- ── MID BANNERS ── -->
    <div v-if="activeTab === 'mid'">
      <div class="page-desc">
        These 5 slides appear in the <strong>mid-page promotional carousel</strong> between the Highest Offers and All Offers sections.
      </div>
      <div class="banner-grid">
        <div v-for="b in midBanners" :key="b.id" class="banner-card">
          <div class="banner-card-header">
            <span class="slide-badge purple">{{ b.id }}</span>
            <span class="slide-label">{{ b.label }}</span>
          </div>

          <div class="upload-zone" :class="{ 'has-preview': b.preview }" @click="($refs['mdf' + b.id] as HTMLInputElement)?.click()">
            <img v-if="b.preview" :src="b.preview" class="preview-img" :alt="b.label" />
            <div v-else class="upload-placeholder">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>Click to upload mid banner image</span>
              <span class="upload-hint">Recommended: 1280 × 512px • JPG/PNG/WebP</span>
            </div>
            <input :ref="'mdf' + b.id" type="file" accept="image/*" style="display:none" @change="onFileChange(b, $event)" />
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Slide Title</label>
              <input v-model="b.title" class="form-input" placeholder="e.g. Exclusive Bank Deals" />
            </div>
            <div class="form-group form-actions-inline">
              <button v-if="b.preview" class="btn-clear" @click="clearSlot(b)">Remove Image</button>
            </div>
          </div>
        </div>
      </div>

      <div class="sticky-footer">
        <button class="btn-save purple" @click="saveMidBanners">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
          Save Mid Banners
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Toast */
.toast {
  position: fixed; top: 16px; right: 16px; left: 16px; z-index: 9999;
  display: flex; align-items: center; gap: 8px;
  padding: 12px 16px; border-radius: 12px; font-size: 13px; font-weight: 600;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}
@media (min-width: 480px) { .toast { left: auto; right: 24px; top: 24px; } }
.toast.success { background: #10b981; color: white; }
.toast.error { background: #ef4444; color: white; }
.toast-enter-active, .toast-leave-active { transition: all 0.3s; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateY(-12px); }

/* Tabs */
.tab-bar {
  display: flex; gap: 4px; background: white; padding: 6px;
  border-radius: 14px; border: 1px solid #e2e8f0; margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  width: 100%; overflow-x: auto;
}
.tab-btn {
  display: flex; align-items: center; gap: 6px;
  padding: 9px 14px; border-radius: 10px; border: none; cursor: pointer;
  font-size: 12px; font-weight: 600; color: #64748b;
  background: transparent; transition: all 0.2s; white-space: nowrap; flex-shrink: 0;
}
@media (min-width: 640px) { .tab-btn { padding: 10px 20px; font-size: 13px; gap: 8px; } }
.tab-btn:hover { color: #374151; background: #f8fafc; }
.tab-btn.active { background: #1e293b; color: white; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }

/* Page desc */
.page-desc {
  background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px;
  padding: 14px 18px; font-size: 13px; color: #1e40af; margin-bottom: 24px;
  line-height: 1.6;
}

/* Banner grid */
.banner-grid { display: flex; flex-direction: column; gap: 20px; }
.banner-card {
  background: white; border-radius: 16px; overflow: hidden;
  border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.banner-card-header {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 20px; background: #f8fafc; border-bottom: 1px solid #f1f5f9;
}
.slide-badge {
  width: 24px; height: 24px; border-radius: 6px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white; font-size: 11px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}
.slide-badge.purple { background: linear-gradient(135deg, #8b5cf6, #a78bfa); }
.slide-label { font-size: 13px; font-weight: 600; color: #374151; }

/* Upload zone */
.upload-zone {
  margin: 16px 20px; border: 2px dashed #e2e8f0;
  border-radius: 12px; min-height: 180px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; transition: border-color 0.2s, background 0.2s;
  background: #f8fafc;
}
.upload-zone:hover { border-color: #93c5fd; background: #eff6ff; }
.upload-zone.has-preview { border-style: solid; border-color: #bfdbfe; }
.preview-img { width: 100%; height: 180px; object-fit: cover; }
.upload-placeholder {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 24px; color: #94a3b8; font-size: 13px; text-align: center;
}
.upload-hint { font-size: 11px; color: #cbd5e1; }

/* Form */
.form-grid {
  display: grid; grid-template-columns: 1fr;
  gap: 12px; padding: 0 16px 16px;
}
@media (min-width: 500px) {
  .form-grid { grid-template-columns: 1fr 1fr; gap: 14px; padding: 0 20px 20px; }
}
.form-group { display: flex; flex-direction: column; gap: 5px; }
.form-group.half { grid-column: span 1; }
.form-group.form-actions-inline { justify-content: flex-end; align-items: flex-end; }
.form-label { font-size: 11px; font-weight: 600; color: #374151; text-transform: uppercase; letter-spacing: 0.05em; }
.form-input {
  padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 10px;
  font-size: 13px; color: #0f172a; outline: none; transition: border-color 0.2s;
  font-family: inherit;
}
.form-input:focus { border-color: #93c5fd; box-shadow: 0 0 0 3px rgba(147,197,253,0.2); }

.btn-clear {
  padding: 8px 16px; border-radius: 8px; border: 1px solid #fca5a5;
  background: #fef2f2; color: #dc2626; font-size: 12px; font-weight: 600;
  cursor: pointer; transition: all 0.2s;
}
.btn-clear:hover { background: #fee2e2; }

/* Footer */
.sticky-footer {
  margin-top: 24px; padding: 20px;
  background: white; border-radius: 14px; border: 1px solid #e2e8f0;
  display: flex; justify-content: flex-end;
}
.btn-save {
  display: flex; align-items: center; gap: 8px;
  padding: 12px 28px; border-radius: 12px; border: none;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white; font-size: 14px; font-weight: 700;
  cursor: pointer; transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(99,102,241,0.3);
}
.btn-save:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(99,102,241,0.4); }
.btn-save.purple { background: linear-gradient(135deg, #8b5cf6, #a78bfa); box-shadow: 0 4px 12px rgba(139,92,246,0.3); }
</style>
