import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './WixProduct.css';

function WixProduct() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(null);

  // Sample product data - in real app, fetch based on id
  const product = {
    id: 1,
    sku: "SKU: 0001",
    name: "Sheer 10.2\" Tablet With Wi-Fi , 32GB",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&h=800&fit=crop",
    description: "I'm a product description. This is a great place to \"sell\" your product and grab buyers attention. Describe your product clearly. Use unique keywords. Write your own description instead of using manufacturers' copy.",
    productInfo: "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    returnPolicy: "Returns and refund policy details...",
    shippingInfo: "Shipping information and delivery details..."
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Pilates Go 10.5\" Touch-Screen, 64GB With Cover",
      price: 85.00,
      image: "https://images.unsplash.com/photo-1585790050230-5dd28404f193?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Space Tablet S7 - 11\", 128GB Wi-Fi",
      price: 85.00,
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Cori Playtime 10.3\", 32GB With Wi-Fi",
      price: 85.00,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Ove Tablet FD Plus - 10.3\", 32GB",
      price: 70.00,
      originalPrice: 85.00,
      onSale: true,
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Sheer Pro 7.9-Inch Mini Tablet",
      price: 70.00,
      originalPrice: 85.00,
      onSale: true,
      image: "https://images.unsplash.com/photo-1586953208270-e6a4b8f4d8e5?w=400&h=400&fit=crop"
    }
  ];

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const navCategories = [
    'Shop All',
    'Computers',
    'Tablets',
    'Drones & Cameras',
    'Audio',
    'Mobile',
    'TV & Home Cinema',
    'Wearable Tech',
    'Sale'
  ];

  return (
    <div className="wix-product-page">
      {/* Top Banner */}
      <div className="wix-top-banner">
        <div className="banner-icon">📦</div>
        <span>Free Shipping for orders over $50</span>
      </div>

      {/* Header */}
      <header className="wix-header">
        <div className="wix-header-content">
          <div className="wix-logo">TechShed</div>
          
          <nav className="wix-nav">
            {navCategories.map((category, index) => (
              <a key={index} href="#" className="wix-nav-link">
                {category}
              </a>
            ))}
          </nav>

          <div className="wix-header-actions">
            <button className="wix-icon-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="wix-icon-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 18C3 14.134 6.134 11 10 11C13.866 11 17 14.134 17 18" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="wix-login-text">Log In</span>
            </button>
            <button className="wix-icon-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 18C10 18 2 13 2 7C2 5 3 3 5 3C7 3 9 5 10 6C11 5 13 3 15 3C17 3 18 5 18 7C18 13 10 18 10 18Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </button>
            <button className="wix-cart-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="8" cy="18" r="1.5" fill="currentColor"/>
                <circle cx="16" cy="18" r="1.5" fill="currentColor"/>
                <path d="M1 1H4L6.5 13H17L19 5H5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              <span className="wix-cart-count">0</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="wix-product-main">
        <div className="wix-product-container">
          {/* Product Display */}
          <div className="wix-product-display">
            <div className="wix-product-image-section">
              <img src={product.image} alt={product.name} className="wix-main-image" />
            </div>

            <div className="wix-product-details">
              <div className="wix-product-sku">{product.sku}</div>
              <h1 className="wix-product-title">{product.name}</h1>
              <div className="wix-product-price">${product.price.toFixed(2)}</div>

              <div className="wix-quantity-section">
                <label className="wix-quantity-label">Quantity</label>
                <div className="wix-quantity-control">
                  <button 
                    className="wix-qty-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="wix-qty-input"
                  />
                  <button 
                    className="wix-qty-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button className="wix-add-to-cart-btn">
                Add to Cart
              </button>

              <button className="wix-wishlist-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 18C10 18 2 13 2 7C2 5 3 3 5 3C7 3 9 5 10 6C11 5 13 3 15 3C17 3 18 5 18 7C18 13 10 18 10 18Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>

              <button className="wix-buy-now-btn">Buy Now</button>

              <div className="wix-product-description">
                <p>{product.description}</p>
              </div>

              <div className="wix-expandable-sections">
                <div className="wix-expandable-item">
                  <button 
                    className={`wix-expandable-header ${activeTab === 'info' ? 'active' : ''}`}
                    onClick={() => toggleTab('info')}
                  >
                    <span>Product Info</span>
                    <span className="wix-expand-icon">{activeTab === 'info' ? '−' : '+'}</span>
                  </button>
                  {activeTab === 'info' && (
                    <div className="wix-expandable-content">
                      <p>{product.productInfo}</p>
                    </div>
                  )}
                </div>

                <div className="wix-expandable-item">
                  <button 
                    className={`wix-expandable-header ${activeTab === 'return' ? 'active' : ''}`}
                    onClick={() => toggleTab('return')}
                  >
                    <span>Return & Refund Policy</span>
                    <span className="wix-expand-icon">{activeTab === 'return' ? '−' : '+'}</span>
                  </button>
                  {activeTab === 'return' && (
                    <div className="wix-expandable-content">
                      <p>{product.returnPolicy}</p>
                    </div>
                  )}
                </div>

                <div className="wix-expandable-item">
                  <button 
                    className={`wix-expandable-header ${activeTab === 'shipping' ? 'active' : ''}`}
                    onClick={() => toggleTab('shipping')}
                  >
                    <span>Shipping Info</span>
                    <span className="wix-expand-icon">{activeTab === 'shipping' ? '−' : '+'}</span>
                  </button>
                  {activeTab === 'shipping' && (
                    <div className="wix-expandable-content">
                      <p>{product.shippingInfo}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* You might also like */}
          <section className="wix-related-section">
            <h2 className="wix-related-title">You might also like</h2>
            <div className="wix-related-carousel">
              <button className="wix-carousel-btn wix-carousel-prev">‹</button>
              <div className="wix-related-products">
                {relatedProducts.map(item => (
                  <div key={item.id} className="wix-related-card">
                    {item.onSale && (
                      <span className="wix-sale-badge">SALE</span>
                    )}
                    <div className="wix-related-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="wix-related-info">
                      <h3 className="wix-related-name">{item.name}</h3>
                      <div className="wix-related-price">
                        {item.originalPrice && (
                          <span className="wix-original-price">${item.originalPrice.toFixed(2)}</span>
                        )}
                        <span className="wix-current-price">${item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="wix-carousel-btn wix-carousel-next">›</button>
            </div>
          </section>

          {/* Help Center Section */}
          <section className="wix-help-section">
            <div className="wix-help-content">
              <div className="wix-help-text">
                <h2>Need Help? Check Out Our Help Center</h2>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                <button className="wix-help-btn">Go to Help Center</button>
              </div>
              <div className="wix-help-image">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop" alt="Headphones" />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="wix-footer">
        <div className="wix-footer-content">
          <div className="wix-footer-section">
            <h4>Store Location</h4>
            <p>500 Terry Francine Street<br/>San Francisco, CA 94158</p>
            <p>info@mysite.com</p>
            <p>123-456-7890</p>
            <div className="wix-social-icons">
              <a href="#"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M18 2v16H2V2h16zM8 14H6V9h2v5zm-1-5.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM15 14h-2v-2.5c0-.8-.7-1.5-1.5-1.5S10 10.7 10 11.5V14H8V9h2v.5c.5-.5 1.2-.8 2-.8 1.7 0 3 1.3 3 3V14z" fill="currentColor"/></svg></a>
              <a href="#"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3 9h-2v5H9v-5H7V9h2V7.5c0-1.7 1-2.5 2.4-2.5h1.8v2h-1.3c-.4 0-.9.2-.9.9V9h2.2l-.2 2z" fill="currentColor"/></svg></a>
              <a href="#"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.8 6.2l-3.7 4.8c-.2.3-.6.4-.9.1l-2-1.7c-.3-.3-.4-.8-.1-1.1.3-.3.8-.4 1.1-.1l1.4 1.2 3.1-4c.3-.3.8-.4 1.1-.1.3.2.3.6 0 .9z" fill="currentColor"/></svg></a>
              <a href="#"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 6.5h-7v7h7v-7z" fill="currentColor"/></svg></a>
            </div>
          </div>
          <div className="wix-footer-section">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Shop All</a></li>
              <li><a href="#">Computers</a></li>
              <li><a href="#">Tablets</a></li>
              <li><a href="#">Drones & Cameras</a></li>
              <li><a href="#">Audio</a></li>
              <li><a href="#">Mobile</a></li>
              <li><a href="#">TV & Home Cinema</a></li>
              <li><a href="#">Wearable Tech</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>
          <div className="wix-footer-section">
            <h4>Customer Support</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="wix-footer-section">
            <h4>Policy</h4>
            <ul>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Payment Methods</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="wix-payment-methods">
          <p>We accept the following paying methods</p>
          <div className="wix-payment-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" />
            <span className="wix-payment-placeholder">💳</span>
            <span className="wix-payment-placeholder">💳</span>
            <span className="wix-payment-placeholder">💳</span>
            <span className="wix-payment-placeholder">💳</span>
            <span className="wix-payment-placeholder">💳</span>
          </div>
        </div>

        <div className="wix-footer-bottom">
          <p>© 2035 by TechShed. Powered and secured by Wix</p>
        </div>
      </footer>
    </div>
  );
}

export default WixProduct;
