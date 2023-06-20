import React from 'react'
import { FaTelegramPlane,FaAngleDoubleDown } from "react-icons/fa";
import { useLocation } from 'react-router'
import HandBurger from '../temp/HandBurger';

const ProjectSubPage = () => {
    const temp=useLocation();
    const item=temp.state;
  return (
    <>
    <HandBurger/>
        <div className='ProjectSubpageWrapper'>
        <div className="top">
            <div className="left">
                <img style={{maxWidth:"100%"}} src={item.image} alt="" />
            </div>
            <div className="right">
                <h1>{item.name}</h1>
                <h3>{item.title}</h3>
                <p>Cost of time to make : {item.timeLine}</p>
                <p>Since : {item.buildTime}</p>
                <p style={{color:'aliceblue',margin:"1em 0em -.7em 0em"}}>Language's I Use : </p>
                <ul>
                    {item.language.map((one:string,index:string)=>{
                        return(
                            <li key={index}>{one}</li>
                        )
                    })}
                </ul>
                <a target='blank' href={item.livePreview}>Live View <FaTelegramPlane className="livego" style={{marginLeft:".5em"}}/></a>
            </div>
        </div>
        <div className="bottom">
                <h2>{item.question}</h2>
                <p style={{maxWidth:"80%"}}>{item.ans}</p>
                <img style={{maxWidth:"100%",margin:"2em 0em"}} src={item.detImage} alt="" />
        </div>
    </div>
    </>
  )
}

export default ProjectSubPage