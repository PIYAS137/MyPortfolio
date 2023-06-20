import {useState} from 'react'
import { FaCopy,FaCheckDouble } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { MyTypeHelpCode } from '../../temp/MyTypesForPortfolio';



const HCode = (props:MyTypeHelpCode) => {
    const datas =props.oneCode;
    const [isOkForCmd,setIsOkForCmd]=useState(false)
    const [isOkForMainCode,setIsOkForMainCode]=useState(false)
    const handleClick=()=>{
        setIsOkForCmd(!isOkForCmd);
        navigator.clipboard.writeText(datas.cmd)
        setTimeout(()=>{
            setIsOkForCmd(false);
        },2000)
    }
    const handleClickMainCode=()=>{
        setIsOkForMainCode(!isOkForCmd);
        navigator.clipboard.writeText(datas.runCode)
        setTimeout(()=>{
            setIsOkForMainCode(false);
        },2000)
    }

  return (
    <div className='codeWrapper'>
        <h1>Code Title</h1>
        <h2>install Command :</h2>
        <div style={{width:"80%"}} className="cmdDiv">
            <SyntaxHighlighter language="jsx" style={okaidia}>
                {datas.cmd}
            </SyntaxHighlighter>
            <button onClick={handleClick} className="copyIcon">
            {isOkForCmd ? <FaCheckDouble style={{color:"greenyellow"}}/>:<FaCopy style={{color:"rgb(36 201 223)"}}/>}
            </button>
        </div>
        <div className="usingProcess">
            <p>How to Use it :</p>
            <ul>
                {datas.process.map((one,index)=><li key={index}>{one}</li>)}
            </ul>
        </div>
        <h2>main code :</h2>
        <div style={{width:"80%"}} className="mainCodeDiv">
            <SyntaxHighlighter language="jsx" style={okaidia}>
                {datas.runCode}
            </SyntaxHighlighter>
            <button onClick={handleClickMainCode} className="pasteIcon">
            {isOkForMainCode ? <FaCheckDouble style={{color:"greenyellow"}}/>:<FaCopy style={{color:"rgb(36 201 223)"}}/>}
            </button>
        </div>
    </div>
  );
}

export default HCode