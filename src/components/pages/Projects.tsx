import { ProjectArray } from '../temp/ProjectArray';
import { Link } from 'react-router-dom';
import HandBurger from '../temp/HandBurger';
import { useEffect, useState } from 'react';
import axios from 'axios';


const Projects = () => {

  const [datas,setDatas]=useState([])

  useEffect(()=>{
    axios.get('https://portfolio-backend-orpin-eight.vercel.app/projects')
    .then(res=>{
      console.log(res.data);
      setDatas(res.data);
    })
  },[])





  return (
    <>
    <HandBurger/>
    <div className='projectsWrapper'>
      {datas && datas.map((one)=>{
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