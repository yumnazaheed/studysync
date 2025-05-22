import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import '../styles.css'

const Home = ({ user, setCurrentPage }) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <div class="header-spacer"></div>
      <header class="header">
        <div class="container header-container">
          <div class="header-content">
            <a href="#top" class="logo">
              <i class="fas fa-graduation-cap"></i>
              <span class="logo-text">StudySync</span>
            </a>
            <nav class="main-nav">
              <ul>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#community" class="nav-link">Community</a></li>
                <li><a href="#faqs" class="nav-link">FAQs</a></li>
              </ul>
              <div class="hover-indicator"></div>
            </nav>
            <div class="auth-links">
              <button>
                Profile
              </button>
              <button onClick={handleSignOut}>
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google logo" style={styles.googleLogo} /> */}
                Sign Out
              </button>
            </div>
            <button class="mobile-menu-btn">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      <div style={styles.container}>
        <h2 style={styles.welcome}>Welcome, {user.displayName}!</h2>
        <button style={styles.lobbyButton} onClick={() => setCurrentPage('lobby')}>
          Go to Lobby
        </button>
      </div>
    </>
  )
};

const styles = {
  // styles here
};

export default Home;
