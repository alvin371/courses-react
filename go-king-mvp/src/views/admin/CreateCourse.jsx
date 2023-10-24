import React from 'react'
import '../App.css'

const CreateCourse = () => {

  return (
    <div>
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Tambah Data Kursus</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nama_kursus" className="block font-semibold">Nama Kursus</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              id="nama_kursus"
              name="nama_kursus"
              placeholder="Masukkan Nama Kursus"
              value={this.state.nama_kursus}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tipe_kursus" className="block font-semibold">Tipe Kursus</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              id="tipe_kursus"
              name="tipe_kursus"
              value={this.state.tipe_kursus}
              onChange={this.handleInputChange}
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="durasi_kursus" className="block font-semibold">Durasi Kursus</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              id="durasi_kursus"
              name="durasi_kursus"
              value={this.state.durasi_kursus}
              onChange={this.handleInputChange}
            >
              <option value="1 bulan">1 Bulan</option>
              <option value="3 bulan">3 Bulan</option>
              <option value="6 bulan">6 Bulan</option>
              <option value="1 tahun">1 Tahun</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="fasilitas_kursus" className="block font-semibold">Fasilitas Kursus</label>
            <div>
              {this.state.fasilitas_kursus.map((fasilitas, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    id={`fasilitas_kursus${index}`}
                    name="fasilitas_kursus[]"
                    value={fasilitas}
                    checked={this.state.fasilitas_kursus.includes(fasilitas)}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor={`fasilitas_kursus${index}`}>{fasilitas}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="aksen_kursus" className="block font-semibold">Aksen Kursus</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              id="aksen_kursus"
              name="aksen_kursus"
              value={this.state.aksen_kursus}
              onChange={this.handleInputChange}
            >
              <option value="Inggris">Inggris</option>
              <option value="Jepang">Jepang</option>
              <option value="Korea">Korea</option>
              <option value="Mandarin">Mandarin</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Simpan</button>
        </form>
    </div>
    </div>
  );
}
export default CreateCourse