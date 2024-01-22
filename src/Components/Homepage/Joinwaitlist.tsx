import React from "react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import WaitlistImage from '../../Assets/Images/WaitlistImage.png'

function JoinWaitList(props: any) {
    const containerStyle: React.CSSProperties = {
        backgroundImage: `url(${WaitlistImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
                    <div className="fixed inset-0 bg-black/90" style={containerStyle} />
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
                            <Dialog.Panel className="w-full transform overflow-hidden border-wait-list border-4 lg:max-w-[35%] rounded-2xl bg-black text-left align-middle shadow-xl transition-all">
                                <div className='lg:p-14 p-6'>
                                    <h1 className='font-bold text-white text-center text-4xl'>We’re Glad To Have You!</h1>
                                    <p className='text-sm text-white text-center font-semibold py-2'>Thank you for your interest in kekere, kindly fill out the form to get notified when we launch</p>
                                    <form>
                                        <div className='py-3'>
                                            <label className='text-sm font-semibold text-white' >
                                                Full name
                                            </label>
                                            <input type='text' placeholder='Enter Full name' className='border-b border-gray-400 w-full text-white focus-visible:border-wait-list text-sm p-4 outline-0 bg-inherit' />
                                        </div>
                                        <div className='py-3'>
                                            <label className='text-sm font-semibold text-white' >
                                                Phone Number
                                            </label>
                                            <input type='text' placeholder='Enter Phone Number' className='border-b border-gray-400 w-full text-white focus-visible:border-wait-list text-sm p-4 outline-0 bg-inherit' />
                                        </div>
                                        <div className='py-3'>
                                            <label className='text-sm font-semibold text-white' >
                                                Email Address
                                            </label>
                                            <input type='email' placeholder='Enter Email address' className='border-b border-gray-400 w-full text-white focus-visible:border-wait-list text-sm p-4 outline-0 bg-inherit' />
                                        </div>
                                        <div className='w-full justify-center gap-4 flex mt-5'>
                                            {/*<input type='text' placeholder='Your Email' className='border-custom border w-7/12 rounded-custom text-sm py-3.5 px-2'/>*/}
                                            <button  className='rounded-custom text-white bg-custom-darkgreen border border-white font-semibold py-3.5 px-8'>
                                                Join WaitList
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default JoinWaitList