import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    const isMd = window.innerWidth < 1330;
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [hasVideoEnded, setHasVideoEnded] = React.useState(false);
    const [scrollTimeout, setScrollTimeout] = React.useState<number | null>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const smoothScrollTo = (element: any, duration: any) => {
        var start = window.pageYOffset,
            target = element.offsetTop,
            startTime = 'now' in window.performance ? performance.now() : new Date().getTime(),
            distance = target - start,
            duration = duration;

        var animateScroll = function (elapsedTime: any) {
            elapsedTime = 'now' in window.performance ? performance.now() - startTime : new Date().getTime() - startTime;
            var percentage = Math.min(elapsedTime / duration, 1);
            window.scrollTo(0, start + distance * percentage - 70);

            // Stop when done
            if (percentage < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };


    const handleVideoEnd = () => {
        setHasVideoEnded(true);
        const aboutSection = document.getElementById('about');
        if (aboutSection && scrollPosition == 0) {
            setScrollTimeout(setTimeout(() => {
                smoothScrollTo(aboutSection, 700);
            }, 200));
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
        } else {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
                setScrollTimeout(null);
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleWindowScroll);
        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        };
    }, [hasVideoEnded, scrollTimeout]);

    return (
        <div className="relative h-screen w-screen bg-black">
            <video
                ref={videoRef}
                className={`absolute top-0 left-0 w-full h-full ${isMd ? 'object-contain' : 'object-cover'}`}
                autoPlay
                muted
                src={isMd ? '/MV.mp4' : '/v1.mp4'}
                onEnded={handleVideoEnd}
            />
        </div>
    );
};

export default Hero;