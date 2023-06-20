import React,{useState} from 'react';
import { ProjectArray } from '../temp/ProjectArray';
import { Link } from 'react-router-dom';
import HandBurger from '../temp/HandBurger';


const Projects = () => {
  return (
    <>
    <HandBurger/>
    <div className='projectsWrapper'>
      {ProjectArray && ProjectArray.map((one)=>{
        console.log(one)
        return(
          <div className='temporay' key={one.id}>
            <Link style={{textDecoration:"none"}} state={one} to={one.name}>
              <div className='project'>
                <div className="bgImage" style={{backgroundImage:`url(${one.image})`}}></div>
                <h2>{one.name}</h2>
                <h3>{one.title}</h3> 
              </div>
            </Link>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Projects