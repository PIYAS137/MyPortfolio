import {useState} from 'react'
import HCode from './HCode'
import { HelpCodeArray } from './HelpCodesArray'
import HandBurger from '../../temp/HandBurger'

const HCodes = () => {
  const [isTrue,setIsTrue]=useState(true)
  const handleClickBodyBg=()=>{
    setIsTrue(!isTrue);
    }
    {isTrue ? document.querySelector("body")?.setAttribute("data-theme","dark"):document.querySelector("body")?.setAttribute("data-theme","light")}
  return (
    <>
        <HandBurger/>
        {HelpCodeArray.map((oneCode)=><HCode key={oneCode.id} oneCode={oneCode}/>)}
    </>
  )
}

export default HCodes