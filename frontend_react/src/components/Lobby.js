// src/components/Lobby.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, onSnapshot, addDoc } from 'firebase/firestore';


const Lobby = () => {
  const [lobbies, setLobbies] = useState([]);
  const [lobbyName, setLobbyName] = useState('');

  useEffect(() => {
    // Query lobbies that are NOT full (maxCapacity = 5 in this example)
    const q = query(
      collection(db, 'lobbies'),
      where('currentMembers', '<', 5)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lobbyData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()        // no TypeScript assertion here
      }));
      setLobbies(lobbyData);
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  // const createLobby = async () => {
  //   try {
  //     await addDoc(collection(db, 'lobbies'), {
  //       name: lobbyName,
  //       createdAt: new Date(),
  //     });
  //     console.log('Lobby created:', lobbyName);
  //     setLobbyName('');
  //   } catch (error) {
  //     console.error('Error creating lobby:', error);
  //   }
  // };

  return (
    <div>
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
  );
};

export default LobbyList;