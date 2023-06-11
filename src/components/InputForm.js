import React, { useState } from 'react'

export default function InputForm(props) {
  const btnIsClicked = (params) =>{
    if(text.length <= 0){
      alert("Please Enter any text.");
      return;
    }
    setText(text.toUpperCase());
    props.showAlert("Conversted to UpperCase", "success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const clickForToLower = (params) =>{
    if(text.length <= 0){
      alert("Please enter any text.");
      return;
    }
    setText(text.toLowerCase());
    props.showAlert("Conversted to LoweCase", "success");
  }
  const clearText = (params) =>{
    let newText = "";
    setText(newText);
    props.showAlert("Test Field cleared", "success");
  }
  const copyText = () =>{
    navigator.clipboard.writeText(text);
  }
  const checkMail = (params) =>{
    let emaillst = text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    if(emaillst === null){
      setError("Email Not found.");
      return;
    }
    let newText = "";
    setError(newText); 
    setEmail(emaillst);
  }
  const countWord = () =>{
    return text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
  }
  const [text, setText] = useState("")
  const [email, setEmail] = useState([]);
  const [error, setError] = useState("");
  return (
    <>
      <div className="form-group pt-3" style={props.mode}>
          <textarea className={`form-control ${props.mode.color === 'white'? 'toggleB':''}`} style={props.mode} id="inputText" value={text} onChange={handleOnChange} rows="8" placeholder='Enter your text here.'></textarea>
          <button disabled={countWord() === 0} className='btn btn-primary mx-1 my-3' onClick={btnIsClicked}>toUpper</button>
          <button disabled={countWord() === 0} className='btn btn-primary mx-1' onClick={clickForToLower}>toLower</button>
          <button disabled={countWord() === 0} className='btn btn-primary mx-1' onClick={clearText}>Clear Text</button>
          <button disabled={countWord() === 0} className='btn btn-primary mx-1' onClick={copyText}>Copy Text</button>
          <button disabled={countWord() === 0} className='btn btn-primary mx-1' onClick={checkMail}>Check Email</button>
      </div>
      <div>
        <p>{countWord()} words and {text.length} characters</p>
        <p>{countWord() * 0.008} Minutes to read</p>
        <h4>Preview</h4>
        <p>{error}</p>
        <p>{text}</p>
        {
          email.map((item)=>{
            return <p>{item}</p>
          })
        }
      </div>
    </>
  )
}
