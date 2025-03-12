import React, { useState } from "react";

const Artikel = () => {
  const [products, setProducts] = useState([
    { id: 1, judul: "Jual Laptop", penulis: "Kela" },
    { id: 2, judul: "Jual Mouse", penulis: "Yura" },
    { id: 3, judul: "Beli Keyboard", penulis: "Kela" },
  ]);

  const [formData, setFormData] = useState({ id: "", judul: "", penulis: "" });

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
    setFormData({ id: "", judul: "", penulis: "" });
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
          <label className="form-label">Penulis</label>
          <input
            type="text"
            className="form-control"
            name="penulis"
            value={formData.penulis}
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
            <th>Penulis</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.judul}</td>
              <td>{product.penulis}</td>
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
