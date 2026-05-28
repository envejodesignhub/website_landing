import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`;
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/shop/${product.slug}`} className="product-card">
      {product.badge && (
        <span className="product-badge">{product.badge}</span>
      )}
      {discount > 0 && (
        <span className="product-discount">{discount}% OFF</span>
      )}
      
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <div className="product-icon" style={{ background: product.iconBg }}>
          {product.emoji}
        </div>
        
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.shortDesc}</p>

        <div className="product-rating">
          <span className="stars">
            {'★'.repeat(Math.floor(product.rating))}
            {product.rating % 1 !== 0 && '☆'}
          </span>
          <span className="rating-text">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="product-pricing">
          <span className="product-price">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="product-original-price">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {!product.inStock && (
          <div className="out-of-stock">Out of Stock</div>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
