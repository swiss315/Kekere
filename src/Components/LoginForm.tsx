import React, {useState} from "react";
import {ReactComponent as EmailIcon} from '../Assets/Icons/Emailiconwhite.svg';
import {ReactComponent as PasswordIcon} from '../Assets/Icons/passwordicon.svg';
import {Link} from "react-router-dom";
import {useLogin} from "../Hooks/Login";
import {ReactComponent as HomeAbstract} from "../Assets/Images/homeabstract.svg";
import {ReactComponent as GoogleIcon} from '../Assets/Icons/GoogleIcon.svg';
import {ReactComponent as FacebookIcon} from '../Assets/Icons/FacebookIcon.svg';

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
            <div className='relative overflow-hidden flex flex-col ' style={{height: '90vh'}}>
                <div className='w-full hidden md:flex'>
                    <HomeAbstract className='abstract'/>
                </div>
                <div className=' absolute top-0 h-screen flex flex-col  items-center w-full' style={{backgroundColor: '#0000000D'}}>
                    <div className='bg-white rounded-xl w-11/12 md:w-6/12 lg:w-5/12 xl:w-4/12 overflow-hidden border border-input-color my-12'
                         style={{boxShadow: '0px 2px 8px 2px #8C8C8C1A'}}>
                        <form className='w-full p-7' onSubmit={submitLogin}>
                            <div className='flex justify-between'>
                                <h3 className='font-semibold text-xl'>
                                    Login
                                </h3>
                            </div>
                            <div className='pt-6 pb-4'>
                                <label className='font-semibold text-sm pb-2'>
                                    Account
                                </label>
                                <div className="relative">
                                    <EmailIcon
                                        className="absolute w-4 h-4 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input required onChange={(e) => setData({...data, email: e.target.value})}
                                           className="text-xs focus-visible:outline-0 w-full p-2 pl-10 border border-input-color rounded-custom"
                                           type="text" placeholder="Enter your email"/>
                                </div>
                            </div>
                            <div className=''>
                                <label className='font-semibold text-sm pb-2'>
                                    Password
                                </label>
                                <div className="relative">
                                    <PasswordIcon
                                        className="absolute w-4 h-4 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input required onChange={(e) => setData({...data, password: e.target.value})}
                                           className="focus-visible:outline-0 text-xs w-full p-2 pl-10 border border-input-color rounded-custom"
                                           type="password" placeholder="Enter your email"/>
                                </div>
                            </div>
                            <div className='text-end text-custom font-semibold cursor-pointer py-1 text-xs'>
                                <Link to='/forgotpassword'>Forgot Password</Link>
                            </div>
                            <div className='pb-4'>
                                {error && <p className='text-red-500 text-xs italic'>{error}</p>}
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    className='text-sm md:text-md w-1/2 pt-3 mt-3.5 bg-custom-darkgreen text-white font-semibold rounded-custom py-2'>
                                    Login
                                </button>
                            </div>
                            <p className='text-xs text-center py-5'>or Register with</p>
                            <div className='flex justify-center mx-auto gap-4 w-full lg:w-11/12'>
                                <button type='button'
                                        className='text-xs bg-black flex gap-2 px-2 justify-center items-center w-full border-custom font-semibold text-white border py-2 rounded'>
                                    <GoogleIcon/> Sign In with Google
                                </button>
                                <button type='button'
                                        className='text-xs flex gap-2 px-2 justify-center items-center w-full border-custom font-semibold border py-2 rounded text-white'
                                        style={{backgroundColor: '#1877F2'}}>
                                    <FacebookIcon/> Login with Facebook
                                </button>
                            </div>
                            <div className='text-center py-3 text-xs'>
                                <p>Dont't you have an account?
                                    <Link to='/register' className='font-semibold text-custom-green'>Register</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm