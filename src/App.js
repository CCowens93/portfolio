import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './projects.js';
import Home from './home.js';
import About from './about.js';
import Skills from './skills.js';
import './App.css';


function App() {
  return (




    <BrowserRouter>
      <div className="navbar">


        <Link to="/home" className="item">Home</Link>
        <Link to="/about" className="item">About</Link>
        <Link to="/portfolio" className="item">Portfolio</Link>
        <Link to='/skills' className="item">Skills</Link>
        
        </div>

        

        <div className="App">


          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Projects} />
          <Route path="/skills" component={Skills} />


        
        </div>
      
    </BrowserRouter>
   
  );
}

export default App;
