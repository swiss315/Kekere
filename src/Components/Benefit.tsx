import React from 'react'
import backgroundImage from '../Assets/Images/easybg.png';
import {ReactComponent as RPC} from '../Assets/Icons/rpv.svg';
import {ReactComponent as Arrow} from '../Assets/Icons/Arrow.svg';
import {ReactComponent as Dreamhouse} from '../Assets/Icons/Dreamhome.svg';
import {ReactComponent as Passiveicon} from '../Assets/Icons/Passiveincome.svg';
import {ReactComponent as Checkquality} from '../Assets/Icons/Checkquality.svg';

function Benefit() {
    const containerStyle: React.CSSProperties = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div className='py-10' style={containerStyle}>
            <div className='text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold py-2'>
                    Easy, fast and efficient
                </h1>
                <p className='text-sm pb-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio
                </p>
            </div>
            <div className='w-10/12 block md:flex lg:flex xl:flex md:gap-3 lg:gap-6 xl:gap-6 gap-2 justify-between md:w-11/12 lg:w-10/12 xl:w-8/12 mx-auto'>
                <div className='m-4 md:m-0 flex flex-col relative md:h-custom md:px-4 rounded-custom px-6 py-5 bg-white'>
                    <RPC />
                    <h1 className='font-semibold leading-5 py-3'>
                        Reach potential customers
                    </h1>
                    <p className='text-xs pb-6'>
                        vel gravida arcu porttitor non. Vestibulum massa sapien, facilisis sed mattis id.
                    </p>
                    <div className='md:absolute bottom-0 left-6 right-6  border-t border-gray-300'>
                        <button className=' text-xs md:text-xs lg:text-sm font-semibold py-6 flex gap-2 justify-start items-center'>

                            Contact seller
                            <Arrow />
                        </button>
                    </div>
                </div>
                <div className='m-4 md:m-0 flex flex-col relative md:px-4 rounded-custom px-6 py-5 bg-white'>
                    <Dreamhouse />
                    <h1 className='font-semibold leading-5 py-3'>
                        Own your dream home
                    </h1>
                    <p className='text-xs pb-6'>
                        vel gravida arcu porttitor non. Vestibulum massa sapien, facilisis sed mattis id.
                    </p>
                    <div className='md:absolute bottom-0 left-6 right-6  border-t border-gray-300'>
                         <button className=' text-xs md:text-xs lg:text-sm font-semibold py-6 flex gap-2 justify-start items-center'>

                            Contact seller
                            <Arrow />
                        </button>
                    </div>
                </div>
                <div className='m-4 md:m-0 flex flex-col relative md:px-4 rounded-custom px-6 py-5 bg-white'>
                    <Passiveicon />
                    <h1 className='font-semibold leading-5 py-3'>
                        Increase passive income by renting out your property
                    </h1>
                    <p className='text-xs pb-6'>
                        vel gravida arcu porttitor non. Vestibulum massa sapien, facilisis sed mattis id.
                    </p>
                    <div className='md:absolute bottom-0 left-6 right-6  border-t border-gray-300'>
                        <button className=' text-xs md:text-xs lg:text-sm font-semibold py-6 flex gap-2 justify-start items-center'>

                            Contact seller
                            <Arrow />
                        </button>
                    </div>
                </div>
                <div className='m-4 md:m-0 flex flex-col relative md:px-4 rounded-custom px-6 py-5 bg-white'>
                    <Checkquality />
                    <h1 className='font-semibold leading-5 py-3'>
                        Check quality, check for scam before buying
                    </h1>
                    <p className='text-xs pb-6'>
                        vel gravida arcu porttitor non. Vestibulum massa sapien, facilisis sed mattis id.
                    </p>
                    <div className='md:absolute bottom-0 left-6 right-6  border-t border-gray-300'>
                        <button className=' text-xs md:text-xs lg:text-sm font-semibold py-6 flex gap-2 justify-start items-center'>
                            Contact seller
                            <Arrow />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit