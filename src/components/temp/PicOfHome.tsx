import React from 'react'
import CountUp from 'react-countup';


const Pic1 = 'https://drake-react.vercel.app/assets/images/round-text.png';


const PicOfHome = () => {
  return (
    <div  className='expWrapper'>
        <div>
            <div className="exp">
            <CountUp start={0} end={3} duration={2} delay={0}/>+
            <img src={Pic1}/></div>
            </div>
            <div>
            <div className="exp">
            <CountUp start={0} end={17} duration={4} delay={0}/>+
            <img src={Pic1}/></div>
        </div>
    </div>
  )
}

export default PicOfHome