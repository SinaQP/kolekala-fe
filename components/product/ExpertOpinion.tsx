'use client'


import conversationBtn from '../../public/images/Product/conversationBtn.png'
import userIcon from '../../public/images/Product/Vector-userIcon.png'
import { useState } from "react"
import Image from 'next/image'

export function ExpertOpinion() {
    const [productName, setProductName] = useState('هدفون بلوتوثی مدل P39 2021')
    return (
        <div className="w-[1464px]  h-[632px] border-4 rounded-lg  m-auto border-black border-solid flex flex-col ">
            <div className="flex p-8 text-4xl h-32 justify-end ">
                <h2>{productName}</h2>
                <h2>بررسی کارشناس فروشگاه برای</h2>
            </div>
            <div className="flex">
                <div>

                </div>
                <div>
                    <div className="flex px-12 items-center gap-4 text-4xl  justify-end relative left-[30rem]">
                        <Image alt='conversation' src={conversationBtn} />
                        <p>محمدمهدی صادقی</p>
                        <Image alt='user-icon' src={userIcon} />
                    </div>
                    <p className='text-[24px] text-end w-[938px] relative left-[29rem] mt-4'>   هدفون بلوتوثی مدل P39 2021 یک هدفون از نوع روگوشی است که توانسته محبوبیت زیادی را کسب کند. این هندزفری ظاهر جذاب با رنگ‌های زنده دارد و دارای بالشتک‌های بزرگ و نرم است که خیلی خوب روی گوش قرار می‌گیرند. این هدفون کیفیت پخش موسیقی مناسبی را به نسبت قیمت ارائه می‌دهد و با داشتن قابلیت استفاده با باتری یا با سیم، انتخابی مناسب و کاربردی برای شما خواهد بود.</p>
                    <p className='mt-16 text-[24px] text-end relative left-[27rem]'>محصولات لینک شده در این پست:</p>
                    <div className="flex justify-end gap-8 px-16 py-4 relative left-[30rem]">

                        <div className='w-[369px] h-[146px] border-black border-solid border-4 rounded-lg'>
                            <div className="h-full bg-black w-[0.28rem] relative left-[14rem]  "></div>
                        </div>
                        <div className='w-[369px] h-[146px] border-black border-solid border-4 rounded-lg flex '>

                            <div className="h-full bg-black w-[0.28rem] relative left-[14rem]  "></div>
                            <Image alt='product-image' src={conversationBtn} className='relative left-[11rem]  ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}