'use client';  // Add this 
import Link from 'next/link';
import Image from 'next/image';
import HeaderWave from './HeaderWave'; // Import correct de HeaderWave

import { useState, useEffect } from 'react';

export default function Header({ logoImageName = "astrolab white png.png" }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isMobile && isNavOpen ? 'nav-active' : ''}`}>
        <div className="logo">
          <Image src="/images/astrolab white png.png" alt="Astrolab" width={56} height={56} />
        </div>
        <div className="nav-toggle" onClick={toggleNav}>
          <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <ul className={`nav-links ${isMobile && isNavOpen ? 'nav-active' : ''}`}>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#missions">Missions</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Link href="/profile">Profil</Link></li>
        </ul>
        <div className="bookshelf-icon">
          <i className="fas fa-book-open"></i>
        </div>
      </nav>
      <HeaderWave logoImageName={logoImageName} /> 
    </header>
  );
}