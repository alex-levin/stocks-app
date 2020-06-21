import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Register from './components/register/Register';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <div>
        <Register />
      </div>
    </Router>
  );
}

export default App;
