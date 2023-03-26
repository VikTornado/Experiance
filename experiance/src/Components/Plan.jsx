import React from 'react';

const Plan = () => {
    return (
        <div className={"max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4"}>
            <div className={"grid grid-cols-2 grid-rows-6 h-[80vh]"}>
                <img className={"row-span-3 object-cover w-full h-full p-2"}
                    src={"https://www.travelandleisure.com/thmb/tmpnvBEIMzsEcwDaHYaJO_PT0IQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/varadero-beach-cuba-CARIBBEACHES0721-f2f335a97c3a4c5dad3a148c5c0644ed.jpg"}
                    alt={""}/>
                <img className={"row-span-2 object-cover w-full h-full p-2"} src={"https://wallpaperset.com/w/full/4/e/5/13023.jpg"} alt={""}/>
                <img className={"row-span-2 object-cover w-full h-full p-2"} src={"https://images3.alphacoders.com/853/85305.jpg"} alt={""}/>
                <img className={"row-span-3 object-cover w-full h-full p-2"} src={"https://wallpapercave.com/wp/wp2601510.jpg"} alt={""}/>
                <img className={"row-span-2 object-cover w-full h-full p-2"} src={"https://newevolutiondesigns.com/images/freebies/tropical-beach-background-preview-1.jpg"}
                     alt={""}/>
            </div>
            <div className={"flex flex-col h-full justify-center"}>
                <h3 className={"text-5xl md:text-6xl font-bold"}>Plan Your Next trip</h3>
                <p className={"text-2xl py-4"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, illum, laboriosam? Autem
                    blanditiis consectetur deleniti earum repellendus! Consectetur dicta dolorem doloribus esse quis
                    soluta, veniam! Aliquid explicabo nostrum optio sed.
                </p>
                <p className={"py-4"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur corporis, cumque
                    dignissimos dolorem labore maxime nulla, perspiciatis qui sed sunt vitae voluptas voluptates? At
                    ipsum laboriosam perspiciatis saepe ullam?
                </p>
                <div>
                    <button className={"border-black mr-4 hover:shadow-xl"}>Learn More</button>
                    <button className={"bg-black text-white border-black hover:shadow-xl"}>Book Your Trip</button>
                </div>
            </div>
        </div>
    );
};

export default Plan;