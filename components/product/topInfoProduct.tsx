"use client"
import Image from 'next/image'
import productPhoto from './../../public/images/Product/productSample.png'
import starIcon from './../../public/images/Product/Vector-star.png'
import toman from './../../public/images/Toman.png'
import shopListIcon from './../../public/images/Product/shopListIcon.png'
import { useState } from 'react'


export function TopInfo() {
    const [isGaranti, setIsGaranti] = useState(true)
    const [isReviewed, setIsReviewed] = useState(true)
    return (
        <div className="w-[1464px]  h-[632px] border-4 rounded-lg justify-between  m-auto border-black border-solid flex ">
            <div className='flex flex-col w-[422px]  items-end'>
                <h2 className='text-[24px] text-red-900 mt-4'>فروشندگان این محصول:</h2>
                <div className="items-center flex flex-col">
                    <div className="flex items-center w-[378px] h-[82px] bg-gray-100 rounded-[10px] ">
                        <div className='flex'>
                            <p>4.3</p>
                            <Image src={starIcon} alt='star' />
                        </div>
                        <h1>فروشگاه فاطمه</h1>
                        {
                            isReviewed && 
                            <div className='w-[28px] h-[83px] rounded-e-[10px] bg-lime-700 relative left-[14.4rem]  '>
                                <p className='rotate-[-90deg] text-white w-max relative right-5 top-7'  >بررسی شده</p>
                            </div>
                        }

                    </div>
                </div>
            </div>
            <div className="border-[2px] h-full w-[2px] border-black border-solid"></div>
            <div className='flex flex-col mt-[30rem]'>
                <div className="flex gap-[0.3rem] ">
                    <Image alt='toman-vactor' src={toman} />
                    <h3>218,500</h3>
                </div>
                <div className='h-[42px] w-[198px] bg-[#FF4F4F] rounded-xl flex  items-center justify-center'>
                    <Image alt='icon' src={shopListIcon} />
                    <p className='text-white  text-xl gap-[0.6rem] '>افزودن به سبد خرید</p>
                </div>
            </div>
            <div className='flex gap-8'>
                <div className=' gap-4 flex flex-col relative  items-end mt-12'>
                    <div className="flex">
                        <p>4.3</p>
                        <Image src={starIcon} alt='star' />
                    </div>

                    <h3 className='text-2xl'>هدفون بلوتوثی مدل P39 2021</h3>
                    <div className="flex flex-col items-end">
                        <p className='text-xl'>لوازم دیجیتال هدفون ، هندزفری و ایرپاد</p>
                        <p className='text-xl'>ابعاد: </p>
                        <p className='text-xl'>باتری:</p>
                        <p className='text-xl'>تعداد کانال ها:</p>
                        <p className='text-xl'>سایر مشخصات</p>
                    </div>

                    <p className='text-xl'>انتخاب کنید:</p>
                    {
                        isGaranti && <p className='text-2xl'>گارانتی 18ماهه سازگار سرویس-</p>
                    }

                </div>

                <div>
                    <div className="border-[2px] w-[470px] rounded-lg h-[470px]  border-black border-solid">
                        <Image alt='product ' src={productPhoto} />
                    </div>
                    <div className="flex justify-around mt-[4px]">
                        <div className='rounded-md w-[146px]  w-[146px] bg-[#D9D9D9]'></div>
                        <Image alt='product' className='rounded-md border-[0.6px] w-[146px] border-b-4 border-l-4 h-[146px]  border-black border-solid' src={productPhoto} />
                        <Image alt='product' className='rounded-md border-[0.6px] w-[146px] border-b-4 border-l-4 h-[146px]  border-black border-solid' src={productPhoto} />
                    </div>

                </div>
            </div>
        </div>
    )
}