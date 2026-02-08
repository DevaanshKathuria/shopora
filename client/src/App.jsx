import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [health, setHealth] = useState(null);
    
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ name: '', price: '', description: '', imageUrl: '' });

    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/health`)
            .then(res => setHealth(res.data))
            .catch(err => console.error('Error fetching health:', err));
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${API_BASE_URL}/api/products`);
            setProducts(res.data);
        } catch (err) {
            console.error('Error fetching products:', err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_BASE_URL}/api/products`, form);
            setForm({ name: '', price: '', description: '', imageUrl: '' });
            fetchProducts();
        } catch (err) {
            console.error('Error adding product:', err);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/api/products/${id}`);
            fetchProducts();
        } catch (err) {
            console.error('Error deleting product:', err);
        }
    };

    return (
        <div className="container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>ShopSmart Dashboard</h1>

            {/* --- Section 1: Backend Status (Kept from your original code) --- */}
            <div className="card" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
                <h2>Backend Status</h2>
                {health ? (
                    <div>
                        <p>Status: <span style={{ color: 'green', fontWeight: 'bold' }}>{health.status}</span></p>
                        <p>Message: {health.message}</p>
                    </div>
                ) : (
                    <p>Loading backend status...</p>
                )}
            </div>

            {/* --- Section 2: Add Product Form --- */}
            <div className="card" style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
                <h2>Add New Product</h2>
                <form onSubmit={handleAddProduct} style={{ display: 'grid', gap: '10px' }}>
                    <input 
                        placeholder="Product Name" 
                        value={form.name} 
                        onChange={e => setForm({...form, name: e.target.value})} 
                        required 
                        style={{ padding: '8px' }}
                    />
                    <input 
                        placeholder="Price" 
                        type="number" 
                        value={form.price} 
                        onChange={e => setForm({...form, price: e.target.value})} 
                        required 
                        style={{ padding: '8px' }}
                    />
                    <textarea 
                        placeholder="Description" 
                        value={form.description} 
                        onChange={e => setForm({...form, description: e.target.value})} 
                        style={{ padding: '8px' }}
                    />
                    <input 
                        placeholder="Image URL" 
                        value={form.imageUrl} 
                        onChange={e => setForm({...form, imageUrl: e.target.value})} 
                        style={{ padding: '8px' }}
                    />
                    <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
                        Add Product
                    </button>
                </form>
            </div>

            <h2>Product List</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                {products.map(product => (
                    <div key={product._id} className="card" style={{ border: '1px solid #eee', padding: '10px', borderRadius: '8px' }}>
                        <img 
                            src={product.imageUrl || 'https://via.placeholder.com/150'} 
                            alt={product.name} 
                            style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
                        />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p style={{ fontWeight: 'bold' }}>${product.price}</p>
                        <button 
                            onClick={() => handleDeleteProduct(product._id)}
                            style={{ background: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;