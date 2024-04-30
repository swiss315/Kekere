import React, {useState} from "react";
import {ReactComponent as UserIcon} from '../Assets/Icons/usernamicon.svg';
import {ReactComponent as EmailIcon} from '../Assets/Icons/Emailiconwhite.svg';
import {ReactComponent as PasswordIcon} from '../Assets/Icons/passwordicon.svg';
import {Link} from "react-router-dom";
import {ReactComponent as HomeAbstract} from "../Assets/Images/homeabstract.svg";
import {ReactComponent as GoogleIcon} from '../Assets/Icons/GoogleIcon.svg';
import {ReactComponent as FacebookIcon} from '../Assets/Icons/FacebookIcon.svg';
import {useRegister} from "../Hooks/Register";

function CoownSignup() {
    const {register, } = useRegister()
    const [data, setData] = useState({
        "name" : "",
        "email" : "",
        "password" : "",
        "re_password" : "",
        "bvn":"",
        "phone":"",
        "first_name":"",
        "last_name":""
    })
    const [passwordError, setPasswordError] = useState<string>('')
    const setOnChange = (e: any) => {
        if (e.target.name === "re_password"){
            if (e.target.value === data.password){
                setData({...data, re_password: e.target.value})
                setPasswordError("")
            }
            else{
                setData({...data, re_password: ""})
                setPasswordError("Passwords do not match")
            }
        }else {
            setData({...data, [e.target.name]: e.target.value})
        }
    }


    const submitRegister = (e: any) => {
        e.preventDefault()
        console.log(data)
        register(data)
    }
    return(
        <div>
            <div className='relative overflow-hidden' style={{height: '90vh'}}>
                <div className='w-full hidden md:flex'>
                    <HomeAbstract className='abstract'/>
                </div>
                <div className=' absolute top-0 h-screen flex flex-col items-center w-full' style={{backgroundColor: '#0000000D'}}>
                    <div className='bg-white rounded-xl md:h-3/4 xl:h-fit md:w-6/12 lg:w-5/12 xl:w-4/12 w-11/12 overflow-auto border border-input-color my-8'
                         style={{boxShadow: '0px 2px 8px 2px #8C8C8C1A'}}>

                        <form autoComplete="off" className='p-7 bg-white' onSubmit={submitRegister}>
                            <div className='flex justify-between'>
                                <h3 className='font-semibold text-xl'>
                                    Register
                                </h3>
                            </div>
                            <div className='py-4'>
                                <label className='font-semibold text-sm pb-2'>
                                    Username
                                </label>
                                <div className="relative">
                                    <UserIcon
                                        className="absolute w-4 h-4 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input autoComplete='off' name='name' onChange={setOnChange} required
                                           className="focus-visible:outline-0 text-xs w-full p-2 pl-10 border border-input-color rounded-custom"
                                           type="text" placeholder="Enter your username"/>
                                </div>
                            </div>
                            <div className='pb-3'>
                                <label className='font-semibold text-sm pb-2'>
                                    Email
                                </label>
                                <div className="relative">
                                    <EmailIcon
                                        className="absolute w-4 h-4 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input autoComplete='off' name='email' onChange={setOnChange} required
                                           className="focus-visible:outline-0 text-xs w-full p-2 pl-10 border border-input-color rounded-custom"
                                           type="email" placeholder="Enter your username"/>
                                </div>
                            </div>
                            <div className='pb-3'>
                                <label className='font-semibold text-sm pb-2'>
                                    Phone Number
                                </label>
                                <div className="relative">

                                    <input name='phone' onChange={setOnChange} required
                                           className="focus-visible:outline-0 text-xs w-full p-2 pl-10 border border-input-color rounded-custom"
                                           type="text" placeholder="Enter your username"/>
                                </div>
                            </div>
                            {/*<div className='pb-3'>*/}
                            {/*    <label className='font-semibold text-sm pb-2'>*/}
                            {/*        BVN*/}
                            {/*    </label>*/}
                            {/*    <div className="relative">*/}

                            {/*        <input name='bvn' onChange={setOnChange} required*/}
                            {/*               className="focus-visible:outline-0 text-xs w-full p-2 pl-10 border border-input-color rounded-custom"*/}
                            {/*               type="text" placeholder="Enter your username"/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className='pb-3'>
                                <label className='font-semibold text-sm pb-2'>
                                    Password
                                </label>
                                <div className="relative">
                                    <PasswordIcon
                                        className="absolute w-4 h-4 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input name='password' onChange={setOnChange} required
                                           className="focus-visible:outline-0 text-xs w-full p-2 pl-10 border border-input-color rounded-custom"
                                           type="password" placeholder="Enter your username"/>
                                </div>
                            </div>
                            <div className='pb-3'>
                                <label className='font-semibold text-sm pb-2'>
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <PasswordIcon
                                        className="absolute w-4 h-4 text-gray-500 left-2 top-1/2 transform -translate-y-1/2"/>
                                    <input name='re_password' onChange={setOnChange} required
                                           className="focus-visible:outline-0 text-xs w-full p-2 pl-10 border border-input-color rounded-custom"
                                           type="password" placeholder="Enter your username"/>
                                </div>
                                <div className='pb-3'>
                                    {passwordError && <p className='text-red-500 text-xs italic'>{passwordError}</p>}
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    className='w-6/12 bg-custom-darkgreen text-white font-semibold rounded-custom py-2'>
                                    Sign Up
                                </button>
                            </div>
                            <div className='text-center py-3 text-xs'>
                                <p>Got an account? <Link to='/login'
                                                         className='font-semibold text-custom-green'>Login</Link></p>
                            </div>
                            <p className='text-xs text-center'>or Register with</p>
                            <div className='flex justify-center mx-auto gap-4 pt-3 w-full lg:w-11/12'>
                                <button type='button'
                                        className='text-xs bg-black flex gap-2 px-2 justify-center items-center w-full border-custom font-semibold text-white border py-2 rounded'>
                                    <GoogleIcon/> Sign In with Google
                                </button>
                                <button type='button'
                                        className='text-xs flex gap-2 px-2 justify-center items-center w-full border-custom font-semibold border py-2 rounded text-white' style={{backgroundColor: '#1877F2'}}>
                                    <FacebookIcon/> Login with Facebook
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CoownSignup