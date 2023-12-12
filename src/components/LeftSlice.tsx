import { useState } from 'react'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaPhone, FaBroom } from "react-icons/fa";
// import MyPic from '../assets/me.jpg'
import HandBurger from './temp/HandBurger';

const LeftSlice = () => {

    const handleClickDownload = () => {
        const fileUrl = 'https://drive.google.com/uc?export=download&id=1MsJSefIuuux_SWsSLb6ywCml4sMkDxq2';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'example.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    const [isTrue, setIsTrue] = useState(true)
    const handlePhonne = () => {
        alert("Not Added this funciton yet !")
    }
    const handleClickBodyBg = () => {
        setIsTrue(!isTrue);
    }
    { isTrue ? document.querySelector("body")?.setAttribute("data-theme", "dark") : document.querySelector("body")?.setAttribute("data-theme", "light") }
    { isTrue ? document.querySelector("body")?.setAttribute("data-theme", "dark") : document.querySelector("body")?.setAttribute("data-theme", "light") }
    return (
        <>

            <div className="leftWrapper">
                <div className="temporary">
                </div>
                <div className="cardWrapper">
                    <div className={`${isTrue ? "setting" : "darkSettingBg"}`}><FaBroom onClick={handleClickBodyBg} /></div>
                    <HandBurger />
                    <div className="cardTitle">
                        <h1>Piyas</h1>
                        <p>JavaScript Expart<br />& MERN Developer</p>
                    </div>
                    <div className="cardBody">
                        <img className='cardImg' src="https://i.ibb.co/BGS7DPv/IMG-20220219-WA0053.jpg" alt="" />
                        <h2><small className='small' style={{fontWeight:'100'}}>piyasmahmudealif@gmail.com</small><br />Based in Dhaka,<br /> Bangladesh</h2>
                        <p>&copy; 2023 Piyas. All Right Reserved</p>
                        <div className="contactIcons">
                            <div className="Cicons"><a target='blank' href="https://github.com/PIYAS137"><FaGithub /></a></div>
                            <div className="Cicons"><a target='blank' href="https://www.linkedin.com/in/piyasmahamudealif/"><FaLinkedinIn /></a></div>
                            <div className="Cicons"><a target='blank' href="https://www.facebook.com/piyasmahamude.alif.9"><FaFacebookF /></a></div>
                            <div className="Cicons"><a target='blank' href="https://www.instagram.com/piyasmahamude/"><FaInstagram /></a></div>
                            <div className="Cicons"><a target='blank' href="https://twitter.com/AlifPiyas"><FaTwitter /></a></div>
                            <div className="Cicons"><a onClick={handlePhonne} target='' href=""><FaPhone /></a></div>
                        </div>
                    </div>
                    <div className="cardBottom">
                        <button onClick={handleClickDownload} style={{ fontWeight: "inherit" }}>Download CV</button>
                    </div>
                </div>
            </div>
            <div className="leftHide"></div>
        </>
    )
}

export default LeftSlice