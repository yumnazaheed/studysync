import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18 and later
import App from './App'; // Import the App component
import './index.css'; // Optional: Your CSS file

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
