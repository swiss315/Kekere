import React from 'react'
import  {ReactComponent as CustomerChat} from '../Assets/Icons/customerchat.svg'
import  {ReactComponent as ArrowDown} from '../Assets/Icons/arrowdown.svg'
import Review from '../Assets/Images/testimonial.png'

function Customer() {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-black pb-3.5'>
                    From our happy customers
                </h1>
                <p className='text-custom text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tristique metus proin id lorem odio</p>
            </div>
            <div className='w-10/12 lg:w-10/12 md:w-11/12 xl:w-8/12 mx-auto flex gap-7 py-12 justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='customerCard flex flex-col items-center justify-center text-center p-6'>
                        <CustomerChat/>
                        <p className='italic text-sm py-4'>
                            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tortor justo.
                            Vestibulum vitae vulputate lacus. Aliquam sollicitudin mauris odio. Fusce egestas
                            consectetur semper vulputate ”
                        </p>
                    </div>
                    <ArrowDown/>
                    <div className='flex flex-col justify-center items-center py-2'>
                        <img src={Review} alt='testimonial' className='max-w-min py-4'/>
                        <p className='text-sm font-semibold text-black'>Esther Howard</p>
                        <p className='text-custom text-sm'>Internet Security Assistant</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='customerCard flex flex-col items-center justify-center text-center p-6'>
                        <CustomerChat/>
                        <p className='italic text-sm py-4'>
                            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tortor justo.
                            Vestibulum vitae vulputate lacus. Aliquam sollicitudin mauris odio. Fusce egestas
                            consectetur semper vulputate ”
                        </p>
                    </div>
                    <ArrowDown/>
                    <div className='flex flex-col justify-center items-center py-2'>
                        <img src={Review} alt='testimonial' className='max-w-min py-4'/>
                        <p className='text-sm font-semibold text-black'>Esther Howard</p>
                        <p className='text-custom text-sm'>Internet Security Assistant</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='customerCard flex flex-col items-center justify-center text-center p-6'>
                        <CustomerChat/>
                        <p className='italic text-sm py-4'>
                            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tortor justo.
                            Vestibulum vitae vulputate lacus. Aliquam sollicitudin mauris odio. Fusce egestas
                            consectetur semper vulputate ”
                        </p>
                    </div>
                    <ArrowDown/>
                    <div className='flex flex-col justify-center items-center py-2'>
                        <img src={Review} alt='testimonial' className='max-w-min py-4'/>
                        <p className='text-sm font-semibold text-black'>Esther Howard</p>
                        <p className='text-custom text-sm'>Internet Security Assistant</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer