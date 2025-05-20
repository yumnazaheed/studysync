// src/App.js
import React from 'react';
import Auth from './components/Auth';
import Lobby from './components/Lobby';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const App = () => {
  const [user, setUser ] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser (user);
      } else {
        setUser (null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>StudySync</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <Lobby />
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
};

export default App;

