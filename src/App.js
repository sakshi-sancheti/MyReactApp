import React, { useState } from 'react';
import './App.css'; // Make sure to include the CSS file for styling

function App() {
  const [message, setMessage] = useState("You make my heart skip a beat ❤️");
  const [backgroundColor, setBackgroundColor] = useState("#f8d7e1");

  const romanticMessages = [
    "Every moment with you is magical ✨",
    "You make my heart skip a beat ❤️",
    "You're my sunshine on a rainy day ☀️",
    "I like you more than words can say 💕",
    "You're incredibly strong for managing all of this. Keep going; you've got this! 💪",
    "Hope you're having a great day! 🌈",
  ];

  const colors = ["#f8d7e1", "#ffd1dc", "#ffb6c1", "#ffc0cb", "#ff80ab"];

  const changeMessageAndColor = () => {
    const randomMessage = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setMessage(randomMessage);
    setBackgroundColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <div className="container">
        <h1 className="message">{message}</h1>
        <button onClick={changeMessageAndColor} className="button">
          Make My Heart Flutter 💖
        </button>
      </div>
    </div>
  );
}

export default App;
