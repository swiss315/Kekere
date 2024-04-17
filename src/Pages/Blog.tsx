import React from 'react';
import Navbar from "../Components/Layout/Navbar";
import AboutImg2 from '../Assets/Images/blogimg1.svg'
import Advert from "../Components/Homepage/Advert";
import Footer from "../Components/Layout/Footer";
import {Link} from "react-router-dom";

function  Blog() {
    let blog = [
        {
            category: 'Travel',
            date: '13 March 2023',
            title: 'Train Or Bus Journey?Which one suits?',
            summary: 'The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person'
        },
        {
            category: 'Travel',
            date: '13 March 2023',
            title: 'Train Or Bus Journey?Which one suits?',
            summary: 'The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person'
        },
        {
            category: 'Travel',
            date: '13 March 2023',
            title: 'Train Or Bus Journey?Which one suits?',
            summary: 'The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person'
        },
        {
            category: 'Travel',
            date: '13 March 2023',
            title: 'Train Or Bus Journey?Which one suits?',
            summary: 'The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person'
        },
        {
            category: 'Travel',
            date: '13 March 2023',
            title: 'Train Or Bus Journey?Which one suits?',
            summary: 'The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person'
        },
        {
            category: 'Travel',
            date: '13 March 2023',
            title: 'Train Or Bus Journey?Which one suits?',
            summary: 'The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person'
        },
        {
            category: 'Travel',
            date: '13 March 2023',
            title: 'Train Or Bus Journey?Which one suits?',
            summary: 'The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person'
        },
    ]
    return (
        <div>
            <Navbar />
            <div className='md:w-full lg:w-11/12 xl:w-9/12 lg:mx-auto py-10'>
                <div className='flex flex-col gap-y-5'>
                    <h1 className='text-sm font-bold text-center'>OUR BLOGS</h1>
                    <h2 className='text-2xl md:text-4xl font-bold text-center'>
                        Find our all blogs from here
                    </h2>
                    <p className='text-center text-xs w-10/12 md:w-7/12 mx-auto'>
                        our blogs are written from very research research and well known writers writers so that we can
                        provide you the best blogs and articles articles for you to read them all along
                    </p>
                </div>
                <div className='flex gap-3.5 lg:gap-5 gap-y-7 justify-center flex-wrap pt-10'>
                    {
                        blog.map((blog, index) => {
                            return (
                                <div key={index} className='w-3/4 md:w-1/3 lg:w-1/4 xl:w-1/4 flex flex-col gap-y-4'>
                                    <div className='rounded-lg overflow-hidden'>
                                        <img src={AboutImg2} className='h-full object-cover w-full' alt='house'/>
                                    </div>
                                    <div className='text-xs'>
                                        <span className='font-bold'>{blog.category}</span> <span className='text-custom'>{blog.date}</span>
                                    </div>
                                    <h1 className='font-bold text-lg'>
                                        {blog.title}
                                    </h1>
                                    <p className='text-xs leading-relaxed'>
                                        {blog.summary}
                                    </p>
                                    <Link to='air' className='text-green-500 underline text-sm font-bold'>Read More...</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Advert />
            <Footer />
        </div>
    )
}

export default Blog