<template>
  <DefaultLayout>
    <div class="verify-email-container">
      <div class="verify-email-card">
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

        <!-- Welcome text -->
        <h1 class="welcome-title">Verify Your Email</h1>
        <p class="welcome-subtitle">Please check your email for verification link</p>

        <div v-if="message" :class="['notice-messages', messageType]">
          <ul>
            <li>{{ message }}</li>
          </ul>
        </div>

        <button class="resend-button" @click="resendVerification" :disabled="loading">
          <span v-if="loading">Sending...</span>
          <span v-else>Resend Verification Email</span>
        </button>

        <p class="login-text">
          Already verified?
          <a href="/login" class="login-link">Login</a>
        </p>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import axios from 'axios'

export default {
  name: "VerifyEmail",
  components: {
    DefaultLayout
  },
  data() {
    return {
      message: '',
      messageType: '',
      loading: false
    }
  },
  methods: {
    async resendVerification() {
      this.loading = true
      this.message = ''
      this.messageType = ''

      try {
        const token = this.$route.query.token
        if (!token) {
          this.message = "Invalid verification token"
          this.messageType = "error"
          return
        }

        const response = await axios.post(
          'https://user-management-service-production-38e1.up.railway.app/api/v1/auth/resend-verification',
          {
            token
          }
        )

        if (response.data.status === "success") {
          this.message = "Verification email has been sent"
          this.messageType = "success"
        } else {
          this.message = response.data.message || "An error occurred. Please try again."
          this.messageType = "error"
        }
      } catch (error) {
        if (error.response && error.response.data) {
          const errorData = error.response.data
          this.message = errorData.message || "An error occurred. Please try again later."
        } else {
          this.message = "Unable to connect to server. Please check your network connection."
        }
        this.messageType = "error"
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.verify-email-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: 20px;
}

.verify-email-card {
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

.welcome-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 8px;
}

.welcome-subtitle {
  font-size: 16px;
  color: #4a5568;
  margin-bottom: 24px;
}

.notice-messages {
  margin-bottom: 16px;
  padding: 12px;
  border-radius: 4px;
}

.notice-messages.error {
  background-color: #fff5f5;
  color: #e53e3e;
}

.notice-messages.success {
  background-color: #f0fff4;
  color: #38a169;
}

.notice-messages ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.resend-button {
  width: 100%;
  padding: 12px;
  background-color: #fa5252;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.resend-button:hover:not(:disabled) {
  background-color: #e03131;
}

.resend-button:disabled {
  background-color: #cbd5e0;
  cursor: not-allowed;
}

.login-text {
  margin-top: 24px;
  color: #4a5568;
}

.login-link {
  color: #fa5252;
  text-decoration: none;
  font-weight: 500;
}

.login-link:hover {
  text-decoration: underline;
}
</style> 