import loginText from './../../public/images/Login/loginText.png'
import Image from 'next/image'

export const LoginBtn = () => {
    return (
        <div className="flex justify-center gap-3">
            <div className='bg-[#ECECEC] w-[600px] h-[750px] rounded-ss-[20px] rounded-es-[20px] shadow-[0-6px-19px-0px-rgba(0,0,0,0.3)]'>

            </div>
            <div className='bg-[#ECECEC] w-[600px] h-[750px] rounded-ee-[20px] rounded-se-[20px] shadow-[0-6px-19px-0px-rgba(0,0,0,0.3)]'>
                <button className='flex gold-bg1 justify-center items-center gap-1.5 w-28 h-8 p-3 rounded-md '>
                    <Image src={loginText} alt='loginText' className='w-14' />

                </button>
            </div>
        </div>
    )
}