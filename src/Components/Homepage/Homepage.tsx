import React, {useState} from 'react'
// import Hompage from '../../Assets/Images/homepage.png'
import JoinWaitList from "./Joinwaitlist";
// import backgroundImage from "../../Assets/Images/Homebaner.png";
import {ReactComponent as HomeAbstract} from "../../Assets/Images/homeabstract.svg";

function Homepage() {
    const [isOpen, setIsOpen] = useState(false)

    // const containerStyle: React.CSSProperties = {
    //     backgroundImage: `url(${backgroundImage})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    // };
    return (
        <div>
            <div className='relative'>
                <div className='w-full hidden md:flex'  >
                    <HomeAbstract className='abstract'/>
                </div>
                <div className='relative md:absolute md:top-20 flex flex-col items-center justify-center w-full '>
                    <div className='flex flex-col justify-center items-center w-10/12 xl:w-1/2 lg:w-1/2 mx-auto lg:py-0 py-8 text-center '>
                        <h2 className=' font-bold text-4xl leading-10 text-center'>
                            Easily Invest In Rental Homes <br/>& Off -Plan Real Estate
                        </h2>
                        <p className='text-xs font-semibold leading-5'>
                            Streamline Your Real Estate Investments: Embrace Rental Homes
                            and Off-Plan Opportunities.
                        </p>
                        <div className='w-full gap-4 flex justify-center mt-3.5'>
                            {/*<input type='text' placeholder='Your Email' className='border-custom border w-7/12 rounded-custom text-sm py-3.5 px-2'/>*/}
                            <button onClick={() => setIsOpen(!isOpen)} className='rounded-custom text-white bg-custom-darkgreen border border-black font-semibold py-3.5 px-5'>
                                Join WaitList
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <JoinWaitList isOpen={isOpen} onHide={() => setIsOpen(false)} />

        </div>
    )
}

export default Homepage