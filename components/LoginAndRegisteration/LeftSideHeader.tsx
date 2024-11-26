
import registerText from './../../public/images/Login/registerText.png'
import Image from 'next/image'

export const LeftSideHeader = () => {
    return (
        <>
            <div className="w-full gold-bg1 h-12 rounded-ss-[20px] "></div>

            <button className='m-auto mt-[-3px] flex gold-bg-login-btnS justify-center items-center gap-1.5 w-32 h-8 p-3 rounded-md '>
                <Image src={registerText} alt='loginText' className='w-18 absolute mt-[-1.5rem]' />

            </button>



        </>
    )
}