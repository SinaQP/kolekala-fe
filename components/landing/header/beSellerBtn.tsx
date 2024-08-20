import Image from 'next/image'
import text from './../../../public/images/header/beSellerText.png'

export const BeSellerBtn = () =>{
    return(
        <button className='flex gold-bg1 justify-end items-center gap-1.5 w-28 h-8 p-3 rounded-md'>
            <Image src={text} alt='loginText' />
        </button>
    )
}