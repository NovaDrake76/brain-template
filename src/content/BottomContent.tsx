import React from 'react';

const BottomContent: React.FC = () => {
    return (
        <div className="flex w-screen md:w-full justify-center bg-white border-t">
            <div className="w-full flex flex-col md:flex-row  text-black text-start p-8 md:p-[160px]  justify-between  max-w-[1920px]">
                <h3 className="text-4xl md:text-7xl font-light">Contact us</h3>

                <div className="flex flex-col justify-center max-w-[560px]">

                    <p className="text-lg mb-4">
                        We are actively looking for collaborators to work with our clinical division. For more information, please contact
                    </p>
                    <a href="mailto:reception@neurastem.clinic" target="_blank" rel="noreferrer" className="text-md text-black underline">
                        reception@neurastem.clinic
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BottomContent;