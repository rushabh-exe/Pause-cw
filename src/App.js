import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Gallery from './components/Gallery';
import Home from './components/Home';
import Nav from './components/Nav';
import Band from './components/Band';
import Joinpage from './components/Joinpage';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  },[])
  return (
    <>
      {
           loading ?
          <div className='screen-loader'>
            <div className='loadder'></div>
          </div>
          :
          <Router>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home />}>
              </Route>
              <Route exact path="/band" element={<Band />}>
              </Route>
              <Route exact path="/gallery" element={<Gallery />}>
              </Route>
              <Route exact path="/joiningpage" element={<Joinpage />}>
              </Route>
              <Route exact path="/contactus" element={<Contact />}>
              </Route>
            </Routes>
            <Footer />
          </Router>
      }

    </>
  );
}

export default App;
