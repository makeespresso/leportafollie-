import React from 'react';
import './App.css';
import Routes from './Routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes />
      <Navbar />
    </div>
  );
}
export default App;