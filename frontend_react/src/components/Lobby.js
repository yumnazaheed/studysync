// src/components/Lobby.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Lobby = () => {
  const [lobbyName, setLobbyName] = useState('');

  const createLobby = async () => {
    try {
      await addDoc(collection(db, 'lobbies'), {
        name: lobbyName,
        createdAt: new Date(),
      });
      console.log('Lobby created:', lobbyName);
      setLobbyName('');
    } catch (error) {
      console.error('Error creating lobby:', error);
    }
  };

  return (
    <div>
      <h2>Create Lobby</h2>
      <input
        type="text"
        value={lobbyName}
        onChange={(e) => setLobbyName(e.target.value)}
        placeholder="Enter lobby name"
      />
      <button onClick={createLobby}>Create Lobby</button>
    </div>
  );
};

export default Lobby;
