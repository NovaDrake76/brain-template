import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    {
        src: 'https://blog.hubspot.com/hubfs/braintech.png',
        alt: 'Image 1',
        caption: 'Brain-computer interfaces have the potential to change lives for the better. We want to bring this technology from the lab into peoples',
    },
    {
        src: 'https://placehold.co/400/020202/FFF',
        alt: 'Image 2',
        caption: 'Caption 2',
    },
    {
        src: 'https://placehold.co/400/020202/FFF',
        alt: 'Image 3',
        caption: 'Caption 3',
    },
];

const About: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="bg-white p-4 md:p-[260px] text-black w-screen md:w-full flex flex-col items-center">
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col text-start w-full max-w-[1024px]">
                    <h2 className="text-2xl font-normal leading-10 font-sans tracking-tighter" id="about">
                        Our Mission
                    </h2>
                    <h3 className=" text-2xl lg:text-4xl font-normal leading-11 font-sans tracking-tighter mb-10 text-start">
                        Create a generalized brain interface to restore autonomy to those with unmet medical needs today and unlock human potential tomorrow.
                    </h3>
                </div>

                <div className="relative">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        interval={5000}
                        transitionTime={500}
                        showArrows={false}
                        showIndicators={false}
                        className="max-w-[1024px] md:max-h-[640px] rounded-lg"
                        selectedItem={currentIndex}
                        onChange={handleSlideChange}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="max-h-[640px] h-full">
                                <img src={image.src} alt={image.alt} className="object-cover h-full rounded-xl" />
                                <p className="absolute left-0 bottom-0 p-4 lg:text-2xl max-w-[500px] text-start text-white">{image.caption}</p>
                            </div>
                        ))}
                    </Carousel>
                    <div className="absolute top-0 left-0 p-4 flex">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => handleSlideChange(index)}
                                className={`flex items-center gap-1 mx-1 p-2 rounded-full text-sm bg-[#ffffff59] backdrop-blur-[10px] transition-all duration-[250ms] cursor-pointer border-none transform ${currentIndex === index ? 'scale-[1.001] font-bold' : 'scale-[1]'}`}
                            >
                                {currentIndex === index && <div className="mr-2 h-2 w-2 bg-black rounded-full animate-ping"></div>}
                                {image.alt}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;