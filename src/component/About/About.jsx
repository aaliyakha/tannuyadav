import React from 'react'
import './About.css'

function About() {
  return (
    <>

    <div className="box1">
      <img src='https://themewagon.github.io/gymlife/img/breadcrumb-bg.jpg' className='img'></img>
      <h2 className='abouttag'>About us</h2>
    </div>
    <div className="rowbox">
          <span className='span'>WHY CHOSE US?</span>
          <h2 className='rowtag'>PUSH YOUR LIMITS FORWARD</h2>
          </div>
        <div className='section-tittle'>
          <div className='cs-tittle'>
          <div className='cs-iconbox'></div>
          <h4>Modern equipment</h4>
          <p>Quis ipsum suspendisse ultrices gravida.<br></br> Risus commodo viverra maecenas <br></br>accumsan lacus vel
                            facilisis.</p>
          </div>
          <div className='cs-tittle'>
          <div className='cs-iconbox'></div>
          <h4>Healthy nutrition plan</h4>
          <p>Quis ipsum suspendisse ultrices gravida.<br></br> Risus commodo viverra maecenas<br></br> accumsan lacus vel
                            facilisis.</p>
          </div>
          <div className='cs-tittle'>
          <div className='cs-iconbox'></div>
          <h4>Proffesponal training plan</h4>
          <p>Quis ipsum suspendisse ultrices gravida. <br></br>Risus commodo viverra maecenas <br></br>accumsan lacus vel
                            facilisis.</p>
          </div>
          <div className='cs-tittle'>
          <div className='cs-iconbox'></div>
          <h4>Unique to your needs</h4>
          <p>Quis ipsum suspendisse ultrices gravida.<br></br> Risus commodo viverra maecenas<br></br> accumsan lacus vel
                            facilisis.</p>
          </div>
        </div>
        <div className="about-bar">
          <div className="ab-item">
         <img src='https://themewagon.github.io/gymlife/img/about-us.jpg' className='img'></img>
         <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" class="play-btn video-popup"><i class="fa fa-caret-right"></i></a>
          </div>
          <div className="ab-item">
            <h6>ABOUT US</h6>
            <h3>WHAT WE HAVE DONE</h3>
          </div>   
         </div>
    </>
  )
}

export default About