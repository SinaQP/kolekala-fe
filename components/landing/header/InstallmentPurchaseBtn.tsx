import Image from 'next/image'
import text from './../../../public/images/header/InstallmentPurchaseText.png'

export const InstallmentPurchaseBtn = () =>{
    return(
        <button className='flex _272727 border-solid border-[#D2AC47]  border-2  justify-right items-center gap-1.5 w-28 h-8 p-3  rounded-md '>
            <Image src={text} alt='loginText' />
        </button>
    )
}