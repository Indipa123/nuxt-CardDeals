<script setup lang="ts">
definePageMeta({ layout: 'admin' })
import { ref } from 'vue'

const toast = ref<{ msg: string; type: 'success' | 'error' } | null>(null)
function showToast(msg: string, type: 'success' | 'error' = 'success') {
  toast.value = { msg, type }
  setTimeout(() => { toast.value = null }, 3000)
}

const ICON_OPTIONS = [
  { label: 'Shopping Bag', value: 'ShoppingBag', emoji: '🛍️' },
  { label: 'Utensils / Dining', value: 'UtensilsCrossed', emoji: '🍽️' },
  { label: 'Plane / Travel', value: 'Plane', emoji: '✈️' },
  { label: 'Hotel', value: 'Hotel', emoji: '🏨' },
  { label: 'Graduation Cap', value: 'GraduationCap', emoji: '🎓' },
  { label: 'Shopping Cart', value: 'ShoppingCart', emoji: '🛒' },
  { label: 'Heart / Healthcare', value: 'Heart', emoji: '❤️' },
  { label: 'Smartphone / Electronics', value: 'Smartphone', emoji: '📱' },
  { label: 'Car', value: 'Car', emoji: '🚗' },
  { label: 'Home', value: 'Home', emoji: '🏠' },
  { label: 'Game', value: 'Gamepad', emoji: '🎮' },
  { label: 'Music', value: 'Music', emoji: '🎵' },
  { label: 'Book', value: 'Book', emoji: '📚' },
  { label: 'Camera', value: 'Camera', emoji: '📷' },
]

const COLOR_OPTIONS = [
  { label: 'Blue', value: 'bg-blue-500', hex: '#3b82f6' },
  { label: 'Indigo', value: 'bg-indigo-500', hex: '#6366f1' },
  { label: 'Purple', value: 'bg-purple-500', hex: '#8b5cf6' },
  { label: 'Pink', value: 'bg-pink-500', hex: '#ec4899' },
  { label: 'Red', value: 'bg-red-500', hex: '#ef4444' },
  { label: 'Orange', value: 'bg-orange-500', hex: '#f97316' },
  { label: 'Amber', value: 'bg-amber-500', hex: '#f59e0b' },
  { label: 'Yellow', value: 'bg-yellow-500', hex: '#eab308' },
  { label: 'Lime', value: 'bg-lime-500', hex: '#84cc16' },
  { label: 'Green', value: 'bg-green-500', hex: '#22c55e' },
  { label: 'Teal', value: 'bg-teal-500', hex: '#14b8a6' },
  { label: 'Cyan', value: 'bg-cyan-500', hex: '#06b6d4' },
]

const existingCategories = ref([
  { id: 'electronics', name: 'Electronics', icon: '📱', color: '#6366f1', count: 42 },
  { id: 'fashion', name: 'Fashion', icon: '🛍️', color: '#ec4899', count: 156 },
  { id: 'dining', name: 'Dining', icon: '🍽️', color: '#f97316', count: 243 },
  { id: 'travel', name: 'Travel', icon: '✈️', color: '#3b82f6', count: 89 },
  { id: 'hotels', name: 'Hotels', icon: '🏨', color: '#14b8a6', count: 78 },
  { id: 'education', name: 'Education', icon: '🎓', color: '#8b5cf6', count: 67 },
  { id: 'supermarket', name: 'Supermarket', icon: '🛒', color: '#22c55e', count: 198 },
  { id: 'healthcare', name: 'Healthcare', icon: '❤️', color: '#ef4444', count: 124 },
])

const form = ref({
  name: '',
  id: '',
  icon: ICON_OPTIONS[0],
  color: COLOR_OPTIONS[0],
  imageUrl: '',
  initialCount: 0,
  imageFile: null as File | null,
  imagePreview: null as string | null,
})

function autoId() {
  form.value.id = form.value.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

function onImageChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  form.value.imageFile = file
  form.value.imagePreview = URL.createObjectURL(file)
  form.value.imageUrl = ''
}

function clearImage() {
  form.value.imageFile = null
  form.value.imagePreview = null
  form.value.imageUrl = ''
}

function validate(): boolean {
  if (!form.value.name.trim()) { showToast('Category name is required', 'error'); return false }
  if (!form.value.id.trim()) { showToast('Category ID is required', 'error'); return false }
  if (!form.value.imageFile && !form.value.imageUrl.trim()) { showToast('Please upload or provide an image URL', 'error'); return false }
  return true
}

function submitCategory() {
  if (!validate()) return
  // In real implementation this would call an API / update mockData
  existingCategories.value.push({
    id: form.value.id,
    name: form.value.name,
    icon: form.value.icon.emoji,
    color: form.value.color.hex,
    count: form.value.initialCount,
  })
  showToast(`Category "${form.value.name}" added successfully!`)
  resetForm()
}

function resetForm() {
  form.value = {
    name: '', id: '', icon: ICON_OPTIONS[0], color: COLOR_OPTIONS[0],
    imageUrl: '', initialCount: 0, imageFile: null, imagePreview: null,
  }
}
</script>

<template>
  <div>
    <!-- Toast -->
    <Transition name="toast">
      <div v-if="toast" :class="['toast', toast.type]">
        <svg v-if="toast.type === 'success'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        {{ toast.msg }}
      </div>
    </Transition>

    <div class="layout">
      <!-- ── Left: Form ── -->
      <div class="form-pane">
        <div class="pane-header">
          <h2 class="pane-title">Add New Category</h2>
          <p class="pane-sub">Fill in all details to create a new browsable category on the homepage.</p>
        </div>

        <div class="form-body">
          <!-- Name & ID -->
          <div class="section-block">
            <div class="block-title">Basic Info</div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Category Name <span class="required">*</span></label>
                <input v-model="form.name" class="form-input" placeholder="e.g. Automotive" @input="autoId" />
              </div>
              <div class="form-group">
                <label class="form-label">Category ID <span class="required">*</span></label>
                <input v-model="form.id" class="form-input" placeholder="e.g. automotive" />
                <span class="form-hint">Auto-generated from name. Lowercase, no spaces.</span>
              </div>
            </div>
            <div class="form-group" style="margin-top:12px">
              <label class="form-label">Initial Offer Count</label>
              <input v-model.number="form.initialCount" type="number" min="0" class="form-input" placeholder="0" style="max-width:160px" />
              <span class="form-hint">Display number shown on the category card.</span>
            </div>
          </div>

          <!-- Icon -->
          <div class="section-block">
            <div class="block-title">Category Icon</div>
            <div class="icon-grid">
              <button
                v-for="ic in ICON_OPTIONS" :key="ic.value"
                :class="['icon-btn', form.icon.value === ic.value ? 'selected' : '']"
                @click="form.icon = ic"
                :title="ic.label"
              >
                <span class="icon-emoji">{{ ic.emoji }}</span>
                <span class="icon-name">{{ ic.label }}</span>
              </button>
            </div>
          </div>

          <!-- Color -->
          <div class="section-block">
            <div class="block-title">Accent Color</div>
            <div class="color-grid">
              <button
                v-for="c in COLOR_OPTIONS" :key="c.value"
                :class="['color-btn', form.color.value === c.value ? 'selected' : '']"
                :style="{ background: c.hex }"
                @click="form.color = c"
                :title="c.label"
              >
                <svg v-if="form.color.value === c.value" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              </button>
            </div>
            <div class="color-preview" :style="{ background: form.color.hex }">
              <span>{{ form.icon.emoji }}</span>
              <span>{{ form.name || 'Category Name' }}</span>
            </div>
          </div>

          <!-- Image -->
          <div class="section-block">
            <div class="block-title">Category Image <span class="required">*</span></div>
            <div class="upload-zone" :class="{ 'has-preview': form.imagePreview }" @click="($refs.catImg as HTMLInputElement)?.click()">
              <img v-if="form.imagePreview" :src="form.imagePreview" class="preview-img" alt="preview" />
              <div v-else class="upload-placeholder">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
                <span>Click to upload category image</span>
                <span class="upload-hint">Recommended: 1080 × 720px • JPG/PNG</span>
              </div>
              <input ref="catImg" type="file" accept="image/*" style="display:none" @change="onImageChange" />
            </div>
            <div class="or-divider"><span>or paste image URL</span></div>
            <input v-model="form.imageUrl" class="form-input" placeholder="https://images.unsplash.com/..." :disabled="!!form.imagePreview" />
            <button v-if="form.imagePreview" class="btn-sm-clear" @click="clearImage">Remove Image</button>
          </div>
        </div>

        <!-- Actions -->
        <div class="form-footer">
          <button class="btn-ghost" @click="resetForm">Reset</button>
          <button class="btn-primary" @click="submitCategory">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add Category
          </button>
        </div>
      </div>

      <!-- ── Right: Existing ── -->
      <div class="list-pane">
        <div class="pane-header">
          <h2 class="pane-title">Existing Categories</h2>
          <span class="count-badge">{{ existingCategories.length }}<span> total</span></span>
        </div>
        <div class="category-list">
          <div v-for="cat in existingCategories" :key="cat.id" class="cat-item">
            <div class="cat-icon" :style="{ background: cat.color }">{{ cat.icon }}</div>
            <div class="cat-info">
              <span class="cat-name">{{ cat.name }}</span>
              <span class="cat-id">ID: {{ cat.id }}</span>
            </div>
            <span class="cat-count">{{ cat.count }} offers</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Toast */
.toast {
  position: fixed; top: 24px; right: 24px; z-index: 9999;
  display: flex; align-items: center; gap: 8px;
  padding: 12px 20px; border-radius: 12px; font-size: 13px; font-weight: 600;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}
.toast.success { background: #10b981; color: white; }
.toast.error { background: #ef4444; color: white; }
.toast-enter-active, .toast-leave-active { transition: all 0.3s; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateY(-12px); }

/* Layout */
.layout { display: grid; grid-template-columns: 1fr 340px; gap: 24px; align-items: start; }

/* Panes */
.form-pane, .list-pane {
  background: white; border-radius: 20px;
  border: 1px solid #e2e8f0; overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.pane-header {
  padding: 24px 28px; border-bottom: 1px solid #f1f5f9;
  background: #f8fafc;
  display: flex; justify-content: space-between; align-items: flex-start;
}
.pane-title { font-size: 16px; font-weight: 700; color: #0f172a; }
.pane-sub { font-size: 12px; color: #64748b; margin-top: 4px; }
.count-badge { background: #eff6ff; color: #3b82f6; font-size: 13px; font-weight: 700; padding: 4px 12px; border-radius: 20px; }
.count-badge span { font-weight: 400; color: #93c5fd; }

.form-body { padding: 24px 28px; display: flex; flex-direction: column; gap: 24px; }

/* Blocks */
.section-block { display: flex; flex-direction: column; gap: 12px; }
.block-title { font-size: 11px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.07em; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.form-group { display: flex; flex-direction: column; gap: 5px; }
.form-label { font-size: 12px; font-weight: 600; color: #475569; }
.required { color: #ef4444; }
.form-hint { font-size: 11px; color: #94a3b8; }
.form-input {
  padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 10px;
  font-size: 13px; color: #0f172a; outline: none; font-family: inherit;
  transition: border-color 0.2s;
}
.form-input:focus { border-color: #93c5fd; box-shadow: 0 0 0 3px rgba(147,197,253,0.2); }
.form-input:disabled { background: #f8fafc; color: #94a3b8; }

/* Icons */
.icon-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
.icon-btn {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  padding: 10px 6px; border-radius: 10px; border: 1.5px solid #e2e8f0;
  background: #f8fafc; cursor: pointer; transition: all 0.2s;
}
.icon-btn:hover { border-color: #93c5fd; background: #eff6ff; }
.icon-btn.selected { border-color: #3b82f6; background: #eff6ff; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
.icon-emoji { font-size: 20px; }
.icon-name { font-size: 9px; color: #64748b; text-align: center; line-height: 1.3; }

/* Colors */
.color-grid { display: flex; flex-wrap: wrap; gap: 8px; }
.color-btn {
  width: 32px; height: 32px; border-radius: 50%; border: 2px solid transparent;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: all 0.2s;
}
.color-btn.selected { border-color: #0f172a; transform: scale(1.15); box-shadow: 0 0 0 3px rgba(0,0,0,0.1); }
.color-preview {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 16px; border-radius: 10px; color: white;
  font-size: 14px; font-weight: 600; margin-top: 4px;
}

/* Upload */
.upload-zone {
  border: 2px dashed #e2e8f0; border-radius: 12px;
  min-height: 160px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden; transition: all 0.2s; background: #f8fafc;
}
.upload-zone:hover { border-color: #93c5fd; background: #eff6ff; }
.upload-zone.has-preview { border-style: solid; border-color: #bfdbfe; }
.preview-img { width: 100%; height: 160px; object-fit: cover; }
.upload-placeholder {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 24px; color: #94a3b8; font-size: 13px; text-align: center;
}
.upload-hint { font-size: 11px; color: #cbd5e1; }
.or-divider {
  display: flex; align-items: center; gap: 12px; color: #94a3b8; font-size: 11px;
}
.or-divider::before, .or-divider::after { content: ''; flex: 1; height: 1px; background: #e2e8f0; }
.btn-sm-clear {
  margin-top: 6px; padding: 6px 14px; border-radius: 8px;
  border: 1px solid #fca5a5; background: #fef2f2; color: #dc2626;
  font-size: 12px; font-weight: 600; cursor: pointer;
}

/* Footer */
.form-footer {
  display: flex; justify-content: flex-end; gap: 12px;
  padding: 20px 28px; border-top: 1px solid #f1f5f9; background: #f8fafc;
}
.btn-ghost {
  padding: 10px 22px; border-radius: 10px; border: 1px solid #e2e8f0;
  background: white; color: #374151; font-size: 13px; font-weight: 600;
  cursor: pointer; transition: all 0.2s;
}
.btn-ghost:hover { background: #f1f5f9; }
.btn-primary {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 24px; border-radius: 10px; border: none;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white; font-size: 13px; font-weight: 700; cursor: pointer;
  box-shadow: 0 4px 12px rgba(16,185,129,0.3); transition: all 0.2s;
}
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(16,185,129,0.4); }

/* Category List */
.category-list { padding: 12px 16px; display: flex; flex-direction: column; gap: 4px; }
.cat-item {
  display: flex; align-items: center; gap: 12px;
  padding: 12px; border-radius: 10px; transition: background 0.2s;
}
.cat-item:hover { background: #f8fafc; }
.cat-icon {
  width: 38px; height: 38px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; flex-shrink: 0;
}
.cat-info { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.cat-name { font-size: 13px; font-weight: 600; color: #0f172a; }
.cat-id { font-size: 10px; color: #94a3b8; }
.cat-count { font-size: 11px; color: #64748b; white-space: nowrap; background: #f1f5f9; padding: 2px 8px; border-radius: 20px; }
</style>
