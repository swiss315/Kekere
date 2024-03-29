import React from 'react';
import InputField from "../InputField";
import SelectField from "../SelectField";

function PersonalInformation() {
    let gender = [
        {
            value: 'male',
            label: 'Male'
        },
        {
            value: 'female',
            label: 'Female'
        }
    ]
    let diaspora = [
        {
            value: 'yes',
            label: 'Yes'
        },
        {
            value: 'no',
            label: 'No'
        }
    ]
    return (
        <div className='p-4 md:p-10 flex flex-col gap-10'>
            <div className='flex w-full gap-5'>
                <InputField name='First Name' type='text' className='w-1/2'/>
                <InputField name='Last Name' type='text' className='w-1/2'/>
            </div>
            <div className='flex w-full gap-5'>
                <InputField name='Maiden Name' type='text' className='w-1/2'/>
                <InputField name='Email Address' type='email' className='w-1/2'/>
            </div>
            <div className='flex w-full gap-5'>
                <SelectField name='Gender' option={gender} className='w-1/2'/>
                <SelectField name='Are you in diaspora' option={diaspora} className='w-1/2'/>
            </div>
            <div className='flex w-full gap-5'>
                <InputField name='Date Of Birth' type='date' className='w-1/2'/>
                <SelectField name='Country' option={diaspora} className='w-1/2'/>
            </div>
            <div className='flex w-full gap-5'>
                <InputField name='Phone Number' type='tel' className='w-1/2'/>
            </div>

            <div className='w-full py-5 px-4' style={{backgroundColor: '#F0EEEE'}}>
                <h1 className='text-2xl font-bold uppercase'>
                    Identification
                </h1>
            </div>

            <div className='flex w-full gap-5'>
                <SelectField name='Id Type' option={gender} className='w-full'/>
            </div>
            <div className='flex w-full gap-5'>
                <InputField name='Id Number' type='text' className='w-full'/>
            </div>
            <div className='flex w-full gap-5'>
                <button className='bg-custom-midnightgreen text-white py-2 px-12 font-semibold rounded-custom border-0'>
                    Save Changes
                </button>
            </div>
        </div>
    )
}

export default PersonalInformation