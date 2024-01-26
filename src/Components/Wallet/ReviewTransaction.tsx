import React, {useState} from "react";
import {Bank, Wallet} from "iconsax-react";

function ReviewTransaction(props: any) {
    const [paymentMethod, setPaymentMethod] = useState(false)
    const [paymentType, setPaymentType] = useState('')
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                {!paymentMethod ?
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
                                            onClick={() => setPaymentMethod(true)}>
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='w-6/12 rounded-3xl bg-white mx-auto py-6 px-16 flex justify-between'>
                        <div className='w-full'>
                            <h1 className='font-bold pb-3 text-2xl '>
                                Choose a Payment Method
                            </h1>
                            <div className='flex flex-col gap-y-5 py-3'>
                                <div className={`bg-custom-light-green rounded-custom flex items-center gap-x-3.5 p-4 ${paymentType === 'wallet' ? 'border-2 border-custom-darkgreen' : ''}`} onClick={() => setPaymentType('wallet')}>
                                    <Wallet size="32" color="#20996B" variant="Bold"/>
                                    <p className='text-sm'>Wallet</p>
                                </div>
                                <div className={`bg-custom-light-green rounded-custom flex items-center gap-x-3.5 p-4 ${paymentType === 'account' ? 'border-2 border-custom-darkgreen' : ''}`} onClick={() => setPaymentType('account')}>
                                    <Bank size="32" color="#20996B" variant="Bold"/>
                                    <p className='text-sm'>To Bank Account</p>
                                </div>
                            </div>
                            <div className='my-4'>
                                <button type='button'
                                        className='bg-custom-midnightgreen w-full py-3 text-white rounded-custom font-bold px-6 text-xs'
                                        onClick={() => setPaymentMethod(true)}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default ReviewTransaction;