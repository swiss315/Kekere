import React from 'react'
import backgroundImage from "../../Assets/Images/contactbg.png";
import {ReactComponent as LocationIcon} from '../../Assets/Icons/Locationicon.svg';
import {ReactComponent as PhoneIcon} from '../../Assets/Icons/phoneicon.svg';
import {ReactComponent as MailIcon} from '../../Assets/Icons/mailicon.svg';
import {ReactComponent as Line} from '../../Assets/Icons/Line.svg';
import {ReactComponent as ContactIcon} from '../../Assets/Icons/contacticon.svg';
import {ReactComponent as NameIcon} from '../../Assets/Icons/nameIcon.svg';
import {ReactComponent as EmailIcon} from '../../Assets/Icons/emailicon.svg';
import {ReactComponent as PhoneInputIcon} from '../../Assets/Icons/phoneinputicon.svg';
import {ReactComponent as PropertyType} from '../../Assets/Icons/propertytype.svg';
import {ReactComponent as Telegram} from '../../Assets/Icons/telegramicon.svg';


function Contact() {
    const containerStyle: React.CSSProperties = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className='py-10' style={containerStyle}>
            <div className='w-10/12 lg:w-10/12 md:w-11/12 xl:w-8/12 md:flex justify-center gap-6 mx-auto' >
                <div className='my-5 lg:my-0 md:w-1/2'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold py-2'>
                        We provide the most suitable and quality
                        real estate.
                    </h1>
                    <p className='text-sm pb-6 text-custom font-semibold'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio
                    </p>
                    <div>
                        <div className='flex gap-8 items-center py-4'>
                            <div className=''>
                                <LocationIcon/>
                            </div>
                            <div className="slanted-line">
                                <Line />
                            </div>
                            <div>
                                <p className='text-sm text-custom font-semibold'>Office address</p>
                                <p className='text-sm font-semibold'>Lagos Nigeria </p>
                            </div>
                        </div>
                        <div className='flex gap-8 items-center py-4'>
                            <div className=''>
                                <PhoneIcon/>
                            </div>
                            <div className="slanted-line">
                                <Line />
                            </div>
                            <div>
                                <p className='text-sm text-custom font-semibold'>Request a call back</p>
                                <p className='text-2xl text-custom-green font-semibold'>314-555-0123</p>
                            </div>
                        </div>
                        <div className='flex gap-8 items-center py-4'>
                            <div className=''>
                                <MailIcon/>
                            </div>
                            <div className="slanted-line">
                                <Line />
                            </div>
                            <div>
                                <p className='text-sm text-custom font-semibold'>Email us</p>
                                <p className=' text-custom-green font-semibold'>hellosupport@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-5 lg:my-0 rounded-custom contactform p-6'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-2xl py-2 font-bold'>
                                Contact Us
                            </h1>
                            <p className='text-sm font-semibold text-custom'>
                                We will respond as soon as we receive your message.
                            </p>
                        </div>
                        <div>
                            <ContactIcon/>
                        </div>
                    </div>
                    <form>
                        <div className='py-3'>
                            <label className='font-semibold'>
                                Your Name
                            </label>
                            <div className="relative">
                                <NameIcon className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2" />
                                <input className="focus-visible:outline-0 w-full p-4 pl-10 border border-input-color rounded-custom" type="text" placeholder="Enter your name" />
                            </div>
                        </div>
                        <div className='py-3 flex gap-2 md:gap-3 xl:gap-8 lg:gap-8 '>
                            <div>
                                <label className='font-semibold'>
                                    Email
                                </label>
                                <div className="relative">
                                    <EmailIcon className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2" />
                                    <input className="focus-visible:outline-0 w-full p-4 pl-10 border border-input-color rounded-custom" type="email" placeholder="Enter your email" />
                                </div>
                            </div>
                            <div>
                                <label className='font-semibold'>
                                    Your Name
                                </label>
                                <div className="relative">
                                    <PhoneInputIcon className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2" />
                                    <input className="focus-visible:outline-0 w-full p-4 pl-10 border border-input-color rounded-custom" type="phone" placeholder="Enter your Phone No" />
                                </div>
                            </div>
                        </div>
                        <div className='py-3'>
                            <label className='font-semibold'>
                                Property Type
                            </label>
                            <div className="relative">
                                <PropertyType className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2" />
                                <select className="focus-visible:outline-0 w-full p-4 pl-10 border border-input-color rounded-custom" >
                                    <option>Select Property Type</option>
                                </select>
                            </div>
                        </div>
                        <div className='py-3'>
                            <label className='font-semibold'>
                                Message
                            </label>
                            <div className="relative">
                                <textarea rows={4} className="focus-visible:outline-0 w-full p-4 pl-10 border border-input-color rounded-custom"/>
                            </div>
                        </div>
                        <button className='flex justify-between self-center items-center h-fit bg-green-600 rounded-custom border-0 text-white py-3.5 px-5'>
                            <div className='flex justify-center px-1.5' >
                                <Telegram className='' />
                            </div>
                            <div className='border-l border-gray-400 font-bold px-3 flex flex-row'>Send Request</div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact