import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WixShop.css';

function WixShop() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [priceRange, setPriceRange] = useState([20, 95]);
  const [sortBy, setSortBy] = useState('Recommended');
  const [showColorFilter, setShowColorFilter] = useState(false);

  // Wix-style product data (electronics - expanded catalog)
  const products = [
    {
      id: 1,
      name: "Sheer 10.2\" Tablet With Wi-Fi , 32GB",
      price: 85.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop",
      onSale: false
    },
    {
      id: 2,
      name: "JP - Space Tablet 10.4\" Wi-Fi 32GB",
      price: 70.00,
      originalPrice: 85.00,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      onSale: true
    },
    {
      id: 3,
      name: "Pilates Go 10.5\" Touch-Screen, 64GB With Cover",
      price: 85.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1585790050230-5dd28404f193?w=400&h=400&fit=crop",
      onSale: false
    },
    {
      id: 4,
      name: "Ove Tablet FD Plus - 10.3\", 32GB",
      price: 70.00,
      originalPrice: 85.00,
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
      onSale: true
    },
    {
      id: 5,
      name: "Sheer Pro 7.9-Inch Mini Tablet",
      price: 70.00,
      originalPrice: 85.00,
      image: "https://images.unsplash.com/photo-1586953208270-e6a4b8f4d8e5?w=400&h=400&fit=crop",
      onSale: true
    },
    {
      id: 6,
      name: "Ocean Plus 11 - 12.9\" Touch Screen",
      price: 70.00,
      originalPrice: 85.00,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&fit=crop",
      onSale: true
    },
    {
      id: 7,
      name: "Cori Playtime 10.3\", 32GB With Wi-Fi",
      price: 85.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      onSale: false
    },
    {
      id: 8,
      name: "Plater 10\" Touch-Screen Laptop - 32GB Memory",
      price: 70.00,
      originalPrice: 85.00,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop",
      onSale: true
    },
    {
      id: 9,
      name: "Turbo Portable Bluetooth Speaker With Charger",
      price: 70.00,
      originalPrice: 85.00,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      onSale: true
    },
    {
      id: 10,
      name: "Space Tablet S7 - 11\", 128GB Wi-Fi",
      price: 85.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=400&fit=crop",
      onSale: false
    },
    {
      id: 11,
      name: "Space Mohr Sho Handheld With Charger",
      price: 70.00,
      originalPrice: 85.00,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      onSale: true
    },
    {
      id: 12,
      name: "91-Shaped Silver Portable Bluetooth Speaker",
      price: 65.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      onSale: false
    },
    {
      id: 13,
      name: "Round Woo Portable Bluetooth Speaker",
      price: 70.00,
      originalPrice: 85.00,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
      onSale: true
    },
    {
      id: 14,
      name: "Ovum Pro Wireless On-Ear Headphones",
      price: 85.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      onSale: false
    },
    {
      id: 15,
      name: "Kiwi 50\" Class LED 4K UHD Smart TV",
      price: 65.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
      onSale: false
    },
    {
      id: 16,
      name: "Fibwear Happie Fitness Tracker With Heart Rate Tracking",
      price: 70.00,
      originalPrice: 85.00,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
      onSale: true
    },
    {
      id: 17,
      name: "TriWaved Fitness Smart Watch",
      price: 85.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      onSale: false
    },
    {
      id: 18,
      name: "I'm a product",
      price: 70.00,
      originalPrice: 85.00,
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop",
      onSale: true
    },
    {
      id: 19,
      name: "MV Virtual Reality System For PC",
      price: 85.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=400&fit=crop",
      onSale: false
    },
    {
      id: 20,
      name: "Runaway AT Activity Tracker",
      price: 85.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
      onSale: false
    },
    {
      id: 21,
      name: "Fifteens XDM Fitness Smart Watch",
      price: 85.00,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      onSale: false
    },
    {
      id: 22,
      name: "I'm a product",
      price: 70.00,
      originalPrice: 85.00,
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop",
      onSale: true
    },
    {
      id: 23,
      name: "I'm a product",
      price: 70.00,
      originalPrice: 85.00,
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=400&fit=crop",
      onSale: true
    },
    {
      id: 24,
      name: "I'm a product",
      price: 70.00,
      originalPrice: 85.00,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      onSale: true
    }
  ];

  const categories = [
    'All Products',
    'Best Sellers',
    'Computers',
    'Drones & Cameras',
    'Headphones',
    'Home Page Best Sellers',
    'Home Page Sale',
    'Mobile',
    'Sale',
    'Speakers',
    'Tablets',
    'TV & Home Cinema',
    'Wearable Tech'
  ];

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

  const filteredProducts = products.filter(
    product => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <div className="wix-shop">
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
      <div className="wix-main">
        {/* Breadcrumb */}
        <div className="wix-breadcrumb">
          <Link to="/">Home</Link>
          <span> &gt; </span>
          <span>All Products</span>
        </div>

        <div className="wix-content">
          {/* Sidebar */}
          <aside className="wix-sidebar">
            <div className="wix-filter-section">
              <h3 className="wix-filter-title">Browse by</h3>
              <div className="wix-category-list">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`wix-category-item ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="wix-filter-section">
              <h3 className="wix-filter-title">Filter by</h3>
              <div className="wix-price-filter">
                <label className="wix-price-label">Price</label>
                <div className="wix-price-range">
                  <input
                    type="range"
                    min="20"
                    max="95"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="wix-range-slider"
                  />
                  <div className="wix-price-values">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div className="wix-color-filter">
                <button 
                  className="wix-filter-toggle"
                  onClick={() => setShowColorFilter(!showColorFilter)}
                >
                  <span>Color</span>
                  <span className="wix-expand-icon">{showColorFilter ? '−' : '+'}</span>
                </button>
                {showColorFilter && (
                  <div className="wix-color-options">
                    {/* Color options can be added here */}
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Products Area */}
          <div className="wix-products-area">
            <div className="wix-products-header">
              <h1 className="wix-products-title">All Products</h1>
              <div className="wix-products-controls">
                <span className="wix-product-count">{filteredProducts.length} products</span>
                <div className="wix-sort-control">
                  <label>Sort by:</label>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="wix-sort-select"
                  >
                    <option>Recommended</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="wix-products-grid">
              {filteredProducts.map(product => (
                <Link 
                  key={product.id} 
                  to={`/wix-product/${product.id}`}
                  className="wix-product-card"
                >
                  {product.onSale && (
                    <span className="wix-sale-badge">SALE</span>
                  )}
                  <div className="wix-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="wix-product-info">
                    <h3 className="wix-product-name">{product.name}</h3>
                    <div className="wix-product-price">
                      {product.originalPrice && (
                        <span className="wix-original-price">${product.originalPrice.toFixed(2)}</span>
                      )}
                      <span className="wix-current-price">${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="wix-footer">
        <div className="wix-footer-content">
          <div className="wix-footer-section">
            <h4>About</h4>
          </div>
          <div className="wix-footer-section">
            <h4>Contact</h4>
          </div>
          <div className="wix-footer-section">
            <h4>Help Center</h4>
          </div>
          <div className="wix-footer-section">
            <h4>Call Us: 123-456-7890</h4>
          </div>
        </div>
        <div className="wix-footer-bottom">
          <p>© 2023 by TechShed. Proudly created with Wix.com</p>
        </div>
      </footer>
    </div>
  );
}

export default WixShop;
