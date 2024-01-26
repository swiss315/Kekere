import React from 'react';
import {ArrowCircleLeft2} from "iconsax-react";

function paymentMode() {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <div className='flex items-center gap-2 py-4 cursor-pointer'>
                    <ArrowCircleLeft2 size="42" variant="Bold" color="#20996B"/>
                </div>
            </div>
        </div>
    )
}