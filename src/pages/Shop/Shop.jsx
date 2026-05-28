import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from '../../data/products.json';
import './Shop.css';

function Shop() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Get unique categories
  const categories = ['all', ...new Set(products.map(p => p.category))];

  // Filter products
  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'featured':
      default:
        return b.featured - a.featured;
    }
  });

  const categoryLabels = {
    all: 'All Products',
    sublimation: 'Sublimation Prints',
    merchandise: 'Merchandise',
    stickers: 'Stickers & Labels',
    acrylic: 'Acrylic Products',
    kits: 'Branding Kits'
  };

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="container">
          <div className="shop-hero-content">
            <div className="shop-eyebrow">
              <span className="shop-dot"></span>
              <span className="label">Envejo Store</span>
            </div>
            <h1 className="shop-headline">
              Discover <span className="grad">Creative Products</span> for Your Brand
            </h1>
            <p className="shop-sub">
              From brand identity kits to custom prints, find everything you need to grow your business and stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="shop-main">
        <div className="container">
          <div className="shop-controls">
            <div className="filter-buttons">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {categoryLabels[cat] || cat}
                  <span className="filter-count">
                    {cat === 'all' ? products.length : products.filter(p => p.category === cat).length}
                  </span>
                </button>
              ))}
            </div>

            <div className="sort-dropdown">
              <label htmlFor="sort">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="no-products">
              <span className="no-products-icon">🔍</span>
              <h3>No products found</h3>
              <p>Try selecting a different category or filter</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Shop;
