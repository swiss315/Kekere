import React, {useRef} from 'react'
import {Link, useLocation} from "react-router-dom";
import {ReactComponent as Logo} from "../../Assets/Icons/Logo.svg";
// import {ReactComponent as Searchmagnify} from "../../Assets/Icons/searchmagnify.svg";
import {ReactComponent as Flag} from "../../Assets/Icons/flag.svg";
import {ReactComponent as Notification} from "../../Assets/Icons/notification.svg";
import {ReactComponent as Power} from "../../Assets/Icons/power.svg";
import {Element3, Wallet3, Briefcase, User, Setting2} from "iconsax-react";
import {useAuth} from "../../Store/AuthContext";


function Navbar() {
    const location = useLocation();
    const {logout} = useAuth()
    let pageName = location.pathname;
    pageName = pageName.slice(1);

    const Dashboard = [
        {
            Name: 'Dashboard',
            pathname: 'dashboard',
            icon: Element3
        },
        {
            Name: 'Property',
            pathname: 'portfolio',
            icon: Briefcase
        },
        // {
        //     Name: 'Listing',
        //     pathname: 'listing',
        //     icon: HambergerMenu
        // },
        {
            Name: 'Wallet',
            pathname: 'wallet',
            icon: Wallet3
        },
    ]
    const size = useRef(18)

    const sizeSettings = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 390) {
            size.current = 12

        }
    }

    sizeSettings()

    return (
        <div className='navbarshadow'>
            <div className='lg:w-11/12 mx-auto'>
                <div className=' flex justify-between'>
                    <div className='flex gap-5 justify-center items-center'>
                        <Link to='/'>
                            <Logo className='w-full md:w-7/12 lg:w-full md:w-full h-10'/>
                        </Link>
                        {/*<div className='hidden md:flex bg-custom-light-grey rounded-md h-fit self-center p-3'>*/}
                        {/*    <Searchmagnify/>*/}
                        {/*    <input type='text'*/}
                        {/*           className='border-0 bg-custom-light-grey focus-visible:outline-0 rounded-md'*/}
                        {/*           placeholder='Search...'/>*/}
                        {/*</div>*/}
                    </div>
                    <div className='flex gap-10 justify-center items-center'>
                        <div>
                            <Flag className='w-7/12 lg:w-full md:w-full hidden md:block'/>
                        </div>
                        <Link to='setting'>
                            <Setting2 size="22" color="#000000"/>
                        </Link>
                        <div>
                            <Notification className='w-7/12 lg:w-full md:w-full'/>
                        </div>
                        <div>
                            <Power onClick={logout} className='w-7/12 lg:w-full md:w-full cursor-pointer'/>
                        </div>
                        <div className='flex bg-custom-light-grey p-1.5 md:p-3 gap-2 items-center'>
                            <div
                                className='bg-white w-4 h-4 md:w-8 md:h-8 flex justify-center items-center rounded-full'>
                                <User variant="Bold" color='#F3F3F9' className='self-center'/>
                            </div>
                            <div>
                                <h5 className='font-semibold text-xs md:text-xs'>
                                    Laguda Temitayo
                                </h5>
                                <p className='text-xs md:text-xs text-custom'>Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className='flex p-3 px-6 gap-2.5 md:gap-10 items-center justify-center md:justify-start'>
                        {
                            Dashboard.map((dashboard, index) => {
                                return (
                                    <Link to={dashboard.pathname} key={index} className={`flex gap-1 text-xs md:text-sm items-center font-semibold cursor-pointer ${pageName === dashboard.pathname ? 'bg-custom-midnightgreen rounded-full p-2 md:px-4 px-2 text-white' : 'text-custom'}`}>
                                        <dashboard.icon size={size.current} color={pageName === dashboard.pathname ? '#ffffff' : '#6D7080'}/>
                                        <span className={`${pageName === dashboard.pathname ? 'text-white font-semibold' : ''}`}>{dashboard.Name}</span>
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