import React, {useState} from 'react'


export default function TextForm(props) {
 




const handleUpClick =()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert(" Your text converted to Upper Case","success")
}
const handleLowClick =()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert(" Your text converted to Lower Case","success")
}
const clearText =()=>{
  let newText = '';
  setText(newText)
}


const handelOnChange=(event)=>{
    setText(event.target.value);
}

    const[text, setText]=useState("");
    
    
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value ={text} onChange={handelOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary" onClick={handleLowClick}>Convert To Lowercase</button>

<button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>

<div className="container2 my-3" style={{color:props.mode==='light'?'black':'white'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and </p>
    <p>{text.length} characters</p>
    <p>You need {0.008*text.split("").length} minutes to read this</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter Somethig in above box to see preview here' }</p>
</div>
</div>
</>
  )
}
