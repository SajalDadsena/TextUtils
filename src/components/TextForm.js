import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase(text);
        setText(newText);
        props.funalert("Converted to uppercase!","success");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase(text);
        setText(newText);
        props.funalert("Converted to lowercase!","success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText (newText.join(" "))
        props.funalert("Extra spaces removed!","success");

    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText]= useState(''); 


      

  return (
    <>
         <div className={`container my-5 bg-${props.mode} navbar-${props.mode} p-4 rounded-2`}>
            
            <div className="mb-3">
            <label for="myBox" className="form-label "><h2>{props.heading}</h2></label>
            <textarea className={`form-control bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text'></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.mode==="dark"?"secondary":"primary"} mx-3 my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==="dark"?"secondary":"primary"} mx-3 my-2`}onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode==="dark"?"secondary":"primary"} mx-3 my-2`}onClick={handleExtraSpaces}>Clear extra spaces</button>

        </div>

        <div className="container my-5">
            <h2>Your text Summary </h2>
            <p>Number of words={text===""?0:text.trim().split(/\s+/).length}<br/> Number of characters={text.length}<br/></p>
            <p>Time to read={text===""?0:text.trim().split(/\s+/).length*0.008}</p>
        </div>
    </>
   
  )
}
