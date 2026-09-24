import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { productService } from '../services/productService';

const CATEGORIES = ['ALL', 'TURMERIC', 'KUMKUM', 'POOJA OIL', 'SAMBRANI', 'AGARBATHI'];

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Load products from service
    setProducts(productService.getProducts());
  }, []);

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'ALL' || product.category.toUpperCase() === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      product.name.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower) ||
      product.short_description.toLowerCase().includes(searchLower);
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="showcase-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Collection</span>
          <h2 className="section-title">Sacred Offerings</h2>
        </div>

        <div className="filters-wrapper">
          <div className="category-filters">
            {CATEGORIES.map(category => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="search-bar">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              className="search-input"
              placeholder="Search sacred essentials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        ) : (
          <div style={{textAlign: 'center', padding: '64px 0', color: 'var(--color-text-muted)'}}>
            <h3>No products found</h3>
            <p>Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default ProductShowcase;
