import React, {useState} from 'react';
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {RxDotFilled} from "react-icons/rx";

const ImageSlider = () => {
    const Slides = [
        {
            url: 'https://www.paesana.com/hubfs/Blog/Lobster-Fra-Diavolo-on-modern-plLobster%20Fra%20Diavolo%20on%20modern%20plate.jpg',
            title: 'Lobster'
        },
        {
            url: 'https://images3.alphacoders.com/108/1088623.jpg', title: 'Sushi'
        },
        {
            url: 'https://www.cellartours.com/wp-content/uploads/2011/12/ten-best-pasta-dishes-ever-e1613226617930.jpg',
            title: 'Pasta'
        },
        {
            url: 'https://images2.alphacoders.com/128/1288020.jpg', title: 'Salmon'
        },
        {
            url: 'https://images5.alphacoders.com/443/443997.jpg', title: 'Drinks'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlider = currentIndex === Slides.length - 1
        const newIndex = isLastSlider ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlides = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className={"max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group"}>
            <div className={"w-full h-full rounded-2xl bg-center bg-cover duration-500"}
                 style={{backgroundImage: `url(${Slides[currentIndex].url})`}}>

            </div>
            <div
                className={"absolute top-[50%] -translate-x-0 translate-y-[-50%] left-7 text-2xl rounded-full p-2 " +
                    "group-hover:bg-black/20 text-white cursor-pointer"}>
                <SlArrowLeft onClick={prevSlide} size={30}/>
            </div>
            <div
                className={"absolute top-[50%] -translate-x-0 translate-y-[-50%] right-7 text-2xl rounded-full p-2 " +
                    "group-hover:bg-black/20 text-white cursor-pointer"}>
                <SlArrowRight onClick={nextSlide} size={30}/>
            </div>
            <div className={"flex top-4 justify-center py-2"}>
                {Slides.map((slide, slideIndex) => (
                    <div className={"text-2xl cursor-pointer"} key={slideIndex}>
                        <RxDotFilled className={""} onClick={() => goToSlides(slideIndex)}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;