import React from 'react';
import SelectField from "../../SelectField";
import InputField from "../../InputField";
import {ArrowCircleLeft2} from "iconsax-react";

function AddBank(props: any) {
    let banks = [
        {
            value: 'bni',
            label: 'BNI'
        }
    ]
    return (
         <div className='flex flex-col gap-3.5'>
            <ArrowCircleLeft2 size="32" color="#20996B" className='cursor-pointer' variant="Bold" onClick={() => props.close()}/>
            <h1 className='text-3xl font-bold pt-2.5 pb-5'>Banks</h1>
            <div className='flex w-full gap-5 py-1.5'>
                <InputField name='Account Number' type='text' className='w-1/2'/>
                <SelectField name='Select Bank' option={banks} className='w-1/2'/>
            </div>
            <div className='flex w-full gap-5 py-1.5'>
                <InputField name='Account Name' type='text' className='w-full'/>
            </div>
            <div className='flex w-full gap-5 py-1.5'>
                <button className='bg-custom-midnightgreen text-white py-2 px-12 font-semibold rounded-custom border-0'>
                    Save Changes
                </button>
            </div>

        </div>
    )
}

export default AddBank