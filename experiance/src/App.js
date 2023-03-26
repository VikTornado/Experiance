import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Plan from "./Components/Plan";
import Rooms from "./Components/Rooms";


function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Offers/>
            <Plan/>
            <Rooms/>
        </div>
    );
}

export default App;