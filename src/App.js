import React from 'react'
import './App.css';
import {useSelector} from 'react-redux'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/Login';
import { selectUser } from './features/userSlice';
import Logout from './components/Logout';
import Table from './components/Table';

function App() {
  const user=useSelector(selectUser);

  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={user?<Logout/>:<Login/>}/>
      <Route path="/table" element={<Table/>}/>
      </Routes>
    </div>    
    </BrowserRouter>
  );
}

export default App;