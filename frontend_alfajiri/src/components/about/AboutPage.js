import React from 'react';
import HistoryTimeline from './HistoryTimeline';
import MissionAndVision from './MissionAndVision';
import DevelopmentKeys from './DevelopmentKeys';

const AboutPage = () => {
	return (
		<div className='py-20'>
			<div className='grid sm:grid-cols-1 md:grid-cols-2 px-16'>
				<div>
					<img src="/about-img5.png" alt='about vector' />
				</div>
				<div className='lg:p-6 sm:p-3'>
					<h1 className='font-bold tracking-wide mb-6 text-3xl'>About us</h1>
					<p className='mb-4'>
						ALFAJIRI SYSTEMS LIMITED provides one stop automated solution for your trade and industry.
						Depending on the size and field of your organization, we have different products and services to meet your requirements.
						We provide the optimum and customized solutions made for your organization.
					</p>
					<p className='mb-4'>
						Our experienced technical team began operations as a freelance solution provider under the
						leadership of the current Managing director for hardware and network solutions providing
						company in January 2002.
					</p>
					<p className='mb-4'>
						We have grown into a Limited Company with a wide range of solutions that covers several trade and industry.
						From network solutions, to database systems, to analytics and systems processing,
						AI implementation and project management as a service.
					</p>
					<p>
						Alfajiri Systems is focusing exclusively in high-quality and cost-effective software development and implementation of services.
						We are advancing on a tremendous pace and with involvement of skilled and experienced people working in the organization.
						Alfajiri Systems is currently doing business in Government (County), Tea Industry, Production & Manufacturing Plants,
						Large Corporate, Mobile and web, and also now venturing into the Media Sector.
					</p>
				</div>
			</div>
			<div className='bg-gray-100'>
				<div className='p-10 lg:m-20 sm:m-5'>
					<h1 className='font-bold tracking-wide text-3xl mb-6'>Your Automation Partner</h1>
					<p className='mb-4'>
						The company has been formed by a group of professionals having vivid experience and wide
						exposure in Information Technology and Production processes from different industries. People
						involved here are young qualified and experienced business graduates with business acumen.
					</p>
					<p className='mb-4'>
						The resource personnel working in the company have been consistently providing reliable support
						services and consultancy to a wide variety of corporate houses either in the capacity of executive
						or as business partner or consultant. Bottom line of the company philosophy is building a long
						term business partnership with its clients where interpersonal relationships, reliability, assured
						quality and target-oriented modern technology are the major building blocks.
					</p>
					<p className='mb-4'>
						It is a company where professionals from both technical and functional fields group together with
						an objective of providing appropriate business solutions. It realizes the importance of functional
						knowledge and its impact in developing business solutions. We constantly strive to be a leading
						technology firm with profound business and functional knowledge.  The key to the company's
						success is the maintenance of a close working relationship with the clients through ensuring the
						best possible solutions to their needs; establishing and maintaining a thorough knowledge and
						understanding of client's objectives and helping them maximize the benefits.
					</p>
					<p className='mb-4'>
						We want to establish ourselves as the best choice in Computing and Information Technology
						Services, Consultancy and Development by offering the full spectrum of services.
					</p>
				</div>
			</div>
			<MissionAndVision />
			<div className='bg-gray-100'>
				<DevelopmentKeys />
			</div>
			<HistoryTimeline />
		</div>
	)
}

export default AboutPage