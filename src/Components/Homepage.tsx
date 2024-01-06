import React, {useState} from 'react'
import Hompage from '../Assets/Images/homepage.png'
import JoinWaitList from "./Joinwaitlist";
import backgroundImage from "../Assets/Images/Homebaner.png";

function Homepage() {
    const [isOpen, setIsOpen] = useState(false)

    const containerStyle: React.CSSProperties = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div>
            <div className='flex linearGradient w-full'  style={containerStyle}>
                <div>
                    <div className='w-10/12 xl:w-1/2 lg:w-1/2 mx-auto lg:py-0 py-8 '>
                        <h2 className=' font-bold text-4xl leading-10'>
                            Easily Invest In Rental Homes & Off -Plan Real Estate
                        </h2>
                        <p className='text-xs font-semibold leading-5'>
                            Streamline Your Real Estate Investments: Embrace Rental Homes
                            and Off-Plan Opportunities.
                        </p>
                        <div className='w-full gap-4 flex mt-3.5'>
                            {/*<input type='text' placeholder='Your Email' className='border-custom border w-7/12 rounded-custom text-sm py-3.5 px-2'/>*/}
                            <button onClick={() => setIsOpen(!isOpen)} className='rounded-custom text-white bg-custom-darkgreen border border-black font-semibold py-3.5 px-5'>
                                Join WaitList
                            </button>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block xl:block'>
                    <img src={Hompage} alt='Home' className='max-w-[70%]'/>
                </div>
            </div>
            <JoinWaitList isOpen={isOpen} onHide={() => setIsOpen(false)} />

        </div>
    )
}

export default Homepage