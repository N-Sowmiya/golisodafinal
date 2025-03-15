import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-component">
      <div className="text-box" >
      <h2>Refresh with</h2>
      <h1>Goli Soda</h1>
      <p>Experience the perfect blend of tradition and refreshment with our handcrafted goli soda varieties</p>
      </div>
      <img src="Images/IMG-20250115-WA00010.jpg" alt="Goli Soda" className="home-image" />
    </section>
  );
}

export default Home;