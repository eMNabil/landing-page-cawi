<template>
  <header class="header-section">
    <img class="batik-header" src="../../assets/header-batik.png" alt="Header Batik" />
    
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
  padding: 20px;
  text-align: left; /* Latar belakang putih transparan untuk keterbacaan */
}

/* Opsional: Jika Anda ingin membatasi lebar teks agar tidak terlalu panjang ke kanan di layar besar */
.text-content {
  max-width: auto; 
  
}

.batik-header {
  width: 100%;
  height: auto;
  margin-bottom: 20px;

}

.welcome-text {
  color: #D46832;
  font-size: 4.5em;
  /* font-size: 75px; */
  margin-bottom: 0;
  margin-left: 0; 
  font-family: rakkas, cursive;
}

.title-text {
  color: #D46832;
  font-size: 5em;
  /* font-size: 96px; */
  margin-top: 0;
  margin-left: 0;
  font-family: rakkas, cursive;
}

.description-text {
  font-size: 2em;
  /* font-size:32px; */
  color: #D46832;
  max-width: 900px; /* Opsional: Membuat teks deskripsi tidak terlalu lebar agar mudah dibaca */
  margin-left: 0;
  font-family: 'Playfair Display', serif;
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
</style>