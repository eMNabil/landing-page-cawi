<template>
  <section class="about-cawi-section">
    <div class="info-cards-container">
      <h2 class="section-title">Tentang CAWI PKL 65</h2>
      <p class="section-description">
        Computer-Assisted Web Interviewing (CAWI) merupakan metode pengumpulan data berbasis web yang digunakan dalam kegiatan Praktek Kerja Lapangan (PKL) ke-65 Politeknik Statistika STIS.
      </p>

      <div class="cards-grid">
        <div v-for="(card, index) in cards" :key="index" class="info-card">
          <div class="icon-wrapper" :style="{ backgroundColor: card.iconColor }">
            <span class="icon-placeholder">Icon</span>
          </div>
          <h3 class="card-title" :style="{ color: card.titleColor }">{{ card.title }}</h3>
          <p class="card-description">{{ card.description }}</p>
        </div>
      </div>
    </div>

    <div class="pkl-info-footer">
      <h2 class="footer-title">Praktek Kerja Lapangan 65</h2>
      <p class="footer-description">
        PKL 65 merupakan kegiatan praktik lapangan mahasiswa Politeknik Statistika STIS yang bertujuan untuk menerapkan ilmu statistika dalam pengumpulan dan analisis data di lapangan. Melalui sistem CAWI ini, kami mengintegrasikan teknologi modern untuk meningkatkan efisiensi dan akurasi pengumpulan data.
      </p>
      <div class="footer-bottom">
        <div class="copyright">
          © 2025 PKL 65 Polstat STIS<br>
          <small>Politeknik Statistika STIS</small>
        </div>
        <div class="social-media">
          Follow us on Instagram<br>
          <strong>@pkl65</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutCAWI',
  data() {
    return {
      cards: [
        {
          title: 'Tujuan',
          description: 'Mengumpulkan data sosial ekonomi masyarakat secara efisien, akurat, dan mudah diakses.',
          iconColor: '#7E6EAC', // Ungu
          titleColor: '#C95111'  // Oranye
        },
        {
          title: 'Manfaat',
          description: 'Data digunakan untuk mendukung analisis dan penelitian mahasiswa dalam memahami kondisi sosial ekonomi di wilayah penelitian.',
          iconColor: '#D97B4A', // Oranye Bata
          titleColor: '#C95111'
        },
        {
          title: 'Kelebihan',
          description: 'Responden dapat mengisi kuesioner secara mandiri melalui perangkat digital tanpa perlu wawancara langsung.',
          iconColor: '#E8B769', // Kuning Emas
          titleColor: '#C95111'
        },
        {
          title: 'Efisien',
          description: 'Proses pengisian yang cepat dengan validasi otomatis dan progress tracker untuk memantau penyelesaian.',
          iconColor: '#5E8F9E', // Biru Laut
          titleColor: '#C95111'
        }
      ]
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
.about-cawi-section {
  font-family: sans-serif;
  color: #333;
  
}

/* --- Bagian Atas --- */
.info-cards-container {
  padding: 50px 20px;
  text-align: center;
  background-color: #FFFBE6; /* Warna latar krem muda */
  text-align: center;
  background-image: url('@/assets/background-batik.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.section-title {
  color: #C95111;
  font-size: 2.5em;
  margin-bottom: 15px;
  font-family: rakkas, cursive;
}

.section-description {
  max-width: 800px;
  margin: 0 auto 50px;
  line-height: 1.6;
  color: #D97B4A ;
  font-size: 1.1em;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  text-align: left;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.info-card:hover {
  transform: translateY(-5px);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 1.5em;
  margin-bottom: 15px;
  font-family: rakkas, cursive;
}

.card-description {
  color: #555;
  line-height: 1.5;
  font-size: 0.95em;
}

/* --- Bagian Bawah (Footer Oranye) --- */
.pkl-info-footer {
  background: linear-gradient(to bottom, #D97B4A, #E8B769); /* Gradien oranye */
  color: white;
  padding: 60px 20px 20px;
  text-align: center;
}

.footer-title {
  font-size: 2em;
  margin-bottom: 20px;
}

.footer-description {
  max-width: 900px;
  margin: 0 auto 50px;
  line-height: 1.8;
  font-size: 1.1em;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid rgba(255,255,255,0.3);
  padding-top: 20px;
  font-size: 0.9em;
  max-width: 1200px;
  margin: 0 auto;
}

.copyright, .social-media {
  text-align: left;
}

.social-media {
  text-align: right;
}
</style>