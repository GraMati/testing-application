import React from 'react';
import './App.css';
import Cars from './Cars';
import { Provider } from 'react-redux';
import store from '../src/redux/store/carStore';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <main className="app-main">
          <Cars />
        </main>
      </div>
    </Provider>
  );
}

export default App;