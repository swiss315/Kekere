import React, {useState} from "react";
// import {ReactComponent as RegisterBg} from "../Assets/Images/registerbg.svg"
import {ReactComponent as EmailIcon} from '../Assets/Icons/Emailiconwhite.svg';
import {ReactComponent as PasswordIcon} from '../Assets/Icons/passwordicon.svg';
import {Link} from "react-router-dom";
import {useLogin} from "../Hooks/Login";
import {ReactComponent as HomeAbstract} from "../Assets/Images/homeabstract.svg";

function LoginForm() {
    const {login, error} = useLogin()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const submitLogin = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log(data)
        login(data)
    }
    return (
        <div>
            <div className='relative overflow-hidden' style={{height: '92vh'}}>
                <div className='w-full hidden md:flex'>
                    <HomeAbstract className='abstract'/>
                </div>
                <div className='absolute top-20 flex flex-col items-center justify-center w-full'>
                    <div className='bg-white rounded-xl md:w-6/12 lg:w-5/12 xl:w-4/12 overflow-hidden'
                         style={{boxShadow: '0px 2px 8px 2px #8C8C8C1A'}}>
                        <form className='w-full p-7' onSubmit={submitLogin}>
                            <div className='flex justify-between'>
                                <h3 className='font-semibold text-xl'>
                                    Login
                                </h3>
                            </div>
                            <div className='pt-6 pb-4'>
                                <label className='font-semibold text-sm'>
                                    Account
                                </label>
                                <div className="relative">
                                    <EmailIcon
                                        className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input required onChange={(e) => setData({...data, email: e.target.value})}
                                           className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom"
                                           type="text" placeholder="Enter your email"/>
                                </div>
                            </div>
                            <div className='pb-4'>
                                <label className='font-semibold text-sm'>
                                    Password
                                </label>
                                <div className="relative">
                                    <PasswordIcon
                                        className="absolute w-6 h-6 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input required onChange={(e) => setData({...data, password: e.target.value})}
                                           className="focus-visible:outline-0 w-full p-3 pl-10 border border-input-color rounded-custom"
                                           type="password" placeholder="Enter your email"/>
                                </div>
                            </div>
                            <div className='pb-4'>
                                {error && <p className='text-red-500 text-xs italic'>{error}</p>}
                            </div>
                            <button
                                className='text-sm md:text-md w-full pt-3 mt-3.5 bg-custom-darkgreen text-white font-semibold rounded-custom py-2'>
                                Login
                            </button>
                            <div className='text-end text-custom font-semibold cursor-pointer py-3 text-sm'>
                                <Link to='/forgotpassword'>Forgot Password</Link>
                            </div>
                        </form>

                    </div>
                    <div className='text-center py-3 text-sm'>
                        <p>Got an account? <Link to='/login' className='font-semibold text-custom-green'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm