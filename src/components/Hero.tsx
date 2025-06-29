import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Feng Wei</h1>
          <p>IT Student & Aspiring Network Engineer</p>
          <p>Final-year Bachelor of IT (Networking) student passionate about building secure, efficient network systems and exploring DevOps, cloud infrastructure, and cybersecurity.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
