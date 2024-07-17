"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import searchIcon from './images/search.jpg'
import logo from '../images/photo12563694913.jpg'
import market1Photo from '../images/market.jpg'

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>()
  const isValid = true
  return (
    <body className=" bg-gray-100  h-screen">
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
        <Image alt="icon " src={logo} width={60} height={60} />

      </div>


      <Image alt="baner" src={market1Photo} height={800} width={800} className="rounded-xl my-8 mx-auto w-9/12 h-96" />
    
      <div className="items-baseline mt-14   m-auto w-9/12 bg-white    h-72">
        <div className="flex gap-96 justify-between p-6">
          <button className="bg-slate-300 px-3 py-1 text-red-400 rounded-xl">مشاهده همه</button>
          <h3 className="text-xl text-stone-400">جدیدترین‌ها</h3>
        </div>
        <div className="">

        </div>
        <div className="flex flex-col w-24 items-center">
          <Image src={market1Photo} alt="" height={20} width={30} />
          <h4 className="text-xl text-red-400">نام محصول</h4>
          <h4 className="text-xl text-gray-400">دسته بندی</h4>
          {
            isValid && <p className="text-xl text-black-400">قیمت</p>
          }
        </div>
      </div>



      <div className="items-baseline mt-14   m-auto w-9/12 bg-white    h-72">
        <div className="flex gap-96 justify-between p-6">
          <button className="bg-slate-300 px-3 py-1 text-red-400 rounded-xl">مشاهده همه</button>
          <h3 className="text-xl text-stone-400">پرفروش‌ترین‌ها</h3>
        </div>
        <div className="">

        </div>
        <div className="flex flex-col w-24 items-center">
          <Image  src={market1Photo} alt="" height={20} width={30} />
          <h4 className="text-xl text-red-400">نام محصول</h4>
          <h4 className="text-xl text-gray-400">دسته بندی</h4>
          {
            isValid && <p className="text-xl text-black-400">قیمت</p>
          }
        </div>

      </div>

      <div className="items-baseline mt-14   m-auto w-9/12 bg-white    h-72">
        <div className="flex justify-end p-6">
          <h3 className="text-xl text-stone-400">فروشگاه‌ها</h3>
        </div>
        <div className="">

        </div>
        <div className="flex flex-col w-24 items-center">
          <Image  src={market1Photo} alt="" height={175} width={150} />
          <h4 className="text-xl text-red-400">نام محصول</h4>
          <h4 className="text-xl text-gray-400">دسته بندی</h4>
          {
            isValid && <p className="text-xl text-black-400">قیمت</p>
          }
        </div>

      </div>



    </body>
  );
}
