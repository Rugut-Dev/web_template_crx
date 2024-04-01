import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { PiClockBold } from "react-icons/pi";

const ContactInfo = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
            <div className='flex p-4 parent-div'>
                <div className='bg-gray-200 flex items-center justify-center p-4 rounded icon-div'>
                    <MdLocationOn size={30} />
                </div>
                <div className='p-4 space-y-2'>
                    <h1 className='font-bold'>Our Address</h1>
                    <p>
                        Harambee Sacco Plaza - 6th Floor<br />
                        Junction Uhuru Highway / Haile Selassie Ave
                    </p>
                </div>
            </div>
            <div className='flex p-4 parent-div'>
                <div className='bg-gray-200 flex items-center justify-center p-4 rounded icon-div'>
                    <FaPhoneVolume size={30} />
                </div>
                <div className='p-4 space-y-2'>
                    <h1 className='font-bold'>Contact</h1>
                    <p>Mobile: (+254) 0102686621/ 0745084656</p>
                    <p>Mail Address: P.O BOX 23681-00100 GPO Nairobi</p>
                </div>
            </div>
            <div className='flex p-4 parent-div'>
                <div className='bg-gray-200 flex items-center justify-center p-4 rounded icon-div'>
                    <PiClockBold size={30} />
                </div>
                <div className='p-4 space-y-2'>
                    <h1 className='font-bold'>Office Hours</h1>
                    <p>Monday - Friday: 09:00 - 17:00</p>
                    <p>Saturday & Sunday: Closed</p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo