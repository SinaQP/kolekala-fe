import Image from "next/image"
import toman from './../../public/images/Toman.png'
import categorySample from "./../../public/images/Category/categorySampleImage.png"
import { useState } from "react"

export function CategoryCard(){
    const [categoryCardTitle, setCategoryCardTitle] = useState('گل سانسوریا ابلق')
    return(
        <div className="w-[196.31px] h-[296.88px] bg-[#FFFFFF] shadow-2xl rounded-lg ">
            <Image alt="category image" src={categorySample} className="w-[196.31px] h-[196.31px]" />
            <p className="m-auto flex justify-center">{categoryCardTitle}</p>
            <div className="flex  px-[1rem] mt-[1rem] ">
            <Image alt="toman vactor" src={toman} />
            <p>36,000</p>
            </div>
        </div>
    )
}