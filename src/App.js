import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header'
import Section from './components/Section';
import Sidebar from './components/sidebar/Sidebar';
import MidSection from './pages/home/elements/MidSection';
import TopSection from './pages/home/elements/TopSection';
import home from './pages/home/home';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen);
  }
  return (
    <Router>
      <Header toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/'component={home} />
      </Switch>
    </Router>
  );
}

export default App;
