import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Tournament from './components/Tournament/Tournament';
import Contact from './components/Contact/Contact';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import { TeamProvider } from './components/context/TeamProvider';
import { NewsProvider } from './components/context/NewsProvider';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <TeamProvider>
        <Tournament />
      </TeamProvider>
      <NewsProvider>
        <News />
      </NewsProvider>
      <Contact />
      <Footer />
    </div>
  )
}

export default App