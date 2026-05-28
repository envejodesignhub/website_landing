import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.css';

function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`;
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 5000 ? 0 : 99;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="container">
          <div className="empty-cart-content">
            <span className="empty-cart-icon">🛒</span>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop" className="btn-primary">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <Link to={`/shop/${item.slug}`} className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </Link>

                <div className="cart-item-details">
                  <Link to={`/shop/${item.slug}`} className="cart-item-name">
                    {item.name}
                  </Link>
                  <p className="cart-item-desc">{item.shortDesc}</p>
                  
                  <div className="cart-item-meta">
                    <span className="cart-item-category">{item.category}</span>
                    {item.originalPrice && (
                      <span className="cart-item-saved">
                        You save: {formatPrice(item.originalPrice - item.price)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>

                  <div className="cart-item-price">
                    <span className="price">{formatPrice(item.price * item.quantity)}</span>
                    {item.quantity > 1 && (
                      <span className="unit-price">{formatPrice(item.price)} each</span>
                    )}
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal ({cart.reduce((count, item) => count + item.quantity, 0)} items)</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
            </div>

            {shipping === 0 && (
              <div className="free-shipping-msg">
                🎉 You got free shipping!
              </div>
            )}

            {subtotal < 5000 && (
              <div className="free-shipping-progress">
                <p>Add {formatPrice(5000 - subtotal)} more for FREE shipping</p>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(subtotal / 5000) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            <div className="summary-row">
              <span>Tax (GST 18%)</span>
              <span>{formatPrice(tax)}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>

            <button 
              className="checkout-btn"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </button>

            <Link to="/shop" className="continue-shopping">
              ← Continue Shopping
            </Link>

            <div className="trust-badges">
              <div className="badge">
                <span>🔒</span>
                <span>Secure Checkout</span>
              </div>
              <div className="badge">
                <span>📦</span>
                <span>Fast Delivery</span>
              </div>
              <div className="badge">
                <span>↩️</span>
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
