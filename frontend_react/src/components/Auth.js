import React from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Auth = () => {
  const provider = new GoogleAuthProvider();

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome to StudySync</h2>
        <p style={styles.subtitle}>Sign in with your Google account to continue</p>
        <button style={styles.signInButton} onClick={handleSignIn}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google logo" style={styles.googleLogo} />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

const styles = {
  // styles here
};

export default Auth;
