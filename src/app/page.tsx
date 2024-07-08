"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import searchIcon from './images/search.jpg'

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>()
  return (
    <body className="bg-white h-screen">
      <div className="bg-pink-700 flex justify-center h-16 items-center">
        <h2 className="text-2xl text-white">سامانه ضمانت بازگشت پول</h2>
      </div>
      <div className="flex  justify-center gap-24 items-center mt-0.5">
        <div className="flex  gap-4 items-center">
          <Link href={'./smth'} className="flex">
            <p className="text-zinc-500">سبد خرید</p>
            <img src="" alt="" />
          </Link>
          <button className="p-1 border-slate-400 border-solid rounded-xl border-2">خرید اقساطی</button>
        </div>
        <div className="flex gap-0.5">
          <Link href={'./smth'} className="text-blue-600"> ثبت نام </Link>
          <p> | </p>
          <Link href={'./smth'} className="text-blue-600"> ورود </Link>
        </div>
        <div>
          <input type="text"
            className="ml-96 w-96 h-12 pl-20  border-slate-400 border-solid rounded-xl border-2"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="...نام کالا یا دسته مورد نظر خود را جست‌وجو کنید"
          />
          {/* <button><img src={searchIcon.src} alt="" /></button> */}
        </div>

      </div>

      <div className="flex">
      
      </div>
    </body>
  );
}
