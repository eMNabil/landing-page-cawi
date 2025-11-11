<template>
    <nav class="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center space-x-2">
                    <!-- <img src="/logo.svg" alt="Logo" class="h-8 w-8" /> -->
                    <span class="text-xl font-semibold text-gray-700">CAWI</span>
                </div>

                <div class="hidden md:flex space-x-6">
                    <router-link v-for="route in navbarRoutes" :key="route.path" :to="route.path"
                        class="text-gray-700 hover:text-blue-600 font-medium"
                        :class="{ 'text-blue-600 font-semibold': isActive(route.path) }">
                        {{ route.name }}
                    </router-link>
                </div>

                <div class="hidden md:flex items-center space-x-4">
                    <span class="text-gray-600 text-sm">Halo, Admin</span>
                    <button @click="logout"
                        class="bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-600 text-sm">
                        Logout
                    </button>
                </div>

                <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded-md hover:bg-gray-100">
                    <svg class="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

        <div v-if="isOpen" class="md:hidden bg-white border-t">
            <div class="px-4 py-3 space-y-2">
                <router-link v-for="route in navbarRoutes" :key="route.path" :to="route.path"
                    class="block text-gray-700 hover:text-blue-600"
                    :class="{ 'text-blue-600 font-semibold': isActive(route.path) }" @click="isOpen = false">
                    {{ route.name }}
                </router-link>
                <hr />
                <button @click="logout" class="w-full text-left text-red-500 hover:text-red-600">
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
    alert('Logout berhasil (contoh).')
}
</script>