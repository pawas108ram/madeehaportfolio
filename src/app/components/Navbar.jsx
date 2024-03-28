"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Education",
        path: "#Education",
    },
    {
        title: "Projects",
        path: "#projects",
    },
]

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">Home</Link>
            <div className='block mobile-menu md:hidden'>
                {
                    !navbarOpen ? (
                        <button onClick={()=> setNavbarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5'></Bars3Icon>
                        </button>
                    ) : (
                        <button onClick={()=> setNavbarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5'></XMarkIcon>
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => {
                            return (<li key={index}>
                                <NavLink href={link.path} title={link.title}></NavLink>
                            </li>)
                        })
                    }
                </ul>
            </div>
        </div>

        {
            navbarOpen ? (
                <MenuOverlay navLinks={navLinks} />
            ) : (
                null
            )
        }

    </nav>
  )
}

export default Navbar