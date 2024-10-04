import Link from 'next/link';
import Image from 'next/image';
import HeaderWave from './HeaderWave'; // Import correct de HeaderWave

export default function Header({ logoImageName = "astrolab white png.png" }) {
  return (
    <header>
      <nav>
        <div className="logo"><Image src="/images/astrolab white png.png" alt="Astrolab" width={56} height={56} /></div>
        <ul className="nav-links">
          <li><Link href="/#home" className="active">Home</Link></li>
          <li><Link href="/#explore">Explore</Link></li>
          <li><Link href="/#missions">Missions</Link></li>
          <li><Link href="/#gallery">Gallery</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
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