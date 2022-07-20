import logo from './logo.svg';
import './App.css';
import '../src/component/style.css'
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Signup from './component/Signup';
import DisplayHere from './component/DisplayHere'
import MainPage from './component/MainPage';
// import UploadFile from './pages/UploadFile';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/display' element={<DisplayHere/>}/>
        <Route path='/dash' element={<MainPage/>}/>
        {/* <Route path=''/> */}
        {/* <Route path='/upload' element={<UploadFile/>}/> */}
      </Routes>
    </>
  );
}

export default App;
