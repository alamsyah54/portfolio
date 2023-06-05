import React from "react"
import { GiMoebiusTriangle } from "react-icons/gi"
import Marquee from "react-fast-marquee"
import Spline from "@splinetool/react-spline"

const Hero = () => {
    return (
        <div className='w-full h-screen '>
            <div className='flex flex-col items-center lg:mx-[15%] mx-[5%] justify-center'>
                <div className='justify-between w-full max-h-screen pt-16 lg:flex lg:pt-36 md:pt-24'>
                    <div className='lg:w-[60%] items-start '>
                        <span className='text-lg font-conthrax'>Hi I'm</span>
                        <div className='flex w-full '>
                            <span className='mx-5 lg:text-6xl font-conthrax'>
                                Aldi
                            </span>
                            <span className='text-transparent lg:text-6xl font-conthrax bg-gradient-to-tl from-cyan-300 to-fuchsia-400 bg-clip-text'>
                                Alamsyah
                            </span>
                        </div>
                    </div>
                    <div className='w-[40%] flex justify-center items-center lg:h96 p-5 '>
                        <Spline scene='https://prod.spline.design/HBqWNSaWlW01ZOyO/scene.splinecode' />
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex lg:mx-[10%]'>
                        <Marquee className='flex items-center justify-center text-2xl font-conthrax fade-top px-[20%] dark:text-fuchsia-400 text-cyan-300'>
                            Fullstack Developer
                            <GiMoebiusTriangle className='mx-10 text-3xl text-gray-800 dark:text-gray-300' />
                            Brand Designer
                            <GiMoebiusTriangle className='mx-10 text-3xl text-gray-800 dark:text-gray-300' />
                            Graphic Designer
                            <GiMoebiusTriangle className='mx-10 text-3xl text-gray-800 dark:text-gray-300' />
                            Freelancer
                            <GiMoebiusTriangle className='mx-10 text-3xl text-gray-800 dark:text-gray-300' />
                            Fullstack Developer
                            <GiMoebiusTriangle className='mx-10 text-3xl text-gray-800 dark:text-gray-300' />
                            Brand Designer
                            <GiMoebiusTriangle className='mx-10 text-3xl text-gray-800 dark:text-gray-300' />
                            Graphic Designer
                            <GiMoebiusTriangle className='mx-10 text-3xl text-gray-800 dark:text-gray-300' />
                            Freelancer
                            <GiMoebiusTriangle className='mx-10 text-3xl text-gray-800 dark:text-gray-300' />
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
