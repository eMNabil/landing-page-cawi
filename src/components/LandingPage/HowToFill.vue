<template>
  <section class="how-to-fill">
    <h3>Cara Mengisi Kuesioner</h3>
    <p class="deskrip">Ikuti langkah-langkah berikut untuk mengisi kuesioner dengan mudah</p>
    <div class="steps-indicator">
      <div v-for="step in steps" :key="step.id" class="step-item">
  <span
    class="step-number"
    :style="{ backgroundColor: getColor(step.id) }"
  >
    {{ step.id }}
  </span>
  <p class="step-description">{{ step.description }}</p>
</div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'HowToFill',
  data() {
    return {
      steps: [
        { id: 1, description: 'Klik Tombol Mulai Isi Kuesioner di halaman utama.' },
        { id: 2, description: 'Isi Formulir: Lengkapi semua pertanyaan yang ada pada formulir.' },
        { id: 3, description: 'Periksa Kembali: Pastikan semua data yang diisi sudah benar dan lengkap.' },
        { id: 4, description: 'Kirim Jawaban: Klik tombol Kirim Jawaban untuk menyimpan data Anda.' },
      ],
    };
  },
  methods: {
    getColor(id) {
      const colors = ['#FCDA7B', '#50829B', '#748D63', '#8174A0']; // warna berbeda tiap step
      return colors[(id - 1) % colors.length];
    }
  }
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rakkas&display=swap');

.how-to-fill {
  background-color: #EF874B;
  color: white;
  padding: 48px 20px; /* agak lebih besar untuk ruang */
}

/* Judul "Cara Mengisi Kuesioner" diperbesar */
.how-to-fill h3 {
  font-size: clamp(2.4rem, 6vw, 4rem);
  margin-bottom: 8px;
  font-family: Rakkas, cursive;
  line-height: 1.02;
}

/* Paragraf penjelasan diperbesar */
.how-to-fill deskrip {
  font-size: clamp(1.05rem, 2.2vw, 1.6rem);
  margin-top: 6px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

/* Indikator langkah */
.steps-indicator {
  display: flex;
  justify-content: center;
  gap: 28px;
  margin-top: 34px;
  flex-wrap: wrap;
}

.step-item {
  width: 220px;
  text-align: center;
}

/* Nomor langkah diperbesar dan lebih menonjol */
.step-number{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.7rem;
  color: #ffffff;
  margin-bottom: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.12);
}

.step-description {
  font-size: clamp(0.9rem, 1.6vw, 1.15rem);
  line-height: 1.4;
  color: #fff
}

@media (max-width: 480px) {
  .how-to-fill {
    padding: 28px 14px;
  }
  .how-to-fill h3 {
    font-size: clamp(1.6rem, 8vw, 2.4rem);
  }
  .step-item {
    width: 140px;
    margin-bottom: 10px;
  }
  .step-number {
    width: 48px;
    height: 48px;
    font-size: 1.1rem;
  }
  .step-description {
    font-size: 0.95rem;
  }
}
</style>