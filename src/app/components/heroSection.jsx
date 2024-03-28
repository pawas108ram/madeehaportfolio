"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
    <section className='relative z-10'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-extrabold'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600'>Hello, I'm{" "}</span>
                    <br></br>
                    <TypeAnimation sequence={[
                            'Madeeha Ishaque', 3000,
                            'Web Developer', 2000
                        ]}
                        wrapper="span"
                        speed={60}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm: text-lg lg:text-xl mb-6'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Explore my portfolio to discover the projects I've worked on and the skills I bring to the table.
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 hover:bg-slate-400 text-white'>Resume</button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 hover:bg-slate-400 text-white mt-3'>
                        <span className='block bg-[#121212] hover:big-slate-800 rounded-full px-5 py-2'>Socials</span>
                    </button>
                </div>

            </div>

            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className=' bg-[#181818] w-[200px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image 
                    src="/images/avatar-img.avif"
                    alt='hero image'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection