import Skills from '../Skills'
import Education from '../Education'
import HandBurger from '../temp/HandBurger'
import Extra from '../Extra'

const Resume = () => {
  return (
    <div className='Resume'>
      <HandBurger/>
      <Skills/>
      <Education/>
      <Extra/>
    </div>
    
  )
}

export default Resume