<template>
  <DefaultLayout>
    <!-- Main Content -->
    <main class="main-content">
      <div class="analytics-container">
        <!-- Analytics Graph -->
        <div class="analytics-graph">
          <canvas ref="analyticsChart" height="200"></canvas>
        </div>

        <!-- Analytics Summary -->
        <div class="analytics-summary">
          <div class="summary-item">
            <div class="summary-value">3</div>
            <div class="summary-label">Videos</div>
          </div>
          <div class="summary-item">
            <div class="summary-value">12m</div>
            <div class="summary-label">Views</div>
          </div>
          <div class="summary-item">
            <div class="summary-value">123k</div>
            <div class="summary-label">like</div>
          </div>
          <div class="summary-item">
            <div class="summary-value">2.1k</div>
            <div class="summary-label">comments</div>
          </div>
        </div>

        <!-- Analytics Table -->
        <div class="analytics-table-container">
          <table class="analytics-table">
            <thead>
              <tr>
                <th>Videos</th>
                <th>
                  <div class="table-header-with-icon">
                    view
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </th>
                <th>
                  <div class="table-header-with-icon">
                    like
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </th>
                <th>
                  <div class="table-header-with-icon">
                    comment
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </th>
                <th>
                  <div class="table-header-with-icon">
                    share
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </th>
                <th>platform</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(video, index) in videos" :key="index">
                <td>{{ video.title }}</td>
                <td>{{ video.views }}</td>
                <td>{{ video.likes }}</td>
                <td>{{ video.comments }}</td>
                <td>{{ video.shares }}</td>
                <td class="platform-cell">
                  <div class="platform-buttons">
                    <button v-for="platform in video.platforms" :key="platform" class="platform-button"
                      :class="platform.toLowerCase()">
                      {{ platform }}
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="pagination">
          <button class="pagination-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button class="pagination-number active">1</button>
          <button class="pagination-number">2</button>
          <button class="pagination-number">3</button>
          <button class="pagination-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Chart from 'chart.js/auto'

export default {
  name: 'AnalyticsView',
  components: {
    DefaultLayout
  },
  data() {
    return {
      videos: [
        {
          title: 'Video 1',
          views: '1.2M',
          likes: '45K',
          comments: '1.2K',
          shares: '500',
          platforms: ['YouTube', 'TikTok']
        },
        {
          title: 'Video 2',
          views: '800K',
          likes: '30K',
          comments: '800',
          shares: '300',
          platforms: ['Instagram', 'Facebook']
        },
        {
          title: 'Video 3',
          views: '500K',
          likes: '20K',
          comments: '500',
          shares: '200',
          platforms: ['YouTube', 'Instagram']
        }
      ]
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const ctx = this.$refs.analyticsChart.getContext('2d')
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Views',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      })
    }
  }
}
</script>

<style scoped>
.main-content {
  padding: 20px;
}

.analytics-container {
  max-width: 1200px;
  margin: 0 auto;
}

.analytics-graph {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.analytics-summary {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.summary-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.summary-value {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.summary-label {
  color: #666;
  margin-top: 5px;
}

.analytics-table-container {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
}

.analytics-table {
  width: 100%;
  border-collapse: collapse;
}

.analytics-table th,
.analytics-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.table-header-with-icon {
  display: flex;
  align-items: center;
  gap: 5px;
}

.platform-buttons {
  display: flex;
  gap: 5px;
}

.platform-button {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  border: none;
  color: white;
}

.platform-button.youtube {
  background-color: #FF0000;
}

.platform-button.tiktok {
  background-color: #000000;
}

.platform-button.instagram {
  background-color: #E1306C;
}

.platform-button.facebook {
  background-color: #1877F2;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.pagination-arrow,
.pagination-number {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.pagination-number.active {
  background: #333;
  color: white;
  border-color: #333;
}
</style>