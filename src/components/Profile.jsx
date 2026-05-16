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
 const scrolltomentorship = () => {
    const mentorshipSection = document.getElementById('free-mentorship');
    if (mentorshipSection) {
      mentorshipSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
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
{/* NEW: EARNINGS & PROOF SECTION */}
<section className="results-section">
  <div className="results-header">
    <span className="badge">Results Don't Lie</span>
    <h2>While the Rest of the World is Sleeping, We’re Building.</h2>
    <p>I stopped using my phone just for entertainment and turned it into a money printing machine. Here is the daily proof of what's possible when you stop scrolling.</p>
  </div>

  <div className="results-gallery">
    <div className="result-card">
      <img src={myimg2} alt="Earnings Screenshot" /> 
      <div className="result-overlay">
        <span>Daily Payout: ₦100k+</span>
      </div>
    </div>
    <div className="result-card">
      <img src={myimg1} alt="Sales Notification" />
      <div className="result-overlay">
        <span>Weekly Conversions</span>
      </div>
    </div>
    <div className="result-card">
      <img src={myimg3} alt="Student Success" />
      <div className="result-overlay">
        <span>sales result</span>
      </div>
    </div>
  </div>

  <div className="marketing-pitch">
    <p>The system is simple: <strong>Every single day, millions of people spend hours online looking for answers. I just learned how to position myself to sell them the solution.</strong> 
    While others are sleeping on these opportunities, my digital funnels run on complete autopilot generating income in dollars round-the-clock.</p>
    <button className="cta-btn secondary" onClick={() => {scrolltomentorship}}>Show Me The Strategy</button>
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

      <section className="two-column" id='free-mentorship'>
        {/* ... Keep your wraps, but notice the text density ... */}
        <div className="wrap1">
          <div className="image-side">
            <img src={myImageside} alt="Digital Growth" loading='lazy'/>
          </div>
          <div className="explanation2">
            <h2>The World is Going Digital — Don’t Get Left Behind</h2>
            <p>
              In today’s world, digital skills are more than an advantage they’re a necessity. 
              <strong> join me on whatsapp where i offer free personal mentorship, and guidance on how to be successful in online earning .</strong> i drop updates and opportunity on how to excel as a digital marketer and techie in general.
            </p>
                      <a href="https://wa.me/08101133428" className="whatsapp-contact"><button className="cta-btn" >
            get started
          </button></a>
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
