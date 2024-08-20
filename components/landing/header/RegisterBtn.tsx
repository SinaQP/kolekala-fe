import Image from 'next/image'
import registerText from './../../../public/images/header/registerText.png'
import registerIcon from './../../../public/images/header/registerIcon.png'

type props={
    classnames: String
}
export const RegisterBtn = ({classnames}: props) =>{
    return(
        <button className={`flex border-solid border-[3px] py-4 justify-right items-center gap-1.5 w-28 h-8 p-3 rounded-md ${classnames}`} >
            <Image src={registerText} alt='loginText' />
            <Image alt='loginBtnIcon' src={registerIcon} className='h-7 w-7' />
        </button>
    )
}