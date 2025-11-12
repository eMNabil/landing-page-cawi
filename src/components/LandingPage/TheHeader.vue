<template>
  <header class="header-section">
    <img class="batik-header" src="../../assets/header-batik.png" alt="Header Batik" />
    
    <div class="text-content">
      <h1 class="welcome-text">Selamat Datang!</h1>
      <h2 class="title-text">Kuesioner CAWI PKL 65</h2>
      <p class="description-text">
        Mari berpartisipasi dalam pengumpulan data sosial ekonomi untuk mendukung riset lapangan PKL 65 Polstat STIS.
      </p>
      <button @click="openModal" class="start-button hover:bg-amber-500">
        Mulai Isi Kuesioner
      </button>
    </div>

    <!-- Modal Perhatian -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold text-gray-800">Perhatian</h2>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
        </div>
        
        <p class="mb-6 text-gray-600 border-l-4 border-orange-500 pl-4">
          Kuesioner ini akan diisi dalam 24 jam sejak dikirim.
        </p>

        <div class="flex justify-end gap-3 pt-4 border-t">
          <button @click="closeModal" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium">
            Batal
          </button>
          <button @click="startQuestionnaire" class="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all font-medium flex items-center gap-2">
            ✓ Lanjutkan
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  emits: ['start-questionnaire'],
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    startQuestionnaire() {
      this.closeModal();
      this.$emit('start-questionnaire');
    }
  }
};
</script>

<style scoped>
.header-section {
  padding: 20px;
  text-align: left; 
}

.text-content {
  max-width: 800px; 
}

.batik-header {
  width: 100%;
  height: auto;
  margin-bottom: 20px; 
}

.welcome-text {
  color: #c95111;
  font-size: 3em;
  margin-bottom: 5px;
  margin-left: 0; 
}

.title-text {
  color: #333;
  font-size: 4em;
  margin-top: 0;
  margin-left: 0;
}

.description-text {
  font-size: 1.1em;
  color: #555;
  max-width: 600px; 
  margin-left: 0;
}

.start-button {
  background-color: #c95111;
  color: white;
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 0; 
  display: inline-block;
  transition: background-color 0.3s ease;
}

.start-button:hover {
  background-color: #a8430e;
}

.start-button:active {
  transform: scale(0.98);
}
</style>