import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { productService } from '../services/productService';
import { LayoutDashboard, Package, LogOut, Plus, Edit, Trash2, X, Upload } from 'lucide-react';
import '../components.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const fileInputRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    category: 'Turmeric',
    short_description: '',
    description: '',
    pack_size: '',
    price: '',
    image_url: '',
    featured: false
  });
  
  const [formError, setFormError] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const loadProducts = () => {
    setProducts(productService.getProducts());
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleLogout = () => {
    authService.logout();
    navigate('/admin');
  };

  const handleOpenAdd = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      category: 'Turmeric',
      short_description: '',
      description: '',
      pack_size: '',
      price: '',
      image_url: '',
      featured: false
    });
    setImagePreview('');
    setFormError('');
    setIsFormOpen(true);
  };

  const handleOpenEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      short_description: product.short_description,
      description: product.description,
      pack_size: product.pack_size,
      price: product.price || '',
      image_url: product.image_url,
      featured: product.featured
    });
    setImagePreview(product.image_url);
    setFormError('');
    setIsFormOpen(true);
  };

  const handleOpenDelete = (product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      productService.deleteProduct(productToDelete.id);
      loadProducts();
      setIsDeleteModalOpen(false);
      setProductToDelete(null);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Create an image object to compress it
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          // Compress to JPEG with 0.7 quality
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
          setImagePreview(compressedBase64);
          setFormData(prev => ({ ...prev, image_url: compressedBase64 }));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setImagePreview('');
    setFormData(prev => ({ ...prev, image_url: '' }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // Basic validation
    if (!formData.name || !formData.category || !formData.short_description || !formData.image_url) {
      setFormError('Please fill in all required fields, including an image.');
      return;
    }

    try {
      if (editingProduct) {
        productService.updateProduct(editingProduct.id, formData);
      } else {
        productService.addProduct(formData);
      }
      loadProducts();
      setIsFormOpen(false);
    } catch (err) {
      setFormError('Failed to save product. Please try again.');
    }
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <div className="brand-logo" style={{color: 'white', fontSize: '1.25rem'}}>
            ISHA<span className="brand-subtitle" style={{color: 'var(--color-gold)'}}>Admin</span>
          </div>
        </div>
        <nav className="admin-nav">
          <a href="#" className="admin-nav-item active">
            <Package size={20} /> Products
          </a>
          <a href="/" target="_blank" className="admin-nav-item" style={{marginTop: 'auto'}}>
            <LayoutDashboard size={20} /> View Website
          </a>
        </nav>
        <div style={{padding: '24px'}}>
          <button onClick={handleLogout} className="admin-nav-item" style={{width: '100%', padding: '12px', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px'}}>
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-header">
          <div>
            <h1 style={{fontSize: '1.5rem', marginBottom: '8px'}}>Product Management</h1>
            <p className="text-muted">Manage your showcase catalogue</p>
          </div>
          <button onClick={handleOpenAdd} className="btn-primary">
            <Plus size={18} /> Add New Product
          </button>
        </div>

        {/* Dashboard Stats */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '32px'}}>
          <div className="admin-card" style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
            <div style={{padding: '16px', backgroundColor: 'rgba(200, 157, 84, 0.1)', color: 'var(--color-primary)', borderRadius: '12px'}}>
              <Package size={24} />
            </div>
            <div>
              <div style={{fontSize: '2rem', fontWeight: 'bold'}}>{products.length}</div>
              <div className="text-muted" style={{fontSize: '0.875rem'}}>Total Products</div>
            </div>
          </div>
          
          <div className="admin-card" style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
            <div style={{padding: '16px', backgroundColor: 'rgba(200, 157, 84, 0.1)', color: 'var(--color-primary)', borderRadius: '12px'}}>
              <LayoutDashboard size={24} />
            </div>
            <div>
              <div style={{fontSize: '2rem', fontWeight: 'bold'}}>
                {new Set(products.map(p => p.category)).size}
              </div>
              <div className="text-muted" style={{fontSize: '0.875rem'}}>Categories</div>
            </div>
          </div>
        </div>

        {/* Product Table */}
        <div className="admin-card table-container">
          {products.length > 0 ? (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Pack Size</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td style={{width: '60px'}}>
                      <div style={{width: '40px', height: '40px', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#f3f4f6'}}>
                        <img src={product.image_url} alt={product.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                      </div>
                    </td>
                    <td style={{fontWeight: '500'}}>{product.name}</td>
                    <td>
                      <span style={{padding: '4px 8px', backgroundColor: '#f3f4f6', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '500'}}>
                        {product.category}
                      </span>
                    </td>
                    <td className="text-muted">{product.pack_size}</td>
                    <td>
                      <button onClick={() => handleOpenEdit(product)} className="action-btn btn-edit">
                        <Edit size={14} style={{display: 'inline', marginRight: '4px'}}/> Edit
                      </button>
                      <button onClick={() => handleOpenDelete(product)} className="action-btn btn-delete">
                        <Trash2 size={14} style={{display: 'inline', marginRight: '4px'}}/> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={{textAlign: 'center', padding: '48px', color: 'var(--color-text-muted)'}}>
              <Package size={48} style={{margin: '0 auto 16px', opacity: 0.5}} />
              <h3>No products available</h3>
              <p>Add your first product to start showcasing.</p>
            </div>
          )}
        </div>
      </main>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="modal-overlay" style={{alignItems: 'flex-start', paddingTop: '40px'}}>
          <div className="modal-content" style={{maxWidth: '800px', backgroundColor: '#f9fafb', padding: '32px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
              <h2 style={{fontSize: '1.5rem'}}>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
              <button onClick={() => setIsFormOpen(false)} style={{padding: '8px', borderRadius: '50%', backgroundColor: 'white'}}>
                <X size={20} />
              </button>
            </div>

            {formError && (
              <div style={{backgroundColor: '#fee2e2', color: '#dc2626', padding: '12px', borderRadius: '8px', marginBottom: '24px'}}>
                {formError}
              </div>
            )}

            <form onSubmit={handleFormSubmit} style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px'}}>
              
              {/* Left Column - Details */}
              <div>
                <div className="admin-card" style={{padding: '24px', marginBottom: '24px'}}>
                  <h3 style={{fontSize: '1.125rem', marginBottom: '16px'}}>Basic Information</h3>
                  
                  <div className="form-group">
                    <label className="form-label">Product Name *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Category *</label>
                    <select 
                      className="form-control"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                      <option value="Turmeric">Turmeric</option>
                      <option value="Kumkum">Kumkum</option>
                      <option value="Pooja Oil">Pooja Oil</option>
                      <option value="Sambrani">Sambrani</option>
                      <option value="Agarbathi">Agarbathi</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Short Description *</label>
                    <textarea 
                      className="form-control" 
                      rows="2"
                      value={formData.short_description}
                      onChange={(e) => setFormData({...formData, short_description: e.target.value})}
                      required
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Full Description</label>
                    <textarea 
                      className="form-control" 
                      rows="4"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Right Column - Media & Variants */}
              <div>
                <div className="admin-card" style={{padding: '24px', marginBottom: '24px'}}>
                  <h3 style={{fontSize: '1.125rem', marginBottom: '16px'}}>Product Media</h3>
                  
                  <div className="form-group">
                    <label className="form-label">Product Image *</label>
                    <input 
                      type="file" 
                      accept="image/*" 
                      ref={fileInputRef} 
                      onChange={handleImageUpload} 
                      style={{display: 'none'}} 
                    />
                    
                    {imagePreview ? (
                      <div style={{position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb'}}>
                        <img src={imagePreview} alt="Preview" style={{width: '100%', height: '200px', objectFit: 'contain', backgroundColor: 'white'}} />
                        <button 
                          type="button"
                          onClick={removeImage}
                          style={{position: 'absolute', top: '8px', right: '8px', backgroundColor: 'white', padding: '4px', borderRadius: '50%', color: '#dc2626'}}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div 
                        onClick={triggerFileInput}
                        style={{border: '2px dashed #d1d5db', borderRadius: '8px', padding: '40px 24px', textAlign: 'center', cursor: 'pointer', backgroundColor: '#f9fafb'}}
                      >
                        <Upload size={24} style={{margin: '0 auto 8px', color: '#9ca3af'}} />
                        <p style={{fontSize: '0.875rem', color: '#4b5563'}}>Click to upload an image</p>
                        <p style={{fontSize: '0.75rem', color: '#9ca3af', marginTop: '4px'}}>PNG, JPG up to 5MB</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="admin-card" style={{padding: '24px'}}>
                  <h3 style={{fontSize: '1.125rem', marginBottom: '16px'}}>Specifications</h3>
                  
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
                    <div className="form-group">
                      <label className="form-label">Pack Size</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="e.g. 100g, 1L"
                        value={formData.pack_size}
                        onChange={(e) => setFormData({...formData, pack_size: e.target.value})}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Price (Optional)</label>
                      <input 
                        type="number" 
                        className="form-control" 
                        placeholder="e.g. 250"
                        value={formData.price}
                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px'}}>
                    <input 
                      type="checkbox" 
                      id="featured" 
                      checked={formData.featured}
                      onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                      style={{width: '16px', height: '16px'}}
                    />
                    <label htmlFor="featured" className="form-label" style={{margin: 0}}>Feature this product</label>
                  </div>
                </div>
                
                <div style={{marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px'}}>
                  <button type="button" onClick={() => setIsFormOpen(false)} className="btn-outline">
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    {editingProduct ? 'Save Changes' : 'Add Product'}
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="modal-overlay" style={{zIndex: 200}}>
          <div className="admin-card" style={{width: '100%', maxWidth: '400px', textAlign: 'center'}}>
            <div style={{width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#dc2626'}}>
              <Trash2 size={24} />
            </div>
            <h3 style={{fontSize: '1.25rem', marginBottom: '8px'}}>Delete Product</h3>
            <p className="text-muted" style={{marginBottom: '24px'}}>
              Are you sure you want to delete <strong>{productToDelete?.name}</strong>? This action cannot be undone.
            </p>
            <div style={{display: 'flex', gap: '12px'}}>
              <button onClick={() => setIsDeleteModalOpen(false)} className="btn-outline" style={{flex: 1}}>Cancel</button>
              <button onClick={confirmDelete} className="btn-primary" style={{flex: 1, backgroundColor: '#dc2626', borderColor: '#dc2626'}}>Delete</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;
