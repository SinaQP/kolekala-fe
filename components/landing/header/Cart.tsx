import Image from 'next/image'
import cartIcon from './../../../public/images/header/cartIcon.png'

export const Cart = () =>{
    return(
        <div className='flex items-center'>
            <Image alt='cart-icon' src={cartIcon} />
            <p className='text-white'>سبد خرید</p>
        </div>
    )
}