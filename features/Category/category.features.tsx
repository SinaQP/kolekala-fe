import { useState } from "react";
import { CategoryCard } from "../../components/Category/card";
import { RedLine } from "../../components/Category/redLine";
import Image from 'next/image'
import LowestImg from '../../public/images/Category/LowestImg.png'

export function Category() {
    const [categoryAddress, setCategoryAddress] = useState('لوازم دیجیتال > هدفون ، هندزفری و ایرپاد')
    const [isLowest, setIsLowest] = useState(false)
    const [isMost, setIsMost] = useState(false)

    const [isSelectedMostSold, setIsSelectedMostSold] = useState(false)
    const [isSelectedNew, setIsSelectedNew] = useState(false)
    const [isSelectedPrice, setIsSelectedPrice] = useState(false)
    const [isSelectedRate, setIsSelectedRate] = useState(false)

    function setAllOff() {
        setIsSelectedMostSold(false)
        setIsSelectedNew(false)
        setIsSelectedPrice(false)
        setIsSelectedRate(false)
    }
    function MostSoldSelection() {
        setAllOff()
        setIsSelectedMostSold(!isSelectedMostSold)
    }
    function NewSelection() {
        setAllOff()
        setIsSelectedNew(!isSelectedNew)
    }
    function PriceSelection() {
        setAllOff()
        setIsSelectedPrice(!isSelectedPrice)
    }
    function RateSelection() {
        setAllOff()
        setIsSelectedRate(!isSelectedRate)
    }

    function basedOnMost() {
        setIsLowest(false)
        setIsMost(!isMost)
    }

    function basedOnLowest() {
        setIsMost(false)
        setIsLowest(!isLowest)
    }

    return (
        <div>
            <p className='flex justify-end px-[5rem] my-[1.5rem]'>{categoryAddress}</p>

            <div className="flex justify-end ">
                <div className="flex   flex-row-reverse gap-5 items-center ">
                    <p>:ترتیب</p>
                    <div>
                        <div className="flex gap-[0.3rem]" onClick={basedOnLowest}>
                            <p>نزولی</p>
                            <Image alt='base of selection' src={LowestImg} className='w-[27px] h-[27px]' />

                        </div>
                        <RedLine isShown={isLowest} />
                    </div>
                    <div>
                        <div className="flex gap-[0.3rem]" onClick={basedOnMost}>
                            <p>صعودی</p>
                            <Image alt='base of selection' src={LowestImg} className='w-[27px] h-[27px]' />
                        </div>
                        <RedLine isShown={isMost} />
                    </div>
                </div>
                {/* sorting items */}
                <div className='flex   flex-row-reverse gap-5  px-[5rem] my-[1.5rem]'>
                    <p>مرتب سازی بر اساس:</p>
                    <div>
                        <p className={!isSelectedMostSold ? 'text-slate-500 flex justify-center' : ''} onClick={MostSoldSelection}>پرفروش‌ترین</p>
                        <RedLine isShown={isSelectedMostSold} />
                    </div>
                    <div>
                        <p className={!isSelectedNew ? 'text-slate-500 flex justify-center' : ''} onClick={NewSelection}>جدیدترین</p>
                        <RedLine isShown={isSelectedNew} />
                    </div>
                    <div>
                        <p className={!isSelectedPrice ? 'text-slate-500 flex justify-center' : ''} onClick={PriceSelection}>قیمت</p>
                        <RedLine isShown={isSelectedPrice} />
                    </div>
                    <div>
                        <p className={!isSelectedRate ? 'text-slate-500 flex justify-center' : ''} onClick={RateSelection}>امتیاز</p>
                        <RedLine isShown={isSelectedRate} />
                    </div>
                </div>
            </div>
            <div className='px-[87px] flex flex-wrap gap-5 justify-center'>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>

        </div>
    )
}