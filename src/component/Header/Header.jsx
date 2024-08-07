import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
   <div className="header">
      <div className="logobox">
        <img src='https://themewagon.github.io/gymlife/img/logo.png' className='img'></img>
      </div>
      <div className="navbox">
        <ul>
          <li> <Link to={'/'}  className='navtext'>HOME</Link></li>
          <li> <Link to={'/About'} className='navtext'>ABOUT US</Link></li>
           
          <li> <Link to={'/Classes'} className='navtext'>CLASSES</Link></li>
          <li><Link to={'/Serives'} className='navtext'>SERVICES</Link></li>
          <li><Link to={'/Team'} className='navtext'>OUR TEAM</Link></li>
          <li><Link to={'/Page'} className='navtext' >PAGES</Link></li>
          <li><Link to={'Contact'}  className='navtext'>CONTACT</Link></li>
        </ul>
      </div>
      <div class="canvas-open">
                <i class="fa fa-bars"></i>
            </div>

      <div id='preloder'>
      <ul>
          <li> HOME</li>
          {/* <li> <Link to={'/About'}>ABOUT</Link></li> */}
          <li>CLASSES</li>
          <li>SERVICES</li>
          <li>OUR TEAM</li>
          <li>PAGES</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="iconbox">
      <i class="fa fa-search icon" ></i>
      <a href="#"><i class="fa fa-facebook icon "></i></a>
      <a href="#"><i class="fa fa-twitter icon"></i></a>
      <a href="#"><i class="fa fa-youtube-play icon"></i></a>
      <a href="#"><i class="fa fa-instagram icon"></i></a>


      </div>
    
</div>
      

    
    
    </>
  )
}

export default Header;