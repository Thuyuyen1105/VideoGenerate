<template>
  <DefaultLayout>
    <main class="main-content">
      <!-- Chart -->
      <div class="analytics-container">
        <div class="analytics-graph">
          <canvas ref="analyticsChart" height="200"></canvas>
        </div>

        <!-- Summary -->
        <div class="analytics-summary">
          <div class="summary-item bg-white p-4 rounded-xl shadow">
            <div class="summary-value text-2xl font-bold">{{ videos.length }}</div>
            <div class="summary-label text-gray-500">Videos</div>
          </div>
          <div class="summary-item bg-white p-4 rounded-xl shadow">
            <div class="summary-value text-2xl font-bold">{{ formatNumber(totalViews) }}</div>
            <div class="summary-label text-gray-500">Views</div>
          </div>
          <div class="summary-item bg-white p-4 rounded-xl shadow">
            <div class="summary-value text-2xl font-bold">{{ formatNumber(totalLikes) }}</div>
            <div class="summary-label text-gray-500">Likes</div>
          </div>
          <div class="summary-item bg-white p-4 rounded-xl shadow">
            <div class="summary-value text-2xl font-bold">{{ formatNumber(totalComments) }}</div>
            <div class="summary-label text-gray-500">Comments</div>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="analytics-table-container">
        <table class="analytics-table">
          <thead>
            <tr>
              <th>Videos</th>
              <th>view</th>
              <th>like</th>
              <th>comment</th>
              <th>share</th>
              <th>platform</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(video, index) in paginatedVideos" :key="index">
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
      <div class="pagination mt-4 flex gap-2 justify-center">
        <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="pagination-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button v-for="page in totalPages" :key="page" @click="changePage(page)"
          :class="['pagination-number', { active: page === currentPage }]">
          {{ page }}
        </button>

        <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="pagination-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </main>
  </DefaultLayout>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js/auto'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
  name: 'AnalyticsView',
  components: {
    DefaultLayout
  },
  data() {
    return {
      videos: [],
      chart: null,
      defaultHandle: '@NekoGamers089', // handle mặc định ở đây
      apiKey: 'AIzaSyDS6iN4haeWypLKvsX9u7rNNotdXPUrINQ',
      currentPage: 1,
      itemsPerPage: 10
    }
  },
  computed: {
    totalViews() {
      return this.videos.reduce((sum, v) => sum + v.views, 0)
    },
    totalLikes() {
      return this.videos.reduce((sum, v) => sum + v.likes, 0)
    },
    totalComments() {
      return this.videos.reduce((sum, v) => sum + v.comments, 0)
    },
    totalPages() {
      return Math.ceil(this.videos.length / this.itemsPerPage)
    },
    paginatedVideos() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      return this.videos.slice(start, start + this.itemsPerPage)
    }
  },
  async mounted() {
    await this.fetchYoutubeVideos()
    this.initChart()
  },
  methods: {
    async getChannelIdByHandle(handle) {
      try {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: this.apiKey,
            q: handle,
            type: 'channel',
            part: 'snippet',
            maxResults: 1
          }
        })
        return res.data.items[0]?.snippet?.channelId || null
      } catch (err) {
        console.error('Lỗi khi tìm channel từ handle:', err)
        return null
      }
    },

    async fetchYoutubeVideos() {
      try {
        const formattedHandle = this.defaultHandle.startsWith('@') ? this.defaultHandle : `@${this.defaultHandle}`
        const channelId = await this.getChannelIdByHandle(formattedHandle)

        if (!channelId) {
          alert(`Không tìm thấy kênh với handle: ${this.defaultHandle}`)
          return
        }

        const searchRes = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: this.apiKey,
            channelId: channelId,
            part: 'snippet',
            order: 'date',
            maxResults: 50
          }
        })

        const videoIds = searchRes.data.items
          .filter(item => item.id.videoId)
          .map(item => item.id.videoId)
          .join(',')

        if (!videoIds) {
          this.videos = []
          return
        }

        const detailsRes = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            key: this.apiKey,
            id: videoIds,
            part: 'snippet,statistics'
          }
        })

        this.videos = detailsRes.data.items.map(item => ({
          title: item.snippet.title,
          views: parseInt(item.statistics.viewCount || 0),
          likes: parseInt(item.statistics.likeCount || 0),
          comments: parseInt(item.statistics.commentCount || 0),
          shares: 0,
          platforms: ['YouTube']
        }))
      } catch (err) {
        console.error('Lỗi khi tải dữ liệu video:', err)
      }
    },

    initChart() {
      const ctx = this.$refs.analyticsChart.getContext('2d')
      if (this.chart) this.chart.destroy()

      const dataToShow = this.paginatedVideos

      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dataToShow.map(v => v.title),
          datasets: [{
            label: 'Views',
            data: dataToShow.map(v => v.views),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.3,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 7
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: true
            },
            tooltip: {
              mode: 'index',
              intersect: false
            }
          }
        }
      })
    },

    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
        this.initChart()
      }
    },

    formatNumber(num) {
      if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M'
      if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K'
      return num.toString()
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