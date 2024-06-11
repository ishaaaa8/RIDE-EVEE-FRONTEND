// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import React from 'react';
import Property from './components/Property';
import Features from './components/Features';
import ReadMore from './components/ReadMore';
import Info from './components/Info';
import Pages from './components/Pages';
import Explore from './components/Explore';

function App() {
  const pageData1 = {
    heading: 'Discovering India\'s diverse landscapes,one scenic road trip at a time',
    points: [
      'Experience the thrill of road travel with our reliable car rental and taxi service as we explore the diverse landscapes of India together. We\'re passionate about making car hire accessible and enjoyable for everyone.',
      'Instead of worrying about the road, relax in our chauffeur-driven cabs on your next vacation. With a presence in over 2000 cities across India, we\'re here to take you wherever your heart desires with our car rental services.',
      'We cherish the freedom to stop, breathe in the fresh air, immerse in local cultures, and Savor regional cuisines along the way. These moments of discovery enrich your travels and create lasting memories through our rent a car service',
      'No destination is too far or too close; we encourage you to explore the beauty around you with our car hire options. Pack your bags, set out on weekend adventures, and uncover the gems in your vicinity with our taxi service.',
      'Planning your trip is a breeze with our user-friendly website, or you can chat with our travel experts at 8960170877 for personalized guidance on car rental. Our cab booking app simplifies the process, ensuring a hassle-free experience when you rent a car.',
      'Our experienced drivers are your companions on the road, guiding you through India\'s best experiences with our car rental and taxi service. From booking to your safe return home, we\'re dedicated to ensuring you have an exceptional road trip'
    ]
  };

  const pageData2 = {
    heading: 'Discovering India\'s diverse landscapes,one scenic road trip at a time',
    points: [
      'Experience the thrill of road travel with our reliable car rental and taxi service as we explore the diverse landscapes of India together. We\'re passionate about making car hire accessible and enjoyable for everyone.',
      'Instead of worrying about the road, relax in our chauffeur-driven cabs on your next vacation. With a presence in over 2000 cities across India, we\'re here to take you wherever your heart desires with our car rental services.',
      'We cherish the freedom to stop, breathe in the fresh air, immerse in local cultures, and Savor regional cuisines along the way. These moments of discovery enrich your travels and create lasting memories through our rent a car service',
      'No destination is too far or too close; we encourage you to explore the beauty around you with our car hire options. Pack your bags, set out on weekend adventures, and uncover the gems in your vicinity with our taxi service.',
      'Planning your trip is a breeze with our user-friendly website, or you can chat with our travel experts at 8960170877 for personalized guidance on car rental. Our cab booking app simplifies the process, ensuring a hassle-free experience when you rent a car.',
      'Our experienced drivers are your companions on the road, guiding you through India\'s best experiences with our car rental and taxi service. From booking to your safe return home, we\'re dedicated to ensuring you have an exceptional road trip'
    ]
  };

  return (


    <div className='app'>
      <Home/>
       <About/>
      
       <Property/>
       <Features/>
       <ReadMore/>
       <Info/>


       <Pages heading={pageData1.heading} points={pageData1.points} />
      <Pages heading={pageData2.heading} points={pageData2.points} />
      {/* <Explore/> */}
      <Footer/>
       
    </div>
    
   
  );
}

export default App;
