<script setup lang="ts">
definePageMeta({ layout: 'admin' })
import { ref, computed } from 'vue'

const toast = ref<{ msg: string; type: 'success' | 'error' } | null>(null)
function showToast(msg: string, type: 'success' | 'error' = 'success') {
  toast.value = { msg, type }
  setTimeout(() => { toast.value = null }, 3500)
}

const CATEGORIES = ['Fashion', 'Dining', 'Hotels', 'Electronics', 'Supermarket', 'Travel', 'Education', 'Healthcare']
const BANKS = ['BOC', 'Commercial Bank', 'HNB', 'NDB Bank', 'NTB Bank', "People's Bank", 'Sampath Bank', 'Seylan Bank']
const CARD_TYPES = ['Credit', 'Debit']
const CARD_NETWORKS = ['VISA', 'MasterCard', 'Both']
const APPLIES_TO = ['Physical Store', 'Online Store', 'Both']
const SRI_LANKA_DISTRICTS = [
  'Ampara', 'Anuradhapura', 'Badulla', 'Batticaloa', 'Colombo', 'Galle',
  'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara', 'Kandy', 'Kegalle',
  'Kilinochchi', 'Kurunegala', 'Mannar', 'Matale', 'Matara', 'Monaragala',
  'Mullaitivu', 'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Ratnapura',
  'Trincomalee', 'Vavuniya'
]

/* ─ Empty bank offer template ─ */
function emptyBankOffer() {
  return {
    _key: Date.now() + Math.random(),
    bank: '',
    bankLogo: '',
    cardType: 'Credit' as string,
    cardNetwork: 'VISA' as string,
    discount: '',
    appliesTo: 'Physical Store' as string,
    startDate: '',
    endDate: '',
    description: '',
    terms: [''],
    bankLogoPreview: null as string | null,
    bankLogoFile: null as File | null,
  }
}

/* ─ Main form state ─ */
const form = ref({
  id: '',
  brand: '',
  category: '',
  discount: '',
  location: '',
  website: '',
  expiryDate: '',
  description: '',
  terms: [''],
  districts: [] as string[],

  // Brand logo
  brandLogoUrl: '',
  brandLogoFile: null as File | null,
  brandLogoPreview: null as string | null,

  // Main banners (horizontal, 1920px wide) — up to 3
  mainBanners: [
    { url: '', file: null as File | null, preview: null as string | null },
    { url: '', file: null as File | null, preview: null as string | null },
    { url: '', file: null as File | null, preview: null as string | null },
  ],

  // Vertical banners (sidebar, 800px wide) — 3 slots
  verticalBanners: [
    { url: '', file: null as File | null, preview: null as string | null },
    { url: '', file: null as File | null, preview: null as string | null },
    { url: '', file: null as File | null, preview: null as string | null },
  ],

  // Bank offers
  bankOffers: [emptyBankOffer()],
})

const currentStep = ref(1)
const totalSteps = 4

const stepLabels = ['Basic Info', 'Images & Banners', 'Districts', 'Bank Offers']

/* ─ Term line management ─ */
function addTerm(arr: string[]) { arr.push('') }
function removeTerm(arr: string[], i: number) { if (arr.length > 1) arr.splice(i, 1) }

/* ─ Bank offer management ─ */
function addBankOffer() { form.value.bankOffers.push(emptyBankOffer()) }
function removeBankOffer(i: number) {
  if (form.value.bankOffers.length > 1) form.value.bankOffers.splice(i, 1)
}

/* ─ File uploads ─ */
function onBrandLogo(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  form.value.brandLogoFile = file
  form.value.brandLogoPreview = URL.createObjectURL(file)
}
function onBannerFile(bannerArr: any[], idx: number, e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  bannerArr[idx].file = file
  bannerArr[idx].preview = URL.createObjectURL(file)
  bannerArr[idx].url = ''
}
function clearBanner(bannerArr: any[], idx: number) {
  bannerArr[idx].file = null
  bannerArr[idx].preview = null
  bannerArr[idx].url = ''
}
function onBankLogo(offer: any, e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  offer.bankLogoFile = file
  offer.bankLogoPreview = URL.createObjectURL(file)
  offer.bankLogo = ''
}

/* ─ Districts ─ */
function toggleDistrict(d: string) {
  const idx = form.value.districts.indexOf(d)
  if (idx === -1) form.value.districts.push(d)
  else form.value.districts.splice(idx, 1)
}
function toggleAllDistricts() {
  if (form.value.districts.length === SRI_LANKA_DISTRICTS.length)
    form.value.districts = []
  else
    form.value.districts = [...SRI_LANKA_DISTRICTS]
}

/* ─ Auto ID ─ */
function autoId() {
  form.value.id = String(Date.now()).slice(-4) + '-' +
    form.value.brand.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

/* ─ Validation per step ─ */
function validateStep(): boolean {
  if (currentStep.value === 1) {
    if (!form.value.brand.trim()) { showToast('Brand name is required', 'error'); return false }
    if (!form.value.category) { showToast('Category is required', 'error'); return false }
    if (!form.value.discount.trim()) { showToast('Discount is required', 'error'); return false }
    if (!form.value.location.trim()) { showToast('Location is required', 'error'); return false }
    if (!form.value.description.trim()) { showToast('Description is required', 'error'); return false }
  }
  if (currentStep.value === 2) {
    if (!form.value.brandLogoPreview && !form.value.brandLogoUrl.trim())
      { showToast('Brand logo is required', 'error'); return false }
  }
  if (currentStep.value === 3) {
    if (form.value.districts.length === 0) { showToast('Select at least one district', 'error'); return false }
  }
  if (currentStep.value === 4) {
    for (const o of form.value.bankOffers) {
      if (!o.bank) { showToast('Each bank offer must have a bank selected', 'error'); return false }
      if (!o.discount.trim()) { showToast('Each bank offer must have a discount value', 'error'); return false }
      if (!o.startDate || !o.endDate) { showToast('Each bank offer needs a validity period', 'error'); return false }
    }
  }
  return true
}

function nextStep() { if (validateStep() && currentStep.value < totalSteps) currentStep.value++ }
function prevStep() { if (currentStep.value > 1) currentStep.value-- }

function submitOffer() {
  if (!validateStep()) return
  showToast(`Offer "${form.value.brand}" created successfully! 🎉`)
  // Reset
  setTimeout(() => {
    currentStep.value = 1
    form.value = {
      id: '', brand: '', category: '', discount: '', location: '',
      website: '', expiryDate: '', description: '', terms: [''], districts: [],
      brandLogoUrl: '', brandLogoFile: null, brandLogoPreview: null,
      mainBanners: [
        { url: '', file: null, preview: null },
        { url: '', file: null, preview: null },
        { url: '', file: null, preview: null },
      ],
      verticalBanners: [
        { url: '', file: null, preview: null },
        { url: '', file: null, preview: null },
        { url: '', file: null, preview: null },
      ],
      bankOffers: [emptyBankOffer()],
    }
  }, 800)
}
</script>

<template>
  <div class="offers-page">
    <!-- Toast -->
    <Transition name="toast">
      <div v-if="toast" :class="['toast', toast.type]">
        <svg v-if="toast.type === 'success'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        {{ toast.msg }}
      </div>
    </Transition>

    <!-- Step Progress Bar -->
    <div class="stepper">
      <div v-for="(label, idx) in stepLabels" :key="idx" class="step-item">
        <div :class="['step-circle', currentStep > idx + 1 ? 'done' : currentStep === idx + 1 ? 'active' : '']">
          <svg v-if="currentStep > idx + 1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          <span v-else>{{ idx + 1 }}</span>
        </div>
        <span :class="['step-label', currentStep === idx + 1 ? 'active' : '']">{{ label }}</span>
        <div v-if="idx < stepLabels.length - 1" class="step-line" :class="{ done: currentStep > idx + 1 }"></div>
      </div>
    </div>

    <!-- Card container -->
    <div class="form-card">

      <!-- ══ STEP 1: Basic Info ══ -->
      <div v-if="currentStep === 1" class="step-body">
        <div class="step-heading">
          <div class="step-icon orange">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/></svg>
          </div>
          <div>
            <h2 class="step-title">Basic Offer Information</h2>
            <p class="step-sub">Core details that appear on offer cards and listing pages.</p>
          </div>
        </div>

        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Brand / Store Name <span class="req">*</span></label>
            <input v-model="form.brand" class="form-input" placeholder="e.g. Fashion Bug" @input="autoId" />
          </div>
          <div class="form-group">
            <label class="form-label">Category <span class="req">*</span></label>
            <select v-model="form.category" class="form-input">
              <option value="" disabled>Select category</option>
              <option v-for="c in CATEGORIES" :key="c">{{ c }}</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Headline Discount <span class="req">*</span></label>
            <input v-model="form.discount" class="form-input" placeholder="e.g. 30% OFF" />
          </div>
          <div class="form-group">
            <label class="form-label">Expiry Date</label>
            <input v-model="form.expiryDate" class="form-input" placeholder="e.g. Mar 31" />
          </div>
          <div class="form-group form-full">
            <label class="form-label">Location / Coverage <span class="req">*</span></label>
            <input v-model="form.location" class="form-input" placeholder="e.g. All Outlets / Colombo, Kandy, Galle" />
          </div>
          <div class="form-group form-full">
            <label class="form-label">Website URL</label>
            <input v-model="form.website" class="form-input" placeholder="https://brandname.lk/" />
          </div>
          <div class="form-group form-full">
            <label class="form-label">Offer Description <span class="req">*</span></label>
            <textarea v-model="form.description" class="form-input form-textarea" rows="3" placeholder="Describe the offer in detail..."></textarea>
          </div>
          <!-- Global Terms -->
          <div class="form-group form-full">
            <label class="form-label">General Terms & Conditions</label>
            <div class="terms-list">
              <div v-for="(term, i) in form.terms" :key="i" class="term-row">
                <input v-model="form.terms[i]" class="form-input" :placeholder="'Term ' + (i + 1)" />
                <button class="term-del" @click="removeTerm(form.terms, i)" :disabled="form.terms.length === 1">×</button>
              </div>
              <button class="btn-add-term" @click="addTerm(form.terms)">+ Add Term</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ══ STEP 2: Images & Banners ══ -->
      <div v-if="currentStep === 2" class="step-body">
        <div class="step-heading">
          <div class="step-icon blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
          <div>
            <h2 class="step-title">Images & Banners</h2>
            <p class="step-sub">Upload brand logo, horizontal main banners, and vertical sidebar banners.</p>
          </div>
        </div>

        <!-- Brand Logo -->
        <div class="img-section">
          <div class="img-section-title">Brand Logo <span class="req">*</span></div>
          <div class="img-section-sub">This appears in offer cards, the detail page header, and the bank offers table.</div>
          <div class="logo-row">
            <div class="logo-upload" @click="($refs.brandLogoInput as HTMLInputElement)?.click()">
              <img v-if="form.brandLogoPreview" :src="form.brandLogoPreview" class="logo-preview" />
              <div v-else class="upload-placeholder small">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <span>Upload Logo</span>
              </div>
              <input ref="brandLogoInput" type="file" accept="image/*" style="display:none" @change="onBrandLogo" />
            </div>
            <div class="logo-or">
              <span>or enter URL</span>
              <input v-model="form.brandLogoUrl" class="form-input" placeholder="https://..." :disabled="!!form.brandLogoPreview" style="flex:1" />
              <button v-if="form.brandLogoPreview" class="btn-sm-red" @click="form.brandLogoPreview=null; form.brandLogoFile=null">Remove</button>
            </div>
          </div>
        </div>

        <!-- Main Banners -->
        <div class="img-section">
          <div class="img-section-title">Main Banners (Horizontal)</div>
          <div class="img-section-sub">Up to 3 wide banners shown at the top of the offer detail page. Recommended: 1920 × 800px.</div>
          <div class="banners-grid">
            <div v-for="(b, i) in form.mainBanners" :key="i" class="banner-slot">
              <div class="slot-label">Banner {{ i + 1 }}</div>
              <div class="upload-zone horiz" :class="{ 'has-preview': b.preview }" @click="($refs['mb' + i] as HTMLInputElement)?.click()">
                <img v-if="b.preview" :src="b.preview" class="banner-thumb" />
                <div v-else class="upload-placeholder">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span>Upload Main Banner {{ i + 1 }}</span>
                </div>
                <input :ref="'mb' + i" type="file" accept="image/*" style="display:none" @change="onBannerFile(form.mainBanners, i, $event)" />
              </div>
              <div class="url-row">
                <input v-model="b.url" class="form-input" placeholder="Or paste image URL" :disabled="!!b.preview" />
                <button v-if="b.preview" class="btn-sm-red" @click="clearBanner(form.mainBanners, i)">×</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Vertical Banners -->
        <div class="img-section">
          <div class="img-section-title">Vertical Banners (Sidebar)</div>
          <div class="img-section-sub">3 portrait banners shown in the right sidebar of the offer detail page. Recommended: 800 × 1000px.</div>
          <div class="banners-grid three-col">
            <div v-for="(b, i) in form.verticalBanners" :key="i" class="banner-slot">
              <div class="slot-label">Sidebar Banner {{ i + 1 }}</div>
              <div class="upload-zone vert" :class="{ 'has-preview': b.preview }" @click="($refs['vb' + i] as HTMLInputElement)?.click()">
                <img v-if="b.preview" :src="b.preview" class="vert-thumb" />
                <div v-else class="upload-placeholder">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span>Sidebar { { i + 1 }}</span>
                </div>
                <input :ref="'vb' + i" type="file" accept="image/*" style="display:none" @change="onBannerFile(form.verticalBanners, i, $event)" />
              </div>
              <div class="url-row">
                <input v-model="b.url" class="form-input" placeholder="Or paste URL" :disabled="!!b.preview" />
                <button v-if="b.preview" class="btn-sm-red" @click="clearBanner(form.verticalBanners, i)">×</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ══ STEP 3: Districts ══ -->
      <div v-if="currentStep === 3" class="step-body">
        <div class="step-heading">
          <div class="step-icon emerald">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a9 9 0 010 18A9 9 0 0112 2z"/><path d="M12 2c2.5 4 4 8 4 9a4 4 0 01-8 0c0-1 1.5-5 4-9z"/></svg>
          </div>
          <div>
            <h2 class="step-title">Coverage Districts</h2>
            <p class="step-sub">Select all districts where this offer is available. Used by the Location filter.</p>
          </div>
        </div>

        <div class="districts-bar">
          <span class="selected-count">{{ form.districts.length }} of {{ SRI_LANKA_DISTRICTS.length }} selected</span>
          <button class="btn-toggle-all" @click="toggleAllDistricts">
            {{ form.districts.length === SRI_LANKA_DISTRICTS.length ? 'Deselect All' : 'Select All' }}
          </button>
        </div>

        <div class="district-grid">
          <button
            v-for="d in SRI_LANKA_DISTRICTS" :key="d"
            :class="['district-btn', form.districts.includes(d) ? 'selected' : '']"
            @click="toggleDistrict(d)"
          >
            <svg v-if="form.districts.includes(d)" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            {{ d }}
          </button>
        </div>
      </div>

      <!-- ══ STEP 4: Bank Offers ══ -->
      <div v-if="currentStep === 4" class="step-body">
        <div class="step-heading">
          <div class="step-icon purple">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
          </div>
          <div>
            <h2 class="step-title">Bank Offers & Card Details</h2>
            <p class="step-sub">Add one entry per bank per card type. These appear in the offer detail table.</p>
          </div>
        </div>

        <div class="bank-offers-list">
          <div v-for="(bo, idx) in form.bankOffers" :key="bo._key" class="bank-offer-card">
            <div class="bank-offer-header">
              <span class="bo-num">Bank Offer #{{ idx + 1 }}</span>
              <button v-if="form.bankOffers.length > 1" class="bo-del" @click="removeBankOffer(idx)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                Remove
              </button>
            </div>

            <div class="form-grid-2">
              <!-- Bank select -->
              <div class="form-group">
                <label class="form-label">Bank <span class="req">*</span></label>
                <select v-model="bo.bank" class="form-input">
                  <option value="" disabled>Select bank</option>
                  <option v-for="b in BANKS" :key="b">{{ b }}</option>
                </select>
              </div>

              <!-- Bank logo -->
              <div class="form-group">
                <label class="form-label">Bank Logo</label>
                <div class="logo-row compact">
                  <div class="logo-thumb-mini" @click="($refs['bl' + idx] as HTMLInputElement)?.click()">
                    <img v-if="bo.bankLogoPreview" :src="bo.bankLogoPreview" class="logo-thumb-img" />
                    <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                    <input :ref="'bl' + idx" type="file" accept="image/*" style="display:none" @change="onBankLogo(bo, $event)" />
                  </div>
                  <input v-model="bo.bankLogo" class="form-input" placeholder="Or paste logo URL" :disabled="!!bo.bankLogoPreview" style="flex:1" />
                  <button v-if="bo.bankLogoPreview" class="btn-sm-red" @click="bo.bankLogoPreview=null; bo.bankLogoFile=null">×</button>
                </div>
              </div>

              <!-- Card Type -->
              <div class="form-group">
                <label class="form-label">Card Type <span class="req">*</span></label>
                <div class="toggle-group">
                  <button v-for="ct in CARD_TYPES" :key="ct" :class="['toggle-btn', bo.cardType === ct ? 'active' : '']" @click="bo.cardType = ct">{{ ct }}</button>
                </div>
              </div>

              <!-- Card Network -->
              <div class="form-group">
                <label class="form-label">Card Network <span class="req">*</span></label>
                <div class="toggle-group">
                  <button v-for="cn in CARD_NETWORKS" :key="cn" :class="['toggle-btn', bo.cardNetwork === cn ? 'active' : '']" @click="bo.cardNetwork = cn">{{ cn }}</button>
                </div>
              </div>

              <!-- Discount -->
              <div class="form-group">
                <label class="form-label">Discount % <span class="req">*</span></label>
                <input v-model="bo.discount" class="form-input" placeholder="e.g. 25%" />
              </div>

              <!-- Applies To -->
              <div class="form-group">
                <label class="form-label">Applies To <span class="req">*</span></label>
                <select v-model="bo.appliesTo" class="form-input">
                  <option v-for="a in APPLIES_TO" :key="a">{{ a }}</option>
                </select>
              </div>

              <!-- Validity period -->
              <div class="form-group">
                <label class="form-label">Start Date <span class="req">*</span></label>
                <input v-model="bo.startDate" type="date" class="form-input" />
              </div>
              <div class="form-group">
                <label class="form-label">End Date <span class="req">*</span></label>
                <input v-model="bo.endDate" type="date" class="form-input" />
              </div>

              <!-- Description -->
              <div class="form-group form-full">
                <label class="form-label">Bank Offer Description</label>
                <textarea v-model="bo.description" class="form-input form-textarea" rows="2" placeholder="Describe this specific bank's offer..."></textarea>
              </div>

              <!-- Terms -->
              <div class="form-group form-full">
                <label class="form-label">Terms & Conditions for this Bank Offer</label>
                <div class="terms-list">
                  <div v-for="(t, ti) in bo.terms" :key="ti" class="term-row">
                    <input v-model="bo.terms[ti]" class="form-input" :placeholder="'Term ' + (ti + 1)" />
                    <button class="term-del" @click="removeTerm(bo.terms, ti)" :disabled="bo.terms.length === 1">×</button>
                  </div>
                  <button class="btn-add-term" @click="addTerm(bo.terms)">+ Add Term</button>
                </div>
              </div>
            </div>
          </div>

          <button class="btn-add-bank" @click="addBankOffer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add Another Bank Offer
          </button>
        </div>
      </div>

      <!-- Navigation Footer -->
      <div class="step-footer">
        <button v-if="currentStep > 1" class="btn-back" @click="prevStep">← Back</button>
        <div style="flex:1"></div>
        <div class="step-counter">Step {{ currentStep }} of {{ totalSteps }}</div>
        <button v-if="currentStep < totalSteps" class="btn-next" @click="nextStep">Continue →</button>
        <button v-else class="btn-submit" @click="submitOffer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          Publish Offer
        </button>
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

/* Stepper */
.stepper {
  display: flex; align-items: center; gap: 0;
  background: white; border-radius: 16px; padding: 20px 28px;
  border: 1px solid #e2e8f0; margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}
.step-item { display: flex; align-items: center; gap: 8px; }
.step-circle {
  width: 32px; height: 32px; border-radius: 50%;
  border: 2px solid #e2e8f0; background: white; color: #94a3b8;
  font-size: 13px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; transition: all 0.3s;
}
.step-circle.active { border-color: #3b82f6; background: #3b82f6; color: white; box-shadow: 0 0 0 4px rgba(59,130,246,0.2); }
.step-circle.done { border-color: #10b981; background: #10b981; color: white; }
.step-label { font-size: 12px; font-weight: 600; color: #94a3b8; white-space: nowrap; }
.step-label.active { color: #0f172a; }
.step-line { flex: 1; min-width: 32px; height: 2px; background: #e2e8f0; margin: 0 8px; transition: background 0.3s; }
.step-line.done { background: #10b981; }

/* Card */
.form-card {
  background: white; border-radius: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  overflow: hidden;
}

/* Step body */
.step-body { padding: 32px; }
.step-heading {
  display: flex; align-items: flex-start; gap: 16px; margin-bottom: 28px;
  padding-bottom: 20px; border-bottom: 1px solid #f1f5f9;
}
.step-icon {
  width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
}
.step-icon.orange { background: #fffbeb; color: #f59e0b; }
.step-icon.blue { background: #eff6ff; color: #3b82f6; }
.step-icon.emerald { background: #ecfdf5; color: #10b981; }
.step-icon.purple { background: #f5f3ff; color: #8b5cf6; }
.step-title { font-size: 17px; font-weight: 700; color: #0f172a; }
.step-sub { font-size: 12px; color: #64748b; margin-top: 3px; }

/* Form grid */
.form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group.form-full { grid-column: 1 / -1; }
.form-label { font-size: 11px; font-weight: 700; color: #374151; text-transform: uppercase; letter-spacing: 0.05em; }
.req { color: #ef4444; }
.form-input {
  padding: 10px 14px; border: 1px solid #e2e8f0; border-radius: 10px;
  font-size: 13px; color: #0f172a; outline: none;
  font-family: inherit; transition: border-color 0.2s; background: #fafafa;
}
.form-input:focus { border-color: #93c5fd; background: white; box-shadow: 0 0 0 3px rgba(147,197,253,0.2); }
.form-input:disabled { background: #f1f5f9; color: #94a3b8; }
.form-textarea { resize: vertical; min-height: 80px; }

/* Terms */
.terms-list { display: flex; flex-direction: column; gap: 8px; }
.term-row { display: flex; gap: 8px; }
.term-del {
  width: 36px; flex-shrink: 0; border-radius: 8px; border: 1px solid #fca5a5;
  background: #fef2f2; color: #dc2626; font-size: 16px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
}
.term-del:disabled { opacity: 0.4; cursor: not-allowed; }
.btn-add-term {
  align-self: flex-start; padding: 8px 14px; border-radius: 8px;
  border: 1.5px dashed #cbd5e1; background: transparent; color: #64748b;
  font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s;
}
.btn-add-term:hover { border-color: #93c5fd; color: #3b82f6; background: #eff6ff; }

/* Images section */
.img-section { margin-bottom: 28px; }
.img-section-title { font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 4px; }
.img-section-sub { font-size: 11px; color: #94a3b8; margin-bottom: 12px; }

/* Logo */
.logo-row { display: flex; align-items: center; gap: 12px; }
.logo-row.compact { flex-direction: row; }
.logo-upload {
  width: 80px; height: 80px; flex-shrink: 0; border-radius: 12px;
  border: 2px dashed #e2e8f0; cursor: pointer; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  background: #f8fafc; transition: border-color 0.2s;
}
.logo-upload:hover { border-color: #93c5fd; }
.logo-preview { width: 100%; height: 100%; object-fit: contain; }
.logo-thumb-mini {
  width: 44px; height: 44px; flex-shrink: 0; border-radius: 8px;
  border: 2px dashed #e2e8f0; cursor: pointer; overflow: hidden;
  display: flex; align-items: center; justify-content: center; background: #f8fafc;
}
.logo-thumb-img { width: 100%; height: 100%; object-fit: contain; }

.logo-or { display: flex; align-items: center; gap: 8px; flex: 1; }

/* Banners */
.banners-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.banners-grid.three-col { grid-template-columns: repeat(3, 1fr); }
.banner-slot { display: flex; flex-direction: column; gap: 8px; }
.slot-label { font-size: 11px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; }
.upload-zone {
  border: 2px dashed #e2e8f0; border-radius: 12px; cursor: pointer;
  display: flex; align-items: center; justify-content: center; overflow: hidden;
  background: #f8fafc; transition: all 0.2s;
}
.upload-zone:hover { border-color: #93c5fd; background: #eff6ff; }
.upload-zone.has-preview { border-style: solid; border-color: #bfdbfe; }
.upload-zone.horiz { height: 110px; }
.upload-zone.vert { height: 160px; }
.banner-thumb { width: 100%; height: 100%; object-fit: cover; }
.vert-thumb { width: 100%; height: 100%; object-fit: cover; }
.upload-placeholder {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  padding: 12px; color: #94a3b8; font-size: 11px; text-align: center;
}
.upload-placeholder.small { gap: 4px; }
.url-row { display: flex; gap: 6px; }
.btn-sm-red {
  padding: 0 10px; border-radius: 8px; border: 1px solid #fca5a5;
  background: #fef2f2; color: #dc2626; font-size: 14px; font-weight: 700;
  cursor: pointer; flex-shrink: 0;
}

/* Districts */
.districts-bar {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 16px;
}
.selected-count { font-size: 13px; font-weight: 600; color: #374151; }
.btn-toggle-all {
  padding: 8px 16px; border-radius: 8px; border: 1px solid #e2e8f0;
  background: white; color: #374151; font-size: 12px; font-weight: 600; cursor: pointer;
  transition: all 0.2s;
}
.btn-toggle-all:hover { background: #f1f5f9; }
.district-grid { display: flex; flex-wrap: wrap; gap: 8px; }
.district-btn {
  display: flex; align-items: center; gap: 5px;
  padding: 8px 14px; border-radius: 8px; border: 1.5px solid #e2e8f0;
  background: #f8fafc; color: #374151; font-size: 12px; font-weight: 500;
  cursor: pointer; transition: all 0.2s;
}
.district-btn:hover { border-color: #93c5fd; background: #eff6ff; }
.district-btn.selected { border-color: #3b82f6; background: #eff6ff; color: #1d4ed8; font-weight: 700; }

/* Bank offers */
.bank-offers-list { display: flex; flex-direction: column; gap: 20px; }
.bank-offer-card {
  border: 1.5px solid #e2e8f0; border-radius: 16px; overflow: hidden;
}
.bank-offer-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 14px 20px; background: #f8fafc; border-bottom: 1px solid #f1f5f9;
}
.bo-num { font-size: 13px; font-weight: 700; color: #374151; }
.bo-del {
  display: flex; align-items: center; gap: 6px;
  padding: 6px 12px; border-radius: 8px; border: 1px solid #fca5a5;
  background: #fef2f2; color: #dc2626; font-size: 12px; font-weight: 600;
  cursor: pointer; transition: all 0.2s;
}
.bank-offer-card .form-grid-2 { padding: 20px; }

/* Toggle group */
.toggle-group { display: flex; gap: 6px; }
.toggle-btn {
  flex: 1; padding: 8px 10px; border-radius: 8px;
  border: 1.5px solid #e2e8f0; background: #f8fafc;
  color: #374151; font-size: 12px; font-weight: 600; cursor: pointer;
  transition: all 0.2s; text-align: center;
}
.toggle-btn:hover { border-color: #93c5fd; }
.toggle-btn.active { border-color: #3b82f6; background: #eff6ff; color: #1d4ed8; }

.btn-add-bank {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  width: 100%; padding: 14px; border-radius: 14px;
  border: 2px dashed #cbd5e1; background: transparent; color: #64748b;
  font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s;
}
.btn-add-bank:hover { border-color: #6366f1; color: #6366f1; background: #f5f3ff; }

/* Footer nav */
.step-footer {
  display: flex; align-items: center; gap: 12px;
  padding: 20px 32px; border-top: 1px solid #f1f5f9; background: #f8fafc;
}
.btn-back {
  padding: 10px 22px; border-radius: 10px; border: 1px solid #e2e8f0;
  background: white; color: #374151; font-size: 13px; font-weight: 600;
  cursor: pointer; transition: all 0.2s;
}
.btn-back:hover { background: #f1f5f9; }
.step-counter { font-size: 12px; color: #94a3b8; }
.btn-next {
  padding: 10px 28px; border-radius: 10px; border: none;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white; font-size: 13px; font-weight: 700; cursor: pointer;
  box-shadow: 0 4px 12px rgba(99,102,241,0.3); transition: all 0.2s;
}
.btn-next:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(99,102,241,0.4); }
.btn-submit {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 28px; border-radius: 10px; border: none;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white; font-size: 13px; font-weight: 700; cursor: pointer;
  box-shadow: 0 4px 12px rgba(16,185,129,0.3); transition: all 0.2s;
}
.btn-submit:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(16,185,129,0.4); }
</style>
