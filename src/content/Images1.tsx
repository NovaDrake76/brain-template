import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    {
        src: 'https://placehold.co/400/020202/505050',
        alt: 'Image 1',
        title: 'Image 1',
        caption: 'Our brain-computer interface is fully implantable, cosmetically invisible, and designed to let you control a computer or mobile device anywhere you go.',
    },
    {
        src: 'https://placehold.co/400/020202/505050',
        alt: 'Image 2',
        title: 'Image 2',
        caption: 'The N1 Implant is hermetically sealed in a biocompatible enclosure that withstands physiological conditions several times harsher than those in the human body.',
    },
    {
        src: 'https://placehold.co/400/020202/505050',
        alt: 'Image 3',
        title: 'Image 3',
        caption: 'The N1 Implant is powered by a small battery charged wirelessly from the outside via a compact, inductive charger that enables easy use from anywhere.',
    },
];

const Images1: React.FC = () => {
    return (
        <div className="h-screen relative">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={5000}
                transitionTime={500}
                className="h-full"
                showArrows={false}
                showIndicators={false}
            >
                {images.map((image) => (
                    <div key={image.src} className="h-full max-h-[100vh] relative">
                        <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                        <div className="absolute left-[2%] bottom-[5%] md:left-[30%] md:bottom-[40%] p-4 text-white z-10 flex flex-col">
                            <div className="text-3xl md:text-4xl max-w-[400px] text-start pb-2">{image.title}</div>
                            <div className="text-lg md:text-xl max-w-[400px] text-start">{image.caption}</div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Images1;