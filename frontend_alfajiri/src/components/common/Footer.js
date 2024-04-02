import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-gray-800'>
      <div className='m-auto text-white p-6'>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-10'>
          <div className='py-2'>
            <div className='pb-2'>
              <img src="./alfajirilogo.jpeg" alt='Alfajiri Logo' className="h-13" />
            </div>
            <h5><b>Start adding value to your business using technology!</b></h5>
            <div className='flex'>
              <a target="blank" href='https://www.facebook.com'><FaFacebook className='mr-5 my-3' size={28}/></a>
              <a target="blank" href='https://www.whatsapp.com'><FaWhatsapp className='mr-5 my-3' size={28}/></a>
              <a target="blank" href='https://www.linkedin.com'><FaLinkedin className='mr-3 my-3' size={28}/></a>
            </div>
          </div>
          <div className=''>
            <h1 className='text-xl font-bold'>Explore</h1>
            <ul className='py-2'>
              <li className="my-2"><Link to='/'>Home</Link></li>
              <li className="my-2"><Link to='/about'>About Us</Link></li>
              <li className="my-2"><Link to='/contact-us'>Contact Us</Link></li>
            </ul>
          </div>
          <div className=''>
            <h1 className='text-xl font-bold'>Address</h1>
            <div className='flex flex-col space-y-4 py-2'>
              <div className='flex items-center'>
                <MdLocationOn size={25} className='mr-2' />
                <span>
                  Harambee Sacco Plaza - 6th Floor<br />
                  Junction Uhuru Highway / Haile Selassie Ave
                </span>
              </div>
              <div className='flex items-center'>
                <MdEmail size={25} className='mr-2' />
                <span>P.O BOX 23681-00100 GPO Nairobi</span>
              </div>
              <div className='flex items-center'>
                <FaPhoneVolume size={25} className='mr-2' />
                <span>Tel (+254) 0102686621/ 0745084656</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container border-t-[1px] border-white m-auto py-4 text-center text-white">
          <small>&copy; 2024 Alfajiri Systems Limited All Rights Reserved</small>
        </div>
      </div>
    </div>
  )
}

export default Footer;
