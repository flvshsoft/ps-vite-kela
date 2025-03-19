import React, { useState } from "react";

const Artikel = () => {
  const [products, setProducts] = useState([
    { id: 1, judul: "chicken chessee", detail: "Crispy chicken fillet yang juicy, dilapisi dengan keju leleh yang gurih dan creamy. Disajikan dengan saus spesial dan kentang goreng." },
    { id: 2, judul: "chicken pom", detail: "Potongan ayam kecil berbentuk bola-bola yang renyah di luar, lembut di dalam. Cocok dicocol dengan saus BBQ atau mayo pedas." },
    { id: 3, judul: "hicken tariyaki", detail: "Ayam panggang dengan saus teriyaki khas Jepang, manis gurih dengan sentuhan wijen. Dilengkapi dengan nasi hangat dan sayuran segar." },
  ]);

  const [formData, setFormData] = useState({ id: "", judul: "", detail: "" });

  // Handle Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Tambah / Update Artikel
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      setProducts(
        products.map((product) =>
          product.id === formData.id ? { ...formData, id: product.id } : product
        )
      );
    } else {
      setProducts([
        ...products,
        { ...formData, id: products.length ? products[products.length - 1].id + 1 : 1 },
      ]);
    }
    setFormData({ id: "", judul: "", detail: "" });
  };

  // Edit Artikel
  const handleEdit = (product) => {
    setFormData(product);
  };

  // Hapus Artikel
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2>Manajemen Artikel</h2>

      {/* Form Artikel */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Judul Artikel</label>
          <input
            type="text"
            className="form-control"
            name="judul"
            value={formData.judul}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">detail</label>
          <input
            type="text"
            className="form-control"
            name="detail"
            value={formData.detail}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {formData.id ? "Update" : "Tambah"}
        </button>
      </form>

      {/* Tabel Artikel */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Judul Artikel</th>
            <th>detail</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.judul}</td>
              <td>{product.detail}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleEdit(product)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Artikel;
