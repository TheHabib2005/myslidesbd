import OtpInput from '@/components/OtpInput'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "VERIFY-EMAIL   |  MYSHOPBD"
}
const VerifyEmail = () => {
    return (
        <div className='w-full max-h-screen flex items-center justify-center overflow-hidden'>
            <div className='w-[450px] p-6 bg-zinc-900/50  font-semibold rounded-md shadow-md my-20'>
                <h1 className='text-center text-xl '>VERIFY YOUR EMAIL</h1>
                <p className='text-center text-md  text-zinc-300 mt-3'>Please Enter a Verfication Code we Sent Your Eamil</p>
                <OtpInput />
            </div>
        </div>
    )
}

export default VerifyEmail