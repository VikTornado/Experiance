import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Plan from "./Components/Plan";


function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Offers/>
            <Plan/>
        </div>
    );
}

export default App;