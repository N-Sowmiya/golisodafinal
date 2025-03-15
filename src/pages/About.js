import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" >
     <h1 className='storytitle'>Our <span className='highlight'>Story</span></h1>
      <div className="about-component">
      <div className="textcontent">
      <p>Maasi Goli Soda was founded in 2024 by a young entrepreneur with a passion for reviving nostalgic flavors with a modern twist. Inspired by childhood memories of the classic marble soda, we set out to bring back the joy of that unmistakable pop, the fizzy burst of flavors, and the refreshing sip that made every moment special.

At Goli Soda, we believe in blending tradition with innovation. Our drinks are crafted using high-quality ingredients, ensuring an authentic taste that resonates across generations. Whether you're reliving old memories or experiencing Goli Soda for the first time, every bottle is designed to spark excitement and nostalgia.

Join us on this fizzy journey and celebrate the charm of Goli Soda—one pop at a time!!
</p></div>
       <div className='boxcontent'>
      <div className="stats-section">
        <div className="stat">
          <h2>1M+</h2>
          <p>Happy Customers</p>
        </div>
      </div>
      <div className="quality-section">
        <h2>Quality First</h2>
        <p>Crafted for Quality, Loved for Taste.</p>
      </div></div></div>
    </section>
  );
}

export default About;