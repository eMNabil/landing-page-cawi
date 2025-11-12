<template>
  <div class="spinner-overlay">
    <div class="spinner-container"></div>
    <p class="loading-text">Memuat data...</p>
  </div>
</template>

<style scoped>
.spinner-overlay {
  /* Membuat overlay menutupi seluruh halaman */
  position: fixed; /* atau 'absolute' jika di dalam container */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7); /* Latar belakang transparan */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Memastikan spinner di lapisan paling atas */
}

.spinner-container {
  width: 60px;
  height: 60px;
  border: 8px solid #f3f3f3; /* Abu-abu muda */
  border-top: 8px solid #C95111; /* Warna oranye (sesuai tema) */
  border-radius: 50%;
  animation: spin 1s linear infinite; /* Animasi putar */
}

.loading-text {
  margin-top: 15px;
  font-size: 1.1em;
  color: #333;
  font-weight: bold;
}

/* Animasi putar (keyframes) */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>