import Image from 'next/image'
import loginText from './../../../public/images/header/logintext.png'
import loginIcon from './../../../public/images/header/loginIcon.png'
import Link from 'next/link'


export const LoginBtn = () =>{
    return(
        <Link href={'LoginAndRegisteration'} >
        <button className='flex gold-bg1 justify-end items-center gap-1.5 w-28 h-8 p-3 rounded-md'>
            <Image src={loginText} alt='loginText' />
            <Image alt='loginBtnIcon' src={loginIcon} className='h-7 w-7' />
        </button>
        </Link>
    )
}