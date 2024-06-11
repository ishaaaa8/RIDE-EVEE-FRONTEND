// import logo from './logo.svg';
import './App.css';
import {Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import React from 'react';
import Property from './components/Property';
import Features from './components/Features';
import ReadMore from './components/ReadMore';

function App() {
  return (


    <div className='app'>
      <Home/>
       <About/>
      
       <Property/>
       <Features/>
       <ReadMore/>
       
    </div>
    
    // <div className='app'>
    //   <Navbar/>
    // </div>
    // <Router>
    //   <div className='app'>
    //   <Home/>
    //   {/* <Routes>
    //     <Route exact path='/' element={<Home/>}></Route>
    //     </Routes> */}
        
    //   {/* <Footer/> */}
    // </div>
    // </Router>
  );
}

export default App;
