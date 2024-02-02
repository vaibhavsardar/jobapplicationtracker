import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import ApplicationsList from './components/ApplicationsList';
import ApplicationForm from './components/ApplicationForm';

function App() {
    return (
        <>
        <Navbar/>
              <Routes>
                <Route path='/' >
                    <Route path="/"  element={<ApplicationsList/>} />
                    <Route path="/edit/:id"  element={<ApplicationForm/>} />
                    <Route path="/create" element={<ApplicationForm/>} />
                
                </Route>
                
             </Routes>
               
        </>
    );
}

export default App;
