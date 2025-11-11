<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 class="text-3xl font-bold text-orange-600 mb-4">Halo dari Vue 3! 👋</h1>
      <p class="text-gray-700 mb-6">
        Jika kamu melihat halaman ini, berarti konfigurasi proyekmu sudah berjalan dengan baik.
      </p>
      <button @click="count++" class="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
        Klik saya ({{ count }})
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const count = ref(0)
  </script>
  
  <style scoped>
  /* Tambahan gaya sederhana jika Tailwind belum diaktifkan */
  .min-h-screen {
    min-height: 100vh;
  }
  .flex {
    display: flex;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .bg-gray-100 {
    background-color: #f5f5f5;
  }
  .text-center {
    text-align: center;
  }
  .text-orange-600 {
    color: #ea580c;
  }
  .bg-orange-500 {
    background-color: #f97316;
  }
  .bg-orange-600:hover {
    background-color: #ea580c;
  }
  </style>
  