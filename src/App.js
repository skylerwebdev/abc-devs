import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AppRouter from './configs/AppRouter';

function App() {
  return (
    <>
    <Header />
    <div className="App">
      
      <AppRouter />

    </div>
    </>
  );
}

export default App;
