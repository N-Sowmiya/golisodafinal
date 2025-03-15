import React from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;