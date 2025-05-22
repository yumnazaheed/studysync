import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Home = ({ user, setCurrentPage }) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.welcome}>Welcome, {user.displayName}!</h2>
      <button style={styles.lobbyButton} onClick={() => setCurrentPage('lobby')}>
        Go to Lobby
      </button>
      <button style={styles.signOutButton} onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

const styles = {
  // styles here
};

export default Home;
