import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import MyAccount from './pages/MyAccount/MyAccount';

function App() {
  return (
  
  
   
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/my-account" element={<MyAccount/>}></Route>
            <Route path="/patient-panel" element={<PatientPanel/>}></Route>
        </Routes>
        

   
    
  );
}

export default App;
