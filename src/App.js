import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {useState} from 'react'
function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]=useState(null);

  const funAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    });

    setTimeout(()=>
    {
      setAlert(null);
    },2000);
  }
  const togglemode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor= 'black';
      document.body.style.color= 'white';
      funAlert("Dark mode on","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      document.body.style.color= 'black';
      funAlert("Light mode on","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title='TextUtils' mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
     
          <Route exact path="/" element={ <TextForm funalert={funAlert} heading="Enter the text to analyze" mode={mode}/>}/>

        </Routes>
      </div>
      </Router>
    </>
          
  );
}

export default App;
