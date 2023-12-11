import { Link } from 'react-router-dom';
import HandBurger from '../temp/HandBurger';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type/interface for your project data
interface Project {
  id: number;
  name: string;
  title: string;
  image: string;
  // Add any other properties you expect here
}

const Projects = () => {
  const [datas, setDatas] = useState<Project[]>([]); // Use the defined type/interface

  useEffect(() => {
    axios.get<Project[]>('https://portfolio-backend-orpin-eight.vercel.app/projects')
      .then(res => {
        console.log(res.data);
        setDatas(res.data);
      })
  }, []);

  return (
    <>
      <HandBurger />
      <div className='projectsWrapper'>
        {datas && datas.map((one) => {
          console.log(one)
          return (
            <div className='temporay' key={one.id}>
              <Link style={{ textDecoration: "none" }} state={one} to={one.name}>
                <div className='project'>
                  <div className="bgImage" style={{ backgroundImage: `url(${one.image})` }}></div>
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

export default Projects;
