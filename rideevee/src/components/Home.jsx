import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import bgtour from '../images/Best-Road-Trips-in-India 1.png'
import Download from './Download'
import Explore from './Explore'
function Home() {
  return (
    <div className="home">
        <div>
            <Navbar/>
        </div>

        <div className='home-content'>
            {/* <img src={bgtour}></img> */}
            <div className='home-bg' style={{ backgroundImage: `url(${bgtour})`} } >
                <div className='home-content-inner'>
                    <div className='left-section'>
                        <p>India's <span className='left-section-color'>leading one-way inter-city </span>                cab service provider</p>
                        <div className='ellipse'></div>
                    </div>
                    
                    <div className='right-section'>
                        <Explore/>
                    </div>

                </div>
            </div>
            

            <div className='lower-section'>
                <Download/>
            </div>
            
       
        </div>
        
      
    </div>
  )
}
export default Home;
