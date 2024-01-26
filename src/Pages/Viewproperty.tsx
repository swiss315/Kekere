import React, {useState} from 'react'
import {ArrowCircleRight, ArrowLeft} from "iconsax-react";
import propertyImage from "../Assets/Images/viewpropertyImage.png";
import {ReactComponent as Bath} from "../Assets/Icons/bath.svg";
import {ReactComponent as Bed} from "../Assets/Icons/bed.svg";
import {ReactComponent as Wifi} from "../Assets/Icons/wifi.svg";
import {ReactComponent as Share} from "../Assets/Icons/share.svg";
import {ReactComponent as Expand} from "../Assets/Icons/expand.svg";
import {ReactComponent as Rating} from "../Assets/Icons/starrating.svg";
import {ReactComponent as Mark} from "../Assets/Icons/mark.svg";
import Placeholder from "../Assets/Images/placeholder.png";
import Placeholder2 from "../Assets/Images/placeholder2.png";
import Placeholder3 from "../Assets/Images/placeholder3.png";
import Placeholder4 from "../Assets/Images/placeholder4.png";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {useNavigate} from "react-router-dom";
import BuyProperty from "../Components/Wallet/BuyProperty";

function Viewproperty() {
    const navigate = useNavigate();
    let image = 4
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
        },
        {
            id: 4,
            name: 'Tola Afonja',
            date: '10/12/2024',
            slotId: '0004'
        },
    ]
    const [imageContainer, setImageContainer] = useState<{ id: number; image: any }[]>([
        {
            id: 1,
            image: Placeholder
        },
        {
            id: 2,
            image: Placeholder2
        },
        {
            id: 3,
            image: Placeholder3
        },
        {
            id: 4,
            image: Placeholder
        },
        {
            id: 5,
            image: Placeholder2
        },
        {
            id: 6,
            image: Placeholder4
        },
    ]);
    const features = [
        {
            id: 1,
            features: 'Swimming Pool'
        },
        {
            id: 1,
            features: 'Terrace'
        },
        {
            id: 1,
            features: 'Radio'
        },
        {
            id: 1,
            features: 'Grill'
        },
        {
            id: 1,
            features: 'Cable Tv'
        },
        {
            id: 1,
            features: 'Air Conditioning'
        },
        {
            id: 1,
            features: 'Coffee Pot'
        },
        {
            id: 1,
            features: 'Balcony'
        },
        {
            id: 1,
            features: 'Computer'
        },
        {
            id: 1,
            features: 'Parquet'
        },
        {
            id: 1,
            features: 'Internet'
        },
        {
            id: 1,
            features: 'Towels'
        },
        {
            id: 1,
            features: 'Roof Terrace'
        },
        {
            id: 1,
            features: 'Oven'
        },
    ]
    const handleClick = () => {
        const updatedImageContainer = [...imageContainer];
        const firstChild = updatedImageContainer.shift();
        if (firstChild) {
            updatedImageContainer.push(firstChild);
            setImageContainer(updatedImageContainer);
            console.log(imageContainer)
        }
    };

    const containerStyle = {
        width: '100%',
        height: '220px',
    };

    const center = {
        lat: -34.397,
        lng: 150.644,
    };

    let property = {
        available: true,
    }
    const [buy, setBuy] = useState(false)
    return(
        <div className='py-10'>
            {!buy ? <div className='w-11/12 mx-auto'>
                <div className='flex items-center gap-2 py-4 cursor-pointer'>
                    <ArrowLeft size="32" color="#000000" onClick={() => navigate(-1)}/>
                    <p className='font-semibold'>Property Detail</p>
                </div>
                <div className='rounded-3xl bg-white mx-auto py-6 px-16 flex justify-between'>
                    <div className='w-3/12'>
                        <h1 className='font-bold pb-3 text-xl '>
                            Price
                        </h1>
                        <div
                            className={` rounded-2xl w-full text-center py-4 ${property.available ? 'bg-blue-600' : 'bg-red-600'}`}>
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
                        <button onClick={() => setBuy(true)}
                            className=' bg-blue-600 text-sm w-full border-full py-1.5 text-white font-semibold my-5 rounded-full'
                            style={{boxShadow: '0px 4px 4px 0px #00000040'}}>
                            Buy Slot
                        </button>
                    </div>
                    <div className='w-8/12'>
                        <div className='relative'>
                            <div className='relative'>
                                <img src={propertyImage} alt='property'/>
                                <span
                                    className={`absolute uppercase bg-white text-red-600 top-2 font-semibold right-3 rounded-full text-xs py-2 px-2.5 property-badge`}>
                                        Sold Out
                                </span>
                            </div>
                            <div className='absolute bottom-0 flex px-4 w-full justify-between'>
                                <div>
                                    <h1 className='text-white text-2xl font-bold py-4'>
                                        Luxury Dream House T-001234
                                    </h1>
                                    <div className='flex gap-3.5 pb-3 justify-between'>
                                        <div className='flex gap-2 items-center'>
                                        <span>
                                            <Bed/>
                                        </span>
                                            <span className='text-white font-semibold'>
                                            4 Bedroom
                                        </span>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                        <span>
                                            <Bath/>
                                        </span>
                                            <span className='text-white font-semibold'>
                                            2 Bathroom
                                        </span>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                        <span>
                                            <Wifi/>
                                        </span>
                                            <span className='text-white font-semibold'>
                                            Wifi Available
                                        </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-6 items-end -mt-11'>
                                    <Share/>
                                    <Expand/>
                                    <div>
                                        <p className='text-end text-white text-sm'>1 of 4</p>
                                        <div className='flex justify-between gap-1 pb-1.5'>
                                            {Array.from({length: image}).map((_, index) => (
                                                <hr key={index}
                                                    className={`h-2 w-8 rounded-full bg-custom-white opacity-25`}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-10'>
                            <h1 className='font-bold pb-2'>Description</h1>
                            <p className='text-sm'>
                                vaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum<br/>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                                labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                                nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                consequatur? Quis autem vel eum
                            </p>
                        </div>
                        <div className='pb-10'>
                            <h1 className='font-bold pb-4'>Gallery</h1>
                            <div className='relative'>
                                <div className='flex gap-2.5 overflow-hidden img'>
                                    {
                                        imageContainer.map((image, index) => {
                                            return (
                                                <img key={index} src={image.image} alt='placeholder'
                                                     className='rounded-xl'/>
                                            )
                                        })
                                    }
                                </div>
                                <div className='absolute right-2 top-1/2'>
                                    <ArrowCircleRight size="32" onClick={handleClick} color="#FFFFFF" variant="Bold"/>
                                </div>
                            </div>
                        </div>
                        <div className='pb-10'>
                            <h1 className='font-bold pb-4'>Location</h1>
                            <div className=''>
                                <LoadScript
                                    googleMapsApiKey="AIzaSyAE72lXp2-ShkmBra1jqCfkhNCqFAGNhJQ"
                                >
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={10}
                                    >
                                        <Marker position={center}/>
                                    </GoogleMap>
                                </LoadScript>
                            </div>
                        </div>

                        <div className='pb-10'>
                            <h1 className='font-bold pb-4'>Features</h1>
                            <div className='flex overflow-hidden flex-wrap gap-y-3.5'>
                                {
                                    features.map((feature, index) => {
                                        return (
                                            <div key={index} className='w-1/5 flex items-center gap-3'>
                                                <Mark/>
                                                <p className='font-semibold text-sm'>{feature.features}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div> :
                <BuyProperty onHide={() => setBuy(false)} />}
        </div>
    )
}

export default Viewproperty