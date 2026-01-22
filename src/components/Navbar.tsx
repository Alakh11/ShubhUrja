import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect to turn navbar white when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* LOGO SECTION */}
        <div className="logo" style={{ display: 'flex', alignItems: 'center', color: scrolled ? '#1e293b' : 'white' }}>
          {/* Note: In Vite, files in 'public' are accessed with just '/' */}
          <img src="./Logo.jpeg" alt="ShubhUrja Solar Solutions" style={{ height: '40px', marginRight: '10px', borderRadius: '50%' }} /> 
          ShubhUrja
        </div>

        {/* MOBILE HAMBURGER ICON */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-symbols-outlined" style={{ color: scrolled ? '#1e293b' : 'white' }}>
            {isOpen ? 'close' : 'menu'}
          </span>
        </div>

        {/* LINKS */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Our Work</a>
          <a href="#calculator" onClick={() => setIsOpen(false)}>Savings</a>
          <a href="#process" onClick={() => setIsOpen(false)}>Process</a>
          <a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Get Quote</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;