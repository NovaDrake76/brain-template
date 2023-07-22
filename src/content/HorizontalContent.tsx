import React from 'react';

const HorizontalContent: React.FC = () => {
    return (
        <div className="flex w-screen md:w-full justify-center bg-white border-t">
            <div className="w-full flex flex-col md:flex-row  text-black text-start p-2 md:p-[160px] justify-between  max-w-[1920px]">
                <div className="flex flex-col justify-center max-w-[560px]">
                    <h3 className="text-4xl md:text-7xl font-light  mb-4">Patient Registry</h3>
                    <p className="text-lg mb-4">
                        If you’re interested in learning whether you may qualify for future Neuralink clinical trials, consider joining our Patient Registry.
                    </p>
                    <a href="#" className="text-md text-black underline">
                        Join Our Patient Registry
                    </a>
                </div>

                <img src="/p1.webp" alt="A woman in a black shirt facing forward optimistically"
                    className="w-full max-w-[560px] h-[740px] object-cover rounded-lg" />
            </div>
        </div>
    );
};

export default HorizontalContent;