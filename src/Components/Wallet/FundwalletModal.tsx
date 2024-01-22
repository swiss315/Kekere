import React, {useEffect, useState} from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {Copy} from "iconsax-react";
import Loader from "../Loader/Loader";

function FundwalletModal(props :any) {
    const [open, setOpen] = useState(false)
    const [time, setTime] = useState(300)
    let countdownInterval: string | number | NodeJS.Timer | undefined;

    const padZero = (value: number) => (value < 10 ? `0${value}` : value);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
    };

    const [timerText, setTimerText] = useState(formatTime(time));

    const handleOpen = () => {
        setOpen(true);

        countdownInterval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(countdownInterval);
                    setOpen(false); // Reset the state when the countdown is finished
                    return 0;
                }
            });

            setTimerText(formatTime(time - 1));
        }, 1000);
    };
    return (
        <Transition appear show={props.isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={props.onHide}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25"/>
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full transform overflow-hidden max-w-[35%] rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                <div>
                                    <div className="flex items-center justify-between px-8 py-5 border border-custom border-b-2" style={{boxShadow: '0px 2px 8px 2px #8C8C8C1A'}}>
                                        <h1 className='font-semibold text-xl'>Fund Wallet</h1>
                                        <div className="flex items-center">
                                            <button
                                                type="button"
                                                className="text-gray-400 focus:outline-none focus:text-gray-600"
                                                onClick={props.onHide}
                                            >
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='py-7 pb-10 w-10/12 mx-auto '>
                                        <div className={`flex flex-col gap-y-3.5 ${open ? 'hidden' : ''}`}>
                                            <div
                                                className="bg-custom-light-green rounded-custom flex flex-col gap-y-3.5 p-4">
                                                <div>
                                                <span
                                                    className='text-xs font-semibold text-custom uppercase'>Bank Name</span>
                                                    <p className='text-xs pt-1 font-semibold'>Wema Bank</p>
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <div>
                                                        <span className='text-xs font-semibold text-custom uppercase'>Account Number</span>
                                                        <p className='text-xs pt-1 font-semibold'>1234567890</p>
                                                    </div>
                                                    <Copy size="20" color="#727272"/>
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <div>
                                                        <span
                                                            className='text-xs font-semibold text-custom uppercase'>Amount</span>
                                                        <p className='text-xs pt-1 font-semibold'>NGN 16,000,000.00</p>
                                                    </div>
                                                    <Copy size="20" color="#727272"/>
                                                </div>
                                            </div>
                                            <button onClick={() => handleOpen() }
                                                className='btn bg-custom-midnightgreen rounded-custom border-0 text-sm font-bold text-white py-3'>I've
                                                sent the money
                                            </button>
                                        </div>
                                        <div className={`flex flex-col justify-center items-center gap-y-3.5  ${open ? '' : 'hidden'}`}>
                                            <p className=' text-xs text-center font-bold '>
                                                We’re waiting to confirm your transfer .<br />
                                                This can take few minutes
                                            </p>
                                            <div className='py-7'>
                                                <Loader />
                                            </div>
                                            <button className='text-custom text-sm border-2 border-custom py-1.5 rounded-full w-full my-2'>Please wait for {timerText} minutes</button>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default FundwalletModal