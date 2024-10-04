import React, { useEffect, useState } from 'react';
import '../src/app/Login.css';
import NASALogo from '../public/images/astrolab white png.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Loader from './Loader';
import Image from 'next/image';

const Login: React.FC = () => {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [serverErrorMessage, setServerErrorMessage] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    const { successMessage } = router.query;
    if (successMessage) {
      setSuccessMessage(successMessage as string);
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [router.query]);

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    const savedPassword = localStorage.getItem('rememberedPassword');
    const savedRememberMe = localStorage.getItem('rememberMe') === 'true';
    
    if (savedEmail && savedPassword && savedRememberMe) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const validateInputs = (): boolean => {
    let valid = true;
    setEmailError(null);
    setPasswordError(null);

    if (!email) {
      setEmailError('Veuillez entrer votre email.');
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Veuillez entrer une adresse email valide.');
        valid = false;
      }
    }

    if (!password) {
      setPasswordError('Veuillez entrer votre mot de passe.');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('Le mot de passe doit contenir au moins 6 caractères.');
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerErrorMessage(null);

    if (!validateInputs()) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://38.242.248.47:5090/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
          localStorage.setItem('rememberedPassword', password);
          localStorage.setItem('rememberMe', 'true');
        } else {
          localStorage.removeItem('rememberedEmail');
          localStorage.removeItem('rememberedPassword');
          localStorage.removeItem('rememberMe');
        }
        
        setSuccessMessage('Connexion réussie ! Redirection vers le tableau de bord...');
        
        setTimeout(() => {
          router.push('/profile');
        }, 1500);
      } else {
        if (data.msg) {
          setServerErrorMessage(data.msg);
        } else {
          setServerErrorMessage('Une erreur inconnue s\'est produite lors de la connexion.');
        }
      }
    } catch {
      setServerErrorMessage('Erreur serveur. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-background">
      <div className="login-overlay">
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
        {serverErrorMessage && (
          <div className="error-message">
            {serverErrorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="logo-container">
            <Image src={NASALogo} alt="NASA Logo" className="nasa-logo" width={80} height={80} />
          </div>
          <h2 className="login-title">Connexion à la Mission</h2>
          
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="text"
              className={`input-field ${emailError ? 'input-error' : ''}`}
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Entrez votre email"
            />
            {emailError && <span className="error-text">{emailError}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">Mot de passe</label>
            <input
              type="password"
              className={`input-field ${passwordError ? 'input-error' : ''}`}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Entrez votre mot de passe"
            />
            {passwordError && <span className="error-text">{passwordError}</span>}
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              className="checkbox-input"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember" className="checkbox-label">Se souvenir de moi</label>
          </div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? <Loader /> : 'Lancer la Mission'}
          </button>
          <div className="footer-links">
            <a href="#" className="footer-link">Mot de passe oublié ?</a>
            <Link href="/signup" className="footer-link">Créer un compte</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;