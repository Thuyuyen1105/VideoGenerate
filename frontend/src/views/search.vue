<template>
  <DefaultLayout>
    <!-- Main Content -->
    <main class="main-content">
      <div class="hero-section">
        <div class="hero-content">
          <div class="logo" style="margin-bottom: 40px;">
          </div>
          
          <h1 class="hero-title" style="font-size: 32px; margin-bottom: 30px;">What's your video about?</h1>
          
          <div style="width: 100%; max-width: 500px; margin: 0 auto;">
            <div style="position: relative; margin-bottom: 20px;">
              <input 
                type="text" 
                placeholder="Write an idea" 
                style="width: 100%; padding: 15px; border: 1px solid var(--gray-medium); border-radius: var(--border-radius); font-size: 16px;"
                v-model="videoIdea"
              />
              <button style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background-color: black; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: none;">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            
            <div style="display: flex; gap: 8px; margin-bottom: 20px;">
              <div style="flex: 1;">
                <select v-model="selectedLanguage" style="width: 100%; padding: 8px; border: 1px solid var(--gray-medium); border-radius: var(--border-radius); background-color: white;">
                  <option value="en">English</option>
                  <option value="vi">Vietnamese</option>
                </select>
              </div>

              <div style="flex: 1;">
                <select v-model="selectedLength" style="width: 100%; padding: 8px; border: 1px solid var(--gray-medium); border-radius: var(--border-radius); background-color: white;">
                  <option value="veryshort">Very short</option>
                  <option value="short">Short</option>
                  <option value="medium">Medium</option>
                  <option value="long">Long</option>

                </select>
              </div>

              <div style="flex: 1;">
                <select v-model="selectedTone" style="width: 100%; padding: 8px; border: 1px solid var(--gray-medium); border-radius: var(--border-radius); background-color: white;">
                  <option value="casual">Casual</option>
                  <option value="storytelling">Storytelling</option>
                  <option value="educational">Educational</option>
                  <option value="funny">Funny</option>
                </select>
              </div>

              <div>
                  <select v-model="selectAudience" style="width: 100%; padding: 8px; border: 1px solid var(--gray-medium); border-radius: var(--border-radius); background-color: white;">
                  <option value="kids">Kid</option>
                  <option value="teenager">Teenager</option>
                  <option value="adult">Adult</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
            </div>
            
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
              <button 
                v-for="(idea, index) in randomIdeas" 
                :key="index" 
                @click="selectIdea(idea)"
                style="background-color: white; border: 1px solid var(--gray-medium); border-radius: 20px; padding: 8px 16px; font-size: 14px; cursor: pointer;"
              >
                {{ idea }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'SearchView',
  components: {
    DefaultLayout
  },
  data() {
    return {
      videoIdea: '',
      randomIdeas: [],
      selectedLanguage: 'en',
      selectedLength: 'medium',
      selectedTone: 'casual',
      selectAudience: 'adult'
    }
  },
  methods: {
    selectIdea(idea) {
      this.videoIdea = idea
    },
    async fetchSuggestions() {
      try {
        const response = await fetch('https://data-management-service-production.up.railway.app/api/v1/data/suggestions')
        if (response.ok) {
          const data = await response.json()
          this.randomIdeas = data
        } else {
          console.error('Failed to fetch suggestions')
          // Fallback to default suggestions if API fails
          this.randomIdeas = [
            'Product Demo',
            'Tutorial Video',
            'Company Overview',
            'Event Highlights',
            'Testimonial',
            'How-to Guide'
          ]
        }
      } catch (error) {
        console.error('Error fetching suggestions:', error)
        // Fallback to default suggestions if API fails
        this.randomIdeas = [
          'Product Demo',
          'Tutorial Video',
          'Company Overview',
          'Event Highlights',
          'Testimonial',
          'How-to Guide'
        ]
      }
    }
  },
  async created() {
    await this.fetchSuggestions()
  }
}
</script>

<style scoped>
.main-content {
  min-height: calc(100vh - 60px);
  padding: 20px;
}

.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
}

.hero-content {
  text-align: center;
  max-width: 800px;
  width: 100%;
}

.hero-title {
  font-weight: 600;
  color: var(--text-primary);
}
</style>