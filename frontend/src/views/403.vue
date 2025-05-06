<template>
  <DefaultLayout>
    <div class="forbidden-container">
      <div class="forbidden-card">
        <!-- Video icon -->
        <div class="icon-container">
          <div class="video-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </div>
        </div>

        <!-- Error text -->
        <h1 class="error-title">403</h1>
        <p class="error-subtitle">Access Forbidden</p>
        <p class="error-description">You don't have permission to access this page. Please contact the administrator if you believe this is a mistake.</p>

        <a href="/" class="home-button">Go to Homepage</a>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: "Forbidden",
  components: {
    DefaultLayout
  }
}
</script>

<style scoped>
.forbidden-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: 20px;
}

.forbidden-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 40px;
  width: 100%;
  max-width: 450px;
  text-align: center;
}

.icon-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.video-icon {
  background-color: #fa5252;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-title {
  font-size: 72px;
  font-weight: 700;
  color: #fa5252;
  margin-bottom: 8px;
  line-height: 1;
}

.error-subtitle {
  font-size: 24px;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 16px;
}

.error-description {
  font-size: 16px;
  color: #4a5568;
  margin-bottom: 32px;
  line-height: 1.5;
}

.home-button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #fa5252;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.home-button:hover {
  background-color: #e03131;
}
</style> 