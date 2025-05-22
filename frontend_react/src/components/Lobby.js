// src/components/LobbyList.js
import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import '../styles.css';

const LobbyList = () => {
  const [lobbies, setLobbies] = useState([]);

  // Listen for available lobbies
  useEffect(() => {
    const q = query(
      collection(db, 'lobbies'),
      where('currentMembers', '<', 5)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lobbyData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLobbies(lobbyData);
    });

    return () => unsubscribe(); // cleanup on unmount
  }, []);

  // Sign out handler
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Simple inline styles object
  const styles = {
    signOutButton: {
      marginBottom: '1rem',
      padding: '0.5rem 1rem',
      cursor: 'pointer'
    }
  };

  return (
    <>
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
                Sign Out
              </button>
            </div>
            <button class="mobile-menu-btn">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      <div>
        <button style={styles.signOutButton} onClick={handleSignOut}>
          Sign Out
        </button>

        <h2>Available Lobbies</h2>
        <ul>
          {lobbies.map(lobby => {
            const spotsLeft = lobby.maxCapacity - lobby.currentMembers;
            let color = 'green';
            if (spotsLeft <= 2) color = 'yellow';
            if (spotsLeft === 0) color = 'red';

            return (
              <li key={lobby.id} style={{ color }}>
                <strong>{lobby.name}</strong> — {spotsLeft} spot{spotsLeft !== 1 ? 's' : ''} left
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default LobbyList;
