<template>
  <header class="header-section">
    <img class="batik-header" src="../../assets/header-batik.png" alt="Header Batik" />
    <div class="logo-container">
      <img class="logo-pkl" src="../../assets/LOGO-PKL_REV8.png" alt="Logo-PKL" />
      <img class="logo-stis" src="../../assets/Logo STIS.png" alt="Logo-STIS" />
    </div>
    <div class="text-content" >
      <h1 class="welcome-text">Selamat Datang!</h1>
      <h2 class="title-text">Kuesioner CAWI PKL 65</h2>
      <p class="description-text">
        Mari berpartisipasi dalam pengumpulan data sosial ekonomi untuk mendukung riset lapangan PKL 65 Polstat STIS.
      </p>
      <button @click="$emit('start-questionnaire')" class="start-button hover:bg-amber-500">
        Mulai Isi Kuesioner
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  emits: ['start-questionnaire']
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rakkas&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

.header-section {
  padding: 0; /* top padding kecil supaya logo tidak menutupi judul */
  text-align: left;
  position: relative; /* diperlukan agar .logo-container absolute menempel pada header */
}

/* posisi logo di kanan atas, logo bersebelahan */
.logo-container {
  position: absolute;
  top: 12px;
  right: 20px;
  display: flex;
  gap: 8px;
  align-items: center;
  z-index: 10;
}

/* ukuran dan perilaku kedua logo */
.logo-container img,
.logo-pkl,
.logo-stis {
  display: inline-block;
  height: 5em;
  width: auto;
  object-fit: contain;
  margin: 0;
  vertical-align: middle;
}

/* Opsional: Jika Anda ingin membatasi lebar teks agar tidak terlalu panjang ke kanan di layar besar */
.text-content {
  max-width: auto; 
  padding: 0 3em;
}

.batik-header {
  width: 100%;
  height: auto;
  margin-bottom: 20px;

}

.welcome-text {
  color: #D46832;
  font-size: clamp(1.6rem, 4vw, 3.5rem);
  margin-bottom: 0;
  margin-left: 0;
  font-family: Rakkas, cursive;
  line-height: 1.05;
}

.title-text {
  color: #D46832;
  font-size: clamp(2rem, 6vw, 5.5rem);
  margin-top: 0;
  margin-left: 0;
  font-family: Rakkas, cursive;
  line-height: 1.02;
}

.description-text {
  font-size: clamp(0.95rem, 2.5vw, 2rem);
  color: #D46832;
  max-width: 900px;
  margin-left: 0;
  margin-top: 0.5rem;
  font-family: 'Playfair Display', serif;
  line-height: 1.4;
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
  border-color: #c95111;
  display: inline-block; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .logo-container { top: 8px; right: 12px; }
  .logo-container img { height: 36px; }
  .welcome-text { font-size: clamp(1.4rem, 5.5vw, 2.4rem); }
  .title-text   { font-size: clamp(1.6rem, 7.5vw, 3.2rem); }
  .description-text { font-size: clamp(0.9rem, 3.5vw, 1.1rem); max-width: 95%; }
}

@media (max-width: 480px) {
  .start-button {
    width: 100%;
    padding: 12px 16px;
    font-size: 1rem;
    min-width: 0;
  }
  /* jika header menggunakan layout horizontal, pastikan teks tidak tertutup */
  .header-content { padding-right: 16px; }
}

/* pada layar menengah, tombol bisa sedikit lebih besar */
@media (min-width: 481px) and (max-width: 1024px) {
  .btn { padding: 10px 20px; font-size: 1rem; }
}
</style>