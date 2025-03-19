import React, { useState } from "react";

const Produk = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Chicken chesee", price: 78000},
    { id: 2, name: "chicken pom", price: 45000 },
    { id: 3, name: "chicken tariyaki ", price: 30000 },
  ]);

  const [formData, setFormData] = useState({ id: "", name: "", price: "" });

  // Handle Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Tambah / Update Produk
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
    setFormData({ id: "", name: "", price: "" });
  };

  // Edit Produk
  const handleEdit = (product) => {
    setFormData(product);
  };

  // Hapus Produk
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2>Manajemen Produk</h2>

      {/* Form Produk */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Nama Produk</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Harga</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {formData.id ? "Update" : "Tambah"}
        </button>
      </form>

      {/* Tabel Produk */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>Rp {product.price.toLocaleString()}</td>
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

export default Produk;
