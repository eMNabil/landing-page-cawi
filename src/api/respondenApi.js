import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/responden`;

const respondenApi = {
    async setFormLink(link) {
        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/link/set-formPage-link`,link);
        return res.data;
    },
    async generateToken() {
        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/link/generate-token`);
        return res.data;
    },
    async setLandingPageLink(link) {
        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/link/set-landingPage-link`,link);
        return res.data;
    },
    async getAll() {
        const res = await axios.get(API_URL);
        return res.data;
    },
    async create(data) {
        const res = await axios.post(API_URL, data);
        return res.data;
    },
    async uploadExcel(file) {
        const formData = new FormData();
        formData.append('file', file);
        const res = await axios.post(`${API_URL}/excel`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return res.data;
    },
    async update(id, data) {
        const res = await axios.patch(`${API_URL}/${id}`, data);
        return res.data;
    },
    async remove(id) {
        const res = await axios.delete(`${API_URL}/${id}`);
        return res.data;
    },
};

// ⬅️ pastikan menggunakan "export default"
export default respondenApi;
