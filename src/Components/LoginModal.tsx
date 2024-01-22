import React from "react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import loginImg from '../Assets/Images/LoginImg.png'
import {ReactComponent as CancelIcon} from '../Assets/Icons/cancel.svg';
import {ReactComponent as GoogleIcon} from '../Assets/Icons/GoogleIcon.svg';
import {ReactComponent as FacebookIcon} from '../Assets/Icons/FacebookIcon.svg';
import {ReactComponent as EmailIcon} from '../Assets/Icons/Emailiconwhite.svg';
import {ReactComponent as PasswordIcon} from '../Assets/Icons/passwordicon.svg';

function LoginModal(props: any) {

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
                    <div className="fixed inset-0 bg-black/25" />
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
                            <Dialog.Panel className="w-full transform overflow-hidden lg:max-w-[75%] xl:max-w-[50%] rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                <div className='flex'>
                                    <div className='w-5/12 hidden md:block'>
                                        <img src={loginImg} alt='signup' className='' />
                                    </div>
                                    <form className='w-full md:w-7/12 p-7 md:pb-0 pt-3.5'>
                                        <div className='flex justify-between'>
                                            <h3 className='font-semibold text-xl'>
                                                Login
                                            </h3>
                                            <CancelIcon onClick={props.onHide} className='cursor-pointer' />
                                        </div>
                                        <div className='pt-6 pb-4'>
                                            <label className='font-semibold text-sm'>
                                                Account
                                            </label>
                                            <div className="relative">
                                                <EmailIcon className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2" />
                                                <input className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom" type="text" placeholder="Enter your username" />
                                            </div>
                                        </div>
                                        <div className='pb-4'>
                                            <label className='font-semibold text-sm'>
                                                Password
                                            </label>
                                            <div className="relative">
                                                <PasswordIcon className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2" />
                                                <input className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom" type="password" placeholder="Enter your username" />
                                            </div>
                                        </div>
                                        <button className='text-sm md:text-md w-full pt-3 mt-3.5 bg-custom-darkgreen text-white font-semibold rounded-custom py-2'>
                                            Sign Up
                                        </button>
                                        <div className='text-end text-custom font-semibold cursor-pointer py-3 text-sm'>
                                            <p>Forgot Password</p>
                                        </div>
                                        <div className='flex gap-2 items-center text-sm'>
                                            <hr className='w-full'/>
                                            <p className='w-full text-custom text-center text-sm md:text-md flex-grow whitespace-nowrap'>or Login with</p>
                                            <hr className='w-full'/>
                                        </div>
                                        {/*Social LoginForm*/}
                                        <div className='flex justify-between gap-4 pt-6'>
                                            <button type='button' className='text-sm md:text-md flex gap-3 items-center w-full border-custom font-semibold border py-3 px-7 rounded-custom'>
                                                <GoogleIcon /> Google
                                            </button>
                                            <button type='button' className='text-sm md:text-md flex gap-3 items-center w-full border-custom font-semibold border py-3 px-3.5 md:px-7 rounded-custom'>
                                                <FacebookIcon /> Facebook
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/*<div className="mt-4">*/}
                                {/*    <button*/}
                                {/*        type="button"*/}
                                {/*        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"*/}
                                {/*        onClick={props.onHide}*/}
                                {/*    >*/}
                                {/*        Got it, thanks!*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default LoginModal