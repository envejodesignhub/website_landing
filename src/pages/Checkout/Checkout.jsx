import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

function Checkout() {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    notes: ''
  });

  const [processing, setProcessing] = useState(false);

  if (cart.length === 0) {
    navigate('/shop');
    return null;
  }

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`;
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 5000 ? 0 : 99;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      alert(`Order placed successfully!\n\nTotal: ${formatPrice(total)}\n\nWe'll send you an email confirmation at ${formData.email}`);
      clearCart();
      navigate('/shop');
    }, 2000);
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="checkout-title">Checkout</h1>

        <form onSubmit={handleSubmit} className="checkout-layout">
          <div className="checkout-form">
            <div className="form-section">
              <h2>Contact Information</h2>
              <div className="form-grid">
                <div className="form-group full">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <div className="form-group">
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Shipping Address</h2>
              <div className="form-grid">
                <div className="form-group full">
                  <label>Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="3"
                    placeholder="House no., Street name, Area"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Your city"
                  />
                </div>
                <div className="form-group">
                  <label>State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    placeholder="Your state"
                  />
                </div>
                <div className="form-group full">
                  <label>PIN Code *</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    placeholder="123456"
                    maxLength="6"
                  />
                </div>
                <div className="form-group full">
                  <label>Order Notes (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Any special instructions for your order"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="checkout-summary">
            <div className="summary-card">
              <h2>Order Summary</h2>

              <div className="order-items">
                {cart.map(item => (
                  <div key={item.id} className="order-item">
                    <img src={item.image} alt={item.name} />
                    <div className="order-item-info">
                      <h4>{item.name}</h4>
                      <p>Qty: {item.quantity}</p>
                    </div>
                    <span className="order-item-price">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
              </div>
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
                type="submit" 
                className="place-order-btn"
                disabled={processing}
              >
                {processing ? 'Processing...' : 'Place Order'}
              </button>

              <div className="payment-note">
                <p>💳 Payment on Delivery (Cash/Card/UPI)</p>
                <p>🔒 Your information is secure</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
