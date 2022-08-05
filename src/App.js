
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// }from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#072743';
      // document.body.style.Color = 'white';
      showAlert("Dark mode is enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    // if(mode === 'light'){
    //   setMode('red');
    //   document.body.style.backgroundColor = '#8B0000';
    //   document.body.style.Color = 'white';
    //   showAlert(" Red Dark mode is enabled","success");
    // }
    // if(mode === 'light'){
    //   setMode('blue');
    //   document.body.style.backgroundColor = '#00008b';
    //   showAlert(" Blue Dark mode is enabled","success");
    // }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  
  return (
    <>
    {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode = {toggleMode}/> 
        <Alert alert={alert}/>
        <div className="container my-3" >
        {/* <Routes>
        <Route exact path="/" TextForm showAlert={showAlert} heading="Enter The text to analize below" mode={mode} element={<TextForm/>} > 
        </Route>
        <Route exact path="/about" element={<About/>} >
          </Route>
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter The text to analize below" mode={mode}  />
        </div>
{/* </Router> */}
    </>
  );
}

export default App;
