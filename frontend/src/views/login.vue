<template>
    <div class="login-container">
      <div class="login-card">
        <!-- Video icon -->
        <div class="icon-container">
          <div class="video-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </div>
        </div>
        
        <!-- Welcome text -->
        <h1 class="welcome-title">Welcome back to VideoGenerator</h1>
        <p class="welcome-subtitle">It's great to see you again</p>
        
        <!-- Email field -->
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" class="form-input" required>
        </div>
        
        <!-- Password field -->
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" class="form-input">
        </div>
        <!-- Error Message -->
        <div v-if="loginError" class="alert alert-danger" role="alert">{{ loginError }}</div>
        <a href="#" class="forgot-password">Forgot your password?</a>
        
        <button class="login-button" @click="login">Continue</button>
        
        <p class="signup-text">
          Don't have an account? 
          <a href="/signup" class="signup-link">Sign up</a>
        </p>
        
        <p class="terms-text">
          By continuing, you agree to our 
          <a href="#" class="terms-link">Terms of Service</a> and 
          <a href="#" class="terms-link">Privacy Policy</a>.
        </p>
      </div>
    </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import axios from 'axios'

export default {
  name: 'Login',
  components: {
    DefaultLayout
  },
  data() {
    return {
      email: '',
      password: '',
      loginError: '',
      loading: false
    }
  },
  methods: {
    async login() {
      this.loginError = ''
      this.loading = true

      if (!this.email || !this.password) {
        this.loginError = 'Please enter both email and password'
        this.loading = false
        return
      }

      try {
        const response = await axios.post(
          'https://user-management-service-production-38e1.up.railway.app/api/v1/auth/login',
          {
            email: this.email,
            password: this.password
          },
          {
            headers: { 'Content-Type': 'application/json' }
          }
        )

        if (response.data.status === 'success') {
          localStorage.setItem('token', response.data.data.token)
          localStorage.setItem('userId', response.data.data.user.id) // Lưu userId vào localStorage
          this.$router.push('/')
        } else {
          const errorMessage = response.data.message
          if (errorMessage.includes('Email hoặc mật khẩu không chính xác')) {
            this.loginError = 'Incorrect email or password'
          } else {
            this.loginError = errorMessage
          }
        }
      } catch (err) {
        const errorMessage = err.response?.data?.message
        if (errorMessage?.includes('Email hoặc mật khẩu không chính xác')) {
          this.loginError = 'Incorrect email or password'
        } else {
          this.loginError = errorMessage ?? 'Login failed. Please try again.'
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: 20px;
}

.login-card {
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

.alert-danger {
  color: #e53e3e;
  background-color: #fff5f5;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
}

.forgot-password {
  display: block;
  color: #4a5568;
  text-decoration: none;
  margin-bottom: 24px;
  font-size: 14px;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-button {
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

.login-button:hover {
  background-color: #e03131;
}

.signup-text {
  margin-top: 24px;
  color: #4a5568;
}

.signup-link {
  color: #fa5252;
  text-decoration: none;
  font-weight: 500;
}

.signup-link:hover {
  text-decoration: underline;
}

.terms-text {
  margin-top: 16px;
  font-size: 14px;
  color: #718096;
}

.terms-link {
  color: #4a5568;
  text-decoration: none;
}

.terms-link:hover {
  text-decoration: underline;
}
</style>