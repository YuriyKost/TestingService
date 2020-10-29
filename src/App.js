import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import SidePanel from "./Components/SidePanel/SidePanel";
import ActivePanel from "./Components/ActivePanel/ActivePanel";
import { Route, BrowserRouter } from "react-router-dom";
import Information from "./Components/ActivePanel/ActivePanelComponents/Information";
import Performance from "./Components/ActivePanel/ActivePanelComponents/Performance";



function App() {
  return (
    <div className="AppWrapper">
        <BrowserRouter>
            <Navbar></Navbar>
            <SidePanel></SidePanel>
            <ActivePanel></ActivePanel>
        </BrowserRouter>
    </div>
  );
}

export default App;

// <Navbar></Navbar>
// <SidePanel></SidePanel>
// <ActivePanel>
// </ActivePanel>