import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into Uppercase!","success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into Lowercase!","success");
    }
    const handleCapClick = ()=>{
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            const str2 = arr.join(" ");
            setText(str2);
            props.showAlert("Converted into Capitlize!","success");
        }
    }
    const handleClearText = ()=>{
        let newText = ' ';
        setText(newText);
        // setText(" ");
        props.showAlert("Text cleared!","success");
    }
    const handleCopyText = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied to clipboard!","success");

    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces is removed!","success");

    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    
    const [text,setText] = useState("");
    // setText = ("new Text"); correct way to change the text
  return (
            <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'} || {color:props.mode==='blue'?'white':'black'}}>
                    <h1>{props.heading} </h1>
                    <div className="mb-3">
                    <textarea className="form-control" value = {text} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}}onChange = {handleOnChange} id="myBox" rows="8"></textarea>
                    </div>
                    <button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
                    <button className="btn btn-primary mx-2" onClick={handleCapClick} >Convert to Capitalize</button>
                    <button className="btn btn-primary mx-2" onClick={handleClearText} >Clear Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopyText} >Copy Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Handle Extra Spaces</button>
            </div>  
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summery</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
            </>
  )
}

