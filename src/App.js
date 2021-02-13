import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header'
import Section from './components/Section';
import MidSection from './pages/home/elements/MidSection';
import TopSection from './pages/home/elements/TopSection';

function App() {
  return (
    <Router>
      <div>
      <Header/>
      <TopSection />
      <MidSection />
      
      </div>
    </Router>
  );
}

export default App;
