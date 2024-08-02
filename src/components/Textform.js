import React, {useState} from 'react'


export default function Textform(props) {
 
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" );
        setText(text.toUpperCase());
    }
    const handleLowCLick = ()=>{
        setText(text.toLowerCase());
    }
    const clearClick=()=>{
        setText(" ")
    }
    const handleOnChange = (event)=>{ 
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState(" ");
    return (
        <>
    <div className='container'style={{marginTop: '30px'}}>
        <h1>{props.heading}- </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button  className="btn btn-success" style={{marginRight: '10px'}} onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-success" style={{marginRight: '10px'}} onClick={handleLowCLick}>Convert to Lower</button>
        <button className="btn btn-success" onClick={clearClick}>Clear</button>


    </div>
    <div className='container' style={{marginTop: '20px'}}>
        <h1>Your Text Summary</h1>
        <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.trim().length} characters</p>
        <p>{0.008 * (text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length)} minutes read</p>
    </div>
    </>
  )
}
