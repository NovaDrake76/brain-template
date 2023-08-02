import React from 'react';

const Hero: React.FC = () => {
    const isMobile = window.innerWidth < 768;
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [hasVideoEnded, setHasVideoEnded] = React.useState(false);

    const handleVideoEnd = () => {
        setHasVideoEnded(true);
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleWindowScroll = () => {
        const video = videoRef.current;
        if (video && window.scrollY < window.innerHeight) {
            if (hasVideoEnded) {
                video.currentTime = 0;
                video.play();
                setHasVideoEnded(false);
            } else {
                video.play();
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleWindowScroll);
        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        };
    }, [hasVideoEnded]);

    return (
        <div className="relative h-screen w-screen">
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                src={isMobile ? '/brain.mp4' : '/brain.mp4'}
                onEnded={handleVideoEnd}
            />
        </div>
    );
};

export default Hero;