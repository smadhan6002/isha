import React from 'react';
import { Eye } from 'lucide-react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick} style={{cursor: 'pointer'}}>
      <div className="product-image-container">
        <img src={product.image_url} alt={product.name} loading="lazy" />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.short_description}</p>
        
        <div className="product-meta">
          <span className="product-pack">{product.pack_size}</span>
          {product.price && <span className="product-price">₹{product.price}</span>}
        </div>
        
        <button 
          className="btn-outline" 
          style={{width: '100%', marginTop: 'auto'}}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          <Eye size={16} /> View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
