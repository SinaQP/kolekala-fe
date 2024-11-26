import loginText from './../../public/images/Login/loginText.png'
import Image from 'next/image'

export const RightSideHeader = () =>{
    return(
        <>
         <div className="w-full gold-bg1 h-12 rounded-se-[20px] "></div>
                <button className='m-auto mt-[-3px] flex gold-bg-login-btnS justify-center items-center gap-1.5 w-32 h-8 p-3 rounded-md '>
                    <Image src={loginText} alt='loginText' className='w-16 absolute mt-[-1.5rem]' />

                </button>
        </>
    )
}