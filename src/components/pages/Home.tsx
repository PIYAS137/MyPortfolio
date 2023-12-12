import { useNavigate } from 'react-router'
import PicOfHome from '../temp/PicOfHome'

const Home = () => {

  const navigate = useNavigate();
  const handleClickProjects=()=>{
    navigate('/projects')
  }

  return (
    <div className='homeWrapper'>
      <div className="introductionDiv">
        <p>Say Hi from <span>Piyas Mahamude Alif,</span></p>
        <p>JavaScript Expart & <br /><span>React Developer</span></p>
        <p className='detx' style={{ fontSize: "1rem", marginTop: "-2em", color: "#a1a1a1" }}><p>Passionate MERN stack developer striving to change the world through technology !</p><br /><span style={{ color: "#28E98C", }}>*</span> I strongly value collaboration and teamwork, leveraging my expertise to foster continuous innovation 🔗.
          <br />
          <span style={{ color: "#28E98C", }}>*</span> I view projects not just as tasks but as opportunities to engage with users and create impactful solutions 💡.</p>
        <div style={{ display: "", alignItems: "center" }}>
          <div>
            <p><span style={{ color: "#28E98C", }}>1+</span><span style={{ fontSize: "1rem" }}>Years Learning Expr.</span></p>
          </div>
          <div>
            <p style={{fontSize:'1rem',marginTop:'2rem'}}>Successfuly done<span style={{ color: "#28E98C",fontSize:'1rem' }}> projects 👇</span></p>
          </div>
          <div onClick={handleClickProjects} style={{marginTop:'-1rem',cursor:"pointer"}}>
            <PicOfHome />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home