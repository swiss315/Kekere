import React from 'react';
import InputField from "../InputField";
import SelectField from "../SelectField";

function NextOfKin() {
    let relationship = [
        {
            value: 'brother',
            label: 'Brother'
        },
        {
            value: 'sister',
            label: 'Sister'
        },
        {
            value: 'father',
            label: 'Father'
        },
        {
            value:'mother',
            label: 'Mother'
        },
        {
            value: 'daughter',
            label: 'Daughter'
        },
        {
            value: 'uncle',
            label: 'Uncle'
        },
        {
            value: 'son',
            label: 'Son'
        }
    ]
    return (
        <div className='p-10 flex flex-col gap-10'>
            <div className='flex w-full gap-5'>
                <InputField name='Full Name' type='text' className='w-full'/>
            </div>
            <div className='flex w-full gap-5'>
                <InputField name='Email Address' type='email' className='w-full'/>
            </div>
            <div className='flex w-full gap-5'>
                <InputField name='Phone Number' type='tel' className='w-full'/>
            </div>
            <div className='flex w-full gap-5'>
                <SelectField name='Gender' option={relationship} className='w-full'/>
            </div>
            <div className='flex w-full gap-5'>
                <InputField name='Location' type='text' className='w-full'/>
            </div>
            <div className='flex w-full gap-5'>
                <button className='bg-custom-midnightgreen text-white py-2 px-12 font-semibold rounded-custom border-0'>
                    Save Changes
                </button>
            </div>

        </div>
    )
}

export default NextOfKin