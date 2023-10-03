// About.js
import React from 'react';
import './About.css'; // You can create a separate CSS file for styling if needed.
import Header from '../../common/Header';
// import teamImage from './team.jpg'; // Import an image for the team section
// import missionImage from './mission.jpg'; // Import an image for the mission section

function About() {
  return (
    <>
    <Header/>
    <div className="about-page">
      <h2>About Us</h2>
      <p>
        Welcome to Fantastic Tours Vlog! We are passionate about helping you explore the world through our carefully curated tours and adventures. Whether you're seeking thrilling adventures in the wild or immersing yourself in diverse cultures, we have the perfect experience waiting for you.
      </p>
      
      <section className="about-section">
        {/* <img src={teamImage} alt="Our Team" className="section-image" /> */}
        <h3>Our Team</h3>
        <p>
          Meet our dedicated team of travel experts and guides. We're here to make your journey memorable and hassle-free. With our local knowledge and love for travel, you're in good hands.
        </p>
      </section>

      <section className="about-section">
        {/* <img src={missionImage} alt="Our Mission" className="section-image" /> */}
        <h3>Our Mission</h3>
        <p>
          Our mission is to inspire and enable travelers to explore the beauty of the world. We believe that travel has the power to transform lives, foster connections, and create lifelong memories. We are committed to providing exceptional experiences that exceed your expectations.
        </p>
      </section>

      <p>
        Thank you for choosing Fantastic Tours Vlog for your next adventure. We can't wait to help you discover your next great escape!
      </p>
    </div>
    </>
  );
}

export default About;
