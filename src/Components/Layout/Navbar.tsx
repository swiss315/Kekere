import React, {Fragment, useState} from 'react'
import {ReactComponent as Logo} from "../../Assets/Icons/Logo.svg";
import {ReactComponent as LoginIcon} from "../../Assets/Icons/Loginicon.svg";
import {ReactComponent as RegisterIcon} from "../../Assets/Icons/Registericon.svg";
import { Menu, Transition } from '@headlessui/react'
import {Link} from "react-router-dom";
import LoginModal from "../LoginModal";

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='lg:flex lg:justify-center md:flex md:justify-center navbar p-3'>
            <div className='flex justify-between md:w-full lg:w-10/12'>
                <Link to='/'>
                    <Logo className='w-7/12 lg:w-full md:w-full' />
                </Link>
                <ul className='hidden md:flex lg:flex justify-between self-center md:gap-3 items-center gap-6 h-fit font-semibold'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li>Contact</li>
                </ul>
                <div className='md:hidden hidden lg:flex justify-between gap-4 self-center'>
                    <Link to='/login' className='flex justify-between h-fit p-2 items-center '>
                        <div className='flex justify-center px-1.5' >
                            <LoginIcon />
                        </div>
                        <span className='self-center font-bold'>Login</span>
                    </Link>
                    <Link to='/register' className='flex justify-between self-center items-center h-fit bg-custom-darkgreen rounded border-0 text-white p-2'>
                        <div className='flex justify-center px-1.5' >
                            <RegisterIcon className='' />
                        </div>
                        <div className='border-l border-gray-400 font-bold px-3 flex flex-row'>Register</div>
                    </Link>
                </div>
                <Menu as="div" className="md:inline-block relative lg:hidden self-center text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <LoginIcon />
                            {/*<ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }: { active: boolean }) => (
                                        <a
                                            href="#0"
                                            onClick={() => setIsOpen(true)}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Login
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }: { active: boolean }) => (
                                        <a
                                            href="#0"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Sign Up
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <ul className='mt-3.5 flex md:hidden lg:hidden justify-center self-center md:gap-3 items-center py-2.5 gap-3 h-fit font-semibold border-t'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li>Contact</li>
            </ul>
            <LoginModal isOpen={isOpen} onHide={() => setIsOpen(false)} />
        </div>
    )
}
export default Navbar