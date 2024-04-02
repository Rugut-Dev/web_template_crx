import React from 'react';
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const MissionAndVision = () => {
    return (
        <div className='sm:p-5 sm:m-6 lg:p-10 lg:m-20'>
            <h1 className='font-bold tracking-wide text-3xl mb-6'>Mission & Vision</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 sm:p-2 lg:p-10 gap-10'>
                <div className='lg:p-4 sm:p-2 bg-white rounded'>
                    <h2 className='font-bold text-xl mb-6'>Our Mission</h2>
                    <ul className="list-disc list-inside">
                        <li className="flex items-center">
                            <TbArrowBadgeRightFilled size={30} className="mr-2" />
                            To achieve the reputation of a quality, high standard & reliable solution & service Provider Company in the ICT industry.
                        </li>
                        <li className="flex items-center">
                            <TbArrowBadgeRightFilled size={30} className="mr-2" />
                            Alfajiri Systems Limited will be the regional's premier Systems & Solutions firm, specializing in project
                            management, sales and management.
                        </li>
                        <li className="flex items-center">
                            <TbArrowBadgeRightFilled size={30} className="mr-2" />
                            The firm will dominate the solutions provision market and
                            excel in every facet of its operation including; client satisfaction, operating systems, team
                            development and profitability.
                        </li>
                    </ul>
                </div>
                <div className='lg:p-4 sm:p-2 bg-white rounded'>
                    <h2 className='font-bold text-xl mb-6'>Our Vision</h2>
                    <ul className="list-disc list-inside">
                        <li className="flex items-center">
                            <TbArrowBadgeRightFilled size={30} className="mr-2" />
                            To achieve 99.99% customer satisfaction by delivering quality products and services at an affordable cost.
                        </li>
                        <li className="flex items-center">
                            <TbArrowBadgeRightFilled size={30} className="mr-2" />
                            Our forward vision is to strive to become an entity in technology-based corporate solutions,
                            capable of demanding unconditional response from the targeted niche.
                        </li>
                        <li className="flex items-center">
                            <TbArrowBadgeRightFilled size={30} className="mr-2" />
                            We also believe that for our scope of improvisation - the sky is the limit and we are always ready to take our achievements to the next level.
                            We are growing and would always like to remain on the growing streak.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MissionAndVision