import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactPage = () => {
    return (
        <div
            className='lg:p-8 mt-20'
            style={{
                background: 'linear-gradient(to left, #DEECFF, white)'
            }}
        >
            <ContactInfo />
            <div className="m-auto py-10 flex flex-col items-center">
                <div className='text-center'>
                    <h1 className='font-extrabold uppercase'>Get in touch</h1>
                    <h2 className="font-extrabold tracking-wide py-4">Ready to get started?</h2>
                    <p className="pb-4">Reach out to us by filling the form below. Feel free to reach out to us at anytime.</p>
                </div>
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 py-10">
                    <div className='flex justify-center'>
                        <img src="/contact.png" alt='contact vector' />
                    </div>
                    <div><ContactForm /></div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
