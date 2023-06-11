import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  // const [mode, setMode] = useState("dark");
  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white'
  });
  const toggleMode = () =>{
    if(mode.color === 'white'){
      setMode({
        color: 'black',
        backgroundColor: 'white',
      });
      showAlert("Light Mode enabled","success")
    }
    else{
      setMode({
        color: 'white',
        backgroundColor: 'black'
      });
      showAlert("Dark Mode enabled","success")
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const [theam, setTheam] = useState("");
  
  const changeColor = (clr) =>{
    setMode({
      color: clr.color,
      backgroundColor: clr.backgroundColor
    })
  }
  
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} changeColor={changeColor}/>
      <Alert alert={alert} mode={mode}/>
      <div className='container-fluid' style={mode}>
        <div className='container'>
          <Routes>
            <Route
              path='/About'
              element = {<About mode={mode}/>}
            ></Route>

            <Route
              path='/'
              element = {<InputForm mode={mode} showAlert={showAlert}/>}
            ></Route>
          </Routes>
        </div>
      </div>
   

      {/* <Alert alert={alert}/>
      <div className='conatiner-fluid' style={mode}>
        <div className='container'>
          <InputForm mode={mode} showAlert={showAlert}/>
          <About mode={mode}/>
        </div>
      </div> */}
    </>
  );
}

export default App;
