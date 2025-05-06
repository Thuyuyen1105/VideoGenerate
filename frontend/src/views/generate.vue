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
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <span>Statistics</span>
                  </a>
                </li>
                <li class="user-menu-item" @click="logout">
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
    <!-- Main Content -->
    <main class="main-content">
      <div class="video-generator-container">
        <!-- Media Upload Section -->
        <div class="media-controls">
          <button class="media-button">Upload media</button>
          <button class="media-button">Clip picker</button>
        </div>

        <!-- Text Input Area -->
        <div class="text-input-container">
          <textarea class="text-input" rows="5"
            placeholder="Enter your script here...">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</textarea>
        </div>

        <!-- Controls Section -->
        <div class="controls-section">
          <div class="dropdown-controls">
            <div class="dropdown-control">
              <select class="control-select">
                <option>Style</option>
                <option>Professional</option>
                <option>Casual</option>
                <option>Energetic</option>
              </select>
            </div>
          </div>

          <div class="checkbox-controls">
            <label class="checkbox-control">
              <input type="checkbox" /> Landscape (16:9)
            </label>
            <label class="checkbox-control">
              <input type="checkbox" /> Video Style
            </label>
          </div>

          <button class="preview-button">Preview images</button>
        </div>

        <!-- Image Grid -->
        <div class="image-grid">
          <div class="image-item" v-for="(image, index) in generatedImages" :key="index">
            <img :src="image.url" alt="Generated Image" class="generated-image" />
            <div class="image-controls">
              <button class="regenerate-button">Regenerate</button>
              <button class="edit-button" @click="goToImageEditor(image.url)">Edit</button>
            </div>
            <div class="text-input-container">
              <textarea class="text-input" rows="5"
                placeholder="Enter your script here...">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.</textarea>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="navigation-controls">
          <div class="navigation-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>

          <div class="navigation-dots">
            <span class="navigation-dot active"></span>
            <span class="navigation-dot"></span>
            <span class="navigation-dot"></span>
          </div>

          <div class="navigation-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>

        <!-- Generate Button -->
        <div class="generate-container">
          <button class="generate-button">Generate video</button>
        </div>

      </div>
    </main>

    <!-- Footer -->
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
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

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

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;

      // Prevent scrolling when menu is open
      if (isMenuOpen.value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
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

    // Set default language to English
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
  },
  data() {
    return {
      generatedImages: [
        {
          url: 'https://picsum.photos/id/237/200/300',
          url: 'https://picsum.photos/id/232/200/300'

        },
        // Thêm nhiều hình ảnh khác nếu cần
      ]
    };
  },
  mounted() {
    const savedImage = localStorage.getItem('editedImage')
    if (savedImage) {
      this.generatedImages.unshift({ url: savedImage }) // thêm ảnh mới vào đầu danh sách
      localStorage.removeItem('editedImage') // optional
    }
  },
  methods: {
    goToImageEditor(imageUrl) {
      this.$router.push({ path: '/test', query: { image: imageUrl } });
    }
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
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Section Divider */
.section-divider {
  height: 1px;
  background-color: rgb(45, 46, 48);
  margin: 0 auto;
  max-width: var(--max-width);
  width: calc(100% - 40px);
}

/* Header Styles */
.header {
  width: 100%;
  height: 80px;
  background-color: var(--white-color);
  border-bottom: 1px solid var(--gray-medium);
  position: relative;
  z-index: 1000;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  width: 100%;
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

.signup-button {
  background-color: var(--primary-color);
  color: var(--white-color);
  padding: 8px 16px;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.signup-button:hover {
  background-color: #333333;
}

.mobile-menu-button {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

/* Mobile Menu Styles */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--white-color);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  overflow-y: auto;
}

.mobile-menu-open {
  opacity: 1;
  visibility: visible;
}

.mobile-menu-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 80px 20px 40px;
}

.mobile-menu-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.mobile-nav-link {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
}

.mobile-menu-divider {
  width: 40px;
  height: 1px;
  background-color: var(--gray-medium);
  margin: 8px 0;
}

.mobile-nav-button {
  background-color: var(--primary-color);
  color: var(--white-color);
  padding: 12px 24px;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-top: 16px;
}

.mobile-menu-footer {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.mobile-language-selector {
  display: flex;
  align-items: center;
  font-size: 16px;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  padding: 40px 20px;
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
  }

  .auth-container {
    display: flex;
  }

  .mobile-menu-button {
    display: none;
  }

  .hero-title {
    font-size: 60px;
  }

  .video-content {
    min-height: 500px;
  }

  .video-title {
    font-size: 48px;
  }

  .feature-container {
    flex-direction: row;
  }

  .feature-container.reverse {
    flex-direction: row-reverse;
  }

  .footer-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 767px) {
  .header {
    height: 64px;
  }

  .feature-title {
    font-size: 28px;
  }

  .cta-dark-title {
    font-size: 28px;
  }

  .api-access {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
}

/* Additional styles for the video generator interface */
.video-generator-container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.media-controls {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.media-button {
  padding: 8px 12px;
  background-color: var(--accent-color-red);
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  color: white;
}

.media-button:hover {
  background-color: var(--accent-color-red-dark);
}

.text-input-container {
  width: 100%;
  margin-bottom: 10px;
}

.text-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  font-family: var(--font-family);
  font-size: 14px;
}

.controls-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.dropdown-controls {
  display: flex;
  gap: 10px;
}

.dropdown-control {
  display: inline-block;
}

.control-select {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
}

.checkbox-controls {
  display: flex;
  gap: 20px;
}

.checkbox-control {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
}

.preview-button {
  align-self: flex-start;
  padding: 8px 16px;
  background-color: var(--accent-color-red);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.preview-button:hover {
  background-color: var(--accent-color-red-dark);
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.image-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image-placeholder {
  width: 100%;
  height: 150px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.placeholder-x::before,
.placeholder-x::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #ccc;
  top: 50%;
}

.placeholder-x::before {
  transform: rotate(45deg);
}

.placeholder-x::after {
  transform: rotate(-45deg);
}

.image-controls {
  display: flex;
  gap: 5px;
  justify-content: center;
}

.regenerate-button {
  padding: 4px 8px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}


.delete-button {
  padding: 4px 8px;
  background-color: var(--accent-color-red);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}

.edit-button {
  padding: 4px 8px;
  background-color: var(--accent-color-red);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}

.edit-button:hover {
  background-color: var(--accent-color-red-dark);
}

.image-caption {
  font-size: 12px;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
}

.generate-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.generate-button {
  padding: 10px 20px;
  background-color: var(--accent-color-red);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
}

.generate-button:hover {
  background-color: var(--accent-color-red-dark);
}

.navigation-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}

.navigation-arrow {
  cursor: pointer;
  color: var(--secondary-color);
}

.navigation-dots {
  display: flex;
  gap: 8px;
}

.navigation-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--gray-medium);
}

.navigation-dot.active {
  background-color: var(--primary-color);
}

@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: 1fr;
  }

  .dropdown-controls,
  .checkbox-controls {
    flex-direction: column;
  }
}
</style>