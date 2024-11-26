import Image from 'next/image'
import bg from './../../../public/images/header/Rectangle 2229.png'

export function Menu(){
    return(
        <Image alt='menu-bg' src={bg} />
    )
}