import React from 'react'
import {ReactComponent as FundWallet} from "../Assets/Icons/fundwallet.svg";
import {ArrowRight, Bank} from "iconsax-react";

function Wallet() {
    return (
        <div className='py-10'>
            <div className='rounded-3xl bg-white w-11/12 mx-auto flex flex-col md:flex-row'>
                <div className='border-r-0 md:border-r border-custom w-full md:w-7/12 lg:w-8/12 py-12 px-7 lg:px-11'>
                    <h1 className='text-2xl font-bold pb-6 '>
                        Personal Wallet
                    </h1>
                    <div className='flex gap-8 flex-wrap lg:flex-nowrap'>
                        <div className='rounded-2xl bg-custom-light-green w-full p-4'>
                            <div className='flex lg:gap-x-2.5 xl:gap-x-3.5 items-center'>
                                <span
                                    className='flex justify-center w-8 h-8 bg-white rounded-full text-custom-darkgreen font-bold text-xl text-center items-center'>₦</span><span
                                className='text-xs'>Naira Account</span>
                            </div>
                            <p className='text-sm pt-5'>Balance</p>
                            <p className=' font-bold text-2xl pt-3.5 pb-7'>₦900,000,000.00</p>
                            <button className='text-xs rounded-full bg-custom-midnightgreen text-white px-4 py-2'>Fund
                                Wallet
                            </button>
                        </div>
                        <div className='rounded-2xl bg-custom-light-purple opacity-40 w-full p-4'>
                            <div className='flex gap-x-3.5 items-center'>
                                <span
                                    className='flex justify-center w-8 h-8 bg-white rounded-full text-custom-darkpurple font-bold text-xl text-center items-center'>$</span><span
                                className='text-xs'>Dollar Account</span>
                            </div>
                            <p className='text-sm pt-5'>Balance</p>
                            <p className=' font-bold text-2xl pt-3.5 pb-7'>$000000</p>
                            <button className='text-xs rounded-full bg-black text-white px-4 py-2'>
                                Coming soon
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-5/12 lg:w-4/12 py-12 px-7 lg:px-11'>
                    <div className='rounded-xl border border-custom overflow-hidden'>
                        <button className=' border border-custom flex justify-between p-4 w-full'>
                            <div className='flex items-center gap-2'>
                                <div className='w-8 h-8 flex justify-center items-center bg-custom-midnightgreen rounded-full'>
                                    <FundWallet/>
                                </div>
                                <span className='text-xs font-semibold'>Fund Wallet</span>
                            </div>
                            <ArrowRight size="32" color="#000000"/>
                        </button>
                        <button className='border border-custom flex justify-between p-4 w-full'>
                            <div className='flex items-center gap-2'>
                                <div className='w-8 h-8 flex justify-center items-center bg-custom-midnightgreen rounded-full'>
                                    <Bank size="20" color="#d9e3f0"/>
                                </div>
                                <span className='text-xs font-semibold'>Add bank & card</span>
                            </div>
                            <ArrowRight size="32" color="#000000"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet