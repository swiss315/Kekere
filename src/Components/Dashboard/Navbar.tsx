import React from 'react'
import {Link, useLocation} from "react-router-dom";
import {ReactComponent as Logo} from "../../Assets/Icons/Logo.svg";
import {ReactComponent as Searchmagnify} from "../../Assets/Icons/searchmagnify.svg";
import {ReactComponent as Flag} from "../../Assets/Icons/flag.svg";
import {ReactComponent as Fullscreen} from "../../Assets/Icons/fullscreen.svg";
import {ReactComponent as Notification} from "../../Assets/Icons/notification.svg";
import {Element3, HambergerMenu, Wallet3, Briefcase} from "iconsax-react";


function Navbar() {
    const location = useLocation();
    let pageName = location.pathname;
    pageName = pageName.slice(1);

    const Dashboard = [
        {
            Name: 'Dashboard',
            pathname: 'dashboard',
            icon: Element3
        },
        {
            Name: 'Portfolio',
            pathname: 'portfolio',
            icon: Briefcase
        },
        {
            Name: 'Listing',
            pathname: 'listing',
            icon: HambergerMenu
        },
        {
            Name: 'Wallet',
            pathname: 'wallet',
            icon: Wallet3
        },
    ]

    return (
        <div className='navbarshadow'>
            <div className='lg:w-11/12 mx-auto'>
                <div className=' flex justify-between'>
                    <div className='flex gap-5 justify-center items-center'>
                        <Link to='/'>
                            <Logo className='w-7/12 lg:w-full md:w-full h-10'/>
                        </Link>
                        <div className='flex bg-custom-light-grey rounded-md h-fit self-center p-3'>
                            <Searchmagnify/>
                            <input type='text'
                                   className='border-0 bg-custom-light-grey focus-visible:outline-0 rounded-md'
                                   placeholder='Search...'/>
                        </div>
                    </div>
                    <div className='flex gap-5 justify-center items-center'>
                        <div>
                            <Flag className='w-7/12 lg:w-full md:w-full'/>
                        </div>
                        <div>
                            <Fullscreen className='w-7/12 lg:w-full md:w-full'/>
                        </div>
                        <div>
                            <Notification className='w-7/12 lg:w-full md:w-full'/>
                        </div>
                        <div className='flex bg-custom-light-grey p-3'>
                            <Searchmagnify className='self-center'/>
                            <div>
                                <h5 className='font-semibold text-sm'>
                                    Laguda Temitayo
                                </h5>
                                <p className='text-sm'>Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className='flex p-3 px-6 gap-10 items-center'>
                        {
                            Dashboard.map((dashboard, index) => {
                                return (
                                    <Link to={dashboard.pathname} key={index} className={`flex gap-1 text-sm cursor-pointer ${pageName === dashboard.pathname ? 'bg-custom-midnightgreen rounded-full p-2 px-4 text-white' : 'text-custom'}`}>
                                        <dashboard.icon size="18" color={pageName === dashboard.pathname ? '#ffffff' : '#6D7080'}/>
                                        <span>{dashboard.Name}</span>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar