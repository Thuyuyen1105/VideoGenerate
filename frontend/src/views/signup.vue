<template>
  <div class="signup-container">
    <div class="signup-card">
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
      <h1 class="welcome-title">Let's join VideoGenerator</h1>
      <p class="welcome-subtitle">Create your own account</p>

      <!-- Sign up form -->
      <form @submit.prevent="signup">
        <!-- Email field -->
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" class="form-input" required>
        </div>

        <!-- Password field -->
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" class="form-input" required>
          <p class="password-hint">Password must be between 6 and 20 characters long</p>
        </div>

        <!-- Name field -->
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" class="form-input" required>
        </div>

        <div v-if="message" :class="['notice-messages', messageType]">
          <ul>
            <li>{{ message }}</li>
          </ul>
        </div>


        <button class="signup-button" :disabled="loading">
          <span v-if="loading">Loading...</span>
          <span v-else>Create account</span>
        </button>

      </form>

      <p class="login-text">
        Already have an account?
        <a href="/login" class="login-link">Login</a>
      </p>

      <p class="terms-text">
        By continuing, you agree to the
        <a href="#" class="terms-link">Terms of Service</a> and
        <a href="#" class="terms-link">Privacy Policy</a>.
      </p>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      errors: [],
      message: '',
      messageType: '', // 'success' hoặc 'error'
      emailExists: false
    };
  },
  methods: {
    validateForm() {
      this.errors = [];

      if (!this.name) this.errors.push("Name is required");
      if (!this.email) this.errors.push("Email is required");
      if (!this.password) this.errors.push("Password is required");

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (this.email && !emailRegex.test(this.email)) {
        this.errors.push("Invalid email format");
      }

      const trimmedPassword = this.password.trim();
      if (trimmedPassword.length < 6 || trimmedPassword.length > 20) {
        this.errors.push("Password must be between 6 and 20 characters");
      }

      return this.errors.length === 0;
    },

    async signup() {
      this.emailExists = false;

      const isValid = this.validateForm();
      if (!isValid) {
        this.message = this.errors.join(', ');
        this.messageType = 'error';
        return;
      }

      try {
        const response = await axios.post(
          'https://user-management-service-production-38e1.up.railway.app/api/v1/auth/register',
          {
            email: this.email,
            password: this.password,
            name: this.name
          }
        );

        if (response.data.status === "success") {
          this.message = "Account created successfully!";
          this.messageType = "success";
          setTimeout(() => {
            this.$router.push('/login');
          }, 1500);
        } else {
          this.message = response.data.message || "An error occurred. Please try again.";
          this.messageType = "error";
        }
      } catch (error) {
        this.errors = [];
        this.message = "";
        this.messageType = "";

        if (error.response && error.response.data) {
          const errorData = error.response.data;

          if (errorData.code === 'EMAIL_EXISTS') {
            this.message = "Email is already in use";
            this.messageType = "error";
            this.emailExists = true;
          } else if (errorData.code === 'VALIDATION_ERROR') {
            this.message = errorData.errors.map(err => `${err.msg} (${err.param})`).join(', ');
            this.messageType = "error";
          } else {
            this.message = errorData.message || "An error occurred. Please try again later.";
            this.messageType = "error";
          }
        } else {
          this.message = "Unable to connect to server. Please check your network connection.";
          this.messageType = "error";
        }
      }
    }
  },

  mounted() {
    const inputs = document.querySelectorAll('input[required]');
    inputs.forEach(input => {
      input.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
          event.target.setCustomValidity('This field is required');
        } else if (event.target.validity.typeMismatch && event.target.type === 'email') {
          event.target.setCustomValidity('Please enter a valid email address');
        } else if (event.target.validity.tooShort) {
          event.target.setCustomValidity('Password must be at least 6 characters');
        } else if (event.target.validity.tooLong) {
          event.target.setCustomValidity('Password cannot exceed 20 characters');
        } else {
          event.target.setCustomValidity('');
        }

        if (this.emailExists && event.target.id === 'email') {
          event.target.setCustomValidity('Email is already in use');
        }
      }.bind(this));
    });
  }
};
</script>


<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.signup-card {
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

.google-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.google-button:hover {
  background-color: #f7fafc;
}

.google-logo {
  width: 18px;
  height: 18px;
  margin-right: 12px;
}

.divider {
  display: flex;
  align-items: center;
  margin: 24px 0;
}

.divider-line {
  flex-grow: 1;
  height: 1px;
  background-color: #e2e8f0;
}

.divider-text {
  padding: 0 16px;
  color: #718096;
  font-size: 14px;
}

.form-group {
  text-align: left;
  margin-bottom: 16px;
}

label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 16px;
}

.form-input:focus {
  outline: none;
  border-color: #a0aec0;
}

.password-hint {
  font-size: 12px;
  color: #718096;
  margin-top: 4px;
  margin-bottom: 0;
}

.signup-button {
  width: 100%;
  padding: 12px;
  background-color: #1a202c;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 8px;
}

.signup-button:hover {
  background-color: #2d3748;
}

.login-text {
  margin-top: 24px;
  font-size: 14px;
  color: #4a5568;
}

.login-link {
  color: #e53935;
  text-decoration: none;
  font-weight: 500;
}

.terms-text {
  margin-top: 24px;
  font-size: 12px;
  color: #718096;
}

.terms-link {
  color: #718096;
  text-decoration: none;
}

.terms-link:hover {
  text-decoration: underline;
}

.notice-messages {
  padding: 16px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
  list-style: none;
  /* bỏ dấu chấm */
}

.notice-messages ul {
  margin: 0;
  padding: 0;
  list-style: none;
  /* bỏ dấu chấm */
}

.notice-messages li {
  list-style-type: none;
}

.notice-messages.error {
  background-color: #f8d7da;
  border: 1px solid #f5c2c7;
  color: #842029;
}

.notice-messages.success {
  background-color: #d1e7dd;
  border: 1px solid #badbcc;
  color: #0f5132;
}
</style>