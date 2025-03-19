import React, { useState } from "react";
import InputField from "../components/InputField";
import ErorMessage from "../components/ErorMessage";

const Karyawan = () => {
  const [nama, setNama] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [foto, setFoto] = useState("");
  const [namaError, setNamaError] = useState(false);
  const [jabatanError, setJabatanError] = useState(false);
  const [fotoError, setFotoError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nama.trim() === "" || /^\d+$/.test(nama.trim())) {
      setNamaError(true);
      return; // Hentikan submit jika nama kosong
    }
    setNamaError(false);

    if (jabatan.trim() === "" || /^\d+$/.test(jabatan.trim())) {
      setJabatanError(true);
      return; // Hentikan submit jika nama kosong
    }
    setJabatanError(false);

    if (foto.trim() === "" || /^\d+$/.test(foto.trim())) {
      setFotoError(true);
      return; // Hentikan submit jika nama kosong
    }

    setFotoError(false);
    console.log("Form submitted:", { nama });
  }
  return (
    <div className="container mt-4">
      <h2>Manajemen Karyawan</h2>

      {/* Form Karyawan */}
      <form onSubmit={handleSubmit} className="mb-4">
         <InputField
            label="Nama"
            type="text"
            placeholder="masukan nama anda"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          {namaError && (
          <ErorMessage message="Nama tidak boleh kosong atau tidak boleh number"/>
          )}
          
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Jabatan</label>
           <select
            value={jabatan}
            onChange={(e) => setJabatan(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="">Pilih Jabatan</option>
            <option value="manager">Manager</option>
            <option value="supervisor">Supervisor</option>
            <option value="staff">Staff</option>
            <option value="intern">Intern</option>
          </select>
          {jabatanError && (
          <ErorMessage message="Jabatan tidak boleh kosong atau tidak boleh number"/>
          )}
          </div>

           <InputField
            label="Foto"
            type="text"
            placeholder="masukan foto anda"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
          {fotoError && (
          <ErorMessage message="Foto tidak boleh kosong atau tidak boleh number"/>
          )}
       
        <button type="submit" className="btn btn-primary">
          Tambah
        </button>
      </form>

      {/* Tabel Karyawan */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Karyawan</th>
            <th>Jabatan</th>
            <th>Foto</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
            <tr key="1">
              <td>1</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>
                <button className="btn btn-warning me-2">
                  Edit
                </button>
                <button className="btn btn-danger">
                  Hapus
                </button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Karyawan;
