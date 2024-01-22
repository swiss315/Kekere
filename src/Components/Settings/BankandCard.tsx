import React, {useState} from 'react';
import {AddCircle} from "iconsax-react";
import AddBank from "./BankandCard/AddBank";
import {ReactComponent as CardMap} from "../../Assets/Images/cardmap.svg"
import {ReactComponent as Delete} from "../../Assets/Icons/delete.svg"

function BankAndCard() {
    const [addBank, setBank] = useState(false);
    return (
        <div className='p-5 md:p-10 flex flex-col gap-16'>
            {!addBank ? <div>
                <div>
                    <h1 className='text-3xl font-bold py-5'>Banks</h1>
                    <div className='rounded-custom relative w-fit group mb-4' style={{backgroundColor: '#20996BCC'}}>
                        <CardMap />
                        <div className='absolute top-0 right-0 w-full h-full flex flex-col justify-between p-2.5'>
                            <div className='w-full flex justify-end'>
                                <div className='p-2.5 rounded-full w-fit cursor-pointer md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 '
                                     style={{boxShadow: '0px 4px 4px 0px #00000040', backgroundColor: '#E8E8E8'}}>
                                    <Delete/>
                                </div>
                            </div>
                            <div>
                                <p className='font-bold text-white text-lg py-3'>
                                    LAGUDA TEMITAYO RAHMON
                                </p>
                                <div className=''>
                                    <span className='font-bold block text-white'>
                                       STERLING BANK
                                    </span>
                                    <span className='text-sm font-bold text-white'>
                                        0065511003
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setBank(true)}
                        className='flex gap-3.5 py-1.5 px-4 border-0 rounded-custom items-center text-white text-sm font-semibold'
                        style={{backgroundColor: '#20996B'}}>
                        <AddCircle size="32" color="#ffffff" variant="Bold"/>
                        Add Bank
                    </button>
                </div>
                <div>
                    <h1 className='text-3xl font-bold py-5'>Cards</h1>
                    <button
                        className='flex gap-3.5  py-1.5 px-4 border-0 rounded-custom items-center text-white text-sm font-semibold'
                        style={{backgroundColor: '#20996B'}}>
                        <AddCircle size="32" color="#ffffff" variant="Bold"/>
                        Add New Card
                    </button>
                </div>
            </div> :
                <AddBank close={() => setBank(false)} />}
        </div>
    )
}

export default BankAndCard