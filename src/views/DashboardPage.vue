<template>
  <div class="p-6 max-w-5xl mx-auto">
    <!-- Reuse existing LandingPage as the main content for dashboard -->
    <LandingPage />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import LandingPage from '@/components/LandingPage/LandingPage.vue'

const router = useRouter()
const auth = useAuth()

const handleLogout = () => {
  auth.logout()
  router.push('/login')
}
</script>

<style scoped>
/* minimal styling, project uses tailwind */
</style>
 