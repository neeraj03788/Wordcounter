
import { useState } from 'react/cjs/react.development';
import './App.css';
import Fortext from './components/Fortext';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
 
  Route,

  Routes
} from "react-router-dom";

function App() {
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(
      ()=>{
        setAlert(null)
      },3000
    )
  }
  const [mode,setMode] = useState('light')
  const showmode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='black'
      showAlert("dark mode enabled","success")
 
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white'
      showAlert("light mode enabled","success")
    }
  }
  return (
    <Router>
    <Navbar title='navvvv' about='about' mode={mode} showmode={showmode}/>
    <Alert alert={alert}/>
    
    {/* <About /> */}
    <div className='container my-3'>
    <Routes>
          <Route path="/about" exect element={<About />}/>
           
      
          <Route path="/" exect element={<Fortext mode={mode}/>}/>
        </Routes>
        </div>
        </Router>
    
    
  );
}

export default App;
