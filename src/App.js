import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Tournament from './components/Tournament/Tournament';
import News from './components/News/News';
import { TeamProvider } from './components/context/TeamProvider';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <TeamProvider>
        <Tournament />
      </TeamProvider>
      <News/>
    </div>
  )
}

export default App