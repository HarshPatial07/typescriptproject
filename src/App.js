import logo from './logo.svg';
import './App.css';
// import Project from './Project';

import User from './User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Notification from './Pages/Notification';

import Setting from './Pages/Setting';
import Insights from './Pages/Insights';
import Monetization from './Pages/Monetization';
import Ads from './Pages/Ads';
import Help from './Pages/Help';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/monetization' element={<Monetization />} />
            <Route path='/search' element={<Search />} />
            <Route path='/ads' element={<Ads />} />
            <Route path='/notification' element={<Notification />} />
            <Route path='/insights' element={<Insights />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/help' element={<Help />} />
          </Routes>
         
        </Sidebar>
       
      </BrowserRouter>

      {/* <Project /> */}
      {/* <User/> */}
    </div>
  );
}

export default App;
