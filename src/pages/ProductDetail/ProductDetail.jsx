import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import products from '../../data/products.json';
import './ProductDetail.css';

function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h2>Product Not Found</h2>
          <p>Sorry, we couldn't find the product you're looking for.</p>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`;
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 3000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="product-detail-page">
      {showAddedMessage && (
        <div className="added-message">
          <span>✓ Added to cart!</span>
          <Link to="/cart">View Cart</Link>
        </div>
      )}

      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className="product-detail-grid">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="main-image">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
              />
              {product.badge && (
                <span className="product-badge">{product.badge}</span>
              )}
              {discount > 0 && (
                <span className="product-discount">{discount}% OFF</span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="thumbnail-images">
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className={selectedImage === index ? 'active' : ''}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-detail-info">
            <div className="product-meta">
              <div className="product-icon" style={{ background: product.iconBg }}>
                {product.emoji}
              </div>
              <span className="product-category">{product.category}</span>
            </div>

            <h1 className="product-title">{product.name}</h1>

            <div className="product-rating-section">
              <span className="stars">
                {'★'.repeat(Math.floor(product.rating))}
                {product.rating % 1 !== 0 && '☆'}
              </span>
              <span className="rating-text">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="product-price-section">
              <span className="current-price">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">{formatPrice(product.originalPrice)}</span>
                  <span className="save-text">Save {formatPrice(product.originalPrice - product.price)}</span>
                </>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-features">
              <h3>What's Included:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>

              <button 
                className="btn-add-cart"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>

              <button 
                className="btn-buy-now"
                onClick={handleBuyNow}
                disabled={!product.inStock}
              >
                Buy Now
              </button>
            </div>

            {product.inStock && (
              <div className="stock-status in-stock">
                ✓ In Stock - Ships in 3-5 days
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-section">
            <h2>Related Products</h2>
            <div className="related-grid">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/shop/${p.slug}`} className="related-card">
                  <img src={p.image} alt={p.name} />
                  <div className="related-info">
                    <h4>{p.name}</h4>
                    <span className="related-price">{formatPrice(p.price)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
