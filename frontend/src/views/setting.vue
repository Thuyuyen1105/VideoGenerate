<template>
  <DefaultLayout>
    <!-- Main Content -->
    <main class="main-content">
      <div class="profile-settings-container">
        <div class="profile-settings-card">
          <!-- User Icon in Top Right -->
          <div class="user-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          
          <!-- Profile Settings Header -->
          <h1 class="profile-settings-title">Profile Settings</h1>
          <p class="profile-settings-description">
            We use this information for necessary account alerts and marketing communications.
          </p>
          
          <!-- Sign in Methods -->
          <div class="sign-in-section">
            <h2 class="section-title">Linked Accounts:</h2>
            <div class="sign-in-methods">
              <button class="sign-in-button">
                <svg class="button-icon" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" fill="#000"/>
                </svg>
                {{ userSocial.google ? userSocial.google.name : 'User' }}
              </button>
              <button class="sign-in-button">
                <svg class="button-icon" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M20.007,3H3.993C3.445,3,3,3.445,3,3.993v16.013C3,20.555,3.445,21,3.993,21h8.621v-6.971h-2.346v-2.717h2.346V9.31 c0-2.325,1.42-3.591,3.494-3.591c0.993,0,1.847,0.074,2.096,0.107v2.43l-1.438,0.001c-1.128,0-1.346,0.536-1.346,1.323v1.734h2.69 l-0.35,2.717h-2.34V21h4.587C20.555,21,21,20.555,21,20.007V3.993C21,3.445,20.555,3,20.007,3z" fill="#3b5998"/>
                </svg>
                {{ userSocial.facebook ? userSocial.facebook.name : 'Link with Facebook' }}
              </button>
              <button class="sign-in-button">
                <svg class="button-icon" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="#000000"/>
                </svg>
                {{ userSocial.tiktok ? userSocial.tiktok.name : 'Link with TikTok' }}
              </button>
              <button class="sign-in-button" @click="linkYoutubeAccount">
                <svg class="button-icon" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" fill="#FF0000"/>
                </svg>
                {{ userSocial.youtube ? userSocial.youtube.name : 'Link with YouTube' }}
              </button>
            </div>
          </div>
          
          <!-- Divider -->
          <div class="settings-divider"></div>
          
          <!-- Danger Zone -->
          <div class="danger-zone">
            <div class="danger-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f59f00"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <h2 class="danger-title">Danger Zone</h2>
            <p class="danger-description">
              Be careful and make sure you know what you're doing before making any changes here.
            </p>
            <button class="danger-button" @click="deleteAccount">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'SettingView',
  components: {
    DefaultLayout
  },
  data() {
    return {
      userSocial: {
        google: null,
        facebook: null,
        tiktok: null,
        youtube: null
      }
    }
  },
  methods: {
    async linkYoutubeAccount() {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          this.$router.push('/login')
          return
        }

        // Kiểm tra thông tin trong localStorage trước
        const savedYoutubeData = localStorage.getItem('youtubeData')
        if (savedYoutubeData) {
          this.userSocial.youtube = JSON.parse(savedYoutubeData)
          return
        }

        const response = await fetch('https://user-management-service-production-38e1.up.railway.app/api/v1/user/social/youtube', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (response.ok) {
          const data = await response.json()
          // Lưu thông tin vào localStorage
          const youtubeData = data.data.socialAccount
          localStorage.setItem('youtubeData', JSON.stringify(youtubeData))
          this.userSocial.youtube = youtubeData
        } else {
          // Xử lý khi chưa liên kết tài khoản
          window.location.href = 'https://user-management-service-production-38e1.up.railway.app/api/v1/auth/youtube'
        }
      } catch (error) {
        console.error('Error linking YouTube account:', error)
      }
    },
    deleteAccount() {
      // Implement account deletion logic
    }
  },
  async created() {
    // Kiểm tra tài khoản YouTube khi component được tạo
    await this.linkYoutubeAccount()
  }
}
</script>

<style scoped>
.main-content {
  padding: 20px;
}

.profile-settings-container {
  max-width: 800px;
  margin: 0 auto;
}

.profile-settings-card {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.user-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #666;
}

.profile-settings-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
}

.profile-settings-description {
  color: #666;
  margin-bottom: 30px;
}

.section-title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
}

.sign-in-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
}

.sign-in-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.sign-in-button:hover {
  background: #f5f5f5;
}

.button-icon {
  width: 24px;
  height: 24px;
}

.settings-divider {
  height: 1px;
  background: #eee;
  margin: 30px 0;
}

.danger-zone {
  background: #fff5e6;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.danger-icon {
  margin-bottom: 15px;
}

.danger-title {
  color: #f59f00;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}

.danger-description {
  color: #666;
  margin-bottom: 20px;
}

.danger-button {
  background: #f59f00;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.danger-button:hover {
  background: #e08e00;
}
</style>