import React from 'react';

const BottomContent: React.FC = () => {
    return (
        <div className="flex w-screen md:w-full justify-center bg-white border-t">
            <div className="w-full flex flex-col md:flex-row  text-black text-start p-2 md:p-[160px] justify-between  max-w-[1920px]">
                <h3 className="text-4xl md:text-7xl font-light">Carrers</h3>

                <div className="flex flex-col justify-center max-w-[560px]">

                    <p className="text-lg mb-4">
                        Developing brain-computer interfaces is an interdisciplinary challenge. We are looking to hire a wide range of people with diverse engineering, scientific, and operations expertise.                </p>
                    <a href="#" className="text-md text-black underline">
                        Join Our Patient Registry
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BottomContent;