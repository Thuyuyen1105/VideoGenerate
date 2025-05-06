<template>
  <DefaultLayout>
    <div class="reset-password-container">
      <div class="reset-password-card">
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
        <h1 class="welcome-title">Reset Password</h1>
        <p class="welcome-subtitle">Enter your new password</p>

        <!-- Reset form -->
        <form @submit.prevent="resetPassword">
          <!-- Password field -->
          <div class="form-group">
            <label for="password">New Password</label>
            <input type="password" id="password" v-model="password" class="form-input" required>
            <p class="password-hint">Password must be between 6 and 20 characters long</p>
          </div>

          <!-- Confirm Password field -->
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" class="form-input" required>
          </div>

          <div v-if="message" :class="['notice-messages', messageType]">
            <ul>
              <li>{{ message }}</li>
            </ul>
          </div>

          <button class="reset-button" :disabled="loading">
            <span v-if="loading">Resetting...</span>
            <span v-else>Reset Password</span>
          </button>
        </form>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import axios from 'axios'

export default {
  name: "ResetPassword",
  components: {
    DefaultLayout
  },
  data() {
    return {
      password: "",
      confirmPassword: "",
      message: '',
      messageType: '',
      loading: false
    }
  },
  methods: {
    validateForm() {
      if (this.password.length < 6 || this.password.length > 20) {
        this.message = "Password must be between 6 and 20 characters"
        this.messageType = "error"
        return false
      }

      if (this.password !== this.confirmPassword) {
        this.message = "Passwords do not match"
        this.messageType = "error"
        return false
      }

      return true
    },

    async resetPassword() {
      if (!this.validateForm()) return

      this.loading = true
      this.message = ''
      this.messageType = ''

      try {
        const token = this.$route.query.token
        if (!token) {
          this.message = "Invalid reset token"
          this.messageType = "error"
          return
        }

        const response = await axios.post(
          'https://user-management-service-production-38e1.up.railway.app/api/v1/auth/reset-password',
          {
            token,
            password: this.password
          }
        )

        if (response.data.status === "success") {
          this.message = "Password has been reset successfully"
          this.messageType = "success"
          setTimeout(() => {
            this.$router.push('/login')
          }, 1500)
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
.reset-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: 20px;
}

.reset-password-card {
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

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #4a5568;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #fa5252;
}

.password-hint {
  font-size: 12px;
  color: #718096;
  margin-top: 4px;
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

.reset-button {
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

.reset-button:hover:not(:disabled) {
  background-color: #e03131;
}

.reset-button:disabled {
  background-color: #cbd5e0;
  cursor: not-allowed;
}
</style> 