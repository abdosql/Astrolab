import Image from 'next/image';
import '../app/profile.css';

export default function Profile() {
  return (
    <section className="profile-section">
      <div className="left-sidebar">
        <Image className="icon-large" src="/images/profile/slider_star.svg" alt="Slider star" width={100} height={100} />
      </div>
      <div className="main-content">
        <div className="profile-header">
          <div className="profile-info">
            <span className="username-label">Mo Kadi</span>
            <span className="email-label">kadi@gmail.com</span>
          </div>
          <div className="settings-icon-container">
            <Image className="btn settings-btn" src="images/profile/settings.svg" alt="Settings" width={24} height={24} />
          </div>
        </div>
        
        <div className="information-box">
          <h2 className="section-title">About</h2>
          <div className="divider-lines">
            {['Passionate developer', 'AI enthusiast', 'Continuous learner', 'Innovative thinker'].map((text, index) => (
              <span key={`about-${index}`}>{text}</span>
            ))}
          </div>
          <h2 className="section-title">Interests</h2>
          <div className="divider-lines">
            {['Artificial Intelligence', 'Web Development', 'Open Source', 'Data Science'].map((interest, index) => (
              <span key={`interest-${index}`}>{interest}</span>
            ))}
          </div>
        </div>

        <div className="social-icons">
          {['twitter', 'insta', 'linkedin', 'github'].map((platform) => (
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