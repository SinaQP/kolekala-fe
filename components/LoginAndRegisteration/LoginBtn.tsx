import loginText from './../../public/images/Login/loginText.png'
import registerText from './../../public/images/Login/registerText.png'
import Image from 'next/image'
import { LeftSideHeader } from './LeftSideHeader'
import { RightSideHeader } from './RightSideHeader'

export const LoginBtn = () => {
    return (
        <div className="flex justify-center gap-3 w-4/6 m-auto mt-[50px]">

            <div className='bg-[#ECECEC] w-[600px] h-[600px] rounded-ss-[20px] rounded-es-[20px] shadow-[0-6px-19px-0px-rgba(0,0,0,0.3)]'>
                <LeftSideHeader />
                <div className="flex flex-col w-3/5 m-auto gap-4 mt-20">
                <input type="text" className='bg-[#C1C1C1] h-[2.5rem] border-solid border-[3px] border-[#6D6D6D] rounded-md  ' />
                <input type="text" className='bg-[#C1C1C1] h-[2.5rem] border-solid border-[3px] border-[#6D6D6D] rounded-md ' />
                <input type="text" className='bg-[#C1C1C1] h-[2.5rem] border-solid border-[3px] border-[#6D6D6D] rounded-md ' />
                </div>

                
                <button className='m-auto mt-[8.8rem] relative border-solid border-[3px] border-[#D2AC47]  flex justify-center items-center gap-1.5 w-28 h-8 p-3 rounded-md '>
                    <Image src={registerText} alt='loginText' className='w-16' />

                </button>
            </div>

            <div className='bg-[#ECECEC] w-[600px] h-[600px] rounded-ee-[20px] rounded-se-[20px] shadow-[0-6px-19px-0px-rgba(0,0,0,0.3)]'>

                <RightSideHeader />
                <div className="flex flex-col w-3/5 m-auto gap-4 mt-[6.3rem]">
                <input type="text" className='bg-[#C1C1C1] h-[2.5rem] border-solid border-[3px] border-[#6D6D6D] rounded-md  ' />
                <input type="text" className='bg-[#C1C1C1] h-[2.5rem] border-solid border-[3px] border-[#6D6D6D] rounded-md ' />
                </div>

                <button className='m-auto mt-[10.8rem] relative flex gold-bg1 justify-center items-center gap-1.5 w-28 h-8 p-3 rounded-md '>
                    <Image src={loginText} alt='loginText' className='w-12' />

                </button>
            </div>
        </div>
    )
}