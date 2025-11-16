import React from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from '../assets/gemnipic.png';
import myImageside from '../assets/gemni-side.png';
import myaffliate from '../assets/affliatemarketing.png';
import mycanva from '../assets/canvadesign.png';
const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="profile-card">
      <div className="profile-image">
        <img src={myImage} alt="Profile" />
      </div>
      <h2 className="profile-name">
        Hi, I'm <span>kodeKosi</span>
      </h2>
      <p className="profile-bio">
        Empowering young Nigerians to earn online through digital skills and affiliate marketing.
      </p>
      <div className="cta-container">
        <button className="cta-btn" onClick={() => navigate('/products')}>
          Explore Digital Skills
        </button>
      </div>
      
    </div>

    <section className='one-column'>
      <h2>Trending skills</h2>
      <div className='inventory'>
        
         <a href="https://copywritinglab.selar.com/672730" class="grid-item item-1" target="_blank" rel="noopener noreferrer">
            <img src={myaffliate} alt="Affiliate Marketing" />
            <div className="content">
              <h3>Affiliate Marketing</h3>
              <p>Learn how to earn commissions by promoting other people's products.</p>
            </div>
          </a>
        
          <a href="https://copywritinglab.selar.com/4hm615" class="grid-item item-2" target="_blank" rel="noopener noreferrer">
            <img src={mycanva} alt="Canva Design" />
            <div className="content">
              <h3>Canva Design</h3>
              <p>Create stunning designs easily with Canva — even without design experience.</p>
            </div>
          </a>

            
           <span onClick={() => navigate('/products')} className='see-more'>See more</span>
        
      </div>
     
    </section>


    <section className="two-column">
      <div className="wrap1">
        <div className="image-side">
          <img src={myImageside} alt="Illustration" />
        </div>
        <div className="explanation2">
          <h2>  The World is Going Digital — Don’t Get Left Behind</h2>
          <p>
          

            In today’s world, digital skills are more than an advantage — they’re a necessity.
            Every industry is evolving, and opportunities now belong to those who can create, design, build, market, and communicate online.

            Whether it’s Graphic Design, Web Development, Digital Marketing, Video Editing, Content Creation, AI Tools, or Forex Trading, every skill you learn adds value to your future.

            You don’t need to master them all — just start with one.
            One skill that aligns with your passion, your goals, and your vision for growth.
            Because success in the digital age isn’t about waiting for the right time — it’s about taking the first step.

            Start learning today. Build something that lasts.
          </p>
        </div>
      </div>
         <div className="wrap2">
            <div className="image-side">
          <img src={myImageside} alt="Illustration" />
        </div>
      <div className="explanation1">
     
                  
        <h2>Why Learning a Digital Skill Changes Everything</h2>
        <p>
         A single digital skill can open doors that once seemed out of reach.
            It can turn your creativity into income, your ideas into projects, and your free time into opportunity.

            With the right skill, you can work from anywhere, build your own brand, help businesses grow, or even create something the world has never seen before.
            The internet has made success possible for anyone — but only for those willing to learn, practice, and stay consistent.

            You don’t need a perfect start. You just need the right direction, the right resources, and the decision to begin.
            Every expert you admire today once started as a beginner — just like you.

            Your growth begins the moment you decide to invest in yourself.
        </p>
      </div>

      </div>
       
    </section>
    </>
  );
};


export default Profile;
