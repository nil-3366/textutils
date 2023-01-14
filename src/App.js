
 
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import  React, {useState} from 'react';
import Alert from './components/Alert';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
        msg:message,
        type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },1000)
  }

  const toggleMode =()=>{
    if (mode ==='light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0b2035'
      showAlert(" Dark mode has enabled","success")
    }
    else{
      setMode('light')
      showAlert(" Light mode has enabled","success")
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    
    {/* <Navbar title="TextUtils" aboutText="About textUtils"/> */}
    {/* <Navbar > */} {/* here we have not mentioned title and aboutText props so it will take it from default props from navbar.js*/}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />{/* here we have not mentioned aboutText prop so it will take it from default props from navbar.js*/}
    <div className="container">
    {/* following code is for routing means to go from home page to about page without reloading of app
     <BrowserRouter>

      <Routes>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/' element={<TextForm heading="Enter The text to analyze" mode={mode} showAlert={showAlert}/>}/>
        
      </Routes>
      </BrowserRouter> */}
    <Alert alert={alert}/>
    <TextForm heading="Enter The text to analyze" mode={mode} showAlert={showAlert}/>
    {/* <TextForm heading="Enter The text to analyze" mode={mode} showAlert={showAlert}/>
    <About/> */}
    
    </div>
    
    </>
    
  );
}

export default App;
