import React from 'react'
import './Home.css'
import Sidebar from './Sidebar.js'
import Footer from './footer.js'



function Home() {
   return (
      <div className='home'>
        <div className='side-bar'>
          <Sidebar/>
          </div>
         <div className='footer'>
            <Footer/>
         </div>
      </div>
      

   )
}

export default Home
