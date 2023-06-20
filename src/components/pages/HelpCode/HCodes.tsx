import HCode from './HCode'
import { HelpCodeArray } from './HelpCodesArray'
import HandBurger from '../../temp/HandBurger'

const HCodes = () => {


   
  return (
    <>
        <HandBurger/>
        {HelpCodeArray.map((oneCode)=><HCode key={oneCode.id} oneCode={oneCode}/>)}
    </>
  )
}

export default HCodes