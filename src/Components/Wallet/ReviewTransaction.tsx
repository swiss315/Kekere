import React from "react";

function ReviewTransaction(props: any) {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <div className='w-6/12 rounded-3xl bg-white mx-auto py-6 px-16 flex justify-between'>
                    <div className='w-full'>
                        <h1 className='font-bold pb-3 text-2xl '>
                            Review Transaction
                        </h1>
                        <div className='flex flex-col gap-y-3.5'>
                            <div className='flex justify-between w-full py-3 px-4 border-b border-custom'>
                                <p>
                                    Amount of Slots
                                </p>
                                <p className='font-semibold'>
                                    3 slots
                                </p>
                            </div>
                            <div className='flex justify-between w-full py-3 px-4 border-b border-custom'>
                                <p>
                                    Amount
                                </p>
                                <p className='font-semibold'>
                                    ₦18,000,000.00
                                </p>
                            </div>
                            <div className='flex justify-between w-full py-3 px-4 border-b border-custom'>
                                <p>
                                    Processing Fee
                                </p>
                                <p className='font-semibold'>
                                    ₦5,080
                                </p>
                            </div>
                            <div className='flex justify-between w-full py-3 px-4 border-b border-custom'>
                                <p>
                                    Total Amount
                                </p>
                                <p className='font-semibold'>
                                    ₦18,005,080
                                </p>
                            </div>
                            <div className='my-4'>
                                <button type='button'
                                        className='bg-custom-midnightgreen w-full py-3 text-white rounded-custom font-bold px-6 text-xs'
                                        onClick={() => props.onHide()}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewTransaction;