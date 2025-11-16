
import React from 'react';
import myaffliate from '../assets/affliatemarketing.png';
import mycanva from '../assets/canvadesign.png';
import mycopy from '../assets/copywriting.png';
import myghost from '../assets/ghostwriting.png';
import myforex from '../assets/forextrading.png';
import mywebdev from '../assets/htmlcss.png';
import '../products.css';


const Products = () => {
  return (
<div class="grid-container">
  <a href="https://copywritinglab.selar.com/672730" class="grid-item item-1" target="_blank" rel="noopener noreferrer">
    <img src={myaffliate} alt="Affiliate Marketing" />
    <div class="content">
      <h3>Affiliate Marketing</h3>
      <p>Learn how to earn commissions by promoting other people's products.</p>
    </div>
  </a>

  <a href="https://copywritinglab.selar.com/4hm615" class="grid-item item-2" target="_blank" rel="noopener noreferrer">
    <img src={mycanva} alt="Canva Design" />
    <div class="content">
      <h3>Canva Design</h3>
      <p>Create stunning designs easily with Canva — even without design experience.</p>
    </div>
  </a>

  <a href="https://copywritinglab.selar.com/1m6026" class="grid-item item-3" target="_blank" rel="noopener noreferrer">
    <img src={mycopy} alt="Copywriting" />
    <div class="content">
      <h3>Copywriting</h3>
      <p>Master the art of persuasive writing to boost sales and engagement.</p>
    </div>
  </a>

  <a href="https://copywritinglab.selar.com/57epr1" class="grid-item item-4" target="_blank" rel="noopener noreferrer">
    <img src={myforex} alt="Forex Trading" />
    <div class="content">
      <h3>Forex Trading</h3>
      <p>Understand the foreign exchange market and learn how to trade effectively.</p>
    </div>
  </a>

  <a href="https://selar.com/6619r4?affiliate=wbjj" class="grid-item item-5" target="_blank" rel="noopener noreferrer">
    <img src={mywebdev} alt="Web Development" />
    <div class="content">
      <h3>Web Development</h3>
      <p>Build and maintain websites using HTML, CSS, and JavaScript.</p>
    </div>
  </a>

  <a href="https://copywritinglab.selar.com/8koie08101" class="grid-item item-6" target="_blank" rel="noopener noreferrer">
    <img src={myghost} alt="Digital Skills" />
    <div class="content">
      <h3></h3>
      <p>Gain practical skills to thrive in today’s digital economy.</p>
    </div>
  </a>
</div>

  );
};

export default Products;
