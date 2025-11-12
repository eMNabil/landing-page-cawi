<template>
  <div class="landing-page-container">
    <div class="header-section">
      <TheHeader @start-questionnaire="$emit('start-questionnaire')" />
      
      <div class="image-stack">
        <img class="warna-bg" src="../../assets/gambar-warna.png" alt="Gambar Warna" />
        <img class="candi-image" src="../../assets/candi.png" alt="Gambar Candi Prambanan" />
      </div>
    </div>
    <HowToFill />
    <AboutCAWI/>>
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import HowToFill from './HowToFill.vue';
import AboutCAWI from './AboutCAWI.vue';

export default {
  name: 'LandingPage',
  components: {
    TheHeader,
    HowToFill,
    AboutCAWI
  },
  emits: ['start-questionnaire']
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
.landing-page-container {
  text-align: center;
  background-image: url('@/assets/background-batik.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #FFFBDF;
}

/* Container untuk menumpuk gambar */
.image-stack {
  padding-top: 4em;
  position: relative;
  width: 100%;
  max-width: 100%; 
  margin: auto;
  display: flex;           
  justify-content: center;
  align-items: center;
  
}

/* Gambar latar belakang */
.warna-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;    
  object-fit: cover; 
  z-index: 0;     
}

/* Gambar utama (Candi) */
.candi-image {
  position: relative;
  z-index: 1;      /* Pastikan layer-nya di atas warna-bg */
  width: 100%;     /* Agar responsif */
  height: auto;
  display: block;
}

.header-section {
  position: relative;
}

</style>