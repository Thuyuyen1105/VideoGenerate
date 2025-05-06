<template>
  <keep-alive>
    <DefaultLayout>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">
            Create videos in <span class="highlight">seconds</span> with AI
          </h1>
          <p class="hero-subtitle">
            The fastest and easiest way to create, edit, and share videos. No editing skills required.
          </p>
          <button class="cta-button" @click="handleGetStarted">
            <span style="text-decoration: none; color: white">Get started</span>
          </button>
        </div>
      </section>

      <!-- Video Section -->
      <section class="video-section">
        <div class="video-container">
          <div class="volume-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
          </div>
          <div class="video-content">
            <h2 class="video-title">Need to make a video?</h2>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="section-divider"></div>

      <!-- Idea to Video Section -->
      <section class="feature-section">
        <div class="feature-container">
          <div class="feature-content">
            <h2 class="feature-title">Go from idea to video in a few clicks</h2>
            <p class="feature-description">
              Enter a prompt, upload your media, and let AI handle the rest.
              VideoGeneratorer seamlessly edits everything together to create a video.
            </p>
            <ul class="feature-list">
              <li class="feature-item">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </div>
                <span>AI video script writing</span>
              </li>
              <li class="feature-item">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path
                      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z">
                    </path>
                  </svg>
                </div>
                <span>Automatic AI video editing</span>
              </li>
            </ul>
            <button class="cta-button" @click="handleGetStarted">
              <span style="text-decoration: none">Get started</span>
            </button>
            <div class="safe-use">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Safe for commercial use</span>
            </div>
          </div>
          <div class="feature-image idea-to-video-image">
            <div class="video-creator-ui">
              <div class="uploaded-images">
                <div class="uploaded-image">
                  <img src="https://i.imgur.com/TmgjjTx.png" alt="Team" />
                  <span>team.png</span>
                </div>
                <div class="uploaded-image">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VE6YtmqDKbOv0bbryQMDjLAZ9T2kFN.png"
                    alt="Storefront" />
                  <span>storefront.jpg</span>
                </div>
              </div>
              <div class="prompt-input">
                <p>Make a video promoting my business...</p>
              </div>
              <div class="video-controls">
                <div class="language-button">
                  <span class="flag-small">
                    <img src="https://flagcdn.com/w20/us.png" alt="US Flag" />
                  </span>
                  <span>English</span>
                </div>
                <button class="generate-button" style="margin-top:100px">
                  Generate video
                  <div class="cursor-pointer"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="section-divider"></div>

      <!-- Voiceover Section -->
      <section class="feature-section">
        <div class="feature-container reverse">
          <div class="feature-image voiceover-image">
            <div class="language-cards">
              <div class="language-card">
                <div class="flag-icon">
                  <img src="https://flagcdn.com/w20/cn.png" alt="China Flag" />
                </div>
                <span class="greeting">你好</span>
              </div>
              <div class="language-card">
                <div class="flag-icon">
                  <img src="https://flagcdn.com/w20/in.png" alt="India Flag" />
                </div>
                <span class="greeting">नमस्ते</span>
              </div>
              <div class="language-card active">
                <div class="flag-icon">
                  <img src="https://flagcdn.com/w20/es.png" alt="Spain Flag" />
                </div>
                <span class="greeting">Hola</span>
                <div class="cursor-pointer"></div>
              </div>
              <div class="language-card">
                <div class="flag-icon">
                  <img src="https://flagcdn.com/w20/us.png" alt="US Flag" />
                </div>
                <span class="greeting">Hello</span>
              </div>
              <div class="language-card">
                <div class="flag-icon">
                  <img src="https://flagcdn.com/w20/ae.png" alt="UAE Flag" />
                </div>
                <span class="greeting">مرحبًا</span>
              </div>
            </div>
          </div>
          <div class="feature-content">
            <h2 class="feature-title">Realistic AI voiceovers</h2>
            <p class="feature-description">
              Say goodbye to the pain of recording, re-recording... and re-recording.
              VideoGenerator is powered by the world's most advanced text-to-speech engine.
            </p>
            <ul class="feature-list">
              <li class="feature-item">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                </div>
                <span>200+ Unique Voices</span>
              </li>
              <li class="feature-item">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 8h14M5 12h14M5 16h6"></path>
                  </svg>
                </div>
                <span>50+ Languages & Accents</span>
              </li>
            </ul>
            <button class="listen-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              Listen to an example
            </button>
          </div>
        </div>
      </section>

      <section class="cta-dark-section">
        <div class="cta-dark-container">
          <h2 class="cta-dark-title">Make more videos in less time with VideoGenerator</h2>
          <button class="cta-dark-button" @click="handleGetStarted">
            <span style="text-decoration: none">Get started</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
        <div class="api-access">
          <p>Need API access or a custom integration?</p>
          <a href="#" class="api-button">
            Explore the API
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </section>

      <!-- Edit and Share Section -->
      <section class="feature-section">
        <div class="feature-container">
          <div class="feature-content">
            <h2 class="feature-title">Effortlessly edit and share</h2>
            <p class="feature-description">
              Customize and share your video directly in your browser—no downloads or installation required.
            </p>
            <ul class="feature-list">
              <li class="feature-item">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <span>Online video editor—no downloads needed</span>
              </li>
              <li class="feature-item">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>
                <span>Share video links for easy collaboration</span>
              </li>
            </ul>
            <button class="cta-button" @click="handleGetStarted">
              <span style="text-decoration: none">Get started</span>
            </button>
          </div>
          <div class="feature-image edit-share-image">
            <div class="editor-ui">
              <div class="music-file">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
                <span>song.mp3</span>
                <div class="cursor-pointer"></div>
              </div>
              <div class="editor-images">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-afK5PyO1K8dFPaEtZpIfhmvJMk8KlJ.png"
                  alt="Dog walker" class="editor-image" />
                <div class="plus-icon">+</div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-afK5PyO1K8dFPaEtZpIfhmvJMk8KlJ.png"
                  alt="White dog" class="editor-image" />
                <div class="scissors-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                    <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
                    <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  </keep-alive>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'Dashboard',
  components: {
    DefaultLayout
  },
  methods: {
    handleGetStarted() {
      const token = localStorage.getItem('token')
      if (!token) {
        // Nếu chưa đăng nhập, chuyển đến trang login
        this.$router.push('/login')
      } else {
        // Nếu đã đăng nhập, chuyển đến trang search
        this.$router.push('/search')
      }
    }
  },
  activated() {
    if (this.$refs.header) {
      this.$refs.header.checkAuthStatus()
    }
  }
}
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
  max-width: 1920px; /* Much wider max-width for full screen */
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

.auth-container {
  display: flex;
  align-items: center;
  gap: 10px;
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
  background-color: var(--accent-color-red);
  color: var(--white-color);
  padding: 8px 16px;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
}

.signup-button:hover {
  background-color: var(--accent-color-red-dark);
}

.mobile-menu-button {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
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
}

/* Hero Section Styles */
.hero-section {
  padding: 80px 20px;
  text-align: center;
  background-color: var(--white-color);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--gray-dark);
}

.hero-title .highlight {
  color: var(--accent-color-red);
}

.hero-subtitle {
  font-size: 20px;
  color: var(--secondary-color);
  margin-bottom: 32px;
}

.cta-button {
  background-color: var(--accent-color-red);
  color: var(--white-color);
  border: none;
  padding: 12px 24px;
  border-radius: var(--border-radius);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.cta-button:hover {
  background-color: var(--accent-color-red-dark);
}

/* Video Section Styles */
.video-section {
  padding: 40px 20px;
  background-color: var(--gray-light);
}

.video-container {
  max-width: var(--max-width);
  margin: 0 auto;
  position: relative;
}

.volume-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--white-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.video-content {
  text-align: center;
  padding: 40px 0;
}

.video-title {
  font-size: 32px;
  font-weight: 600;
  color: var(--gray-dark);
}

/* Feature Section Styles */
.feature-section {
  padding: 80px 20px;
  background-color: var(--white-color);
}

.feature-container {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.feature-container.reverse {
  flex-direction: column;
}

.feature-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.feature-title {
  font-size: 36px;
  font-weight: 600;
  color: var(--gray-dark);
}

.feature-description {
  font-size: 18px;
  color: var(--secondary-color);
  line-height: 1.5;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.feature-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius);
  background-color: var(--gray-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-dark);
}

.safe-use {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--secondary-color);
  font-size: 14px;
}

.safe-use svg {
  color: var(--accent-color-red);
}

/* Video Creator UI */
.video-creator-ui {
  background-color: var(--gray-light);
  border-radius: var(--border-radius);
  padding: 20px;
}

.uploaded-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
}

.uploaded-image {
  background-color: var(--white-color);
  border-radius: var(--border-radius);
  padding: 12px;
  text-align: center;
}

.uploaded-image img {
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  margin-bottom: 8px;
}

.uploaded-image span {
  font-size: 12px;
  color: var(--secondary-color);
}

.prompt-input {
  padding: 16px;
  background-color: var(--white-color);
  border-top: 1px solid var(--gray-medium);
  border-bottom: 1px solid var(--gray-medium);
}

.video-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.language-button {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid var(--gray-medium);
  border-radius: 6px;
  font-size: 14px;
  margin-top: -80px;
}

.flag-small {
  display: inline-block;
  width: 20px;
  height: 14px;
  margin-right: 8px;
}

.generate-button {
  position: relative;
  background-color: var(--dark-blue);
  color: var(--white-color);
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
}

.cursor-pointer {
  position: absolute;
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z'%3E%3C/path%3E%3Cpath d='M13 13l6 6'%3E%3C/path%3E%3C/svg%3E");
  background-size: contain;
  right: -10px;
  bottom: -10px;
}

/* Language Cards */
.language-cards {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 300px;
}

.language-card {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--white-color);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: relative;
}

.language-card.active {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

.flag-icon {
  width: 30px;
  height: 20px;
  margin-right: 12px;
  border-radius: 4px;
  overflow: hidden;
}

.flag-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.greeting {
  font-size: 18px;
  font-weight: 500;
}

/* Listen Button */
.listen-button {
  display: flex;
  align-items: center;
  background-color: var(--white-color);
  border: 1px solid var(--gray-medium);
  color: var(--primary-color);
  padding: 10px 20px;
  border-radius: var(--border-radius);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.listen-button svg {
  margin-right: 8px;
  color: var(--accent-color-red);
}

/* Editor UI */
.editor-ui {
  width: 100%;
  max-width: 400px;
}

.music-file {
  display: flex;
  align-items: center;
  background-color: #0d6efd;
  color: var(--white-color);
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  position: relative;
}

.music-file svg {
  margin-right: 8px;
}

.editor-images {
  display: flex;
  align-items: center;
  position: relative;
}

.editor-image {
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.plus-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0 8px;
  font-size: 24px;
  font-weight: bold;
}

.scissors-icon {
  position: absolute;
  bottom: -20px;
  right: 20px;
  background-color: var(--white-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* CTA Dark Section */
.cta-dark-section {
  background-color: var(--dark-blue);
  color: var(--white-color);
  padding: 64px 20px;
  margin-top: 0;
}

.cta-dark-container {
  max-width: var(--max-width);
  margin: 0 auto;
  text-align: center;
}

.cta-dark-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 32px;
  line-height: 1.2;
}

.cta-dark-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white-color);
  color: var(--primary-color);
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: 500;
  border-radius: var(--border-radius);
  margin: 0 auto;
  cursor: pointer;
}

.cta-dark-button svg {
  margin-left: 8px;
}

.api-access {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 40px auto 0;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.api-button {
  display: flex;
  align-items: center;
  background-color: var(--dark-blue);
  color: var(--white-color);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.api-button svg {
  margin-left: 8px;
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
    max-width: 100%;
  }
  
  .auth-container {
    display: flex;
  }
  
  .mobile-menu-button {
    display: none;
  }
}

@media (max-width: 767px) {
  .header {
    height: 64px;
    padding: 0 20px;
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

  .auth-container {
    display: none;
  }
}

/* User Profile Styles */
.user-profile {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
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
</style>