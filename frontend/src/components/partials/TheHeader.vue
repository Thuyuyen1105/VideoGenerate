<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="logo-container">
        <div class="logo">
          <div class="logo-icon">
            <a href="/" style="text-decoration: none; color: inherit;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
            </a>
          </div>
          <span class="logo-text" @click="goToHome" style="cursor: pointer;">VideoGenerator</span>
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
        <div class="user-profile" v-if="user" @click="toggleUserMenu">
          <div class="user-avatar">
            <span class="user-initial">{{ userInitial }}</span>
          </div>
          <div class="user-menu" v-if="isUserMenuOpen">
            <div class="user-menu-header">
              <span class="user-name">{{ user.name }}</span>
              <span class="user-email">{{ user.email }}</span>
            </div>
            <div class="user-menu-divider"></div>
            <div class="social-accounts" v-if="user.socialAccounts && user.socialAccounts.length">
              <div class="social-account-item" v-for="account in user.socialAccounts" :key="account.platform">
                <img :src="account.thumbnail" :alt="account.name" class="social-account-avatar">
                <div class="social-account-info">
                  <span class="social-account-name">{{ account.name }}</span>
                  <span class="social-account-platform">{{ account.platform }}</span>
                </div>
              </div>
            </div>
            <div class="user-menu-divider" v-if="user.socialAccounts && user.socialAccounts.length"></div>
            <ul class="user-menu-items">
              <a href="/my-videos" style="text-decoration: none; color: inherit;">
              <li class="user-menu-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23 7l-7 5 7 5V7z"></path>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                  <span>My Videos</span>
                </li>
              </a>
                <a href="/setting" style="text-decoration: none; color: inherit;">
                <li class="user-menu-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>My Account</span>
                </li>
                </a>
              <a href="/analytics" style="text-decoration: none; color: inherit;">
              <li class="user-menu-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <span>Statistics</span>
                </li>
                </a>
              <a href="#" @click.prevent="logout" style="text-decoration: none; color: inherit;">
                <li class="user-menu-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span>Log Out</span>
              </li>
              </a>
            </ul>
          </div>
        </div>

        <!-- Login/Register Buttons (Not Logged In) -->
        <div v-else>
          <div class="signup-button" style="margin-right: 10px; background-color: var(--accent-color-red)">
            <a href="/login" style="text-decoration: none; color: white">Login</a>
          </div>
          <div class="signup-button" style="background-color: var(--accent-color-red)">
            <a href="/signup" style="text-decoration: none; color: white">Register</a>
          </div>
        </div>
      </div>
      <button class="mobile-menu-button" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      selectedLanguage: 'English',
      isLanguageMenuOpen: false,
      isUserMenuOpen: false,
      user: null
    }
  },
  computed: {
    userInitial() {
      return this.user?.name?.charAt(0) || ''
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    toggleLanguageMenu() {
      this.isLanguageMenuOpen = !this.isLanguageMenuOpen
    },
    selectLanguage(lang) {
      this.selectedLanguage = lang
      this.isLanguageMenuOpen = false
    },
    toggleUserMenu() {
      this.isUserMenuOpen = !this.isUserMenuOpen
    },
    toggleMenu() {
      // Implement mobile menu toggle
    },
    async logout() {
      try {
        localStorage.removeItem('token')
        localStorage.removeItem('userData')
        localStorage.removeItem('youtubeData')
        this.user = null
        this.$router.push('/')
      } catch (error) {
        console.error('Logout failed:', error)
      }
    },
    async checkAuthStatus() {
      const token = localStorage.getItem('token')
      const userData = localStorage.getItem('userData')
      
      if (token) {
        if (userData) {
          // Nếu có dữ liệu trong localStorage, sử dụng luôn
          this.user = JSON.parse(userData)
        } else {
          try {
            const response = await fetch('https://user-management-service-production-38e1.up.railway.app/api/v1/user/profile', {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })
            if (response.ok) {
              const data = await response.json()
              // Chỉ lưu thông tin cần thiết
              const safeUserData = {
                email: data.data.email,
                name: data.data.name,
                id: data.data.id,
                socialAccounts: data.data.socialAccounts.map(account => ({
                  platform: account.platform,
                  profileUrl: account.profileUrl,
                  socialId: account.socialId,
                  name: account.name,
                  thumbnail: account.thumbnail
                }))
              }
              this.user = safeUserData
              // Lưu dữ liệu đã lọc vào localStorage
              localStorage.setItem('userData', JSON.stringify(safeUserData))
            } else {
              localStorage.removeItem('token')
              localStorage.removeItem('userData')
              this.user = null
            }
          } catch (error) {
            console.error('Auth check failed:', error)
            localStorage.removeItem('token')
            localStorage.removeItem('userData')
            this.user = null
          }
        }
      }
    }
  },
  created() {
    this.checkAuthStatus()
  }
}
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  background-color: var(--white-color);
  border-bottom: 1px solid var(--divider-color);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 40px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius);
  background-color: var(--accent-color-red);
  color: var(--white-color);
}

.logo-text {
  font-size: 20px;
  font-weight: 600;
  color: var(--gray-dark);
}

.auth-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.language-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: var(--border-radius);
  cursor: pointer;
  position: relative;
}

.language-selector:hover {
  background-color: var(--gray-light);
}

.language-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--white-color);
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  min-width: 160px;
}

.language-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  cursor: pointer;
}

.language-option:hover {
  background-color: var(--gray-light);
}

.signup-button {
  padding: 8px 16px;
  border-radius: var(--border-radius);
  cursor: pointer;
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

@media (max-width: 767px) {
  .header {
    height: 64px;
    padding: 0 20px;
  }

  .auth-container {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }
}

.social-accounts {
  padding: 8px 16px;
}

.social-account-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}

.social-account-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.social-account-info {
  display: flex;
  flex-direction: column;
}

.social-account-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-dark);
}

.social-account-platform {
  font-size: 12px;
  color: var(--gray-medium);
  text-transform: capitalize;
  color: var(--accent-color-red);
}

.user-menu-divider {
  height: 1px;
  background-color: var(--divider-color);
  margin: 8px 0;
}
</style> 