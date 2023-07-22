import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    {
        src: 'https://placehold.co/400/020202/FFF',
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
    return (
        <div className="bg-white p-4 md:p-[260px] text-black w-screen md:w-full flex flex-col items-center">
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col text-start w-full max-w-[1024px]">
                    <h2 className="text-2xl font-normal leading-10 font-sans tracking-tighter">
                        Our Mission
                    </h2>
                    <h3 className=" text-2xl lg:text-4xl font-normal leading-11 font-sans tracking-tighter mb-10 text-start">
                        Create a generalized brain interface to restore autonomy to those with unmet medical needs today and unlock human potential tomorrow.
                    </h3>
                </div>

                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={5000}
                    transitionTime={500}
                    showArrows={false}
                    showIndicators={false}
                    className="max-w-[1024px] md:max-h-[640px] rounded-lg"
                >
                    {images.map((image) => (
                        <div key={image.src} className="max-h-[640px] h-full">
                            <img src={image.src} alt={image.alt} className="object-cover h-full rounded-lg" />
                            <p className="absolute left-0 bottom-0 p-4 lg:text-3xl max-w-[500px] text-start text-white">{image.caption}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default About;