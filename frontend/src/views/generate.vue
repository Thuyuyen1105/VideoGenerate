<template>
  <DefaultLayout>
    <div class="app-container">
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
            <textarea class="text-input" rows="5" placeholder="Enter your script here..." v-model="outputScript"></textarea>
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
                <textarea class="text-input" rows="5" v-model="outputScript"></textarea>
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <div class="navigation-controls">
            <div class="navigation-arrow" @click="prevImage">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>

            <div class="navigation-dots">
              <span v-for="(image, index) in generatedImages" :key="index" :class="{'active': currentIndex === index}" @click="setImageIndex(index)"></span>
            </div>

            <div class="navigation-arrow" @click="nextImage">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
    </div>
  </DefaultLayout>
</template>


<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
export default {
    components: {
    DefaultLayout
  },
  setup() {
    const outputScript = ref('');
    const generatedImages = ref([
        { url: 'https://picsum.photos/id/237/200/300' },
        { url: 'https://picsum.photos/id/232/200/300' },
        { url: 'https://picsum.photos/id/233/200/300' },
        { url: 'https://picsum.photos/id/234/200/300' }
    ]);
        
    return {
      outputScript,  // Trả về outputScript để sử dụng trong template
    generatedImages
    };
  },
  mounted() {
    const savedImage = localStorage.getItem('editedImage');
    if (savedImage) {
      this.generatedImages.unshift({ url: savedImage }); // Thêm ảnh mới vào đầu danh sách
      localStorage.removeItem('editedImage'); // optional
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