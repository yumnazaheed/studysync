import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Auth from './components/Auth';
import Home from './components/Home';
import Lobby from './components/Lobby';

const App = () => {
  const [user, setUser ] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser (u);
    });
    return () => unsubscribe();
  }, []);

  const renderPage = () => {
    if (!user) return <Auth />;
    if (currentPage === 'home') return <Home user={user} setCurrentPage={setCurrentPage} />;
    if (currentPage === 'lobby') return <Lobby user={user} setCurrentPage={setCurrentPage} />;
    return <div>Invalid Page</div>;
  };

  return <div>{renderPage()}</div>;
};

export default App;
