import React from 'react'
import {ReactComponent as FundWallet} from "../Assets/Icons/fundwallet.svg";
import {ArrowRight, Bank, Cards} from "iconsax-react";
import FundwalletModal from "../Components/Wallet/FundwalletModal";
import WithdrawalModal from "../Components/Wallet/WithdrawalModal";

function Wallet() {
    const [isOpen, setIsOpen] = React.useState({
        fundwallet: false,
        withdrawal: false
    });
    const wallet = []
    return (
        <div className='py-10'>
            <div className='rounded-3xl bg-white w-11/12 mx-auto '>
                <div className='flex flex-col md:flex-row py-5 px-5'>
                    <div className='border-r-0 md:border-r border-custom w-full md:w-7/12 lg:w-8/12 py-6 px-2 lg:px-5'>
                        <h1 className='text-2xl font-bold pb-6 '>
                            Personal Wallet
                        </h1>
                        <div className='flex gap-8 flex-wrap lg:flex-nowrap'>
                            <div className='rounded-2xl bg-custom-light-green w-full p-4'>
                                <div className='flex lg:gap-x-2.5 xl:gap-x-3.5 items-center'>
                                <span
                                    className='flex justify-center w-8 h-8 bg-white rounded-full text-custom-darkgreen font-bold text-xl text-center items-center'>₦</span><span
                                    className='text-xs'>Naira Account</span>
                                </div>
                                <p className='text-sm pt-5'>Balance</p>
                                <p className=' font-bold text-2xl pt-3.5 pb-3'>₦900,000,000.00</p>
                                <div className='flex justify-between pb-4'>
                                    <div>
                                        <span className='text-xs'>Account Number</span>
                                        <p className='text-xs pt-1 font-semibold'>1234567890</p>
                                    </div>
                                    <div>
                                        <span className='text-xs'>Account Name</span>
                                        <p className='text-xs pt-1 font-semibold'>Laguda Temitayo</p>
                                    </div>
                                </div>
                                <button
                                    className='text-xs rounded-full bg-custom-midnightgreen text-white px-4 py-2'>Fund
                                    Wallet
                                </button>
                            </div>
                            <div className='rounded-2xl bg-custom-light-purple opacity-40 w-full p-4'>
                                <div className='flex gap-x-3.5 items-center'>
                                <span
                                    className='flex justify-center w-8 h-8 bg-white rounded-full text-custom-darkpurple font-bold text-xl text-center items-center'>$</span><span
                                    className='text-xs'>Dollar Account</span>
                                </div>
                                <p className='text-sm pt-5'>Balance</p>
                                <p className=' font-bold text-2xl pt-3.5 pb-7'>$000000</p>
                                <button className='text-xs rounded-full bg-black text-white px-4 py-2'>
                                    Coming soon
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-5/12 lg:w-4/12 py-12 px-7 lg:px-11'>
                        <div className='rounded-xl border border-custom overflow-hidden'>
                            <button className=' border border-custom flex justify-between p-4 w-full' onClick={() => setIsOpen({...isOpen, fundwallet: true})}>
                                <div className='flex items-center gap-2'>
                                    <div
                                        className='w-8 h-8 flex justify-center items-center bg-custom-midnightgreen rounded-full'>
                                        <FundWallet/>
                                    </div>
                                    <span className='text-xs font-semibold'>Fund Wallet</span>
                                </div>
                                <ArrowRight size="32" color="#000000"/>
                            </button>
                            <button className='border border-custom flex justify-between p-4 w-full' onClick={() => setIsOpen({...isOpen, withdrawal: true})}>
                                <div className='flex items-center gap-2'>
                                    <div
                                        className='w-8 h-8 flex justify-center items-center bg-custom-midnightgreen rounded-full'>
                                        <Bank size="20" color="#d9e3f0"/>
                                    </div>
                                    <span className='text-xs font-semibold'>Withdraw From wallet</span>
                                </div>
                                <ArrowRight size="32" color="#000000"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='py-5 px-10'>
                    <div className=' py-2 border border-custom rounded-custom'>
                        <h1 className='text-2xl font-bold pb-6 px-3.5 '>
                            Transaction History
                        </h1>
                        <table className='w-full'>
                            <thead className='font-semibold text-xs bg-custom-light-green uppercase'>
                                <tr className=''>
                                    <th className='py-4'>S/N</th>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            { wallet.length !== 0 ?
                                <tbody>
                                    <tr className=''>
                                        <td></td>
                                    </tr>
                                </tbody>
                                :
                                <tbody>
                                    <tr>
                                        <td colSpan={6} className=''>
                                            <div className='flex flex-col justify-center items-center w-full py-16'>
                                                <Cards size="64" color="#0F563B"/>
                                                <p className='text-sm pt-1'>You have not made any Transaction Yet </p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            }
                        </table>
                    </div>
                </div>
                <FundwalletModal isOpen={isOpen.fundwallet} onHide={() => setIsOpen({...isOpen, fundwallet: false})}/>
                <WithdrawalModal isOpen={isOpen.withdrawal} onHide={() => setIsOpen({...isOpen, withdrawal: false})} />
            </div>
        </div>
    )
}

export default Wallet