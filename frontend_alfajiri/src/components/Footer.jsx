//import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
	<div className='bg-gray-800'>
		<div className='container m-auto text-white py-4'>
			<div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-10'>
				<div className='py-2'>
					<div className='pb-2'>
						<img className='rounded-[50%] w-[90px]' alt='news-logo' />
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Adipisci, maxime.</p>
					<div className='flex'>
						<a target="blank" href='https://www.facebook.com'><FaFacebook className='mr-5 my-3' size={28}/></a>
						<a target="blank" href='https://www.whatsapp.com'><FaWhatsapp className='mr-5 my-3' size={28}/></a>
						<a target="blank" href='https://www.linkedin.com'><FaLinkedin className='mr-3 my-3' size={28}/></a>
					</div>
				</div>
				<div className=''>
					<h1 className='text-xl font-bold'>Useful Link</h1>
					<ul className='py-2'>
						<li className="my-2"><Link to='/about'>About Us</Link></li>
						<li className="my-2"><Link to='/home'>Latest News</Link></li>
						<li className="my-2"><Link to='/contact-us'>Contact Us</Link></li>
					</ul>
				</div>
				<div className=''>
					<h1 className='text-xl font-bold'>Stay Updated</h1>
					<p className='py-2'>Stay updated by subscribing to our email</p>
					<div className='w-[60%]'>
						<form className='w-full py-2'>
							<input className='outline-none text-gray-600 rounded-sm p-2 w-full' type='text' placeholder='Email-address...' required />
							<button className='bg-yellow-600 w-[100%] my-2 p-2 rounded-sm ' type='submit'>Subscribe</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div className="">
			<div className="container border-t-[1px] border-white m-auto py-4 text-center text-white">
				<small>World News-&copy; All rights reserved {new Date().getFullYear()}</small>
			</div>
		</div>
	</div>
  )
}

export default Footer