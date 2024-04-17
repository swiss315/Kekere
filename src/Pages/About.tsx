import React from 'react';
import Navbar from "../Components/Layout/Navbar";
import AboutImg1 from '../Assets/Images/aboutimg1.svg'
import AboutImg2 from '../Assets/Images/aboutimg2.svg'
import AboutImg3 from '../Assets/Images/aboutimg3.png'
import AboutImg4 from '../Assets/Images/aboutimg4.png'
import {ReactComponent as TicketIcon} from "../Assets/Icons/ticketicon.svg";
import {ReactComponent as SpeakerIcon} from "../Assets/Icons/speakericon.svg";
import {ReactComponent as DesktopIcon} from "../Assets/Icons/desktopicon.svg";
import {ReactComponent as GitIcon} from "../Assets/Icons/giticon.svg"
import {ReactComponent as Cancel} from "../Assets/Icons/greencancel.svg";

import {ReactComponent as FAQ} from "../Assets/Images/Faq.svg";
import {Disclosure} from "@headlessui/react";
import {Add} from "iconsax-react";
import Customer from "../Components/Homepage/Customer";
import Advert from "../Components/Homepage/Advert";
import Footer from "../Components/Layout/Footer";


function About() {
    const value = [
        {
            icon: TicketIcon,
            title: 'Sell your home',
            info: 'We provide a complete service for the sale, purchase or rental of real estate.'
        },
        {
            icon: SpeakerIcon,
            title: 'Get online valuation',
            info: 'We provide a complete service for the sale, purchase or rental of real estate.'
        },
        {
            icon: DesktopIcon,
            title: 'Find a properties',
            info: 'We provide a complete service for the sale, purchase or rental of real estate.'
        },
        {
            icon: GitIcon,
            title: 'New developments',
            info: 'We provide a complete service for the sale, purchase or rental of real estate.'
        },


    ]
    return (
        <div>
            <Navbar />
            <div className='md:w-11/12 lg:w-11/12 xl:w-9/12 md:mx-auto py-10'>
                <div className='flex justify-between  gap-3.5 py-10'>
                    <h1 className='text-4xl font-bold w-6/12 lg:w-4/12'>
                        Who we are and what we do
                    </h1>
                    <div className='w-6/12 text-sm flex flex-col gap-y-16'>
                        <p>
                            We provide a complete service for the sale, purchase or rental of real estate. We provide a complete
                        </p>
                        <button className='bg-custom-darkgreen px-2 py-2 text-white w-max'>
                            Get Started
                        </button>
                    </div>
                </div>
                <section>
                    <div className='flex justify-between gap-3.5 my-3.5 overflow-hidden'>
                        <div className='lg:w-8/12'>
                            <img src={AboutImg1} alt='house' className='h-full object-cover' />
                        </div>
                        <div className='lg:w-4/12'>
                            <img src={AboutImg2} alt='house' className='h-full object-cover' />
                        </div>
                    </div>
                    <div className='flex justify-between gap-3.5 overflow-hidden'>
                        <div className='lg:w-4/12'>
                            <img src={AboutImg3} alt='house' className='h-full object-cover' />
                        </div>
                        <div className='lg:w-8/12'>
                            <img src={AboutImg4} alt='house' className='h-full object-cover' />
                        </div>
                    </div>
                </section>
                <section className='py-10'>
                    <h1 className='font-bold text-4xl text-center'>Our Value</h1>
                    <p className='text-center text-sm w-8/12 mx-auto py-10'>
                        We provide a complete service for the sale, purchase or rental of real estate. We provide a complete We provide a complete service for the sale.
                    </p>
                    <div className='flex gap-3.5'>
                        {
                            value.map((item, index) => {
                                return (
                                    <div className='p-3 px-4 border-custom-grey border' key={index}>
                                        <span className='rounded-full p-2 my-3.5 flex flex-col justify-center items-center w-fit'
                                              style={{backgroundColor: '#F8FAFC'}}>
                                            <item.icon/>
                                        </span>
                                        <h1 className='font-bold pt-3.5 pb-1.5'>
                                            {item.title}
                                        </h1>
                                        <p className='text-sm'>
                                            {item.info}
                                        </p>
                                    </div>
                                )
                            })
                        }


                    </div>
                </section>
                <section className='py-10 flex justify-between bg-custom-white px-10'>
                    <div className='w-5/12'>
                        <FAQ className='w-full' />
                    </div>
                    <div className='w-6/12'>
                        <h1 className='pb-5 font-bold text-xl'>
                            Frequently Asked Questions
                        </h1>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className='flex justify-between items-center font-bold border-t-2 py-3.5 w-full text-start' style={{borderColor: '#E5EAF9'}}>Where can I watch? {open ? <Cancel /> : <Add size="24" color="#20996B"/>}</Disclosure.Button>
                                    <Disclosure.Panel>
                                        <p className='text-sm py-3'>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. </p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className='flex justify-between items-center font-bold border-t-2 py-3.5 w-full text-start' style={{borderColor: '#E5EAF9'}}>Mauris id nibh eu fermentum mattis purus? {open ? <Cancel /> : <Add size="24" color="#20996B"/>}</Disclosure.Button>
                                    <Disclosure.Panel>
                                        <p className='text-sm py-3'>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. </p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className='flex justify-between items-center font-bold border-t-2 py-3.5 w-full text-start' style={{borderColor: '#E5EAF9'}}>Eros imperdiet rhoncus? {open ? <Cancel /> : <Add size="24" color="#20996B"/>}</Disclosure.Button>
                                    <Disclosure.Panel>
                                        <p className='text-sm py-3'>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. </p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className='flex justify-between items-center font-bold border-t-2 py-3.5 w-full text-start' style={{borderColor: '#E5EAF9'}}>Fames imperdiet quam fermentum? {open ? <Cancel /> : <Add size="24" color="#20996B"/>}</Disclosure.Button>
                                    <Disclosure.Panel>
                                        <p className='text-sm py-3'>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. </p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className='flex justify-between items-center font-bold border-t-2 py-3.5 w-full text-start' style={{borderColor: '#E5EAF9'}}>Varius vitae, convallis amet lacus sit aliquet nibh? {open ? <Cancel /> : <Add size="24" color="#20996B"/>}</Disclosure.Button>
                                    <Disclosure.Panel>
                                        <p className='text-sm py-3'>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. </p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className='flex justify-between items-center font-bold border-t-2 py-3.5 w-full text-start' style={{borderColor: '#E5EAF9'}}>Tortor nisl pellentesque sit quis orci dolor? {open ? <Cancel /> : <Add size="24" color="#20996B"/>}</Disclosure.Button>
                                    <Disclosure.Panel>
                                        <p className='text-sm py-3'>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. </p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className='flex justify-between items-center font-bold border-t-2 py-3.5 w-full text-start' style={{borderColor: '#E5EAF9'}}>Vestibulum mauris mauris elementum proin amet auctor ipsum nibh sollicitudin? {open ? <Cancel /> : <Add size="24" color="#20996B"/>}</Disclosure.Button>
                                    <Disclosure.Panel>
                                        <p className='text-sm py-3'>Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. </p>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </section>
            </div>
            <Customer />
            <Advert />
            <Footer />
        </div>
    )
}

export default About