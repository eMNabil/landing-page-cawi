<template>
    <nav class="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo & Brand -->
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-lg">C</span>
                    </div>
                    <span class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">CAWI</span>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex space-x-1">
                    <router-link v-for="route in navbarRoutes" :key="route.path" :to="route.path"
                        class="px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                        :class="{ 'bg-blue-100 text-blue-600 font-semibold': isActive(route.path) }">
                        {{ route.name }}
                    </router-link>
                </div>

                <!-- Desktop User Section -->
                <div class="hidden md:flex items-center space-x-4">
                    <div class="flex items-center space-x-2 px-3 py-2 bg-gray-50 rounded-lg">
                        <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                            <span class="text-white text-sm font-bold">A</span>
                        </div>
                        <span class="text-gray-700 font-medium text-sm">Admin</span>
                    </div>
                    <button @click="logout"
                        class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-md active:scale-95">
                        Logout
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg class="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            :d="isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isOpen" class="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div class="px-4 py-4 space-y-2">
                <router-link v-for="route in navbarRoutes" :key="route.path" :to="route.path"
                    class="block px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all"
                    :class="{ 'bg-blue-100 text-blue-600 font-semibold': isActive(route.path) }" 
                    @click="isOpen = false">
                    {{ route.name }}
                </router-link>
                <hr class="my-2" />
                <div class="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg mb-3">
                    <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span class="text-white text-sm font-bold">A</span>
                    </div>
                    <span class="text-gray-700 font-medium">Admin</span>
                </div>
                <button @click="logout" class="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all">
                    Logout
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isOpen = ref(false)

const navbarRoutes = computed(() =>
    router.getRoutes().filter(r => r.meta?.showNavbar)
)

const isActive = (path) => route.path === path

const logout = () => {
    localStorage.removeItem('token')
    alert('Logout berhasil.')
    window.location.href = '/login'
}
</script>