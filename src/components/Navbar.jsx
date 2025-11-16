import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!open);

  return (
    <>
      <button className="open-btn" onClick={toggleSidebar}>
        <ion-icon name="menu-outline"></ion-icon>
      </button>

      <nav id="navbar" className={`navbar ${open ? 'open' : ''}`}>
        <ul className="nav-links">
          <li className="close-btn" onClick={toggleSidebar}>
            &times;
        </li>
            <Link to="/" onClick={toggleSidebar}>Home</Link>
        
            <Link to="/about" onClick={toggleSidebar}>About</Link>
          
          
            <Link to="/products" onClick={toggleSidebar}>Products</Link>
          
         
            <Link to="/learn" onClick={toggleSidebar}>Learn</Link>
         
            <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
         
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

