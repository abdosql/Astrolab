'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button className="venture-btn">Contact Us</button>
          </form>
        </div>
      </div>
      <div className="social-media">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/twitter.svg" alt="Twitter" width={32} height={32} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/insta.svg" alt="Instagram" width={32} height={32} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/linkedin.svg" alt="LinkedIn" width={32} height={32} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/github.svg" alt="GitHub" width={32} height={32} />
        </a>
      </div>
      <div className="footer-logo">
        <Image src="/images/astrolab white png.png" alt="Astrolab" width={56} height={56} />
      </div>
    </footer>
  );
}