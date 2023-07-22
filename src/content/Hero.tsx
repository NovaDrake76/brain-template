import React from 'react';

const Hero: React.FC = () => {
    const isMobile = window.innerWidth < 768;

    return (
        <div className="relative h-screen w-screen">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                src={isMobile ? '/vm.mp4' : '/v.webm'}
            />
        </div>
    );
};

export default Hero;