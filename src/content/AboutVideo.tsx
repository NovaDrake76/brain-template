import { useEffect, useRef, useState } from 'react';

const AboutVideo: React.FC = () => {
    const [isInView, setIsInView] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div className="bg-white p-2 md:p-[260px] text-black w-screen md:w-full">
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col text-start w-full max-w-[1024px]">
                    <h2 className="text-2xl font-normal leading-10 font-sans tracking-tighter ">
                        Our Mission
                    </h2>
                    <h3 className="text-4xl font-normal leading-11 font-sans tracking-tighter mb-10 text-start">
                        Create a generalized brain interface to restore autonomy to those with unmet medical needs today and unlock human potential tomorrow.
                    </h3>
                </div>
                <div className="max-w-[1024px] max-h-[640px]  rounded-lg">
                    <video
                        src="/v2.webm"
                        autoPlay={isInView}
                        muted
                        loop
                        playsInline
                        className="w-full h-full bg-[#393939] rounded-lg border-[#393939] border-[2rem]"
                        controls={false}
                        ref={videoRef}
                    ></video>
                </div>
            </div>
        </div >

    );
};

export default AboutVideo;