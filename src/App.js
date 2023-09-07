import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Gallery from './components/Gallery';
import Home from './components/Home';
import Nav from './components/Nav';
import Band from './components/Band';
import Joinpage from './components/Joinpage';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/band" element={<Band/>}>
          </Route>
          <Route exact path="/gallery" element={<Gallery />}>
          </Route>
          <Route exact path="/joiningpage" element={<Joinpage/>}>
          </Route>
          <Route exact path="/contactus" element={<Contact/>}>
          </Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
