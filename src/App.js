import React from 'react'
import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

function App() {
  return (
    //BEM
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
