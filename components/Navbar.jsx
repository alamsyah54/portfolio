"use client"

import React, { useState, useEffect } from "react"
import { CgMenu } from "react-icons/cg"
import { SlClose } from "react-icons/sl"
import Link from "next/link"
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme")
        return storedTheme !== null ? storedTheme : "light"
    })

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark")
        document.documentElement.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset

            // Check if the user has scrolled down 100px or more
            if (scrollTop > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav
            className={`fixed top-0 right-0 z-50 w-full ${
                isScrolled
                    ? " lg:border-b-[0.2px] border-b-[0.5px] border-gray-400/60 dark:border-gray-500/60"
                    : ""
            }`}
        >
            <div className='flex items-center p-3 lg:p-5 md:p-5 md:mx-[5%] lg:mx-[15%] justify-between lg:rounded-3xl md:rounded-xl backdrop-blur'>
                <Link
                    href='/'
                    className='flex items-center justify-center text-gray-300 duration-1000 dark:text-transparent dark:bg-gradient-to-tl dark:from-cyan-300 dark:to-fuchsia-400 bg-clip-text fade-right'
                >
                    <div className='cursor-pointer'>
                        <img
                            className='w-10 duration-300 lg:w-16 md:w-10'
                            src='/images/A.webp'
                            alt='A'
                        />
                    </div>
                    <span className='mx-1 text-lg lg:text-3xl md:text-xl font-conthrax'>
                        ALAMSYAH
                    </span>
                </Link>
                <div className='items-center justify-center hidden gap-10 p-1 lg:flex md:flex'>
                    <div className='flex gap-5 font-conthrax'>
                        <Link href='/' className='fade-bottom'>
                            About
                        </Link>
                        <Link href='/' className='fade-top'>
                            Projects
                        </Link>
                        <Link href='/' className='fade-bottom'>
                            Contact
                        </Link>
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <button
                            onClick={handleThemeSwitch}
                            className='relative items-center justify-center lg:p-2 fade-top'
                        >
                            <BsSunFill className='absolute text-xl text-gray-800 opacity-0 dark:opacity-100 dark:text-gray-200 lg:text-3xl' />
                            <BsFillMoonStarsFill className='text-xl text-gray-800 dark:opacity-0 dark:text-gray-200 lg:text-3xl' />
                        </button>
                        <Link
                            href='#'
                            class='relative p-[1px] inline-flex items-center justify-center font-bold overflow-hidden group rounded-lg fade-bottom'
                        >
                            <span class='w-full h-full bg-gradient-to-tr from-cyan-300 to-fuchsia-400 group-hover:from-cyan-30 group-hover:to-fuchsia-400 absolute'></span>
                            <span class='relative px-5 py-2 transition-all ease-out bg-gray-800 group-hover:bg-opacity-0 rounded-lg duration-400'>
                                <span class='relative text-gray-200 group-hover:text-black'>
                                    Work With Me
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-5 text-2xl md:hidden lg:hidden'>
                    <button
                        onClick={handleThemeSwitch}
                        className='relative items-center justify-center p-2 delay-1000 fade-left'
                    >
                        <BsSunFill className='absolute text-gray-700 opacity-0 dark:opacity-100 dark:text-gray-200' />
                        <BsFillMoonStarsFill className='text-gray-700 dark:opacity-0 dark:text-gray-200 ' />
                    </button>
                    <button
                        onClick={handleNav}
                        className='delay-1000 cursor-pointer fade-left'
                    >
                        <CgMenu
                            size={35}
                            className='flex text-gray-700 duration-300 hover:text-gray-700 dark:text-gray-200'
                        />
                    </button>
                </div>
            </div>

            {nav ? (
                <div
                    onClick={() => setNav(!nav)}
                    className='fixed bottom-0 z-50 w-full h-full'
                ></div>
            ) : (
                ""
            )}
            <div
                className={
                    nav
                        ? "fixed left-0 top-0 justify-center w-full h-screen items-center drop-shadow-2xl z-50 duration-1000 transition-all backdrop-blur-sm bg-black/10"
                        : "fixed left-[-100%] top-0 w-[100%] h-screen z-50 duration-1000 transition-all"
                }
            >
                <div
                    animate={{
                        mount: { scale: 0.8, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                    className='z-50 flex items-center justify-between p-3 bg-gray-800'
                >
                    <div className='flex items-center justify-start w-full h-[50px]'>
                        <Link
                            href='/'
                            className='flex items-center justify-center text-gray-300 dark:text-transparent dark:bg-gradient-to-tl dark:from-cyan-300 dark:to-fuchsia-400 bg-clip-text'
                        >
                            <div className='cursor-pointer'>
                                <img
                                    className='duration-300 w-14 lg:w-16 md:w-10'
                                    src='/images/A.webp'
                                    alt='A'
                                />
                            </div>
                            <span className='mx-1.5 text-md text-transparent text-gray-200 lg:text-2xl md:text-xl bg-gradient-to-tl from-cyan-300 to-fuchsia-400 bg-clip-text font-conthrax'>
                                USE YOUR YOUTH <br /> FOR THE FUTURE
                            </span>
                        </Link>
                    </div>
                    <SlClose
                        onClick={() => setNav(!nav)}
                        size={35}
                        className='right-0 mx-3 cursor-pointer text-fuchsia-600 drop-shadow-md'
                    />
                </div>
                <div className='flex flex-col rounded-md font-conthrax '>
                    <div className='flex flex-col py-10 gap-7'>
                        <Link
                            href='/asdasd'
                            className='flex flex-col py-2 group '
                        >
                            <span className='px-10 text-xl text-gray-300 cursor-pointer text-start '>
                                About
                            </span>
                            <div className='w-full h-[1px] bg-gradient-to-r my-1 from-gray-200'></div>
                        </Link>
                        <Link
                            href='/asdasd'
                            className='flex flex-col py-2 group '
                        >
                            <span className='px-10 text-xl text-gray-300 cursor-pointer text-start '>
                                Projects
                            </span>
                            <div className='w-full h-[1px] bg-gradient-to-r my-1 from-gray-200'></div>
                        </Link>
                        <Link
                            href='/asdasd'
                            className='flex flex-col py-2 group '
                        >
                            <span className='px-10 text-xl text-gray-300 cursor-pointer text-start '>
                                Contact
                            </span>
                            <div className='w-full h-[1px] bg-gradient-to-r my-1 from-gray-200'></div>
                        </Link>
                        <div className='flex flex-col items-center w-full my-5 fade-top'>
                            <Link
                                href='#'
                                class='relative p-[1px] flex items-center justify-center font-bold overflow-hidden group drop-shadow-lg'
                            >
                                <span class='w-full h-full bg-gradient-to-tr from-cyan-300 to-fuchsia-400 group-hover:from-cyan-30 group-hover:to-fuchsia-400 absolute'></span>
                                <span class='relative px-5 py-2 transition-all ease-out bg-gray-800 group-hover:bg-opacity-0 duration-400'>
                                    <span class='relative text-gray-200 group-hover:text-black'>
                                        Work With Me
                                    </span>
                                </span>
                            </Link>
                            <div className='-z-50 mb-[1px] w-full h-[1px] bg-gradient-radial from-gray-200' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Link href='/asdasd' className='flex flex-col group'>
                            <span className='px-6 text-xl text-gray-800 cursor-pointer text-start dark:text-gray-300'>
                                About
                            </span>
                            <div className='flex items-center justify-start pb-5 -mt-5 transition-all duration-500 delay-100 group-hover:pb-0 group-hover:mt-0 '>
                                <span className='flex w-0 h-[2px] transition-all duration-500 delay-100 bg-gray-600 group-hover:w-32 dark:bg-gray-300' />
                                <div className='flex items-center'>
                                    <span className='w-3 h-3 bg-gray-600 rounded-full dark:bg-gray-300 group-hover:animate-ping' />
                                    <span className='absolute w-3 h-3 bg-gray-600 rounded-full dark:bg-gray-300 animate-pulse' />
                                </div>
                            </div>
                        </Link> */}
        </nav>
    )
}

export default Navbar
