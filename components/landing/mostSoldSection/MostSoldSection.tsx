import Image from "next/image"
import randomImg from "./../../../public/images/dash/randomImg.jpg" 
export const MostSoldSection = ()=>{
    return(
        <div className="h-[22rem] w-4/5  rounded-[1.125rem] mx-auto gold-most-sold">
            <div className="max-w-fit bg-white h-[19rem]">
                <Image alt="product-card" className="object-center object-cover w-56 h-60 " src={randomImg} /> 
                <p>معجون</p>
                <p>162,000</p>
            </div>
        </div>
    )
}