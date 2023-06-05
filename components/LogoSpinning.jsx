import React from "react"

const LogoSpinning = () => {
    return (
        <div>
            <div className='relative text-center transition-all duration-1000 rounded-full'>
                <img
                    className='absolute z-50 p-1 bg-center bg-no-repeat bg-cover w-60 dark:invisible'
                    src='/images/aspin.webp'
                />
                <img
                    className='absolute z-50 invisible p-1 bg-center bg-no-repeat bg-cover w-60 dark:visible'
                    src='/images/aspindark.webp'
                />
                <img
                    className='absolute invisible w-64 bg-center bg-no-repeat bg-cover dark:visible animate-slowspin'
                    src='/images/globedark.webp'
                />
                <img
                    className='w-64 bg-center bg-no-repeat bg-cover dark:invisible animate-slowspin'
                    src='/images/globe.webp'
                />
            </div>
        </div>
    )
}

export default LogoSpinning
