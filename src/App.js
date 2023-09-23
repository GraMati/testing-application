import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cars from './Cars';
import CarDetails from './CarDetails';

function App() {
  return (
    <div className="app">
      <main className="app-main">
        <Router> {/* Wrap your components with Router */}
          <Switch> {/* Use Switch to render only the first matching route */}
            <Route path="/" exact component={Cars} /> {/* Render Cars component for the home route */}
            <Route path="/cars/:id" component={CarDetails} /> {/* Render CarDetails for car details */}
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;