import React from 'react';
import './App.css';

function App() {
  const user = { name: "Marek" }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Witaj, {user.name}!
        </p>
      </header>
    </div>
  );
}

export default App;