<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <div class="footer-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
          <span>VideoGenerator</span>
        </div>
        <p class="footer-description">
          Create amazing videos with AI in seconds. No editing skills required.
        </p>
      </div>

      <div class="footer-section">
        <h3 class="footer-heading">Product</h3>
        <ul class="footer-links">
          <li><a href="/features">Features</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/templates">Templates</a></li>
          <li><a href="/api">API</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3 class="footer-heading">Company</h3>
        <ul class="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3 class="footer-heading">Resources</h3>
        <ul class="footer-links">
          <li><a href="/help">Help Center</a></li>
          <li><a href="/docs">Documentation</a></li>
          <li><a href="/community">Community</a></li>
          <li><a href="/status">Status</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3 class="footer-heading">Legal</h3>
        <ul class="footer-links">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/cookies">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
.footer {
  background-color: var(--gray-light);
  padding: 64px 20px;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--gray-dark);
  font-size: 20px;
  font-weight: 600;
}

.footer-description {
  color: var(--secondary-color);
  font-size: 14px;
  line-height: 1.5;
}

.footer-heading {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--gray-dark);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
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

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style> 