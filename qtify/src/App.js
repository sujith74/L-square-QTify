import './App.css';
// import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/Landing/LandingPage.jsx';


function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes> */}
      <LandingPage/>
      
    </div>
  );
}

export default App;
