import React from 'react';
import InputField from "../InputField";

function ChangePassword() {
    return (
        <div className='p-10 flex flex-col gap-10'>
            <div className='flex w-full gap-5'>
                <InputField name='Old Password' type='text' className='w-full'/>
            </div>
            <div className='flex w-full gap-5'>
                <InputField name='New Password' type='password' className='w-full'/>
            </div>
            <div className='flex w-full gap-5'>
                <InputField name='Confirm Pawword' type='password' className='w-full'/>
            </div>
            <div className='flex w-full gap-5'>
                <button className='bg-custom-midnightgreen text-white py-2 px-12 font-semibold rounded-custom border-0'>
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default ChangePassword