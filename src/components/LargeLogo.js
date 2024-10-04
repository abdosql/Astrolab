import Image from 'next/image';

export default function LargeLogo({ imageName, backgroundImage, showText = true }) {
  console.log('LargeLogo rendering:', { imageName, backgroundImage, showText });
  const circleStyle = {
    backgroundImage: backgroundImage ? `url('${backgroundImage}')` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  console.log('Circle style:', circleStyle);

  return (
    <div className="logo-large">
      <div className="logo-circle" style={circleStyle}>
        {imageName && (
          <div className="image-container">
            <Image 
              src={`/images/profile/users/${imageName}`} 
              alt="Astrolab" 
              width={336} 
              height={336} 
              className="circular-image"
            />
          </div>
        )}
      </div>
      {showText && <h1>ASTROLAB</h1>}
    </div>
  );
}