import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';

      showAlert("Greymode has been Enable", "success")
      // document.title = 'Textutils - Dark Mode';
      // setInterval(() => {
      // document.title = 'Textutils is amazing mode';

      // }, 2000);
      // setInterval(() => {
      //   document.title = ' Install Textutils Now';

      // }, 1500);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'White';
      showAlert("Whitemode has been Enable", "sucess")
      // document.title = 'Textutils - Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="textutils" Abouttext="about" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element = {<About mode={mode}></About>}></Route>
            <Route exact path="/" element={ <TextForm showAlert={showAlert} heading=" Try Textutils - Word Counter, Character Counter, Remove extra spacing" mode={mode}></TextForm>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}


export default App;