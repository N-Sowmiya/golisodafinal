import React from 'react';
import './Products.css';

function Products() {
  return (
    <section id="products" className="product-component">
      <h1>Our <span className="red-text">Signature</span> Flavors</h1>
      <div className="product-grid">
        <div className="product-card">
          <img src="Images/orange.png" alt="Orange" />
          <h2>Orange</h2>
        </div>
        <div className="product-card">
          <img src="Images/pineapple.png" alt="Pine Apple" />
          <h2>Pine Apple</h2>
        </div>
        <div className="product-card">
          <img src="Images/lemon.png" alt="Lemon" />
          <h2>Lemon</h2>
        </div> <div className="product-card">
          <img src="Images/blueberry.png" alt="Blue Berry" />
          <h2>Blue Berry</h2>
        </div> <div className="product-card">
          <img src="Images/panner.png" alt="Panner" />
          <h2>Panner</h2>
        </div> <div className="product-card">
          <img src="Images/strawberry.png" alt="Strawberry" />
          <h2>Strawberry</h2>
        </div>
      </div>
    </section>
  );
}

export default Products;