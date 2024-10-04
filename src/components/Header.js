import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo"><Image src="/images/astrolab white png.png" alt="Astrolab" width={56} height={56} /></div>
        <ul className="nav-links">
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#missions">Missions</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="bookshelf-icon">
          <i className="fas fa-book-open"></i>
        </div>
      </nav>
      <div className="logo-large">
        <Image src="/images/astrolab white png.png" alt="Astrolab" width={336} height={336} />
        <h1>ASTROLAB</h1>
      </div>
      <div className="header-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1877 490"><defs><style>{`.cls-1{fill:#fff;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M1922,1354,0,1365V198s718,125,795-14C930,184,943.87,0,943.87,0S982,184,1093,184c80,135,829,3,829,3Z"/></g></g></svg>
      </div>
    </header>
  );
}