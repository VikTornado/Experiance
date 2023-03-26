import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";
import Plan from "./Components/Plan";
import Rooms from "./Components/Rooms";
import ImageSlider from "./Components/ImageSlider";


function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Offers/>
            <Plan/>
            <Rooms/>
            <ImageSlider/>
        </div>
    );
}

export default App;