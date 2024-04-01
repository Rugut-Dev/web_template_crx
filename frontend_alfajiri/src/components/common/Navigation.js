import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

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
	const[isOpen, setIsOpen] = useState(false);
	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="text-white uppercase bg-gray-800 z-30">
			<div className="m-auto flex justify-between items-center p-6">
				<strong className="font-extrabold logo">Logo</strong>
				<ul className="hidden md:flex space-x-4">
					{navItems.map((navItem) => (
						<li key={navItem.id} className="font-semibold hover:underline hover:underline-offset-8  hover:text-gray-400 transform transition-all">
							<Link to={navItem.link}>{navItem.title}</Link>
						</li>
					))}
				</ul>
				<div className="block md:hidden">
					<button onClick={toggleNavbar} className="text-white focus:outline-none">
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
				<ul className={isOpen ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-gray-800 ease-in-out duration-500 z-50 space-y-8 p-10" : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"}>
					<strong className="font-extrabold logo">Logo</strong>
					{navItems.map((navItem) => (
						<li key={navItem.id} className="font-bold hover:underline hover:underline-offset-8 hover:text-gray-400 transform transition-all">
							<Link to={navItem.link}>{navItem.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navigation