import React from 'react';

const Rooms = () => {
    return (
        <div className={"max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4"}>
            <div className={"lg:top-20 relative lg:col-span-1 col-span-2"}>
                <h3 className={"text-2xl font-bold "}>Fine Interior Rooms</h3>
                <p className={"pt-4"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur commodi deleniti dolore,
                    fugit, iure laboriosam laudantium magni minima natus nemo, nisi obcaecati omnis praesentium quia
                    quos veniam voluptate voluptatum.
                </p>
            </div>
            <div className={"grid grid-cols-2 col-span-2 gap-2"}>
                <img className={"object-cover w-full h-full"} src={"https://w0.peakpx.com/wallpaper/843/513/HD-wallpaper-apartments-on-the-ocean-coast-tropical-islands-dining-room-modern-interior-design-sea-from-the-window-of-the-apartment-stylish-interior.jpg"} alt={"/"}/>
                <img className={"row-span-2 object-cover w-full h-full"} src={"https://wallup.net/wp-content/uploads/2019/09/121371-architecture-interior-bed-room-sea.jpg"} alt={"/"}/>
                <img className={"object-cover w-full h-full"} src={"https://eskipaper.com/images/bedroom-under-sea-1.jpg"} alt={"/"}/>

            </div>
        </div>
    );
};

export default Rooms;