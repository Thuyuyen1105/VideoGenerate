<template>
  <div class="app-container">
    <TheHeader ref="header" />
    <main class="main-content">
      <slot></slot>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/partials/TheHeader.vue'
import TheFooter from '@/components/partials/TheFooter.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style> 