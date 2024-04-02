import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isVisible = scrollTop > 200;
            setIsVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /*const buttonStyle = {
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
    };
	*/

    const ServiceItem = ({ iconColor, serviceName }) => (
        <div className="flex items-center p-2 transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
            <div className="w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-gray-300 hover:bg-orange-500">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <p className="text-base font-bold" style={{ fontFamily: "'Nunito', sans-serif" }}>{serviceName}</p>
        </div>
    );

    const services = [
        "Ict Consultancy",
        "Software Development",
        "Network & Infrastructure",
        "Hardware Sales & Support Services",
        "Managed Services",
        "Unified Communication Systems",
    ];

    const newServices = [
        "System Analysis & Design",
        "Source Code Administration",
        "Database Management",
        "Web Development & Design",
        "Programming",
        "Distribution Services",
    ];

    const recentWork = [
        { logo: "/bamburi.jpeg", companyName: "Bamburi Cement ltd" },
        { logo: "/csl.png", companyName: "CSL Mabati ltd" },
        { logo: "/mombasacem.png", companyName: "Mombasa Cement ltd" },
        { logo: "/ranfer2.jpeg", companyName: "Ranfer Teas" },
        { logo: "/mjclarke.jpeg", companyName: "M.J. Clarke ltd" },
        { logo: "/imarisha.jpeg", companyName: "Imarisha Vijana" },
        { logo: "/swafi-logo.jpg", companyName: "Chamu Supplies ltd" },
        { logo: "/tusha.png", companyName: "Tusha Team ltd" },
        { logo: "/asiantea-logo.png", companyName: "Afro Asian Teas EPZ" },
        { logo: "/wksugar.jpeg", companyName: "West Kenya Sugar ltd" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
		<div 
            className="mt-20" 
            style={{ 
                fontFamily: "'Nunito', sans-serif",
                background: 'linear-gradient(to left, #DEECFF, white)'
            }}
        >
			<div className="mt-20" style={{ fontFamily: "'Nunito', sans-serif" }}>
					{/* Two-Column Section */}
					<div className="grid sm:grid-cols-1 md:grid-cols-2 py-10 px-6 justify-items-center items-center relative">
						<div className="text-center">
							<h5 className='font-bold text-6xl tracking-wide py-6'> {/* Increased padding */}
								Secure IT Solutions Systems
							</h5>
							<p className="py-4 leading-relaxed"> {/* Increased padding and adjusted line spacing */}
								Unlock the future with ALFAJIRI SYSTEMS LIMITED! Since 2002, we've revolutionized tech solutions across sectors, blending innovation and expertise to propel your business into tomorrow
							</p>
							<button 
								className="mt-8 bg-orange-500 hover:bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out"
							>
								<Link to='/contact-us'>Get Started</Link>
							</button>

						</div>
						<div className='flex justify-center items-center'>
							<img src="/teamwork.png" alt='team work vector' className="max-w-full h-auto" />
						</div>
					</div>
					{/* New Section */}
					<div className="bg-[#010224] text-white py-10 px-6">
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

								<h5 className="font-bold text-3xl mb-4">Our Involvement</h5>
								<p className="text-lg">
									Explore Alfajiri Systems Limited's comprehensive range of services, tailored to meet your all your business's technological needs
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
					
					{/* New Section */}
					<div className="py-10 px-6">
						<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 justify-items-center">
							{/* First Column with Text */}
							<div className="text-left">
								
								{/* Tag */}
								<div className="flex items-center mb-4">
									<img src="./star-icon.png" alt="Star Icon" className="w-6 h-6 mr-2 text-orange-500" />
									<p className="text-lg text-orange-500">Services</p>
								</div>

								<h5 className="font-bold text-3xl mb-4">Strengths & Capabilities</h5>
								
								<p className="text-lg">
									The development team of Alfajiri Systems Limited is equipped with proper human resources
									specialized in different system development tasks. The key areas are;
								</p>

								{/* Items */}
								<div className="grid grid-cols-2 gap-4 mt-8">
									{newServices.map((service, index) => (
										<ServiceItem key={index} iconColor="green-500" serviceName={service} />
									))}
								</div>
							</div>

							{/* Second Column with Image */}
							<div className="flex justify-center items-center">
								<img src="/strengths.png" alt="Image Description" className="max-w-full h-auto rounded-lg shadow-lg" />
							</div>
						</div>
					</div>

					{/* New Section */}
					<div className="py-10 px-6">
						<div className="text-center">
							
							{/* Tag */}
							<div className="flex justify-center items-center mb-4">  {/* Updated class */}
								<img src="./star-icon.png" alt="Star Icon" className="w-6 h-6 mr-2 text-orange-500" />
								<p className="text-lg text-orange-500">Our Partners</p>
							</div>

							{/* Title */}
							<h5 className="font-bold text-3xl mb-4">List of Some of Our Major Clients</h5>
							
							{/* Body Text */}
							<p className="text-lg mb-8">
								Alfajiri Systems Limited has several clients using its array of products. Our team members have
								the distinguished experience working with different national and international organizations in
								different sectors. A partial list of these clients includes:
							</p>

							{/* Slick Carousel */}
							<Slider {...settings}>
								{recentWork.map((work, index) => (
									<div key={index} className="flex flex-col items-center p-4">
										<img src={work.logo} alt={work.companyName} className="w-32 h-32 object-contain mb-4" />
										<p className="text-lg font-bold text-left">{work.companyName}</p>
									</div>
								))}
							</Slider>

						</div>
					</div>

				</div>
			</div>
		);
};

export default HomePage;