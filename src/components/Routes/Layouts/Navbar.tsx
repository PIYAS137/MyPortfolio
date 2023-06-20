
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  const handleClickResume=()=>{
    document.querySelector(".leftWrapper")?.setAttribute("data-theme","AfterClickResume")
    document.querySelector("nav")?.setAttribute("data-theme","AfterClickResume")
  }
  const handleClickHome=()=>{
    document.querySelector(".leftWrapper")?.setAttribute("data-theme","AfterClickHome")
    document.querySelector("nav")?.setAttribute("data-theme","AfterClickResume")
  }
  const handleClickProject=()=>{
    document.querySelector(".leftWrapper")?.setAttribute("data-theme","AfterClickProject")
    document.querySelector("nav")?.setAttribute("data-theme","AfterClickResume")
  }
  const handleClickBook=()=>{
    document.querySelector(".leftWrapper")?.setAttribute("data-theme","AfterClickBook")
    document.querySelector("nav")?.setAttribute("data-theme","AfterClickResume")
  }
  const handleClickHelpCode=()=>{
    document.querySelector(".leftWrapper")?.setAttribute("data-theme","AfterClickHelpCode")
    document.querySelector("nav")?.setAttribute("data-theme","AfterClickResume")
  }
  const handleClickHelpContact=()=>{
    document.querySelector(".leftWrapper")?.setAttribute("data-theme","AfterClickHelpContact")
    document.querySelector("nav")?.setAttribute("data-theme","AfterClickResume")
  }
  return (
    <nav>
        <div className="navLinks">
            <NavLink onClick={handleClickHome} className="navLink" to="/">Home</NavLink>
            <NavLink onClick={handleClickResume}  className="navLink" to="/skills">Resume</NavLink>
            <NavLink onClick={handleClickProject} className="navLink" to="/projects">Projects</NavLink>
            <NavLink onClick={handleClickBook}  className="navLink" to="/books">Books</NavLink>
            <NavLink onClick={handleClickHelpCode} className="navLink" to="/helpcode">HelpC0de</NavLink>
            <NavLink onClick={handleClickHelpContact} className="navLink" to="/contact">Contact</NavLink>
        </div>
    </nav>
  )
}

export default Navbar