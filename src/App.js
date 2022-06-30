import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Home from './Home';
import Video from './VD/Video';
import Image from './ID/Image';
import Signin from './pages/signin';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="About" element={ <About/>} />
        <Route exact path ="Services" element={ <Home/>} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='Sign-up' element={<SignUp/>} />
        <Route exact path="Video" element={ <Video/> } />
        <Route exact path="Image" element={ <Image/> } />
        <Route exact path="Sign-in" element={<Signin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
