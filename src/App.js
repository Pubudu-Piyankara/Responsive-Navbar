
import { Routes } from 'react-router-dom';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import Dashboard from './Pages/Dashboard';
import MyActivity from './Pages/MyActivity';
import Tasks from './Pages/Tasks';
import Progress from './Pages/Progress';
import Profile from './Pages/Profile';
import Favorites from './Pages/Favorites';
import { Route } from 'react-router-dom';


function App() {
  return (
    // <div className="App">
    //   <h1>React App</h1>
    //   <SideBar />
    // </div>
    <>  
    
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/myactivity" element={<MyActivity />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>

   
    </>
    
  );
}

export default App;
