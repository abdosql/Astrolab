'use client';
import Link from 'next/link';
import Image from 'next/image';
import HeaderWave from './HeaderWave';
import { useState, useEffect } from 'react';

interface HeaderProps {
  logoImageName?: string;
  backgroundImage?: string;
  showText?: boolean;
  style?: React.CSSProperties;
  className?: string;
  showHeaderWave?: boolean; // New prop to control HeaderWave visibility
}

const Header: React.FC<HeaderProps> = ({ 
  logoImageName, 
  backgroundImage, 
  showText, 
  style, 
  className,
  showHeaderWave = true // Default to true if not provided
}) => {
  console.log('Header rendering:', { logoImageName, backgroundImage, showText, showHeaderWave });
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
    <header style={style} className={`${className || ''}`}>
      <nav className={`navbar ${isMobile && isNavOpen ? 'nav-active' : ''}`}>
        <div className="logo">
          <Image src="/images/astrolab white png.png" alt="Astrolab" width={56} height={56} />
        </div>
        <div className="nav-toggle" onClick={toggleNav}>
          <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <ul className={`nav-links ${isMobile && isNavOpen ? 'nav-active' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/solarsystem">Solar System</Link></li>
          <li><Link href="#missions">Missions</Link></li>
          <li><Link href="#gallery">Gallery</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
        <div className="bookshelf-icon">
          <i className="fas fa-book-open"></i>
        </div>
      </nav>
      {showHeaderWave && (
        <HeaderWave 
          logoImageName={logoImageName} 
          backgroundImage={backgroundImage} 
          showText={showText} 
        />
      )}
    </header>
  );
};

export default Header;