import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const navItems = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "About Us",
        link: "/about",
    },
    {
        id: 3,
        title: "Contact Us",
        link: "/contact-us",
    }
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navStyle = {
        backgroundColor: scrollY === 0 ? 'transparent' : 'white',
        borderBottom: scrollY === 0 ? 'none' : '1px solid #e5e5e5',
        boxShadow: scrollY === 0 ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Nunito', sans-serif",
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
    };

    return (
        <nav className="text-black uppercase z-30 shadow-lg w-full" style={navStyle}>
            <div className="m-auto flex justify-between items-center px-6 py-4">
                <img src="./alfajirilogo.jpeg" alt="Alfajiri Logo" className="h-10" />
                <ul className="hidden md:flex space-x-4">
                    {navItems.map((navItem) => (
                        <li key={navItem.id} className="font-semibold text-gray-600 hover:text-orange-500 transform transition-all">
                            <Link to={navItem.link}>{navItem.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className="block md:hidden">
                    <button onClick={toggleNavbar} className="text-black focus:outline-none">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
                <ul className={isOpen ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-white ease-in-out duration-500 z-50 space-y-8 p-6 shadow-lg" : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"}>
                    <img src="./alfajirilogo.jpeg" alt="Alfajiri Logo" className="h-10 mx-auto" />
                    {navItems.map((navItem) => (
                        <li key={navItem.id} className="font-semibold text-gray-600 hover:text-orange-500 transform transition-all">
                            <Link to={navItem.link}>{navItem.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
