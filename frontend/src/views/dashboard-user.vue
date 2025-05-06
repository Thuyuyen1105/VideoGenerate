<template>
  <div class="app-container">
    <!-- Header/Navigation - Full Width -->
    <div class="header-wrapper">
      <header class="header">
        <div class="logo-container">
          <div class="logo">
            <div class="logo-icon">
              <a href="/" style="text-decoration: none; color: inherit;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </a>
            </div>
            <span class="logo-text">VideoGenerator</span>
          </div>
          <nav class="main-nav">
          </nav>
        </div>
        <div class="auth-container">
          <div class="language-selector" @click="toggleLanguageMenu">
            <span>{{ selectedLanguage }}</span>
            <span class="flag">
              <img
                :src="selectedLanguage === 'English' ? 'https://flagcdn.com/w20/us.png' : 'https://flagcdn.com/w20/vn.png'"
                :alt="selectedLanguage + ' Flag'"
              />
            </span>
            <div class="language-menu" v-if="isLanguageMenuOpen">
              <div class="language-option" @click="selectLanguage('English')">
                <img src="https://flagcdn.com/w20/us.png" alt="US Flag" />
                <span>English</span>
              </div>
              <div class="language-option" @click="selectLanguage('Tiếng Việt')">
                <img src="https://flagcdn.com/w20/vn.png" alt="VN Flag" />
                <span>Tiếng Việt</span>
              </div>
            </div>
          </div>


          <!-- User Profile (Logged In) -->
          <div class="user-profile" @click="toggleUserMenu">
            <div class="user-avatar">
              <span class="user-initial">{{ userInitial }}</span>
            </div>
            <div class="user-menu" v-if="isUserMenuOpen">
              <div class="user-menu-header">
                <span class="user-name">{{ user.name }}</span>
                <span class="user-email">{{ user.email }}</span>
              </div>
              <div class="user-menu-divider"></div>
              <ul class="user-menu-items">
                <li class="user-menu-item">
                  <a href="/setting" style="text-decoration: none; color: inherit;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>My Account</span>
                  </a>
                </li>
                <li class="user-menu-item">
                  <a href="/analytics" style="text-decoration: none; color: inherit;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <span>Statistics</span>
                  </a>
                </li>
                <li class="user-menu-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  <span>Log Out</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>

    <!-- Dashboard Header -->
    <div class="dashboard-header-wrapper">
      <div class="dashboard-header">
        <div class="dashboard-container">
          <div class="dashboard-tabs">
            <a href="#" class="dashboard-tab active">My Videos</a>
          </div>
          <div class="dashboard-actions">
            <button class="new-video-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <a href="/generate" style="text-decoration: none; color: white;">New Video</a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Recent Videos Section -->
      <section class="recent-videos-section">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">Recent Videos</h2>
            <a href="#" class="view-all-link">View all</a>
          </div>
          <div class="videos-grid">
            <div class="video-card">
              <div class="video-thumbnail">
                <img src="https://v0.dev/placeholder.svg?height=200&width=320" alt="Product Demo" />
                <div class="video-duration">1:24</div>
              </div>
              <div class="video-info">
                <h3 class="video-title">Product Demo</h3>
                <p class="video-date">Created 2 days ago</p>
              </div>
              <div class="video-actions">
                <button class="video-action-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path>
                  </svg>
                </button>
                <button class="video-action-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </button>
                <button class="video-action-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="video-card">
              <div class="video-thumbnail">
                <img src="https://v0.dev/placeholder.svg?height=200&width=320" alt="Social Media Ad" />
                <div class="video-duration">0:45</div>
              </div>
              <div class="video-info">
                <h3 class="video-title">Social Media Ad</h3>
                <p class="video-date">Created 1 week ago</p>
              </div>
              <div class="video-actions">
                <button class="video-action-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path>
                  </svg>
                </button>
                <button class="video-action-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </button>
                <button class="video-action-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="video-card">
              <div class="video-thumbnail">
                <img src="https://v0.dev/placeholder.svg?height=200&width=320" alt="Company Overview" />
                <div class="video-duration">2:38</div>
              </div>
              <div class="video-info">
                <h3 class="video-title">Company Overview</h3>
                <p class="video-date">Created 2 weeks ago</p>
              </div>
              <div class="video-actions">
                <button class="video-action-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path>
                  </svg>
                </button>
                <button class="video-action-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </button>
                <button class="video-action-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Usage Stats Section -->
      <section class="usage-stats-section">
        <div class="section-container">
          <div class="section-header">
            <h2 class="section-title">Usage Statistics</h2>
          </div>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z">
                  </path>
                  <circle cx="12" cy="13" r="3"></circle>
                </svg>
              </div>
              <div class="stat-info">
                <h3 class="stat-value">8</h3>
                <p class="stat-label">Videos Created</p>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div class="stat-info">
                <h3 class="stat-value">120</h3>
                <p class="stat-label">Credits Remaining</p>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path>
                </svg>
              </div>
              <div class="stat-info">
                <h3 class="stat-value">12</h3>
                <p class="stat-label">Downloads</p>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="stat-info">
                <h3 class="stat-value">45:20</h3>
                <p class="stat-label">Total Video Length</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="section-container">
          <div class="cta-card">
            <div class="cta-content">
              <h2 class="cta-title">Feel free to show your creativity!</h2>
              <p class="cta-description">We can make your dreams come true</p>
            </div>
            <div class="cta-actions">
              <button class="cta-button primary"><a href="/generate" style="text-decoration:none; color: black;">New
                  Video</a></button>
              <button class="cta-button secondary"><a href="/analytics"
                  style="text-decoration:none;color: white;">Analytics</a></button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-column">
          <div class="footer-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z">
              </path>
              <circle cx="12" cy="13" r="3"></circle>
            </svg>
            <span>VideoGenerator</span>
          </div>
        </div>

        <div class="footer-column">
          <h3 class="footer-heading">Pages</h3>
          <ul class="footer-links">
            <li><a href="#">Video Subtitle Generator</a></li>
            <li><a href="#">Video Caption Generator</a></li>
            <li><a href="#">Video Ad Generator</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="footer-heading">Resources</h3>
          <ul class="footer-links">
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Sign up</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3 class="footer-heading">Blog</h3>
          <ul class="footer-links">
            <li><a href="#">Decoding the YouTube Shorts Algorithm: A Deep Dive into 3.3 Billion Views</a></li>
            <li><a href="#">How to Make a Faceless Youtube Channel in 2025</a></li>
            <li><a href="#">How to Get Followers on TikTok: A Step-by-Step Guide</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const isMenuOpen = ref(false);
    const isUserMenuOpen = ref(false);
    const isLanguageMenuOpen = ref(false);
    const selectedLanguage = ref('English');
    const user = ref({});

    const userInitial = computed(() => {
      if (user.value && user.value.name) {
        return user.value.name.charAt(0).toUpperCase();
      }
      return '';
    });

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const toggleUserMenu = () => {
      isUserMenuOpen.value = !isUserMenuOpen.value;
    };

    const toggleLanguageMenu = () => {
      isLanguageMenuOpen.value = !isLanguageMenuOpen.value;
    };

    const selectLanguage = (language) => {
      selectedLanguage.value = language;
      isLanguageMenuOpen.value = false;
    };

    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          return;
        }
        const response = await axios.get('https://user-management-service-production-38e1.up.railway.app/api/v1/user/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.data.status === 'success') {
          user.value = response.data.data;
        }
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        localStorage.removeItem('token');
      }
    };

    const logout = () => {
      localStorage.removeItem('token');
      window.location.href = '/';
    };

    onMounted(() => {
      selectedLanguage.value = 'English';
      fetchUser();
    });

    return {
      isMenuOpen,
      isUserMenuOpen,
      isLanguageMenuOpen,
      selectedLanguage,
      user,
      userInitial,
      toggleMenu,
      toggleUserMenu,
      toggleLanguageMenu,
      selectLanguage,
      fetchUser,
      logout
    };
  }
};
</script>

<style>
:root {
  --primary-color: #000000;
  --secondary-color: #666666;
  --accent-color-red: #fa5252;
  --accent-color-red-light: #ff6b6b;
  --accent-color-red-dark: #e03131;
  --accent-color-orange: #ff922b;
  --white-color: #ffffff;
  --gray-light: #f8f9fa;
  --gray-lighter: #f1f3f5;
  --gray-medium: #e9ecef;
  --gray-dark: #343a40;
  --dark-blue: #111827;
  --divider-color: #e9ecef;
  --max-width: 1200px;
  --border-radius: 8px;
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  color: var(--primary-color);
  line-height: 1.5;
  background-color: var(--gray-lighter);
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header Styles - Full Width */
.header-wrapper {
  width: 100%;
  background-color: var(--white-color);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 40px;
  max-width: 1920px;
  /* Much wider max-width for full screen */
  margin: 0 auto;
  width: 100%;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: var(--accent-color-red);
  border-radius: 6px;
  margin-right: 8px;
  color: var(--white-color);
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
}

.main-nav {
  display: none;
  margin-left: 40px;
}

.nav-link {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  margin-right: 32px;
}

.dropdown {
  display: flex;
  align-items: center;
  position: relative;
}

.dropdown-icon {
  margin-left: 4px;
  width: 16px;
  height: 16px;
}

.auth-container {
  display: none;
  align-items: center;
}

.language-selector {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 16px;
  position: relative;
  cursor: pointer;
}

.flag {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: 4px;
  overflow: hidden;
  border-radius: 50%;
  background-color: var(--gray-light);
}

.flag img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.language-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid var(--gray-medium);
  border-radius: var(--border-radius);
  padding: 8px 0;
  min-width: 120px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.language-option {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.language-option:hover {
  background-color: var(--gray-light);
}

.language-option img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  border-radius: 50%;
  object-fit: cover;
}

.language-option span {
  font-size: 14px;
}

/* User Profile Styles */
.user-profile {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.credits {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 12px;
}

.credits-count {
  font-weight: 700;
  font-size: 16px;
}

.credits-label {
  font-size: 12px;
  color: var(--secondary-color);
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--accent-color-red);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white-color);
  font-weight: 600;
}

.user-initial {
  font-size: 18px;
}

.user-menu {
  position: absolute;
  top: 50px;
  right: 0;
  width: 240px;
  background-color: var(--white-color);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  overflow: hidden;
}

.user-menu-header {
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
  font-size: 16px;
}

.user-email {
  font-size: 14px;
  color: var(--secondary-color);
}

.user-menu-divider {
  height: 1px;
  background-color: var(--divider-color);
}

.user-menu-items {
  list-style: none;
}

.user-menu-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-size: 14px;
  cursor: pointer;
}

.user-menu-item:hover {
  background-color: var(--gray-light);
}

.user-menu-item svg {
  margin-right: 12px;
  color: var(--secondary-color);
}

.mobile-menu-button {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
}

/* Dashboard Header */
.dashboard-header-wrapper {
  width: 100%;
  background-color: var(--white-color);
  border-bottom: 1px solid var(--divider-color);
}

.dashboard-header {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 40px;
}

.dashboard-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.dashboard-tabs {
  display: flex;
}

.dashboard-tab {
  padding: 0 16px;
  height: 60px;
  display: flex;
  align-items: center;
  color: var(--secondary-color);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
}

.dashboard-tab.active {
  color: var(--primary-color);
  border-bottom-color: var(--accent-color-red);
  font-weight: 600;
}

.dashboard-actions {
  display: flex;
}

.new-video-button {
  display: flex;
  align-items: center;
  background-color: var(--accent-color-red);
  color: var(--white-color);
  border: none;
  padding: 8px 16px;
  border-radius: var(--border-radius);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.new-video-button svg {
  margin-right: 8px;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  padding: 40px 0;
}

.section-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
}

.view-all-link {
  color: var(--accent-color-red);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

/* Recent Videos Section */
.recent-videos-section {
  margin-bottom: 48px;
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}

.video-card {
  background-color: var(--white-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.video-thumbnail {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  /* 16:9 aspect ratio */
  overflow: hidden;
}

.video-thumbnail img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-duration {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--white-color);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
}

.video-info {
  padding: 16px;
}

.video-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.video-date {
  font-size: 12px;
  color: var(--secondary-color);
}

.video-actions {
  display: flex;
  justify-content: flex-end;
  padding: 0 16px 16px;
  gap: 8px;
}

.video-action-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-light);
  border: none;
  cursor: pointer;
}

.video-action-button:hover {
  background-color: var(--gray-medium);
}


/* Usage Stats Section */
.usage-stats-section {
  margin-bottom: 48px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.stat-card {
  background-color: var(--white-color);
  border-radius: var(--border-radius);
  padding: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--gray-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: var(--accent-color-red);
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: var(--secondary-color);
}

/* CTA Section */
.cta-section {
  margin-bottom: 48px;
}

.cta-card {
  background-color: var(--dark-blue);
  border-radius: var(--border-radius);
  padding: 32px;
  color: var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.cta-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}

.cta-description {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 24px;
  max-width: 600px;
}

.cta-actions {
  display: flex;
  gap: 16px;
}

.cta-button {
  padding: 10px 20px;
  border-radius: var(--border-radius);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
}

.cta-button.primary {
  background-color: var(--white-color);
  color: var(--dark-blue);
}

.cta-button.secondary {
  background-color: transparent;
  border: 1px solid var(--white-color);
  color: var(--white-color);
}

/* Footer */
.footer {
  background-color: var(--gray-light);
  padding: 64px 20px;
}

.footer-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.footer-logo {
  display: flex;
  align-items: center;
  color: var(--gray-dark);
}

.footer-logo svg {
  margin-right: 8px;
}

.footer-heading {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--gray-dark);
  margin-left: 30px;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: var(--secondary-color);
  text-decoration: none;
  font-size: 14px;
}

.footer-links a:hover {
  text-decoration: underline;
}

/* Media Queries for Responsiveness */
@media (min-width: 768px) {
  .main-nav {
    display: flex;
    max-width: 100%;
  }

  .auth-container {
    display: flex;
  }

  .mobile-menu-button {
    display: none;
  }

  .videos-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .templates-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .cta-card {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  .cta-content {
    max-width: 60%;
  }

  .footer-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 767px) {
  .header {
    height: 64px;
    padding: 0 20px;
  }

  .dashboard-header {
    padding: 0 20px;
  }

  .dashboard-tabs {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .dashboard-tabs::-webkit-scrollbar {
    display: none;
  }

  .cta-actions {
    flex-direction: column;
  }
}
</style>