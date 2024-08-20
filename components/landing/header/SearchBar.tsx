"use client"
import Image from "next/image"
import { useState } from "react"
import searchIcon from './../../../public/images/header/searchIcon.png'

export const SearchBar = () => {
    const [text, setText] = useState("")
    return (
        <form>
            <input type="text" placeholder="نام کالا، فروشگاه یا دسته مورد نظر خود را جستجو کنید   " onChange={(e) => setText(e.target.value)} className="text-end  rounded-3xl border-solid border-[#D2AC47] bg-[#272727] border-4 py-2 w-96 h-12">

            </input>
            <label className="w-12 h-[2.6rem] relative mt-[-2.8rem]  z-10 gold-bg1 rounded-s-full flex justify-center">
                <Image alt="serch-icon" src={searchIcon} className="w-[2.5rem] " />
            </label>
        </form>
    )
}

