import React from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from '../assets/gemnipic.png';
import myImageside from '../assets/gemni-side.svg'
import myaffliate from '../assets/affliatemarketing.png';
import mycanva from '../assets/canvadesign.png';
import myimg1 from '../assets/img1.jpg';
import myimg2 from '../assets/img2.jpg';
import myimg3 from '../assets/img3.jpg';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="profile-card">
        <div className="profile-image">
          <img src={myImage} alt="kodeKosi" />
        </div>
        <h1 className="profile-name">Hi, I'm <span>kodeKosi</span></h1>
        <p className="profile-bio">
         <h2>Master the digital skills that pay in dollars</h2>
         <p>Stop scrolling and start earning. learn a digital skill today</p>
        </p>
        <div className="cta-container">
          <button className="cta-btn" onClick={() => navigate('/products')}>
            Explore Digital Skills →
          </button>
        </div>
      </div>
     {/* NEW: EARNINGS & PROOF SECTION */}
<section className="results-section">
  <div className="results-header">
    <span className="badge">Results Don't Lie</span>
    <h2>From Medical Student to 6-Figure Digital Earner</h2>
    <p>I stopped wishing for a better life and started building one. Here’s a glimpse of the payouts and impact we’re creating daily.</p>
  </div>

  <div className="results-gallery">
    <div className="result-card">
      <img src={myimg1} alt="Earnings Screenshot" /> 
      <div className="result-overlay">
        <span>Daily Payout: ₦250k+</span>
      </div>
    </div>
    <div className="result-card">
      <img src={myimg2} alt="Sales Notification" />
      <div className="result-overlay">
        <span>Weekly Conversions</span>
      </div>
    </div>
    <div className="result-card">
      {/* Add another image import for a third proof pic if you have one */}
      <img src={myimg3} alt="Student Success" />
      <div className="result-overlay">
        <span>Student Results</span>
      </div>
    </div>
  </div>

  <div className="marketing-pitch">
    <p>While my peers were only focused on the next exam, I was busy cracking the code to <strong>making money in dollars</strong>. Whether it's 2 AM in the hostel or between medical postings, these systems run on autopilot.</p>
    <button className="cta-btn secondary" onClick={() => navigate('/products')}>Show Me How It’s Done</button>
  </div>
</section>
      {/* NEW TRUST BAR SECTION */}
      <div className="trust-bar">
        
        <div className="stat-item">
          <h4>5K+</h4>
          <p>Students</p>
        </div>
        <div className="stat-item">
          <h4>12+</h4>
          <p>Premium Courses</p>
        </div>
        <div className="stat-item">
          <h4>24/7</h4>
          <p>Community Support</p>
        </div>
      </div>

      <section className='one-column'>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h2 style={{fontSize: '2rem', color: '#2e1065'}}>Trending Skills</h2>
          <span onClick={() => navigate('/products')} className='see-more' style={{backgroundColor: '#7c3aed'}}>View All</span>
        </div>

        <div className='inventory'>
          <a href="https://copywritinglab.selar.com/672730" className="grid-item" target="_blank" rel="noopener noreferrer">
            <img src={myaffliate} alt="Affiliate Marketing" loading='lazy'/>
            <div className="content">
              <div className="rating">⭐ 4.9 (1.2k reviews)</div>
              <h3>Affiliate Mastery</h3>
              <p>Learn how to earn commissions by promoting other people's products with proven strategies.</p>
            </div>
          </a>
        
          <a href="https://copywritinglab.selar.com/4hm615" className="grid-item" target="_blank" rel="noopener noreferrer">
            <img src={mycanva} alt="Canva Design" loading='lazy'/>
            <div className="content">
              <div className="rating">⭐ 4.8 (850 reviews)</div>
              <h3>Canva Design Pro</h3>
              <p>Create stunning, professional designs easily—even with zero previous design experience.</p>
            </div>
          </a>
        </div>
      </section>

      <section className="two-column">
        {/* ... Keep your wraps, but notice the text density ... */}
        <div className="wrap1">
          <div className="image-side">
            <img src={myImageside} alt="Digital Growth" loading='lazy'/>
          </div>
          <div className="explanation2">
            <h2>The World is Going Digital — Don’t Get Left Behind</h2>
            <p>
              In today’s world, digital skills are more than an advantage — they’re a necessity. 
              <strong> Every industry is evolving</strong>, and opportunities now belong to those who can create, design, and market online.
            </p>
                      <button className="cta-btn" onClick={() => navigate('/learn')}>
            get started
          </button>
          </div>
        </div>
      </section>
      
      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/08101133428" className="whatsapp-contact">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Contact" />
      </a>
    </>
  );
};


export default Profile;
