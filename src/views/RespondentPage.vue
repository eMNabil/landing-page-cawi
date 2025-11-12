<template>
  <div class="respondent-page">
    <div class="main-content">
      
      <div class="card header-card">
        <!-- <img src="@/assets/landing-page-thumbnail.png" alt="Thumbnail Kuesioner" class="thumbnail" /> -->
        <div class="header-text">
          <h1>Sistem Pengiriman Kuisioner</h1>
          <p>Kelola dan kirim link kuesioner CAWI PKL 65 ke responden</p>
        </div>
      </div>

      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.title" class="card stat-card">
          <span class="stat-title">{{ stat.title }}</span>
          <span class="stat-value" :style="{ color: stat.color }">{{ stat.value }}</span>
        </div>
      </div>

      <div class="card respondent-list-section">
        <div class="list-header">
          <div class="list-title">
            <h2><span class="icon">📄</span> Daftar Responden</h2>
            <p>Responden yang akan menerima link kuisioner</p>
          </div>
          <button class="send-all-btn">
            <span class="icon">►</span> Kirim Semua
          </button>
        </div>

        <div class="respondent-list">
          <div v-for="respondent in respondents" :key="respondent.id" class="respondent-item">
            <div class="icon-avatar">📧</div>
            <div class="respondent-info">
              <span class="name">{{ respondent.name }}</span>
              <span class="email">{{ respondent.email }}</span>
            </div>
            <span class="status-badge">{{ respondent.status }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  <div v-if="isLoading" class="loading-state"><SpinnerLoading /></div>
</template>

<!-- <script>
import axios from 'axios';
import SpinnerLoading from '@/components/globalComponents/SpinnerLoading.vue';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default {
  name: 'RespondentPage',
  data() {
    return {
      stats: [
        { title: 'Total Responden', value: 8, color: '#333' },
        { title: 'Berhasil Terkirim', value: 0, color: 'green' },
        { title: 'Gagal Terkirim', value: 0, color: 'red' },
        { title: 'Menunggu', value: 8, color: '#333' },
      ],
      respondents: [
        { id: 1, name: 'Budi Santoso', email: 'budi.santoso@email.com', status: 'Menunggu' },
        { id: 2, name: 'Siti Nurhaliza', email: 'siti.nurhaliza@email.com', status: 'Menunggu' },
        // Tambahkan data responden lain di sini
      ],
    };
  },
  // methods: {
  //   sendAll() {
  //     // Logika untuk tombol "Kirim Semua"
  //   }
  // }
};
</script> -->

<script>
import axios from 'axios';
import SpinnerLoading from '@/components/globalComponents/SpinnerLoading.vue';

const API_BASE_URL = 'http://localhost:3000'; 

export default {
  name: 'RespondentPage',
  components: {
    SpinnerLoading,
  },
  data() {
    return {
      stats: [],
      respondents: [],
      isLoading: true, 
      errorMessage: '',
    };
  },
  mounted() {
    this.fetchRespondentData();
  },
  methods: {
    async fetchRespondentData() {
      this.isLoading = true; 
      this.errorMessage = '';
      try {
        const response = await axios.get(`${API_BASE_URL}/responden`);
        console.log('Data responden diterima:', response.data);

        this.respondents = response.data;
        this.stats = response.data.stats;
        
      } catch (error) {
        console.error('Gagal mengambil data dari backend:', error);
      } finally {
        this.isLoading = false;
      }
    }
    // Method untuk "Kirim Semua"
  }
};
</script>

<style scoped>
.respondent-page {
  background-color: #FDF8ED; 
  min-height: 100vh;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

/* 1. Header Card */
.header-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.thumbnail {
  width: 100px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.header-text h1 {
  font-size: 1.75rem;
  color: #C95111; 
  margin: 0 0 0.25rem 0;
}

.header-text p {
  font-size: 1rem;
  color: #555;
  margin: 0;
}

/* 2. Kartu Statistik */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.stat-card {
  display: flex;
  flex-direction: column;
}

.stat-title {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2.25rem;
  font-weight: bold;
}

/* 3. Daftar Responden */
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #F0F0F0;
}

.list-title h2 {
  font-size: 1.25rem;
  color: #333;
  margin: 0 0 0.25rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.list-title p {
  font-size: 0.9rem;
  color: #777;
  margin: 0;
}

.send-all-btn {
  background-color: #333;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.send-all-btn:hover {
  background-color: #555;
}

/* Daftar Item Responden */
.respondent-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.respondent-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #F0F0F0;
  border-radius: 8px;
  background-color: #FAFAFA;
}

.icon-avatar {
  background-color: #FDBA74; /* Oranye muda */
  color: #C95111;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 1rem;
}

.respondent-info {
  flex-grow: 1;
}

.respondent-info .name {
  display: block;
  font-weight: bold;
  color: #333;
}

.respondent-info .email {
  font-size: 0.85rem;
  color: #777;
}

.status-badge {
  background-color: #FEF3C7; /* Kuning muda */
  color: #D97706; /* Kuning tua */
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
}
.empty-state {
  text-align: center;
  padding: 3rem;
  color: #777;
}

/* Penyesuaian Responsif (Opsional, tapi direkomendasikan) */
@media (max-width: 992px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .header-card {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .list-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .respondent-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .status-badge {
    margin-top: 0.5rem;
  }
}
</style>