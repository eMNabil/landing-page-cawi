    <template>
        <div class="p-6 bg-gray-50 min-h-screen">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-2xl font-semibold text-gray-700">Manajemen Responden</h1>
                <div class="flex gap-3">
                    <input v-model="searchQuery" type="text" placeholder="Cari nama atau email..."
                        class="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400" />
                    <select v-model="filterStatus"
                        class="px-3 py-2 border-2 cursor-pointer rounded-lg focus:ring-2 focus:ring-blue-400 hover:border-blue-100">
                        <option value="">Semua Status</option>
                        <option value="0">Belum Digunakan</option>
                        <option value="1">Sudah Digunakan</option>
                    </select>
                    <label for="excel-upload"
                        class="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                        Upload Excel
                    </label>
                    <input id="excel-upload" type="file" accept=".xlsx,.xls" class="hidden" ref="fileInput"
                        @change="handleFileUpload" />

                    <button @click="openAddInputDataModal"
                        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        + Tambah
                    </button>
                    <button @click="openSetFormLinkModal"
                        class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                        Set Form Link
                    </button>
                    <!-- <button @click="openSetLandingPageModal"
                        class="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700">
                        Set LandingPage Link 
                    </button>
                    <button @click="respondenApi.generateToken"
                        class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700">
                        Generate Token
                    </button> -->
                    <button @click="openSetLandingPageAndGenerateToken"
                      class="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700">
                      Set LandingPage Link dan Generate Token
                    </button>


                </div>

            </div>

            <div class="overflow-x-auto bg-white shadow rounded-lg">
                <table class="min-w-full table-auto">
                    <thead class="bg-gray-100 text-gray-700 text-sm uppercase">
                        <tr>
                            <th class="px-4 py-2 text-left">ID</th>
                            <th class="px-4 py-2 text-left">Nama</th>
                            <th class="px-4 py-2 text-left">Email</th>
                            <th class="px-4 py-2 text-left">Token</th>
                            <th class="px-4 py-2 text-left">Status</th>
                            <th class="px-4 py-2 text-left">Form Link</th>
                            <th class="px-4 py-2 text-left">Landing Page Link</th>
                            <th class="px-4 py-2 text-left">Aktif Sejak</th>
                            <th class="px-4 py-2 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, index) in filteredResponden" :key="index" class="border-b hover:bg-gray-50">
                            <td class="px-4 py-2">{{ value.id }}</td>
                            <td class="px-4 py-2">{{ value.nama }}</td>
                            <td class="px-4 py-2">{{ value.email }}</td>
                            <td class="px-4 py-2 truncate max-w-[150px]">{{ value.tautan?.[0]?.token ?? '' }}</td>
                            <td class="px-4 py-2">
                                <span :class="value.tautan[0]?.isUsed ? 'text-green-600' : 'text-red-500'">
                                    {{ value.tautan[0]?.isUsed ? 'Sudah Digunakan' : 'Belum Digunakan' }}
                                </span>
                            </td>
                            <td class="px-4 py-2">{{ value.tautan[0]?.tautanForm }}</td>
                            <td class="px-4 py-2">{{ value.tautan[0]?.tautanLandingPage }}</td>
                            <td class="px-4 py-2">
                                {{ value.tautan[0]?.activeAt ? formatDate(value.tautan[0].activeAt) : '-' }}
                            </td>
                            <td class="px-4 py-2 text-center">
                                <div class="flex justify-center gap-2">
                                    <button @click="openEditModal(value)"
                                        class="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500">
                                        Edit
                                    </button>
                                    <button @click="deleteResponden(value.id)"
                                        class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                                        Hapus
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div v-if="showInputDataModal"
                class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <div class="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 class="text-lg font-semibold mb-4">{{ isEditing ? 'Edit Responden' : 'Tambah Responden' }}</h2>
                    <div class="space-y-3">
                        <input v-model="form.nama" placeholder="Nama" class="w-full border p-2 rounded" />
                        <input v-model="form.email" placeholder="Email" class="w-full border p-2 rounded" />
                    </div>
                    <div class="flex justify-end gap-2 mt-4">
                        <button @click="closeInputDataModal"
                            class="px-4 py-2 border rounded hover:bg-gray-100">Batal</button>
                        <button @click="submitInputData" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="showSetFormLinkModal"
                class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <div class="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 class="text-lg font-semibold mb-4">Set Form Link</h2>
                    <div class="space-y-3">
                        <input v-model="Link.link" placeholder="Form Link Enketo/Web Forms" class="w-full border p-2 rounded" />
                    </div>
                    <div class="flex justify-end gap-2 mt-4">
                        <button @click="closeSetFormLinkModal"
                            class="px-4 py-2 border rounded hover:bg-gray-100">Batal</button>
                        <button @click="submitFormLink" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="showSetLandingPageLinkModal"
                class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <div class="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 class="text-lg font-semibold mb-4">Set Landing Page Link</h2>
                    <div class="space-y-3">
                        <input v-model="Link.link" placeholder="Landing Page URL" class="w-full border p-2 rounded" />
                    </div>
                    <div class="flex justify-end gap-2 mt-4">
                        <button @click="closeSetLandingPageLinkModal"
                            class="px-4 py-2 border rounded hover:bg-gray-100">Batal</button>
                        <button @click="submitLandingPageLink" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showUploadModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300">
            <div class="bg-white rounded-lg shadow-xl w-11/12 md:w-2/3 p-6">
                <h2 class="text-xl font-semibold mb-4">Konfirmasi Upload Excel</h2>

                <p class="mb-3 text-gray-600">
                    Berikut beberapa data dari file yang akan diupload:
                </p>

                <div class="overflow-x-auto max-h-80 border rounded-lg mb-4">
                    <table class="min-w-full text-sm text-left">
                        <thead class="bg-gray-100 sticky top-0">
                            <tr>
                                <th class="px-4 py-2">Nama</th>
                                <th class="px-4 py-2">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in previewData" :key="index">
                                <td class="px-4 py-2">{{ row.nama }}</td>
                                <td class="px-4 py-2">{{ row.email }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="flex justify-end gap-3">
                    <button @click="cancelUpload" class="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400">
                        Batal
                    </button>
                    <button @click="confirmUpload"
                        class="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
                        Konfirmasi Upload
                    </button>
                </div>
            </div>
        </div>
    </template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import * as XLSX from 'xlsx'
import { respondenApi } from '@/api'

const responden = ref([])
const searchQuery = ref('')
const filterStatus = ref('')
const showInputDataModal = ref(false)
const showSetFormLinkModal = ref(false)
const showSetLandingPageLinkModal = ref(false)
const isEditing = ref(false)
const form = ref({ id: null, nama: '', email: '' })
const Link = ref({link:''})
const showUploadModal = ref(false)
const previewData = ref([])
const fileToUpload = ref(null)
const fileInput = ref(null)

const loadData = async () => {
    responden.value = await respondenApi.getAll()
}
onMounted(loadData)

const formatDate = (date) => new Date(date).toLocaleString('id-ID')

const filteredResponden = computed(() =>
    responden.value.filter(r => {
        const matchSearch =
            r.nama?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            r.email?.toLowerCase().includes(searchQuery.value.toLowerCase())
        const matchStatus = filterStatus.value === ''
            ? true
            : String(r.tautan[0].isUsed) === filterStatus.value
        return matchSearch && matchStatus
    })
)

const openAddInputDataModal = () => {
    isEditing.value = false
    form.value = { id: null, nama: '', email: '' }
    showInputDataModal.value = true
}
const openSetFormLinkModal = () => {
    isEditing.value = false
    Link.value = {link: ''}
    showSetFormLinkModal.value = true
}
const openSetLandingPageModal = () => {
    isEditing.value = false
    Link.value = {link: ''}
    showSetLandingPageLinkModal.value = true
}
const openEditModal = (res) => {
    isEditing.value = true
    form.value = { ...res }
    showModal.value = true
}
const closeInputDataModal = () => showInputDataModal.value = false
const closeSetFormLinkModal = () => showSetFormLinkModal.value = false
const closeSetLandingPageLinkModal = () => showSetLandingPageLinkModal.value = false

const submitInputData = async () => {
    if (isEditing.value) await respondenApi.update(form.value.id, form.value)
    else await respondenApi.create(form.value)
    await loadData()
    closeModal()
}
const submitFormLink = async () => {
    await respondenApi.setFormLink(Link.value)
    await loadData();
    closeSetFormLinkModal()
}
const submitLandingPageLink = async () => {
    await respondenApi.setLandingPageLink(Link.value)
    await loadData();
    closeSetLandingPageLinkModal()
}


const deleteResponden = async (id) => {
    if (confirm('Yakin ingin menghapus responden ini?')) {
        await respondenApi.remove(id)
        await loadData()
    }
}

const handleFileUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    const validTypes = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel'
    ]
    if (!validTypes.includes(file.type)) {
        alert('Format file tidak valid! Gunakan .xlsx atau .xls')
        event.target.value = ''
        return
    }

    // Baca isi Excel tanpa upload ke server dulu
    const reader = new FileReader()
    reader.onload = (e) => {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        const sheetName = workbook.SheetNames[0]
        const sheet = workbook.Sheets[sheetName]
        const jsonData = XLSX.utils.sheet_to_json(sheet)

        // ambil hanya 10 baris pertama untuk preview
        previewData.value = jsonData.slice(0, 10)
        fileToUpload.value = file
        showUploadModal.value = true
    }
    reader.readAsArrayBuffer(file)
}
const cancelUpload = () => {
    showUploadModal.value = false
    fileToUpload.value = null
    if (fileInput.value) {
        fileInput.value.value = ''
    }
}

const confirmUpload = async () => {
    if (!fileToUpload.value) return

    try {
        const result = await respondenApi.uploadExcel(fileToUpload.value)
        alert(`Upload berhasil! ${result.count.count} data dimasukkan.`)
        await loadData()
    } catch (error) {
        alert('Gagal upload: ' + (error.response?.data?.message || error.message))
    } finally {
        showUploadModal.value = false
        fileToUpload.value = null
    }
}

const openSetLandingPageAndGenerateToken = async () => {
    try {
        isEditing.value = false
        Link.value = { link: '' }
        showSetLandingPageLinkModal.value = true

        await respondenApi.generateToken()

        console.log('Modal Landing Page dibuka & Token berhasil digenerate!')
    } catch (error) {
        console.error('Gagal membuka modal atau generate token:', error)
        alert('Terjadi kesalahan saat generate token!')
    }
}

</script>
