// import React from 'react'

// const HomePage = () => {
// 	return (
// 		<div className="grid sm:grid-cols-1 md:grid-cols-2 py-20 px-20 justify-items-center items-center">
// 			<div className="text-left">
// 				<h5 className='font-bold text-5xl tracking-wide py-8'>
// 					Secure IT Solutions Systems
// 				</h5>
// 				<p>
// 					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
// 					Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
// 					Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
// 				</p>
// 			</div>
// 			<div className='flex justify-center items-center'>
// 				<img src="/teamwork.png" alt='team work vector' className="max-w-full h-auto" />
// 			</div>      
// 		</div>
// 	);
// 	// return (
// 	// 	<div>HomePage</div>
// 	// )
// }

// export default HomePage

import React, { useState, useEffect } from 'react';

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isVisible = scrollTop > 200; // Adjust the scroll threshold as needed
            setIsVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const buttonStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
    };

	const ServiceItem = ({ iconColor, serviceName }) => (
		<div className="flex items-center p-2 transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
			<div className="w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-gray-300 hover:bg-orange-500">
				<svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 13l4 4L19 7"></path>
				</svg>
			</div>
			<p className="text-base font-bold">{serviceName}</p>
		</div>
	);
	
	// Services data
	const services = [
		"Service 1",
		"Service 2",
		"Service 3",
		"Service 4",
		"Service 5",
		"Service 6",
	];
	

    return (
        // <div className="grid sm:grid-cols-1 md:grid-cols-2 py-20 px-20 justify-items-center items-center gap-4 relative">
        //     <div className="text-left">
        //         <h5 className='font-bold text-4xl tracking-wide py-4'>
        //             Secure IT Systems
        //         </h5>
        //         <p>
        //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        //             Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
        //             Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        //         </p>
        //         <button 
        //             className="mt-8 bg-orange-500 hover:bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out"
        //             style={buttonStyle}
        //         >
        //             Get Started
        //         </button>
        //     </div>
        //     <div className='flex justify-center items-center'>
        //         <img src="/teamwork.png" alt='team work vector' className="max-w-full h-auto" />
        //     </div>      
        // </div>
		<div>
				{/* Two-Column Section */}
				<div className="grid sm:grid-cols-1 md:grid-cols-2 py-20 px-20 justify-items-center items-center relative">
					<div className="text-left">
						<h5 className='font-bold text-4xl tracking-wide py-4'>
							Secure IT Systems
						</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
							Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
						</p>
						<button 
							className="mt-8 bg-orange-500 hover:bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out"
						>
							Get Started
						</button>
					</div>
					<div className='flex justify-center items-center'>
						<img src="/teamwork.png" alt='team work vector' className="max-w-full h-auto" />
					</div>      
				</div>
		
				{/* New Section */}
				<div className="bg-[#010224] text-white py-20 px-20">
					<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 justify-items-center">
						{/* First Column with Image */}
						<div className="flex justify-center items-center">
							<img src="/africa.png" alt="Image Description" className="max-w-full h-auto rounded-lg shadow-lg" />
						</div>
						{/* Second Column with Text */}
						<div className="text-left">
							{/* Tag */}
							<div className="flex items-center mb-4">
								<img src="./star-icon.png" alt="Star Icon" className="w-6 h-6 mr-2 text-orange-500" />
								<p className="text-lg text-orange-500">Services</p>
							</div>

							<h5 className="font-bold text-3xl mb-4">Title Here</h5>
							
							<p className="text-lg">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
								Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
								Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
							</p>

							{/* Items */}
							<div className="grid grid-cols-2 gap-4 mt-8">
								{services.map((service, index) => (
									<ServiceItem key={index} iconColor="green-500" serviceName={service} />
								))}
							</div>

						</div>
					</div>
				</div>
			</div>
		);
};

export default HomePage;