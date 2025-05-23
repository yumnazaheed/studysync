import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Lobby = ({ user }) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.welcome}>Lobby</h2>
      <p style={styles.message}>Welcome to the lobby, {user.displayName}!</p>
      <button style={styles.signOutButton} onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

const styles = {
  // styles here
};

export default Lobby;
