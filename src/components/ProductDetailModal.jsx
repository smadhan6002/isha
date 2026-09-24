import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const ProductDetailModal = ({ product, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        
        <div className="modal-grid">
          <div className="modal-image">
            <img src={product.image_url} alt={product.name} />
          </div>
          
          <div className="modal-details">
            <div className="product-category">{product.category}</div>
            <h2 className="product-name">{product.name}</h2>
            
            <p className="product-desc">{product.description}</p>
            
            <div className="modal-meta-grid">
              <div>
                <div className="meta-item-label">Pack Size</div>
                <div className="meta-item-value">{product.pack_size}</div>
              </div>
              {product.price && (
                <div>
                  <div className="meta-item-label">Price</div>
                  <div className="meta-item-value">₹{product.price}</div>
                </div>
              )}
            </div>
            
            <div style={{marginTop: '32px', color: 'var(--color-text-muted)', fontSize: '0.875rem'}}>
              <p>For inquiries about this product or bulk orders, please contact our support team.</p>
            </div>
            
            <button className="btn-primary" style={{marginTop: '24px', width: '100%'}} onClick={onClose}>
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
