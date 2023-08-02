import { useState, useEffect } from 'react';

const Navbar = () => {
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

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 py-2 px-4 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white border-b  border-[#D9D9D9] ' : 'bg-transparent '}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {
                    scrollPosition > 50 ? (
                        <img src="/blacklogo.png" alt="logo" className="h-8" />
                    ) : (
                        <img src="/whitelogo.png" alt="logo" className="h-8" />
                    )
                }
                {/* <div className="space-x-4">
                    <a href="#!" className="text-gray-900 hover:text-gray-600">Home</a>
                    <a href="#!" className="text-gray-900 hover:text-gray-600">About</a>
                    <a href="#!" className="text-gray-900 hover:text-gray-600">Contact</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;
