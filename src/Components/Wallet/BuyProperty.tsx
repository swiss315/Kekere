import React, {useState} from "react";
import {ArrowCircleLeft2} from "iconsax-react";
import {ReactComponent as Rating} from "../../Assets/Icons/starrating.svg";
import InputField from "../InputField";
import ReviewTransaction from "./ReviewTransaction";

function BuyProperty(props: any) {
    const ownerHistory = [
        {
            id: 1,
            name: 'Anabel Anthony',
            date: '10/12/2024',
            slotId: '0001'
        },
        {
            id: 2,
            name: 'Mayowa Owolabi',
            date: '10/12/2024',
            slotId: '0002'
        },
        {
            id: 3,
            name: 'Laguda Temitayo',
            date: '10/12/2024',
            slotId: '0003'
        }
    ]
    const [amount, setAmount] = useState('');
    const [slot, setSlot] = useState(0);
    const [review, setReview] = useState(false)
    const handleAmountChange = (newAmount: any) => {
        console.log(newAmount)
        let amount : number = 20000000
        let price : any = newAmount * amount
        price = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'NGN',
        }).format(price);
        price = price.replace(/(\D)\s*/g, '$1');
        setAmount(price)
    };
    const handleSuggestSlotChange = (newSuggestSlot: number) => {
        setSlot(newSuggestSlot);
        console.log(newSuggestSlot)
        let amount : number = 20000000
        let price : any = newSuggestSlot * amount;
        price = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'NGN',
        }).format(price);
        price = price.replace(/(\D)\s*/g, '$1');
        console.log(price)
        setAmount(price)
    }
    console.log(amount)
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <div className='flex items-center gap-2 py-4 cursor-pointer'>
                    <ArrowCircleLeft2 size="42" variant="Bold" color="#20996B" onClick={() => props.onHide()}/>
                </div>
                { !review ?
                    <div className='w-8/12 rounded-3xl bg-white mx-auto py-6 px-16 flex justify-between'>
                        <div className='w-4/12'>
                            <h1 className='font-bold pb-3 text-xl '>
                                Price
                            </h1>
                            <div
                                className={`bg-blue-600 rounded-2xl w-full text-center py-4`}>
                                <span className='text-custom font-semibold'>Property Value</span>
                                <p className='font-bold text-white text-2xl py-6'>₦200,000,000</p>
                                <p className='text-white font-semibold text-sm'>Annual Return:₦6,000.000.00</p>
                            </div>
                            <div className='pt-5'>
                                <h1 className='font-bold text-xl py-5'>Owner History</h1>
                                <div>
                                    {
                                        ownerHistory.map((history, index) => {
                                            return (
                                                <div key={index} className='flex gap-4'>
                                                    <div>
                                                    <span className='block h-8 w-7 bg-custom-white rounded-xl'>
                                                    </span>
                                                        <div
                                                            className={`bg-white ${index + 1 === ownerHistory.length ? 'hidden' : ''}`}>
                                                            {Array.from({length: 5}).map((_, index) => (
                                                                <hr key={index}
                                                                    className={`h-0.5 w-1.5 mx-auto rounded border-0 horizontal-to-vertical my-3 bg-custom-white `}/>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h1 className='font-semibold'>{history.name}</h1>
                                                        <p className='text-custom text-xs'>Payment Date {history.date}</p>
                                                        <p className='text-custom text-xs'>Slot ID: {history.slotId}</p>
                                                        <p className='flex gap-1.5'>
                                                            {Array.from({length: 5}).map((_, index) => (
                                                                <Rating key={index}/>
                                                            ))}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className=' flex flex-col items-center py-9 '>
                            <div className='py-9 px-10 rounded-3xl' style={{boxShadow: '0px 4px 20px 0px #5E84C20F'}}>
                                <h1 className='text-2xl font-bold py-4'>
                                    How Many Slot Are you Buying?
                                </h1>
                                <div className=''>
                                    <span className='text-sm'>
                                        Suggested for you
                                    </span>
                                    <div className='flex gap-3 my-3'>
                                        <button type='button' className='rounded-full py-2 px-6 text-xs'
                                                onClick={() => handleSuggestSlotChange(1)}
                                                style={{backgroundColor: '#C0F0FF'}}>
                                            1 Slot
                                        </button>
                                        <button type='button' className='rounded-full py-2 px-6 text-xs'
                                                onClick={() => handleSuggestSlotChange(2)}
                                                style={{backgroundColor: '#C0F0FF'}}>
                                            2 Slot
                                        </button>
                                        <button type='button' className='rounded-full py-2 px-6 text-xs'
                                                onClick={() => handleSuggestSlotChange(3)}
                                                style={{backgroundColor: '#FADAFF'}}>
                                            3 Slot
                                        </button>
                                        <button type='button' className='rounded-full py-2 px-6 text-xs'
                                                onClick={() => handleSuggestSlotChange(4)}
                                                style={{backgroundColor: '#D1FFE1'}}>
                                            4 Slot
                                        </button>
                                    </div>
                                    <p className='text-sm py-3 font-bold'>Price Per Slot NGN 20,000,000</p>
                                    <div className='py-5'>
                                        <div className='py-3'>
                                            <InputField name='Enter Slot' type='text' className='w-3/4' value={slot}
                                                        onChange={handleAmountChange}/>
                                        </div>
                                        <div className='py-3'>
                                            <InputField name='Amount' readOnly={true} type='text' className='w-full'
                                                        value={amount}/>
                                        </div>
                                    </div>
                                    <div className='my-4'>
                                        <button type='button'
                                                className='bg-custom-midnightgreen opacity-60 w-full py-3 text-white rounded-custom font-bold px-6 text-xs'
                                                onClick={() => props.onHide()}>
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <ReviewTransaction onHide={() => setReview(true)}/>
            }
            </div>
        </div>
    )
}

export default BuyProperty;