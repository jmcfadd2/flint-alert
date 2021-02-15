import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/header/Navbar';


import Sidebar from './components/sidebar/Sidebar';

import home from './pages/home/home';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen);
  }
  return (
    <Router>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/'component={home} />
      </Switch>
    </Router>
  );
}

export default App;
