import React, {useState} from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {Bank} from "iconsax-react"
import {ReactComponent as NoAccount} from '../../Assets/Icons/noaccount.svg'
import {Link} from "react-router-dom";

function WithdrawalModal(props :any) {
    const [cont, setContinue] = useState(false)
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
                                        <h1 className='font-semibold text-xl'>Withdraw</h1>
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
                                        <div className={`flex flex-col gap-y-3.5 ${cont ? 'hidden' : ''}`}>
                                            <div className="bg-custom-light-green rounded-custom flex items-center gap-x-3.5 p-4">
                                                <Bank size="32" color="#20996B" variant="Bold"/>
                                                <p className='text-sm'>To Bank Account</p>
                                            </div>
                                            <button onClick={() => setContinue(true)}
                                                    className='btn bg-custom-midnightgreen rounded-custom border-0 text-sm font-bold text-white py-3'>
                                                Continue
                                            </button>
                                        </div>
                                        <div className={`flex flex-col justify-center items-center gap-y-3.5 ${cont ? '' : 'hidden'}`}>
                                            <NoAccount />
                                            <p className='text-sm'>You don’t have any beneficiary yet</p>
                                            <Link to="/setting?tab=bankandcard"
                                                className='text-center w-full btn bg-custom-midnightgreen rounded-custom border-0 text-sm font-bold text-white py-3'>
                                                Add Account
                                            </Link>
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

export default WithdrawalModal