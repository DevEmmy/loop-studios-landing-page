import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import Section from './Components/Section';


function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Section />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
