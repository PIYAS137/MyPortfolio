import { EduArray } from './temp/EduArray'

const Education = () => {
  return (
    <div className="education">
        <p style={{fontSize:"2.5rem",margin:"1.5em 0em 2em 0em"}}>Education, Course & <span style={{margin:"1em 0em 1em 0em",color:"#28E98C",fontSize:"2.5rem",display:"inline"}}>Experience</span></p>
        {EduArray.map((one)=>{
            console.log(one);
            return(
                <div key={one.id} className="graduation">
                    <p className='timeline'>{one.timeline}</p>
                    <p className='details'>{one.degree} : <span style={{fontWeight:"bold",display:"inline"}}>{one.subject}</span></p>
                    <h2 className='institute'>{one.institute}</h2>
                    <p className='location'>{one.loaction}</p>
                    <div className="topball"></div>
                </div>
            )
        })}
    </div>
  )
}

export default Education