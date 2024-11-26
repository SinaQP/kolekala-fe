'use client'


import conversationBtn from '../../public/images/Product/conversationBtn.png'
import userIcon from '../../public/images/Product/Vector-userIcon.png'
import { useState } from "react"
import Image from 'next/image'

export function ExpertOpinion() {
    const [productName, setProductName] = useState('هدفون بلوتوثی مدل P39 2021')
    return (
        <div className="w-[1464px]  h-[735px] border-4 rounded-lg  m-auto border-black border-solid flex flex-col ">
            <p>دیدگاه ها</p>
        </div>
    )
}