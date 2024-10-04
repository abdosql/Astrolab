import Image from 'next/image';
import '../app/profile.css';

export default function Profile({ imageName }) {
  return (
    <section className="profile-section">
      <div className="left-sidebar">
        <Image className="icon-large" src="/images/profile/slider_star.svg" alt="Slider star" width={100} height={100} />
      </div>
      <div className="main-content">
        <div className="profile-header">
          <div className="profile-info">
            <span className="username-label">UserName</span>
            <span className="email-label">kadimeed@gmail.com</span>
          </div>
          <div className="settings-icon-container">
            <Image className="btn settings-btn" src="images/profile/settings.svg" alt="Settings" width={24} height={24} />
          </div>
        </div>
        
        <div className="information-box">
          <h2 className="section-title">About</h2>
          <div className="divider-lines">
            {[...Array(4)].map((_, index) => <span key={`about-${index}`}></span>)}
          </div>
          <h2 className="section-title">Interest</h2>
          <div className="divider-lines">
            {[...Array(4)].map((_, index) => <span key={`interest-${index}`}></span>)}
          </div>
        </div>

        <div className="social-icons">
          {['twitter', 'insta', 'linked in', 'github'].map((platform) => (
            <Image 
              key={platform}
              className="btn icon-small" 
              src={`images/profile/${platform}.svg`} 
              alt={platform} 
              width={24} 
              height={24} 
            />
          ))}
        </div>
      </div>
      <div className="right-sidebar">
        <Image 
          className="icon-large" 
          src='/images/profile/slider_star.svg'
          alt="Profile" 
          width={100} 
          height={100} 
          style={{marginTop: '10%'}} 
        />
        <Image className="icon-large" src="/images/profile/slider_star.svg" alt="Slider star" width={100} height={100} />
      </div>
    </section>
  );
}