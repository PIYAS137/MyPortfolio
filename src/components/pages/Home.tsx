import React from 'react'
import PicOfHome from '../temp/PicOfHome'

const Home = () => {
  return (
    <div className='homeWrapper'>
      <div className="introductionDiv">
      <p>Say Hi from <span>Piyas Mahamude Alif,</span></p>
      <p>JavaScript Expart & <br/><span>React Developer</span></p>
      <p className='detx' style={{fontSize:"1rem",marginTop:"-2em",color:"#a1a1a1"}}>I design and code beautifully simple things and i love what i do.<br/>Just simple like that !</p>
      <PicOfHome/>
      </div>
    </div>
  )
}

export default Home