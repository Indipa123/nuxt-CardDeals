<script setup lang="ts">
definePageMeta({ layout: 'admin' })
</script>

<template>
  <div class="dashboard">
    <!-- Stat Cards -->
    <div class="stat-grid">
      <div class="stat-card blue">
        <div class="stat-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
          </svg>
        </div>
        <div class="stat-body">
          <div class="stat-value">5</div>
          <div class="stat-label">Main Banners</div>
          <div class="stat-sub">Home hero carousel</div>
        </div>
        <div class="stat-badge">Live</div>
      </div>

      <div class="stat-card purple">
        <div class="stat-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="20" height="10" rx="2"/>
          </svg>
        </div>
        <div class="stat-body">
          <div class="stat-value">5</div>
          <div class="stat-label">Mid Banners</div>
          <div class="stat-sub">Secondary carousel</div>
        </div>
        <div class="stat-badge">Live</div>
      </div>

      <div class="stat-card emerald">
        <div class="stat-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6h16M4 12h8M4 18h12"/>
          </svg>
        </div>
        <div class="stat-body">
          <div class="stat-value">8</div>
          <div class="stat-label">Categories</div>
          <div class="stat-sub">Active categories</div>
        </div>
        <div class="stat-badge">Active</div>
      </div>

      <div class="stat-card orange">
        <div class="stat-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
          </svg>
        </div>
        <div class="stat-body">
          <div class="stat-value">12</div>
          <div class="stat-label">Offers</div>
          <div class="stat-sub">Total listed offers</div>
        </div>
        <div class="stat-badge">Active</div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="section-title">Quick Actions</div>
    <div class="quick-grid">
      <NuxtLink to="/admin/banners" class="quick-card">
        <div class="quick-icon blue">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M8 12l3 3 5-6"/>
          </svg>
        </div>
        <div class="quick-body">
          <div class="quick-title">Upload Banners</div>
          <div class="quick-desc">Add or replace home page hero and mid-section banners</div>
        </div>
        <svg class="quick-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </NuxtLink>

      <NuxtLink to="/admin/categories" class="quick-card">
        <div class="quick-icon emerald">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6h16M4 12h8M4 18h12"/><circle cx="20" cy="18" r="3"/><path d="M20 16v2l1 1"/>
          </svg>
        </div>
        <div class="quick-body">
          <div class="quick-title">Add Category</div>
          <div class="quick-desc">Create a new browsable category with icon and image</div>
        </div>
        <svg class="quick-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </NuxtLink>

      <NuxtLink to="/admin/offers" class="quick-card">
        <div class="quick-icon orange">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
            <circle cx="7" cy="7" r="1.5" fill="currentColor"/>
          </svg>
        </div>
        <div class="quick-body">
          <div class="quick-title">Add New Offer</div>
          <div class="quick-desc">Create a full offer listing with bank deals and banners</div>
        </div>
        <svg class="quick-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </NuxtLink>
    </div>

    <!-- Recent Activity Placeholder -->
    <div class="section-title" style="margin-top:32px">Recent Activity</div>
    <div class="activity-card">
      <div class="activity-item" v-for="act in activities" :key="act.id">
        <div :class="['act-dot', act.color]"></div>
        <div class="act-content">
          <span class="act-text">{{ act.text }}</span>
          <span class="act-time">{{ act.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      activities: [
        { id: 1, text: 'Admin dashboard ready — no changes made to live site', time: 'Just now', color: 'green' },
        { id: 2, text: 'Use the quick actions above to manage content', time: 'Today', color: 'blue' },
        { id: 3, text: 'All uploads will reflect on the CardDeals homepage', time: 'Guide', color: 'purple' },
      ]
    }
  }
}
</script>

<style scoped>
.dashboard { display: flex; flex-direction: column; gap: 0; }

/* Stats */
.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px; margin-bottom: 32px;
}
.stat-card {
  background: white; border-radius: 16px;
  padding: 24px; display: flex; align-items: flex-start; gap: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  border: 1px solid #f1f5f9;
  position: relative; overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}
.stat-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
.stat-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
}
.stat-card.blue::before { background: linear-gradient(90deg, #3b82f6, #60a5fa); }
.stat-card.purple::before { background: linear-gradient(90deg, #8b5cf6, #a78bfa); }
.stat-card.emerald::before { background: linear-gradient(90deg, #10b981, #34d399); }
.stat-card.orange::before { background: linear-gradient(90deg, #f59e0b, #fbbf24); }

.stat-icon {
  width: 48px; height: 48px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.stat-card.blue .stat-icon { background: #eff6ff; color: #3b82f6; }
.stat-card.purple .stat-icon { background: #f5f3ff; color: #8b5cf6; }
.stat-card.emerald .stat-icon { background: #ecfdf5; color: #10b981; }
.stat-card.orange .stat-icon { background: #fffbeb; color: #f59e0b; }

.stat-body { flex: 1; }
.stat-value { font-size: 28px; font-weight: 800; color: #0f172a; line-height: 1; }
.stat-label { font-size: 13px; font-weight: 600; color: #374151; margin-top: 4px; }
.stat-sub { font-size: 11px; color: #94a3b8; margin-top: 2px; }
.stat-badge {
  font-size: 10px; font-weight: 600; padding: 2px 8px; border-radius: 20px;
  background: #dcfce7; color: #16a34a;
}

/* Section title */
.section-title {
  font-size: 14px; font-weight: 700; color: #374151;
  text-transform: uppercase; letter-spacing: 0.05em;
  margin-bottom: 16px;
}

/* Quick actions */
.quick-grid { display: flex; flex-direction: column; gap: 12px; }
.quick-card {
  display: flex; align-items: center; gap: 20px;
  background: white; border-radius: 14px; padding: 20px 24px;
  text-decoration: none; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  border: 1px solid #f1f5f9;
  transition: all 0.2s;
}
.quick-card:hover { transform: translateX(4px); box-shadow: 0 4px 16px rgba(0,0,0,0.1); border-color: #e0e7ff; }
.quick-icon {
  width: 52px; height: 52px; border-radius: 14px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.quick-icon.blue { background: #eff6ff; color: #3b82f6; }
.quick-icon.emerald { background: #ecfdf5; color: #10b981; }
.quick-icon.orange { background: #fffbeb; color: #f59e0b; }
.quick-body { flex: 1; }
.quick-title { font-size: 15px; font-weight: 700; color: #0f172a; }
.quick-desc { font-size: 12px; color: #64748b; margin-top: 3px; }
.quick-arrow { color: #cbd5e1; flex-shrink: 0; }

/* Activity */
.activity-card {
  background: white; border-radius: 14px; padding: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06); border: 1px solid #f1f5f9;
}
.activity-item {
  display: flex; align-items: center; gap: 16px;
  padding: 14px 16px; border-radius: 10px;
  transition: background 0.2s;
}
.activity-item:hover { background: #f8fafc; }
.act-dot {
  width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
}
.act-dot.green { background: #10b981; }
.act-dot.blue { background: #3b82f6; }
.act-dot.purple { background: #8b5cf6; }
.act-content { display: flex; justify-content: space-between; flex: 1; }
.act-text { font-size: 13px; color: #374151; }
.act-time { font-size: 11px; color: #94a3b8; }
</style>
