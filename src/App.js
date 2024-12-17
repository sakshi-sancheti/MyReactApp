import React, { useState } from 'react';
import './App.css'; // Make sure to include the CSS file for styling

function App() {
  const [message, setMessage] = useState("Why don't skeletons fight each other? They don't have the guts! 💀");
  const [backgroundColor, setBackgroundColor] = useState("#f8d7e1");

  const Messages = [
    "Why don't skeletons fight each other? They don't have the guts! 💀",
    "What do you call cheese that isn't yours? Nacho cheese! 🧀",
    "Why couldn't the bicycle stand up by itself? It was two-tired! 🚴",
    "How do you organize a space party? You planet! 🪐",
    "Why don't eggs tell jokes? They'd crack each other up! 🥚",
    "Why was the math book sad? It had too many problems. 📚",
  ];

  const colors = ["#f8d7e1", "#ffd1dc", "#ffb6c1", "#ffc0cb", "#ff80ab"];

  const changeMessageAndColor = () => {
    const randomMessage = Messages[Math.floor(Math.random() * Messages.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setMessage(randomMessage);
    setBackgroundColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <div className="container">
        <h1 className="message">{message}</h1>
        <button onClick={changeMessageAndColor} className="button">
          Make me laugh!!!
        </button>
      </div>
    </div>
  );
}

export default App;
