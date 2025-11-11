<template>
    <div v-if="show"
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300">
      <div class="bg-white rounded-lg shadow-xl w-11/12 md:w-2/3 p-6">
        <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
  
        <p v-if="description" class="mb-3 text-gray-600">{{ description }}</p>
  
        <div v-if="previewData && previewData.length"
             class="overflow-x-auto max-h-80 border rounded-lg mb-4">
          <table class="min-w-full text-sm text-left">
            <thead class="bg-gray-100 sticky top-0">
              <tr>
                <th v-for="(key, index) in Object.keys(previewData[0])" :key="index" class="px-4 py-2 capitalize">
                  {{ key }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in previewData" :key="i" class="hover:bg-gray-50">
                <td v-for="(value, j) in Object.values(row)" :key="j" class="px-4 py-2">
                  {{ value }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <slot></slot>
  
            <div class="flex justify-end gap-3 mt-4">
          <button @click="$emit('cancel')"
                  class="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition-all">
            {{ cancelText }}
          </button>
          <button @click="$emit('confirm')"
                  class="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all">
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    show: Boolean,
    title: { type: String, default: 'Konfirmasi' },
    description: { type: String, default: '' },
    previewData: { type: Array, default: () => [] },
    cancelText: { type: String, default: 'Batal' },
    confirmText: { type: String, default: 'Konfirmasi' }
  })
  
  defineEmits(['cancel', 'confirm'])
  </script>
  