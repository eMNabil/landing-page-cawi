<template>
    <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <!-- Decorative Pattern Background -->
        <div class="absolute inset-0 opacity-10">
        </div>

        <!-- Colorful Geometric Shapes -->
        <div
            class="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob">
        </div>
        <div
            class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-400 to-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000">
        </div>
        <div
            class="absolute bottom-0 left-1/2 w-64 h-64 bg-gradient-to-br from-red-400 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000">
        </div>

        <!-- Temple Silhouette -->
        <div
            class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-orange-900/20 to-transparent pointer-events-none">
            <svg class="absolute bottom-0 w-full h-40 opacity-20" viewBox="0 0 1200 200" preserveAspectRatio="none">
                <path
                    d="M0,200 L0,150 L100,150 L120,120 L140,150 L200,150 L220,100 L240,150 L300,150 L320,80 L340,150 L400,150 L420,60 L440,150 L500,150 L520,90 L540,150 L600,150 L620,110 L640,150 L700,150 L720,70 L740,150 L800,150 L820,100 L840,150 L900,150 L920,120 L940,150 L1000,150 L1020,90 L1040,150 L1100,150 L1120,130 L1140,150 L1200,150 L1200,200 Z"
                    fill="currentColor" class="text-orange-800" />
            </svg>
        </div>

        <div class="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
            <div class="w-full max-w-md">
                <!-- Logo/Badge -->
                <div class="flex justify-center mb-6">
                    <div
                        class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-4 shadow-2xl border-4 border-white">
                        <svg class="w-12 h-12 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                    </div>
                </div>

                <!-- Welcome Text -->
                <div class="text-center mb-8">
                    <h1
                        class="text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-2">
                        Selamat Datang!
                    </h1>
                    <p class="text-orange-800/70 text-lg font-medium">
                        PKL 65 Polstat STIS
                    </p>
                </div>

                <!-- Error Alert -->
                <div v-if="loginError" class="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <p class="text-red-700 font-semibold">{{ loginError }}</p>
                </div>

                <!-- Login Card -->
                <div class="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-orange-100">
                    <div class="space-y-6">
                        <!-- Username Field -->
                        <div class="space-y-2">
                            <label class="text-sm font-semibold text-orange-900 flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Username
                            </label>
                            <div class="relative group">
                                <input type="text" v-model="formData.username" @keypress="handleKeyPress"
                                    class="w-full px-4 py-3 bg-orange-50/50 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 text-orange-900 placeholder-orange-400"
                                    placeholder="Masukkan username" />
                            </div>
                        </div>

                        <!-- Password Field -->
                        <div class="space-y-2">
                            <label class="text-sm font-semibold text-orange-900 flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                Password
                            </label>
                            <div class="relative group">
                                <input :type="showPassword ? 'text' : 'password'" v-model="formData.password"
                                    @keypress="handleKeyPress"
                                    class="w-full px-4 py-3 bg-orange-50/50 border-2 border-orange-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 text-orange-900 placeholder-orange-400 pr-12"
                                    placeholder="Masukkan password" />
                                <button type="button" @click="showPassword = !showPassword"
                                    class="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-orange-600 hover:text-orange-800 transition-colors">
                                    <svg v-if="showPassword" class="w-5 h-5" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Remember & Forgot -->
                        <div class="flex items-center justify-between text-sm">
                            <label class="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" v-model="rememberMe"
                                    class="w-4 h-4 rounded border-orange-300 text-orange-600 focus:ring-orange-500 focus:ring-2 cursor-pointer" />
                                <span class="text-orange-800 group-hover:text-orange-900 transition-colors">Ingat
                                    saya</span>
                            </label>
                            <button @click="alert('Fitur lupa password')"
                                class="text-orange-600 hover:text-orange-800 font-semibold transition-colors">
                                Lupa password?
                            </button>
                        </div>

                        <button type="button" @click="handleSubmit" :disabled="isLoading"
                            class="w-full bg-gradient-to-l from-orange-700 via-orange-500 cursor-pointer hover:bg-amber-50 to-red-100  text-white font-bold py-3.5 px-6 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group">
                            <span class="relative z-10 flex items-center justify-center gap-2">
                                <svg v-if="isLoading" class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4" fill="none" />
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                <span v-if="isLoading">Memproses...</span>
                                <span v-else>Masuk</span>
                            </span>
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left">
                            </div>
                        </button>
                    </div>

                    <!-- Divider -->
                    <div class="relative my-6">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-orange-200"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-4 bg-white text-orange-600 font-medium">atau</span>
                        </div>
                    </div>

                    <!-- Register Link -->
                    <p class="text-center text-orange-800">
                        Belum punya akun?
                        <button @click="alert('Fitur daftar')"
                            class="font-bold text-orange-600 hover:text-orange-800 transition-colors">
                            Daftar sekarang
                        </button>
                    </p>
                </div>

                <!-- Footer -->
                <p class="text-center mt-8 text-orange-800/60 text-sm">
                    © 2025 PKL 65 Polstat STIS
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

export default {
    name: 'LoginPage',
    setup() {
        const auth = useAuth()
        const router = useRouter()
        const showPassword = ref(false)
        const formData = ref({ username: '', password: '' })
        const isLoading = ref(false)
        const rememberMe = ref(false)
        const loginError = ref('')

        const handleSubmit = async () => {
            if (!formData.value.username || !formData.value.password) {
                loginError.value = 'Mohon isi username dan password!'
                return
            }

            isLoading.value = true
            loginError.value = ''

            console.log('[LoginPage] calling auth.login with', formData.value)
            const result = await auth.login(formData.value.username, formData.value.password)
            console.log('[LoginPage] login result', result)
                if (result.success) {
                    // redirect to Token Management page
                    router.push('/token-management')
            } else {
                loginError.value = result.message || 'Login gagal'
            }

            isLoading.value = false
        }

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                handleSubmit()
            }
        }

        return {
            showPassword,
            formData,
            isLoading,
            rememberMe,
            loginError,
            handleSubmit,
            handleKeyPress,
        }
    }
}
</script>

<style scoped>
@keyframes blob {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }

    33% {
        transform: translate(30px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}
</style>